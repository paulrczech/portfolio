import { ref } from 'vue'

type Theme = 'dark' | 'light'

const STORAGE_KEY = 'portfolio-theme'
const theme = ref<Theme>('dark')

function applyTheme(value: Theme) {
  document.documentElement.setAttribute('data-theme', value)
}

function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
  theme.value = stored ?? 'dark'
  applyTheme(theme.value)
}

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  applyTheme(theme.value)
  try {
    localStorage.setItem(STORAGE_KEY, theme.value)
  } catch {
    // localStorage unavailable (private mode, etc.) — theme still applies for this visit
  }
}

export function useTheme() {
  return { theme, initTheme, toggleTheme }
}
