<script setup lang="ts"></script>

<template>
  <section id="top" class="hero">
    <div class="glow" aria-hidden="true" />
    <div class="container hero-inner">
      <p class="eyebrow enter" style="--delay: 0ms">Senior Front-End Developer · Open to Remote (US)</p>
      <h1 class="headline enter" style="--delay: 90ms">I build interfaces that feel as good as they look.</h1>
      <p class="subhead enter" style="--delay: 180ms">
        13+ years turning complex requirements into clean, maintainable Vue, React, and Angular
        applications — for teams that care about the details as much as I do.
      </p>
      <div class="actions enter" style="--delay: 270ms">
        <a href="#work" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-ghost">Get In Touch</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-block: clamp(96px, 16vw, 160px) clamp(64px, 10vw, 96px);
  overflow: hidden;
}

.glow {
  position: absolute;
  top: -20%;
  left: 50%;
  width: 900px;
  height: 700px;
  transform: translateX(-50%);
  background: radial-gradient(closest-side, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent 70%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  max-width: 760px;
}

.headline {
  font-size: clamp(2.2rem, 5.5vw, 3.6rem);
  margin-top: 18px;
  letter-spacing: -0.01em;
}

.subhead {
  margin-top: 22px;
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  max-width: 56ch;
}

.actions {
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.enter {
  opacity: 0;
  transform: translateY(18px);
  animation: enter 0.8s var(--ease) forwards;
  animation-delay: var(--delay, 0ms);
}

@keyframes enter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .enter {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
