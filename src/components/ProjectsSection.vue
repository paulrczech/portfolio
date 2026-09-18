<script setup lang="ts">
import { ref } from 'vue'
import { projects, type Project } from '../data/projects'
import { vReveal } from '../composables/useReveal'
import ProjectCard from './ProjectCard.vue'
import CaseStudyModal from './CaseStudyModal.vue'

const activeProject = ref<Project | null>(null)
</script>

<template>
  <section id="work" class="section">
    <div class="container">
      <p v-reveal class="eyebrow">Selected Work</p>
      <h2 v-reveal class="section-heading">Projects</h2>
      <p v-reveal class="section-lede">
        A mix of client work and projects built for the love of it.
      </p>

      <div class="grid">
        <div
          v-for="(project, i) in projects"
          :key="project.id"
          v-reveal="i * 90"
          :class="{ wide: project.id === 'eddy' }"
        >
          <ProjectCard :project="project" @open="activeProject = $event" />
        </div>
      </div>
    </div>

    <CaseStudyModal :project="activeProject" @close="activeProject = null" />
  </section>
</template>

<style scoped>
.grid {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

/* Tailored to the current 5-project count (3 + 2 last row): widening the
   final card fills what would otherwise be an empty third slot. Revisit
   this if the project count changes. Scoped to widths that actually fit
   3 columns, since `span 2` confuses auto-fit's column count below that
   and breaks single-column mobile layout. */
@media (min-width: 900px) {
  .wide {
    grid-column: span 2;
  }
}
</style>
