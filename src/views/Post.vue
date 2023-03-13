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
    <div class="contentBox" style="white-space: pre-wrap">
      {{ postDetail.content }}
    </div>
    <div class="comment">
      <div class="commentInput">
        <el-input
          v-model="discuss"
          placeholder="在这里输入你的评论吧"
          type="textarea"
          autosize
        >
        </el-input>
      </div>
      <div style="margin: 0 50px 20px 0">
        <el-button type="primary" @click="commit()">发布 </el-button>
      </div>
    </div>
    <div class="review">
      <div v-for="item in comments" :key="item.id" class="reviewItem">
        <div class="fatherReview">
          <div class="reviewItemHead">
            <el-avatar :size="40" :src="getUrl(item.username)" />
          </div>
          <div class="reviewItemBody">
            <div>{{ item.username }}</div>
            <div>{{ item.content }}</div>
            <div class="reviewItemFooter">
              <el-button link @click="show(item.id)">
                <div>
                  <i-ep-chat-dot-round></i-ep-chat-dot-round>
                  回复
                </div>
              </el-button>
              <div style="margin-left: 10px">
                {{ item.time }}
              </div>
            </div>
            <div v-if="isReplay === item.id">
              <el-input
                v-model="replayDiscuss"
                placeholder="在这里输入你的回复吧"
                type="textarea"
                autosize
              >
              </el-input>
              <el-button type="primary" @click="commitChildren(item.id)"
                >发布
              </el-button>
            </div>
          </div>
        </div>
        <div v-for="sonItem in item.children" :key="sonItem.id">
          <div class="sonReview">
            <div class="reviewItemHead">
              <el-avatar :size="32" :src="getUrl(sonItem.username)" />
            </div>
            <div class="reviewItemBody">
              <div v-if="sonItem.replay !== ''">
                {{ sonItem.username }}
                <i-ep-caret-right />
                {{ sonItem.replay }}
              </div>
              <div v-else>
                {{ sonItem.username }}
              </div>
              <div>{{ sonItem.content }}</div>
              <div class="reviewItemFooter">
                <el-button link @click="showSub(sonItem.id)">
                  <div>
                    <i-ep-chat-dot-round></i-ep-chat-dot-round>
                    回复
                  </div>
                </el-button>
                <div style="margin-left: 10px">
                  {{ sonItem.time }}
                </div>
              </div>
              <div v-if="isSubReplay === sonItem.id">
                <el-input
                  v-model="replayDiscuss"
                  placeholder="在这里输入你的评论吧"
                  type="textarea"
                  autosize
                >
                </el-input>
                <el-button
                  type="primary"
                  @click="commitChildren(item.id, sonItem.username)"
                  >发布
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router"
import { toRaw, ref, inject } from "vue"
import dayjs from "dayjs"
import usePostsStore from "../store/post"
import useUsersStore from "../store/user"

export default {
  name: "BbsPost",
  setup() {
    const route = useRoute()
    const router = useRouter()
    const postStore = usePostsStore()
    const userStore = useUsersStore()
    const reload = inject("reload")
    // postStore.$reset()
    function goBack() {
      router.back()
    }
    function getUrl(username) {
      return userStore.getUrl(username)
    }

    function getCookie(objName) {
      // 获取指定名称的cookie的值
      const arrStr = document.cookie.split("; ")
      for (let i = 0; i < arrStr.length; i += 1) {
        const temp = arrStr[i].split("=")
        if (temp[0] === objName) {
          return decodeURI(temp[1])
        }
      }
      return ""
    }

    const { id } = route.query // 当前帖子的id
    const postDetail = toRaw(postStore.getDetail(id))
    const discuss = ref()
    const replayDiscuss = ref()
    const isReplay = ref()
    const isSubReplay = ref()
    const comments = toRaw(postStore.getComments(id))
    const username = getCookie("username")

    function commit() {
      const discussObj = {
        belong: Number(id),
        content: discuss.value,
        children: [],
        username,
        time: dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      }
      postStore.addComment(discussObj)
      reload()
    }
    function commitChildren(replayId, replayName = "") {
      const discussObj = {
        replay: replayName,
        content: replayDiscuss.value,
        username,
        time: dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      }
      postStore.addChildren(replayId, discussObj)
      reload()
    }
    function show(i) {
      if (isReplay.value === i) isReplay.value = -1
      else isReplay.value = i
    }
    function showSub(i) {
      if (isSubReplay.value === i) isSubReplay.value = -1
      else isSubReplay.value = i
    }
    return {
      route,
      id,
      postDetail,
      discuss,
      replayDiscuss,
      comments,
      reload,
      isReplay,
      isSubReplay,
      goBack,
      getUrl,
      commit,
      commitChildren,
      show,
      showSub
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
.comment {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 1000px;
  margin: 40px auto;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
  /*background: rgba(248, 248, 248, 0.7);*/
}
.comment .commentInput {
  width: 900px;
  margin: 20px auto;
}
.review {
  width: 1000px;
  margin: 0 auto 20px auto;
  overflow: hidden;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
}

.reviewItem {
  margin-top: 30px;
}
.fatherReview {
  display: flex;
  margin-left: 20px;
}
.sonReview {
  display: flex;
  margin: 20px 0 0 60px;
}
.reviewItem .reviewItemHead {
  margin-right: 10px;
}
.reviewItem .reviewItemBody {
  display: flex;
  flex-direction: column;
}
.reviewItem .reviewItemFooter {
  display: flex;
  align-items: center;
  color: rgb(153, 153, 153);
  font-size: 14px;
}
</style>
