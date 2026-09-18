<script setup lang="ts">
import { vReveal } from '../composables/useReveal'

const groups = [
  {
    heading: 'Core Stack',
    skills: ['Vue 3', 'TypeScript', 'Composition API', 'Pinia', 'Vite'],
  },
  {
    heading: 'Also Production-Ready',
    skills: ['React', 'Angular', 'JavaScript (ES6+)', 'WordPress (Custom Gutenberg Blocks)'],
  },
  {
    heading: 'Tooling & Practices',
    skills: ['REST APIs & JWT Auth', 'Accessibility (WCAG 2.1)', 'Git & GitHub', 'Figma'],
  },
]
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <p v-reveal class="eyebrow">Toolbox</p>
      <h2 v-reveal class="section-heading">Skills</h2>

      <div class="groups">
        <div v-for="(group, i) in groups" :key="group.heading" v-reveal="i * 90" class="group card">
          <h3>{{ group.heading }}</h3>
          <ul class="tags">
            <li v-for="skill in group.skills" :key="skill" class="tag">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.groups {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.group {
  padding: 24px;
}

.group h3 {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 16px;
}

.group:hover {
  border-color: var(--color-text-tertiary);
  transform: translateY(-3px);
}

.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
}

.tag {
  transition: color 0.2s var(--ease), border-color 0.2s var(--ease), transform 0.2s var(--ease);
}

.tag:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  transform: translateY(-2px);
}
</style>
