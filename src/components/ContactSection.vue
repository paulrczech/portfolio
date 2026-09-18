<script setup lang="ts">
  import { ref } from 'vue'
  import { vReveal } from '../composables/useReveal'
  import IconMail from './icons/IconMail.vue'
  import IconLinkedin from './icons/IconLinkedin.vue'
  import IconGithub from './icons/IconGithub.vue'
  import IconCheck from './icons/IconCheck.vue'
  import IconDownload from './icons/IconDownload.vue'

  const EMAIL = 'paulrczech@gmail.com'
  const copied = ref(false)
  let resetTimer: ReturnType<typeof setTimeout> | undefined

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      return
    }
    copied.value = true
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => (copied.value = false), 2000)
  }
</script>

<template>
  <section id="contact" class="section">
    <div class="container contact-inner">
      <p v-reveal class="eyebrow">Get In Touch</p>
      <h2 v-reveal class="section-heading">
        Looking for good work, not just more work.
      </h2>
      <p v-reveal class="section-lede">
        Open to remote, senior-level front-end roles. The fastest way to reach
        me is email, and I'm happy to talk through anything on this page in more
        detail.
      </p>

      <div v-reveal="90" class="actions">
        <button class="btn btn-primary" type="button" @click="copyEmail">
          <span class="swap-stage">
            <Transition name="swap">
              <span v-if="copied" key="copied" class="btn-content">
                <IconCheck class="icon" /> Copied!
              </span>
              <span v-else key="idle" class="btn-content">
                <IconMail class="icon" /> {{ EMAIL }}
              </span>
            </Transition>
          </span>
        </button>

        <a
          class="btn btn-ghost"
          href="https://linkedin.com/in/paul-czech"
          target="_blank"
          rel="noopener noreferrer">
          <IconLinkedin class="icon" /> LinkedIn
        </a>

        <a
          class="btn btn-ghost"
          href="https://github.com/paulrczech"
          target="_blank"
          rel="noopener noreferrer">
          <IconGithub class="icon" /> GitHub
        </a>

        <a class="btn btn-ghost" href="/resume.pdf" download>
          <IconDownload class="icon" /> Resume
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .contact-inner {
    text-align: left;
  }

  .actions {
    margin-top: 34px;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .swap-stage {
    display: grid;
  }

  .btn-content {
    grid-area: 1 / 1;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
  }

  .icon {
    width: 16px;
    height: 16px;
  }

  .swap-enter-active,
  .swap-leave-active {
    transition: opacity 0.2s var(--ease);
  }

  .swap-enter-from,
  .swap-leave-to {
    opacity: 0;
  }
</style>
