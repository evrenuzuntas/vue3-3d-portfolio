<script setup lang="ts">
import { Product } from '../data';

defineProps<{
  product: Product
}>();
</script>

<template>
  <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img 
      :src="product.image" 
      :alt="product.title" 
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <span class="text-xs font-semibold text-blue-600 uppercase tracking-wider">{{ product.category }}</span>
      <h3 class="mt-2 text-xl font-bold text-gray-900">{{ product.title }}</h3>
      <p class="mt-2 text-gray-600 text-sm line-clamp-2">{{ product.description }}</p>
      <div class="mt-4 flex items-center justify-between">
        <span class="text-sm font-medium text-gray-900">{{ product.price || 'İletişime Geçin' }}</span>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          İncele
        </button>
      </div>
    </div>
  </div>
</template>
