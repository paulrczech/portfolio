<script setup lang="ts">
  import { ref } from 'vue'
  import { useDepth } from './composables/useDepth'

  const field = ref<HTMLElement | null>(null)
  useDepth(field)
</script>

<template>
  <div ref="field" class="depth-field">
    <div class="content">
      <p>
        Thirteen years doing this, most of it remote. I've built projects from
        scratch, owned architecture on existing systems, and learned new
        platforms fast enough to do real work with them in weeks. The stack
        keeps moving, and I keep pace.
      </p>

      <p>
        Other than that, I write and record music. I’ve been working on a
        personal app called Eddy that other songwriters can use.
      </p>
    </div>
  </div>
</template>

<style scoped>
  .depth-field {
    min-height: 220vh;
    display: flex;
    justify-content: center;
    padding-top: 20vh;
  }

  .content {
    max-width: 40ch;
    padding-inline: 24px;
    font-size: 1.2rem;
    line-height: 1.85;
  }

  .content p + p {
    margin-top: 1.5em;
  }
</style>
