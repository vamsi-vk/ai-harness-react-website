import { Analytics } from "@vercel/analytics/react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import DemoChatbot from "./components/DemoChatbot";
import Home from "./pages/Home";



// Home is eagerly bundled because it's the LCP-critical landing page that most
// users hit first. Every other route is code-split via React.lazy() so it
// only ships to users who actually navigate to it. See vite.config.ts for
// the matching vendor chunking strategy.
const Platform = lazy(() => import("./pages/Platform"));
const Industries = lazy(() => import("./pages/Industries"));
const Security = lazy(() => import("./pages/Security"));
const Contact = lazy(() => import("./pages/Contact"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const RequestDemo = lazy(() => import("./pages/RequestDemo"));
const About = lazy(() => import("./pages/About"));
const InternationalBusinesses = lazy(() => import("./pages/InternationalBusinesses"));
const InternationalCountry = lazy(() => import("./pages/InternationalCountry"));
const InternationalConsultation = lazy(() => import("./pages/InternationalConsultation"));
const MarketingAutomationAgent = lazy(() => import("./pages/MarketingAutomationAgent"));
const PostCreationPublishing = lazy(
  () => import("./pages/marketing-automation/PostCreationPublishing"),
);
const SocialEngagement = lazy(
  () => import("./pages/marketing-automation/SocialEngagement"),
);
const SocialAnalytics = lazy(
  () => import("./pages/marketing-automation/SocialAnalytics"),
);
const ReputationSentimentAgent = lazy(() => import("./pages/ReputationSentimentAgent"));
const ReviewGeneration = lazy(
  () => import("./pages/reputation-sentiment/ReviewGeneration"),
);
const ReviewManagement = lazy(
  () => import("./pages/reputation-sentiment/ReviewManagement"),
);
const ReviewAnalyticsMarketing = lazy(
  () => import("./pages/reputation-sentiment/ReviewAnalyticsMarketing"),
);
const AutomatedReviewAgent = lazy(() => import("./pages/AutomatedReviewAgent"));
const VisibilityListingAgent = lazy(() => import("./pages/VisibilityListingAgent"));
const ListingsPublishing = lazy(
  () => import("./pages/visibility-listing/ListingsPublishing"),
);
const SearchOptimization = lazy(
  () => import("./pages/visibility-listing/SearchOptimization"),
);
const VisibilityAnalytics = lazy(
  () => import("./pages/visibility-listing/VisibilityAnalytics"),
);
const Enterprise = lazy(() => import("./pages/Enterprise"));
const SolutionsPage = lazy(() => import("./pages/SolutionsPage"));
const SolutionEnterprise = lazy(() => import("./pages/SolutionEnterprise"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
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
    <div className="flex min-h-full flex-col bg-ink-50 text-ink-800">
      <ScrollToTop />
      <VercelAnalytics />
      <Navbar />
      <main className="relative flex-1 overflow-x-clip">
        <div className="relative z-10">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/solutions/enterprise" element={<SolutionEnterprise />} />
              <Route path="/x" element={<Navigate to="/solutions" replace />} />
              <Route
                path="/x/solution-enterprise"
                element={<Navigate to="/solutions/enterprise" replace />}
              />
              <Route path="/platform" element={<Platform />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/ai-agents" element={<Navigate to="/" replace />} />
              <Route
                path="/agents/marketing-automation"
                element={<MarketingAutomationAgent />}
              />
              <Route
                path="/agents/marketing-automation/post-creation-publishing"
                element={<PostCreationPublishing />}
              />
              <Route
                path="/agents/marketing-automation/social-engagement"
                element={<SocialEngagement />}
              />
              <Route
                path="/agents/marketing-automation/social-analytics"
                element={<SocialAnalytics />}
              />
              <Route
                path="/agents/reputation-sentiment"
                element={<ReputationSentimentAgent />}
              />
              <Route
                path="/agents/reputation-sentiment/review-generation"
                element={<ReviewGeneration />}
              />
              <Route
                path="/agents/reputation-sentiment/review-management"
                element={<ReviewManagement />}
              />
              <Route
                path="/agents/reputation-sentiment/review-analytics-marketing"
                element={<ReviewAnalyticsMarketing />}
              />
              <Route
                path="/agents/automated-reviews"
                element={<AutomatedReviewAgent />}
              />
              <Route
                path="/agents/visibility-listing"
                element={<VisibilityListingAgent />}
              />
              <Route
                path="/agents/visibility-listing/listings-publishing"
                element={<ListingsPublishing />}
              />
              <Route
                path="/agents/visibility-listing/search-optimization"
                element={<SearchOptimization />}
              />
              <Route
                path="/agents/visibility-listing/visibility-analytics"
                element={<VisibilityAnalytics />}
              />
              <Route
                path="/ai-agents/marketing-automation"
                element={<Navigate to="/agents/marketing-automation" replace />}
              />
              <Route
                path="/ai-agents/marketing-automation/*"
                element={<Navigate to="/agents/marketing-automation" replace />}
              />
              <Route path="/security" element={<Security />} />
              <Route path="/resources" element={<NotFound />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/demo" element={<RequestDemo />} />
              <Route path="/about" element={<About />} />
              <Route path="/international-businesses" element={<InternationalBusinesses />} />
              <Route
                path="/international-businesses/:country"
                element={<InternationalCountry />}
              />
              <Route
                path="/international-businesses/:country/consultation"
                element={<InternationalConsultation />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </main>
      <Footer />
      {/* <DemoChatbot /> */}
    </div>
  );
}
