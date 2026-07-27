export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

export function scrollToHashWithRetry(hash: string, retries = 8, intervalMs = 80) {
  if (scrollToHash(hash)) return () => {};

  let attempt = 0;
  const timer = window.setInterval(() => {
    attempt += 1;
    if (scrollToHash(hash) || attempt >= retries) {
      window.clearInterval(timer);
    }
  }, intervalMs);

  return () => window.clearInterval(timer);
}
