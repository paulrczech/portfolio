<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p>© {{ year }} Paul Czech</p>
      <p class="built-with">Built with Vue 3 + Vite</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding-block: 28px;
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  font-size: 0.88rem;
  color: var(--color-text-tertiary);
}
</style>
