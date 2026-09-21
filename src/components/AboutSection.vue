<script setup lang="ts">
  import { vReveal } from '../composables/useReveal'
  import profilePhoto from '../assets/profile/paul.jpg'

  const stats = [
    { value: '13+', label: 'Years of experience' },
    { value: '12', label: 'Years remote' },
    { value: 'Remote', label: 'Open to US-based remote roles' },
  ]
</script>

<template>
  <section id="about" class="section">
    <div class="container layout">
      <div class="copy">
        <div v-reveal class="intro-row">
          <img
            :src="profilePhoto"
            alt="Paul Czech"
            class="avatar"
            width="120"
            height="120" />
          <div class="intro-text">
            <p class="eyebrow">About</p>
            <h2 class="section-heading">Building something worth building.</h2>
          </div>
        </div>

        <p v-reveal class="paragraph">
          I've shipped everything from enterprise ticketing systems to
          mobile-first travel apps, adapting to whatever stack the work
          required.
        </p>

        <p v-reveal="80" class="paragraph">
          Day to day, that means turning UX requirements, clear or ambiguous,
          into modular, maintainable components. Increasingly, that also means
          using AI-assisted tooling like Claude Code to move faster without
          cutting corners on quality.
        </p>

        <p v-reveal="160" class="paragraph">
          I'm looking for a remote, senior-level front-end role on a team that
          cares about what the work is actually for, not just shipping features
          to hit a number. If that's the kind of team you're putting together,
          I'd love to talk.
        </p>
      </div>

      <dl class="stats">
        <div
          v-for="(stat, i) in stats"
          :key="stat.label"
          v-reveal="i * 90"
          class="stat">
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
    width: 120px;
    height: 120px;
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

  @media (max-width: 560px) {
    .intro-row {
      flex-direction: column;
      text-align: center;
      gap: 16px;
    }

    .avatar {
      width: 132px;
      height: 132px;
    }
  }
</style>
