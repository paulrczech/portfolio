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
      <p class="lede">the work</p>
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
      <p class="lede">pilot dispute tracker</p>
      <p>
        The pilot dispute tracker started as wireframes and a requirements
        doc. My job was to turn that into something people actually used: a
        Vue app with different views depending on the role of the logged in
        user, because different people needed different tools depending on
        where a claim was in the process.
      </p>

      <p>
        Filing a claim isn't one form. It's incident details, timecards,
        schedules, attachments, sometimes a written statement, all of it
        structured enough to be routed correctly once submitted. I built
        that as a set of reusable pieces rather than one long form. That
        decision paid off later: the same pieces get reused across
        submission, review, and read-only views, so a claim looks and
        behaves consistently no matter who's looking at it or at what stage.
      </p>

      <p>
        There’s also a threaded messaging system, with self-saving drafts
        and attachments that don’t vanish between screens. But underneath
        it all is a component library that began small and just kept on
        growing. Most new features are now combinations of existing
        features rather than something new.
      </p>
    </section>

    <section class="channel">
      <p class="lede">ski trail app</p>
      <p>
        The ski association's app started with paper: paper trail maps,
        paper punch cards for lift access. My job was to make all of that
        live on a phone, in one codebase that ships to both iOS and
        Android.
      </p>

      <p>
        GPS trail navigation was the trickiest part, since most of these
        trails sit in places without reliable signal. The maps have to work
        offline, cached ahead of time instead of fetched live. Punch passes
        turned out to be simpler: the same idea as the paper card, just
        digital, checked at each resort instead of hole-punched.
      </p>

      <p>
        Weather and conditions show up by trail and resort, pulled in fresh
        whenever there's a connection. I built it from the first design
        file through submitting it to both app stores myself, so when
        something breaks, I'm the one who hears about it.
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

  .lede {
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
