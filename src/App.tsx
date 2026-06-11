import { Analytics } from "@vercel/analytics/react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";



// Home is eagerly bundled because it's the LCP-critical landing page that most
// users hit first. Every other route is code-split via React.lazy() so it
// only ships to users who actually navigate to it. See vite.config.ts for
// the matching vendor chunking strategy.
const Platform = lazy(() => import("./pages/Platform"));
const Industries = lazy(() => import("./pages/Industries"));
const UseCases = lazy(() => import("./pages/UseCases"));
const Security = lazy(() => import("./pages/Security"));
const Contact = lazy(() => import("./pages/Contact"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const RequestDemo = lazy(() => import("./pages/RequestDemo"));
const About = lazy(() => import("./pages/About"));
const InternationalBusinesses = lazy(() => import("./pages/InternationalBusinesses"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function VercelAnalytics() {
  const { pathname } = useLocation();
  return <Analytics path={pathname} route={pathname} />;
}

// Minimal Suspense fallback. We deliberately do NOT show a spinner; for the
// route chunks (~5–20 KB each) the swap is fast enough that any visible
// loading state would flicker. The min-height keeps the footer from
// jumping while the chunk streams in.
function RouteFallback() {
  return <div className="min-h-screen" aria-hidden />;
}

export default function App() {
  return (
    <div className="flex min-h-full flex-col bg-white text-ink-800">
      <ScrollToTop />
      <VercelAnalytics />
      <Navbar />
      <main className="relative flex-1 overflow-x-clip">
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute -left-20 top-[10%] h-72 w-72 rounded-full bg-brand-200/35 blur-3xl" />
          <div className="absolute right-[-80px] top-[22%] h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute left-[8%] top-[52%] h-56 w-56 rounded-full bg-sky-200/28 blur-3xl" />
          <div className="absolute right-[12%] top-[68%] h-44 w-44 rounded-full bg-brand-200/26 blur-3xl" />
          <div className="absolute bottom-10 right-8 h-20 w-20 rounded-lg border border-indigo-200/35 bg-white/35" />
          <div className="absolute bottom-6 right-4 h-16 w-24 bg-[radial-gradient(circle,rgba(99,102,241,0.34)_1.2px,transparent_1.2px)] [background-size:10px_10px] opacity-50" />
        </div>
        <div className="relative z-10">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/solutions" element={<UseCases />} />
              <Route path="/security" element={<Security />} />
              <Route path="/resources" element={<NotFound />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/demo" element={<RequestDemo />} />
              <Route path="/about" element={<About />} />
              <Route path="/international-businesses" element={<InternationalBusinesses />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
