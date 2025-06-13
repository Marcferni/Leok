<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Experiencias Curadas</h2>
    <iframe
      src="http://127.0.0.1:8000/experiences/"
      class="w-full h-[600px] border-0 rounded-lg shadow"
      title="Lista de Experiencias"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Experiences",
};
</script>

<style scoped>
/* si quieres ajustar la altura en móvil, por ejemplo */
@media (max-width: 640px) {
  iframe {
    height: 400px;
  }
}
</style>
