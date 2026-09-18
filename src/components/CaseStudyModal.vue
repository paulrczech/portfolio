<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import type { Project } from '../data/projects'
import IconClose from './icons/IconClose.vue'

const props = defineProps<{
  project: Project | null
}>()

const emit = defineEmits<{
  close: []
}>()

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))

watch(
  () => props.project,
  (project) => {
    document.body.style.overflow = project ? 'hidden' : ''
  },
)
</script>

<template>
  <Transition name="modal">
    <div v-if="project" class="overlay" @click.self="emit('close')">
      <div class="panel card" role="dialog" aria-modal="true" :aria-label="project.title">
        <button class="close" type="button" aria-label="Close case study" @click="emit('close')">
          <IconClose class="icon" />
        </button>

        <p class="eyebrow">{{ project.eyebrow }}</p>
        <h3 class="title">{{ project.title }}</h3>

        <ul class="tags">
          <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
        </ul>

        <p v-if="project.caseStudy" class="summary">{{ project.caseStudy.summary }}</p>

        <div v-if="project.caseStudy" class="sections">
          <div v-for="section in project.caseStudy.sections" :key="section.heading" class="section-block">
            <h4>{{ section.heading }}</h4>
            <p v-for="(paragraph, i) in section.body" :key="i">{{ paragraph }}</p>
          </div>
        </div>

        <p v-if="project.caseStudy" class="closing">{{ project.caseStudy.closing }}</p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(var(--shadow-rgb), 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 8vh 20px 40px;
  z-index: 100;
  overflow-y: auto;
}

.panel {
  position: relative;
  max-width: 640px;
  width: 100%;
  padding: 40px clamp(24px, 4vw, 44px);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s var(--ease), color 0.2s var(--ease), border-color 0.2s var(--ease);
}

.close:hover {
  color: var(--color-text);
  border-color: var(--color-text-tertiary);
  transform: rotate(90deg);
}

.close .icon {
  width: 16px;
  height: 16px;
}

.title {
  font-size: 1.7rem;
}

.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
}

.summary {
  color: var(--color-text-secondary);
  font-size: 1.02rem;
  line-height: 1.7;
}

.sections {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-block h4 {
  font-size: 1.05rem;
  margin-bottom: 8px;
  color: var(--color-accent);
}

.section-block p {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 8px;
}

.section-block p:last-child {
  margin-bottom: 0;
}

.closing {
  border-top: 1px solid var(--color-border);
  padding-top: 16px;
  font-style: italic;
  color: var(--color-text-secondary);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s var(--ease);
}

.modal-enter-active .panel,
.modal-leave-active .panel {
  transition: transform 0.3s var(--ease), opacity 0.3s var(--ease);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .panel,
.modal-leave-to .panel {
  transform: translateY(16px) scale(0.98);
  opacity: 0;
}
</style>
