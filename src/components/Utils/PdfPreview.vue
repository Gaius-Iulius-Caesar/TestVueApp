<template>
  <div class="pdf-preview">
    <div class="pdf-wrap">
      <vue-pdf-embed
        :source="state.source"
        :style="scale"
        class="vue-pdf-embed"
        :page="state.pageNum"
      />
    </div>
    <div class="page-tool">
      <div class="page-tool-item" @click="lastPage">上一页</div>
      <div class="page-tool-item" @click="nextPage">下一页</div>
      <div class="page-tool-item">{{ state.pageNum }}/{{ state.numPages }}</div>
      <div class="page-tool-item" @click="pageZoomOut">放大</div>
      <div class="page-tool-item" @click="pageZoomIn">缩小</div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted, computed } from "vue"
import VuePdfEmbed from "vue-pdf-embed"
import { createLoadingTask } from "vue3-pdfjs/esm"

const emit = defineEmits(["rateRefresh"])
const props = defineProps({
  pdfUrl: {
    type: String,
    required: true
  },
  height: { type: String, default: "950px" }
})
const state = reactive({
  source: props.pdfUrl, // 预览pdf文件地址
  pageNum: 1, // 当前页面
  scale: 1, // 缩放比例
  numPages: 0 // 总页数
})
const scale = computed(() => `transform:scale(${state.scale})`)
function lastPage() {
  if (state.pageNum > 1) {
    state.pageNum -= 1
  }
}
function nextPage() {
  if (state.pageNum < state.numPages) {
    state.pageNum += 1
    emit("rateRefresh", state.pageNum / state.numPages)
  }
}
function pageZoomOut() {
  if (state.scale < 2) {
    state.scale += 0.1
  }
}
function pageZoomIn() {
  if (state.scale > 1) {
    state.scale -= 0.1
  }
}
onMounted(() => {
  const loadingTask = createLoadingTask(state.source)
  loadingTask.promise.then((pdf) => {
    state.numPages = pdf.numPages
  })
})
</script>
<script>
export default {
  name: "PdfPreview"
}
</script>

<style scoped>
.pdf-preview {
  position: relative;
}
.pdf-wrap {
  height: v-bind("props.height");
  overflow-y: auto;
}
.vue-pdf-embed {
  text-align: center;
  margin: 0 auto;
}

.page-tool {
  position: absolute;
  bottom: 35px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  background: rgb(66, 66, 66);
  color: white;
  border-radius: 19px;
  z-index: 100;
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
}
.page-tool-item {
  padding: 8px 15px 10px 8px;
  cursor: pointer;
}
</style>
