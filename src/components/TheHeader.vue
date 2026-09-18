<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'
import IconSun from './icons/IconSun.vue'
import IconMoon from './icons/IconMoon.vue'

const { theme, toggleTheme } = useTheme()
const menuOpen = ref(false)

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container bar">
      <a href="#top" class="logo">Paul Czech</a>

      <nav class="nav-desktop">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>

      <div class="controls">
        <button class="theme-toggle" type="button" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`" @click="toggleTheme">
          <Transition name="flip" mode="out-in">
            <IconSun v-if="theme === 'dark'" key="sun" class="icon" />
            <IconMoon v-else key="moon" class="icon" />
          </Transition>
        </button>

        <button class="menu-toggle" type="button" aria-label="Toggle menu" @click="menuOpen = !menuOpen">
          <span class="bar1" :class="{ open: menuOpen }" />
          <span class="bar2" :class="{ open: menuOpen }" />
        </button>
      </div>
    </div>

    <Transition name="dropdown">
      <nav v-if="menuOpen" class="nav-mobile">
        <a v-for="link in links" :key="link.href" :href="link.href" @click="closeMenu">{{ link.label }}</a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: env(safe-area-inset-top, 0px);
  z-index: 50;
  background: color-mix(in srgb, var(--color-bg) 82%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 16px;
}

.logo {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  color: var(--color-text);
}

.nav-desktop {
  display: flex;
  gap: 28px;
}

.nav-desktop a {
  text-decoration: none;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s var(--ease);
  position: relative;
}

.nav-desktop a:hover {
  color: var(--color-text);
}

.nav-desktop a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  height: 1px;
  width: 0;
  background: var(--color-accent);
  transition: width 0.25s var(--ease);
}

.nav-desktop a:hover::after {
  width: 100%;
}

.controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.theme-toggle {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s var(--ease), border-color 0.2s var(--ease);
}

.theme-toggle:hover {
  transform: rotate(15deg);
  border-color: var(--color-text-tertiary);
}

.theme-toggle .icon {
  width: 18px;
  height: 18px;
}

.flip-enter-active,
.flip-leave-active {
  transition: transform 0.25s var(--ease), opacity 0.25s var(--ease);
}

.flip-enter-from {
  transform: rotate(-90deg) scale(0.5);
  opacity: 0;
}

.flip-leave-to {
  transform: rotate(90deg) scale(0.5);
  opacity: 0;
}

.menu-toggle {
  display: none;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.menu-toggle span {
  width: 16px;
  height: 1.5px;
  background: var(--color-text);
  transition: transform 0.25s var(--ease), opacity 0.25s var(--ease);
}

.menu-toggle .bar1.open {
  transform: translateY(3.25px) rotate(45deg);
}

.menu-toggle .bar2.open {
  transform: translateY(-3.25px) rotate(-45deg);
}

.nav-mobile {
  display: none;
}

@media (max-width: 720px) {
  .nav-desktop {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .nav-mobile {
    display: flex;
    flex-direction: column;
    padding: 12px 24px 20px;
    border-top: 1px solid var(--color-border);
  }

  .nav-mobile a {
    text-decoration: none;
    color: var(--color-text-secondary);
    padding: 12px 0;
    font-size: 1rem;
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: max-height 0.25s var(--ease), opacity 0.25s var(--ease);
  overflow: hidden;
}

.dropdown-enter-from,
.dropdown-leave-to {
  max-height: 0;
  opacity: 0;
}

.dropdown-enter-to,
.dropdown-leave-from {
  max-height: 240px;
  opacity: 1;
}
</style>
