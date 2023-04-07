<template>
  <div>
    <VuePdf
      :pdf-url="file.url"
      height="970px"
      style="width: 1000px; margin: 10px auto"
      @rate-refresh="rateUpdate"
    ></VuePdf>
  </div>
</template>
<script setup>
import VuePdf from "@/components/Utils/PdfPreview.vue"
import useCourse from "@/store/course"

const props = defineProps({ query: { type: Object, default: null } })
const course = useCourse()

const file = course.getFile(
  props.query.courseId,
  props.query.resourceId,
  props.query.fileId
)

const rateUpdate = (newRate) => {
  if (newRate > file.rate) {
    file.rate = newRate
  }
}
</script>
<script>
export default {
  name: "PdfLearning"
}
</script>

<style scoped></style>
