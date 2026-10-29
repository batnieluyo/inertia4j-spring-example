<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import BackButton from '../../components/BackButton.vue'

const form = useForm({
  name: '',
  artist: '',
  coverImage: '',
  yearOfRelease: '',
})
</script>

<template>
  <main class="container">
    <BackButton href="/records" />
    <br><br>
    <h1>Add Record</h1>
    <form @submit.prevent="form.post('/records')">
      <div class="grid gap-4 max-w-md">
        <div>
          <label for="name">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
          >
          <div
            v-if="form.errors.name"
            class="text-red-500"
          >
            {{ form.errors.name }}
          </div>
        </div>
        <div>
          <label for="artist">Artist</label>
          <input
            id="artist"
            v-model="form.artist"
            type="text"
          >
          <div
            v-if="form.errors.artist"
            class="text-red-500"
          >
            {{ form.errors.artist }}
          </div>
        </div>
        <div>
          <label for="coverImage">Cover Image URL</label>
          <input
            id="coverImage"
            v-model="form.coverImage"
            type="text"
          >
          <div
            v-if="form.errors.coverImage"
            class="text-red-500"
          >
            {{ form.errors.coverImage }}
          </div>
        </div>
        <div>
          <label for="yearOfRelease">Year of Release</label>
          <input
            id="yearOfRelease"
            v-model="form.yearOfRelease"
            type="number"
          >
          <div
            v-if="form.errors.yearOfRelease"
            class="text-red-500"
          >
            {{ form.errors.yearOfRelease }}
          </div>
        </div>
      </div>
      <button
        type="submit"
        :disabled="form.processing"
      >
        {{ form.processing ? 'Submitting...' : 'Submit' }}
      </button>
    </form>
  </main>
</template>
