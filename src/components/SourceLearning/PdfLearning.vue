<template>
  <VuePdf :pdf-url="pdfUrl"></VuePdf>
</template>
<script setup>
import VuePdf from "@/components/Utils/PdfPreview.vue"
import pdfUrl from "@/assets/files/example.pdf"
</script>
<script>
export default {
  name: "PdfLearning"
}
</script>

<style scoped></style>
