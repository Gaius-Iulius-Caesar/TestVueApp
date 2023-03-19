<template>
  <div style="font-size: 20px">
    <div class="postHead">
      <el-page-header :icon="null" @back="goBack()">
        <template #content>
          <div style="display: flex; align-items: center">
            <el-avatar :size="32" :src="getUrl(postDetail.author)" />
            <span>
              {{ postDetail.author }}
            </span>
          </div>
        </template>
        <template #extra>
          <div>
            <el-button type="primary" class="ml-2">关注</el-button>
          </div>
        </template>
      </el-page-header>
      <h2>
        {{ postDetail.title }}
      </h2>
    </div>
    <div
      v-dompurify-html="postDetail.content"
      class="contentBox"
      style="white-space: pre-wrap"
    ></div>
    <BbsComment></BbsComment>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router"
import { toRaw } from "vue"

import BbsComment from "@/components/BbsComment.vue"
import usePostsStore from "../store/post"
import useUsersStore from "../store/user"

export default {
  name: "BbsPost",
  components: { BbsComment },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const postStore = usePostsStore()
    const userStore = useUsersStore()
    // postStore.$reset()
    function goBack() {
      router.back()
    }
    function getUrl(username) {
      return userStore.getUrl(username)
    }

    const { id } = route.query // 当前帖子的id
    const postDetail = toRaw(postStore.getDetail(id))

    return {
      route,
      postDetail,
      goBack,
      getUrl
    }
  }
}
</script>

<style scoped>
.postHead {
  width: 1000px;
  margin: 20px auto;
}
.contentBox {
  width: 1000px;
  margin: 0 auto;
}
</style>
