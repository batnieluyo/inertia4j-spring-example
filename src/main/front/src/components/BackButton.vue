<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

defineProps<{ href: string }>()
</script>

<template>
  <Link
    :href="href"
    as="button"
    class="outline contrast"
    style="display: flex; align-items: center; gap: 8px; padding: 10px 15px 10px 10px"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="width: 20px; height: 20px"
    >
      <path d="M15 6l-6 6l6 6" />
    </svg>
    Go back
  </Link>
</template>
