<script setup lang="ts">
  import { ref } from 'vue'
  import { useDepth } from './composables/useDepth'

  const field = ref<HTMLElement | null>(null)
  useDepth(field)
</script>

<template>
  <div ref="field" class="depth-field">
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
        An enterprise system a national pilot union uses to track and resolve
        contract disputes.
      </p>
      <p class="pool-line">
        A mobile app for a cross-country ski association, live on the App Store
        and Google Play.
      </p>
      <p class="pool-line">
        A legacy rebuild for a utility inspection company that still runs in the
        field.
      </p>
      <p class="pool-line">
        A WordPress demo site for showing prospective clients a
        structured-content approach, built on a custom Gutenberg block library.
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

  .channel {
    max-width: 40ch;
    padding-inline: 24px;
    padding-block: 20vh 12vh;
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
