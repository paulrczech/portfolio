<script setup lang="ts">
import { ref } from 'vue'
import { useDepth } from './composables/useDepth'

const field = ref<HTMLElement | null>(null)
useDepth(field)
</script>

<template>
  <div ref="field" class="depth-field">
    <p class="piece">
      Thirteen years in, and most of what I've built didn't start from
      nothing. It was someone else's portal, someone else's API, a
      component library I didn't choose. I used to think that was the less
      interesting version of the job. Turns out it's most of the job, and
      if I'm honest, it's the part I got good at.
    </p>
  </div>
</template>

<style scoped>
.depth-field {
  min-height: 220vh;
  display: flex;
  justify-content: center;
  padding-top: 20vh;
}

.piece {
  max-width: 40ch;
  padding-inline: 24px;
  font-size: 1.2rem;
  line-height: 1.85;
}
</style>
