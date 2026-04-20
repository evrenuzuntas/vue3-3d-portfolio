<script setup lang="ts">
import { ref } from 'vue';
import ProjectCard from './components/ProjectCard.vue';
import { projects, skills } from './data';

const isContactModalOpen = ref(false);
const emailInput = ref('');

const toggleModal = () => {
  isContactModalOpen.value = !isContactModalOpen.value;
};

const submitContact = () => {
  alert(`Mesajınız alındı! Geri dönüş yapılacak e-posta: ${emailInput.value}`);
  emailInput.value = '';
  toggleModal();
};
</script>

<template>
  <div>
    <!-- Navbar -->
    <nav>
      <h2>3D.ARTIST</h2>
      <button @click="toggleModal">İletişime Geç</button>
    </nav>
    <hr />

    <!-- Hero Section -->
    <header>
      <h1>Geleceği 3 Boyutlu Tasarlıyoruz</h1>
      <p>Hayal gücünün sınırlarını zorlayan karakterler, dünyalar ve mimari yapılar inşa ediyorum.</p>
    </header>
    <hr />

    <!-- Skills Section -->
    <section>
      <h3>Kullanılan Teknolojiler & Araçlar</h3>
      <ul>
        <li v-for="(skill, index) in skills" :key="index">
          {{ skill }}
        </li>
      </ul>
    </section>
    <hr />

    <!-- Gallery / Projects Section -->
    <main>
      <h2>Öne Çıkan Çalışmalar</h2>
      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project" 
        />
      </div>
    </main>
    <hr />

    <!-- Footer -->
    <footer>
      <p>&copy; 2026 3D Artist Portfolio.</p>
    </footer>

    <!-- Contact Modal (Simplified) -->
    <div v-if="isContactModalOpen" style="border: 2px solid black; padding: 20px; margin-top: 20px;">
      <button @click="toggleModal">Kapat (X)</button>
      <h3>Benimle Çalışın</h3>
      <p>Projenizi hayata geçirmek için buradayım.</p>
      
      <form @submit.prevent="submitContact">
        <div>
          <input 
            v-model="emailInput" 
            type="email" 
            required
            placeholder="ornek@email.com" 
          />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
    
  </div>
</template>
