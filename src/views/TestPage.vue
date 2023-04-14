<template><VuePdf :pdf-url="pdfUrl"></VuePdf> <VueVideo></VueVideo></template>
<script setup>
import VuePdf from "@/components/Utils/PdfPreview.vue"
import pdfUrl from "@/assets/files/example.pdf"
import VueVideo from "@/components/Utils/VideoPlayer.vue"
</script>
<script>
export default {
  name: "TestPage"
}
</script>

<style scoped></style>
