<script setup lang="ts">
import { ref } from 'vue'
import { useDepth } from './composables/useDepth'

const field = ref<HTMLElement | null>(null)
useDepth(field)
</script>

<template>
  <div ref="field" class="depth-field">
    <p class="piece">
      Most of what I've built over the last thirteen years has lived inside a
      system already in motion: a portal that predates me, an API I don't
      control, a component library someone else started. That's not a
      complaint. It's just where the real work happens, and I've gotten
      better at it than I ever was at working from a blank canvas.
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
