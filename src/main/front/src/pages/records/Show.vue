<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import type { Record } from './types'
import BackButton from '../../components/BackButton.vue'

const props = defineProps<{ record: Record }>()
const form = useForm({})

function handleDelete() {
  if (window.confirm(`Are you sure you want to delete ${props.record.name}?`)) {
    form.delete(`/records/${props.record.id}`)
  }
}
</script>

<template>
  <main class="container">
    <BackButton href="/records" />
    <br>
    <article
      class="text-center"
      style="padding-bottom: 50px"
    >
      <img
        v-if="record.coverImage"
        :src="record.coverImage"
        :alt="`Cover of ${record.name}`"
        class="cover-image"
        style="max-width: 300px; margin-bottom: 20px"
      >
      <h3>{{ record.name }}</h3>
      <h5>{{ record.artist }} {{ record.yearOfRelease ? `(${record.yearOfRelease})` : '' }}</h5>
      <a
        href="#"
        style="float: right"
        @click.prevent="handleDelete"
      >Delete</a>
    </article>
  </main>
</template>
