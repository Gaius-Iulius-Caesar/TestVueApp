<template>
  <div class="writeBox">
    <TEditor ref="editor" />
  </div>
</template>

<script>
import TEditor from "@/components/Utils/TEditor.vue"

export default {
  name: "WritePost",
  components: { TEditor }
}
</script>

<style scoped>
.writeBox {
  width: 1000px;
  margin: 0 auto;
}
</style>
