/**
 * Apple-grade physics-based smooth scroll utility.
 * Features:
 * - Precision cubic-bezier easing (easeInOutCubic)
 * - Dynamic distance-based duration (neither too slow nor abrupt)
 * - Header height auto-detection to prevent content clipping
 * - Touch & wheel cancellation for full user agency
 * - Subtle arrival glow highlight on target section
 */

let activeScrollAnimation = null;

export function appleSmoothScroll(target, options = {}) {
  const {
    offset = null,
    duration = null,
    onComplete = null,
    addGlow = true,
  } = options;

  // Cancel any ongoing smooth scroll
  if (activeScrollAnimation) {
    cancelAnimationFrame(activeScrollAnimation);
    activeScrollAnimation = null;
  }

  // Resolve target element or coordinate
  let el = null;
  let targetY = 0;

  if (typeof target === "number") {
    targetY = Math.max(0, target);
  } else if (typeof target === "string") {
    el = document.getElementById(target);
    if (!el) {
      console.warn(`[appleSmoothScroll] Element with ID "${target}" not found.`);
      return false;
    }
  } else if (target instanceof HTMLElement) {
    el = target;
  } else {
    return false;
  }

  // Measure dynamic header height if scrolling to an element
  if (el) {
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 115;
    // Breathing room of 14px below sticky header
    const finalOffset = offset !== null ? offset : headerHeight + 14;

    const startY = window.pageYOffset || document.documentElement.scrollTop;
    targetY = Math.max(0, el.getBoundingClientRect().top + startY - finalOffset);
  }

  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const diff = targetY - startY;

  // If already at target within 2px
  if (Math.abs(diff) < 2) {
    if (el && addGlow) {
      el.classList.add("section-arrival-glow");
      setTimeout(() => el.classList.remove("section-arrival-glow"), 1600);
    }
    if (onComplete) onComplete(el);
    return true;
  }

  // Apple physics: dynamic duration based on distance
  const distance = Math.abs(diff);
  const scrollDuration =
    duration !== null
      ? duration
      : Math.min(920, Math.max(480, Math.sqrt(distance) * 18));

  const startTime = performance.now();

  // Premium Apple easeInOutCubic: ultra-smooth acceleration & gentle gliding deceleration
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  let isCancelled = false;
  const cancelEvents = ["wheel", "touchmove", "pointerdown", "keydown"];

  const handleInterrupt = (e) => {
    // Only cancel on user-initiated scroll/navigation keys
    if (e.type === "keydown" && !["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space"].includes(e.code)) {
      return;
    }
    isCancelled = true;
    cleanup();
  };

  const cleanup = () => {
    cancelEvents.forEach((ev) =>
      window.removeEventListener(ev, handleInterrupt, { passive: true })
    );
    activeScrollAnimation = null;
  };

  cancelEvents.forEach((ev) =>
    window.addEventListener(ev, handleInterrupt, { passive: true })
  );

  function step(currentTime) {
    if (isCancelled) return;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / scrollDuration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, Math.round(startY + diff * eased));

    if (progress < 1) {
      activeScrollAnimation = requestAnimationFrame(step);
    } else {
      cleanup();
      if (el && addGlow) {
        el.classList.add("section-arrival-glow");
        setTimeout(() => el.classList.remove("section-arrival-glow"), 1600);
      }
      if (onComplete) onComplete(el);
    }
  }

  activeScrollAnimation = requestAnimationFrame(step);
  return true;
}
