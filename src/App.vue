<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'

const { initTheme } = useTheme()
onMounted(initTheme)
</script>

<template>
  <TheHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <TheFooter />
</template>
