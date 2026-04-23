import Container from "../components/Container";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-spotlight" />
      <Container className="relative">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.02em] text-ink-900">
            We can't find that page.
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-600">
            The link you followed may be broken, or the page may have moved. Let's get you back on track.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/">Back to home</Button>
            <Button to="/platform" variant="secondary">
              Explore the platform
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
