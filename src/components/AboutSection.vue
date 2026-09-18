<script setup lang="ts">
import { vReveal } from '../composables/useReveal'
import profilePhoto from '../assets/profile/paul.jpg'

const stats = [
  { value: '13+', label: 'Years of experience' },
  { value: '3', label: 'Frameworks in production — Vue, React, Angular' },
  { value: 'Remote', label: 'Open to US-based remote roles' },
]
</script>

<template>
  <section id="about" class="section">
    <div class="container layout">
      <div class="copy">
        <div v-reveal class="intro-row">
          <img :src="profilePhoto" alt="Paul Czech" class="avatar" width="72" height="72" />
          <div>
            <p class="eyebrow">About</p>
            <h2 class="section-heading">A steady hand on the front end.</h2>
          </div>
        </div>

        <p v-reveal class="paragraph">
          I'm a senior front-end developer with 13+ years building responsive, high-performance web
          applications — from enterprise ticketing systems to mobile-first travel apps. My focus is
          Vue 3, with production experience across React and Angular, and I care as much about the
          architecture underneath an interface as the pixels on top of it.
        </p>

        <p v-reveal="80" class="paragraph">
          Day to day, that means turning ambiguous UX requirements into modular, maintainable
          components — and, increasingly, using AI-assisted tooling like Claude Code to move faster
          without cutting corners on quality.
        </p>

        <p v-reveal="160" class="paragraph">
          I'm looking for a remote, senior-level front-end role on a team that cares about what
          the work is actually for — building something worth building, not just shipping
          features to hit a number. If that's the kind of team you're putting together, I'd love
          to talk.
        </p>
      </div>

      <dl class="stats">
        <div v-for="(stat, i) in stats" :key="stat.label" v-reveal="i * 90" class="stat">
          <dt>{{ stat.value }}</dt>
          <dd>{{ stat.label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: clamp(32px, 6vw, 64px);
  align-items: start;
}

.intro-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-border);
  flex-shrink: 0;
}

.paragraph {
  color: var(--color-text-secondary);
  font-size: 1.02rem;
  line-height: 1.75;
  margin-top: 18px;
  max-width: 62ch;
}

.stats {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.stat dt {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--color-accent);
}

.stat dd {
  margin: 4px 0 0;
  color: var(--color-text-secondary);
  font-size: 0.92rem;
}

.stat + .stat {
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
}

@media (max-width: 800px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
