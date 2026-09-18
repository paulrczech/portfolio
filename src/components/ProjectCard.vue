<script setup lang="ts">
import type { Project } from '../data/projects'
import ProjectVisual from './ProjectVisual.vue'
import IconGithub from './icons/IconGithub.vue'
import IconExternal from './icons/IconExternal.vue'

defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  open: [project: Project]
}>()
</script>

<template>
  <article class="project-card card">
    <div v-if="project.image" class="screenshot" :style="{ aspectRatio: project.imageAspect || '16 / 9' }">
      <img :src="project.image" :alt="`${project.title} screenshot`" loading="lazy" />
    </div>
    <ProjectVisual v-else :variant="project.visual" />

    <div class="body">
      <p class="eyebrow">{{ project.eyebrow }}</p>
      <h3 class="title">{{ project.title }}</h3>
      <p class="blurb">{{ project.blurb }}</p>

      <p v-if="project.sideNote" class="side-note">
        Also built
        <a :href="project.sideNote.href" target="_blank" rel="noopener noreferrer" class="side-link">{{ project.sideNote.label }}</a>,
        {{ project.sideNote.description }}
      </p>

      <ul class="tags">
        <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>

      <div class="actions">
        <button v-if="project.caseStudy" class="btn btn-ghost" type="button" @click="emit('open', project)">
          Read case study
        </button>
        <a v-for="link in project.links" :key="link.href" class="btn btn-ghost" :href="link.href" target="_blank" rel="noopener noreferrer">
          <IconGithub v-if="link.icon === 'github'" class="icon" />
          <IconExternal v-else class="icon" />
          {{ link.label }}
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -20px rgba(var(--shadow-rgb), 0.45);
  border-color: var(--color-text-tertiary);
}

.screenshot {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.screenshot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.5s var(--ease);
}

.project-card:hover .screenshot img {
  transform: scale(1.04);
}

.body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.title {
  font-size: 1.3rem;
}

.blurb {
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  flex: 1;
}

.side-note {
  font-size: 0.85rem;
  color: var(--color-text-tertiary);
  line-height: 1.6;
}

.side-link {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.side-link:hover {
  color: var(--color-accent-hover);
}

.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 4px 0 0;
  padding: 0;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;
}

.icon {
  width: 16px;
  height: 16px;
}
</style>
