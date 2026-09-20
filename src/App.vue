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
        An airline pilot schedule dispute tracker, built as a module inside an
        existing enterprise portal.
      </p>
      <p class="pool-line">
        A mobile app for a cross-country ski association. Live on the App Store
        and Google Play.
      </p>
      <p class="pool-line">
        A field data collection app for a utility company, rebuilt from an old
        system to a modern one. Still used by inspection crews on the job today.
      </p>
      <p class="pool-line">
        A WordPress site built to show what a custom Gutenberg block library can
        do. It's a demo, but everything on it works.
      </p>
    </section>

    <section class="channel">
      <p>
        The pilot dispute tracker started as wireframes and a requirements
        doc. My job was to turn that into something people actually used: a
        Vue app with different views depending on who's logged in, since a
        pilot filing a claim needs different tools than the union rep who
        approves it.
      </p>

      <p>
        Filing a claim isn't one form. It's incident details, timecards,
        schedules, attachments, sometimes a written statement, all of it
        structured enough to route correctly once submitted. I built that as
        a set of reusable pieces instead of one long form. That decision
        paid off later: the same pieces get reused across submission,
        review, and read-only views, so the union side and the pilot side of
        the same claim never drift apart.
      </p>

      <p>
        There's also a messaging system, threaded, with drafts that save
        themselves and attachments that don't disappear between screens.
        Underneath all of it is a component library that started small and
        kept growing. Most new features now get built by combining what's
        already there instead of writing something new.
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
    padding-block: 10vh 10vh;
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .depth-field > .channel:last-child {
    padding-bottom: 24vh;
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
