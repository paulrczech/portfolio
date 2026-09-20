<script setup lang="ts">
  import { ref } from 'vue'
  import { useDepth } from './composables/useDepth'

  const field = ref<HTMLElement | null>(null)
  useDepth(field)
</script>

<template>
  <div ref="field" class="depth-field">
    <header class="identity">
      <p class="name">Paul Czech</p>
      <p class="role">Front-End Developer</p>
    </header>

    <section class="channel">
      <p>
        Thirteen years doing this, most of it remote. I’ve built projects from
        scratch, owned architecture on existing systems, and learned new
        platforms fast enough to do real work with them in weeks. The stack
        keeps moving, and I keep pace.
      </p>

      <p>
        Other than that, I write and record music. I’ve been working on a
        personal app called Eddy that other songwriters can use.
      </p>
    </section>

    <section class="pool">
      <p class="pool-lede">the work</p>
      <p class="pool-line">
        An airline pilot schedule dispute tracker, built as a module inside
        an existing enterprise portal.
      </p>
      <p class="pool-line">
        A mobile app for a cross-country ski association. Live on the App
        Store and Google Play.
      </p>
      <p class="pool-line">
        A field data collection app for a utility company, rebuilt from an
        old system to a modern one. Still used by inspection crews on the
        job today.
      </p>
      <p class="pool-line">
        A WordPress site I built to show what a custom Gutenberg block
        library can do. It's a demo, but everything on it works.
      </p>
    </section>
  </div>
</template>

<style scoped>
  .depth-field {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .identity {
    align-self: flex-start;
    padding: 32px 24px 0;
  }

  .name {
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 500;
  }

  .role {
    margin-top: 4px;
    font-size: 0.85rem;
    opacity: 0.55;
  }

  .channel {
    max-width: 40ch;
    padding-inline: 24px;
    padding-block: 12vh 12vh;
    font-size: 1.2rem;
    line-height: 1.85;
  }

  .channel p + p {
    margin-top: 1.5em;
  }

  .pool {
    width: 100%;
    max-width: 640px;
    padding-inline: 24px;
    padding-block: 10vh 24vh;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .pool-lede {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    opacity: 0.55;
  }

  .pool-line {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 46ch;
  }
</style>
