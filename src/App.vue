<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from './components/ProductCard.vue';
import { products, features } from './data';

const isContactModalOpen = ref(false);
const customerName = ref('');
const customerPhone = ref('');
const customerMessage = ref('');

const toggleModal = () => {
  isContactModalOpen.value = !isContactModalOpen.value;
};

const submitOrder = () => {
  alert(`Talebiniz alındı ${customerName.value}! Size en kısa sürede dönüş yapacağız.`);
  customerName.value = '';
  customerPhone.value = '';
  customerMessage.value = '';
  toggleModal();
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-blue-200">
    <!-- Navbar -->
    <nav class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex-shrink-0 flex items-center gap-3">
            <!-- Simple Logo Icon using SVG -->
            <div class="bg-blue-600 p-2 rounded-lg">
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <span class="font-bold text-2xl tracking-tight text-gray-900">Baskı<span class="text-blue-600">3D</span></span>
          </div>
          <div>
            <button @click="toggleModal" class="bg-gray-900 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-md hover:shadow-lg">
              Fiyat Al
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center relative z-10">
        <div class="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm">
          🚀 Hızlı ve Kaliteli Üretim
        </div>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
          Hayalinizdeki Ürünü <br class="hidden sm:block" /> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Gerçeğe Dönüştürelim</span>
        </h1>
        <p class="mt-4 text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
          Özel tasarımlar, prototipler, figürler ve yedek parçalar... 3D yazıcı teknolojisiyle fikirlerinizi hızlı ve ekonomik bir şekilde üretiyoruz.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button @click="toggleModal" class="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Hemen Sipariş Ver
          </button>
          <a href="#urunler" class="w-full sm:w-auto bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors border border-gray-200 text-center">
            Neler Yapıyoruz?
          </a>
        </div>
      </div>
      
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 opacity-70 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-indigo-50 opacity-70 blur-3xl"></div>
    </header>

    <!-- Features Section -->
    <section class="bg-gray-900 py-20 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-sm font-bold uppercase tracking-widest text-blue-400 mb-2">Neden Bizi Seçmelisiniz?</h2>
          <p class="text-3xl font-bold">Size Özel Çözümler Üretiyoruz</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-colors">
            <div class="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-400">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Hızlı Üretim</h3>
            <p class="text-gray-400 leading-relaxed">Siparişlerinizi en kısa sürede basıp kargoya teslim ediyoruz.</p>
          </div>
          <div class="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-colors">
            <div class="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-400">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Yüksek Kalite</h3>
            <p class="text-gray-400 leading-relaxed">Endüstriyel seviye yazıcılarla pürüzsüz ve dayanıklı sonuçlar.</p>
          </div>
          <div class="bg-gray-800/50 p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition-colors">
            <div class="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-400">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Uygun Fiyat</h3>
            <p class="text-gray-400 leading-relaxed">Her bütçeye uygun, ekonomik fiyatlandırma politikası.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products / Services Section -->
    <main id="urunler" class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Neler Basabiliriz?</h2>
          <p class="text-lg text-gray-500 max-w-2xl mx-auto">İhtiyacınıza uygun farklı malzeme ve üretim teknikleriyle hizmetinizdeyiz.</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard 
            v-for="product in products" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </div>
    </main>

    <!-- Call to Action Footer -->
    <footer class="bg-white border-t border-gray-200 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left flex items-center gap-2">
          <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
          <span class="font-bold text-xl tracking-tight text-gray-900">Baskı<span class="text-blue-600">3D</span></span>
        </div>
        <div class="text-sm text-gray-500 font-medium">
          &copy; 2026 Baskı3D. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>

    <!-- Order Modal -->
    <div v-if="isContactModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" @click="toggleModal"></div>
      
      <!-- Modal Content -->
      <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 transform transition-all border border-gray-100">
        <button @click="toggleModal" class="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors bg-gray-100 rounded-full p-2">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Fiyat Teklifi Al</h3>
        <p class="text-gray-500 text-sm mb-8">Ne bastırmak istiyorsunuz? Detayları bizimle paylaşın, hemen dönelim.</p>
        
        <form @submit.prevent="submitOrder" class="space-y-5">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1.5">Adınız Soyadınız</label>
            <input v-model="customerName" type="text" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all" placeholder="Örn: Ahmet Yılmaz">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1.5">İletişim Bilgisi</label>
            <input v-model="customerPhone" type="text" required class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all" placeholder="Telefon veya E-posta">
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1.5">Proje Detayları</label>
            <textarea v-model="customerMessage" required rows="4" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all resize-none" placeholder="Hangi parçayı bastırmak istiyorsunuz? Boyut veya STL dosyanız var mı?"></textarea>
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all mt-4 transform hover:-translate-y-0.5">
            Talebi Gönder
          </button>
        </form>
      </div>
    </div>
    
  </div>
</template>
