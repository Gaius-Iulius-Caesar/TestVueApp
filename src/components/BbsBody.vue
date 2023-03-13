<template>
  <div class="listBox">
    <ul>
      <li v-for="i in postList" :key="i.id">
        <el-card :body-style="{ padding: '0px' }">
          <div class="item">
            <div class="imgBox">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
            </div>
            <div style="padding: 14px" class="itemBody">
              <h2>
                <router-link
                  class="title"
                  :to="{ path: '/post', query: { id: i.id } }"
                  >{{ theme }}</router-link
                >
              </h2>
              <div class="summry">{{ i.summry }}</div>
              <div class="bottom">
                <el-button text class="button">{{ i.author }}</el-button>
              </div>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
  <el-pagination layout="prev, pager, next" :total="1000" />
</template>

<script>
import { computed } from "vue"
import { useRoute } from "vue-router"
import usePostsStore from "../store/post"

export default {
  name: "BbsBody",
  setup() {
    const route = useRoute()
    const store = usePostsStore()
    const { postList } = store
    const theme = computed(() => {
      return route.query.title
    })
    return { postList, theme }
  }
}
</script>

<style scoped>
li {
  margin: 10px 0;
}
.listBox {
  width: 694px;
  margin: 0 auto;
}
.item {
  display: flex;
  flex-direction: row;
  padding: 16px 16px 16px 0;
  white-space: nowrap;
}
.item .imgBox {
  /* flex-shrink: 0; */
  width: 190px;
  height: 190px;
}
.item .image {
  width: 100%;
}
.itemBody {
  flex: 1 1 auto;
}
.itemBody h2 {
  margin: 0 0 10px 0;
}
.itemBody .title {
}
.itemBody .summry {
  color: #888;
  font-size: 14px;
  text-indent: 1em;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}
</style>
