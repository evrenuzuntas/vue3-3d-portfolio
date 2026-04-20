<script setup lang="ts">
import { Project } from '../data';

defineProps<{
  project: Project
}>();
</script>

<template>
  <div style="border: 1px solid gray; padding: 10px; width: 300px;">
    <img 
      :src="project.image" 
      :alt="project.title" 
      style="width: 100%; height: 150px; object-fit: cover;"
    />
    <div>
      <strong>{{ project.category }}</strong>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <button>Detayları İncele</button>
    </div>
  </div>
</template>
