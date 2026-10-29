<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import type { Record } from './types'

defineProps<{ records: Record[] }>()
</script>

<template>
  <main class="container">
    <h1>Welcome Spring</h1>
    <h4>You currently have {{ records.length }} {{ records.length === 1 ? 'record' : 'records' }}.</h4>

    <article
      v-for="record in records"
      :key="record.id"
      style="display: flex; align-items: center; margin-bottom: 20px"
    >
      <div style="margin-right: 30px">
        <img
          :src="record.coverImage || '/images/default-cover.png'"
          :alt="`Cover of ${record.name}`"
          class="cover-image"
          style="max-width: 64px; max-height: 64px"
        >
      </div>
      <div style="flex: 1">
        <h2 style="margin: 0">
          <Link :href="`/records/${record.id}`">
            {{ record.name }}
          </Link>
        </h2>
      </div>
    </article>

    <Link
      as="button"
      href="/records/new"
      style="margin-top: 20px; display: inline-block; text-decoration: none"
    >
      Create a new Record
    </Link>
  </main>
</template>
