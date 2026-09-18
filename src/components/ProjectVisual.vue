<script setup lang="ts">
defineProps<{
  variant: 'workflow' | 'trail' | 'notes' | 'blocks' | 'sync'
}>()
</script>

<template>
  <div class="visual" :class="`visual--${variant}`">
    <svg v-if="variant === 'workflow'" viewBox="0 0 320 180" class="art">
      <line x1="60" y1="90" x2="260" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 8" opacity="0.5" />
      <g v-for="(cx, i) in [60, 160, 260]" :key="cx">
        <circle :cx="cx" cy="90" r="26" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35" />
        <circle :cx="cx" cy="90" r="10" :fill="i === 1 ? 'currentColor' : 'none'" :stroke="i === 1 ? 'none' : 'currentColor'" stroke-width="1.5" />
      </g>
      <circle cx="60" cy="60" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="160" cy="130" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="260" cy="60" r="4" fill="currentColor" opacity="0.6" />
    </svg>

    <svg v-else-if="variant === 'trail'" viewBox="0 0 320 180" class="art">
      <path d="M20 150 L90 60 L130 100 L180 40 L230 95 L300 30" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35" />
      <path d="M30 145 Q100 100 150 110 T280 55" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="1 9" stroke-linecap="round" />
      <circle cx="280" cy="55" r="6" fill="currentColor" />
      <circle cx="30" cy="145" r="4" fill="currentColor" opacity="0.6" />
    </svg>

    <svg v-else-if="variant === 'notes'" viewBox="0 0 320 180" class="art">
      <path
        v-for="(d, i) in [
          'M10 50 Q80 30 160 55 T310 40',
          'M10 90 Q80 110 160 88 T310 100',
          'M10 130 Q80 115 160 135 T310 120',
        ]"
        :key="i"
        :d="d"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        :opacity="0.75 - i * 0.18"
      />
      <circle cx="160" cy="55" r="4" fill="currentColor" />
      <circle cx="160" cy="88" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="160" cy="135" r="4" fill="currentColor" opacity="0.4" />
    </svg>

    <svg v-else-if="variant === 'blocks'" viewBox="0 0 320 180" class="art">
      <rect x="20" y="20" width="280" height="52" rx="6" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35" />
      <rect x="20" y="88" width="80" height="42" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35" />
      <rect x="220" y="88" width="80" height="42" rx="5" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35" />
      <rect x="115" y="88" width="90" height="42" rx="5" fill="none" stroke="currentColor" stroke-width="2" />
      <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M111 84v8m0-8h8" />
        <path d="M209 84v8m0-8h-8" />
        <path d="M111 134v-8m0 8h8" />
        <path d="M209 134v-8m0 8h-8" />
      </g>
      <rect x="20" y="146" width="280" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="1 7" opacity="0.5" />
    </svg>

    <svg v-else viewBox="0 0 320 180" class="art">
      <rect x="30" y="40" width="55" height="100" rx="10" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35" />
      <circle cx="57" cy="128" r="3" fill="currentColor" opacity="0.5" />
      <rect x="235" y="50" width="60" height="80" rx="10" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35" />
      <circle cx="253" cy="72" r="3" fill="currentColor" />
      <circle cx="253" cy="88" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="253" cy="104" r="3" fill="currentColor" opacity="0.4" />
      <line x1="85" y1="90" x2="138" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 8" opacity="0.5" />
      <line x1="182" y1="90" x2="235" y2="90" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 8" opacity="0.5" />
      <circle cx="160" cy="90" r="22" fill="none" stroke="currentColor" stroke-width="2" />
      <path d="M160 72a18 18 0 0 1 17 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M177 82l3 6-7-1" fill="currentColor" />
    </svg>
  </div>
</template>

<style scoped>
.visual {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-md);
  overflow: hidden;
  color: var(--color-accent);
  background:
    radial-gradient(120% 140% at 15% 0%, rgba(var(--shadow-rgb), 0) 0%, transparent 60%),
    linear-gradient(155deg, var(--color-bg-elevated-hover), var(--color-bg-elevated));
  border: 1px solid var(--color-border);
}

.art {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
