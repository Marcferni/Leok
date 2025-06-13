<template>
  <div>
    <!-- Hero o cabecera de la landing -->
    <section class="bg-blue-900 text-white py-20 text-center">
      <h1 class="text-4xl font-bold mb-2">Expositor de Experiencias</h1>
      <p class="max-w-xl mx-auto">Donde convergen conocimiento y entretenimiento.</p>
    </section>

    <!-- Aquí montamos el iframe -->
    <section class="py-12 bg-gray-100">
      <Experiences />
    </section>
  </div>
</template>

<script>
import Experiences from "./Experiences.vue";

export default {
  name: "App",
  components: { Experiences },
};
</script>


<style scoped>
/* Puedes agregar estilos adicionales aquí */
</style>
