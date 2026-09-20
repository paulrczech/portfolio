import { onMounted, onUnmounted, type Ref } from 'vue'

export function useDepth(field: Ref<HTMLElement | null>) {
  let ticking = false

  function update() {
    ticking = false
    const el = field.value
    if (!el) return

    const rect = el.getBoundingClientRect()
    const scrollable = rect.height - window.innerHeight
    const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(scrollable, 0))
    const progress = scrollable > 0 ? scrolled / scrollable : 0

    document.documentElement.style.setProperty('--depth', progress.toFixed(3))
  }

  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(update)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })
}
