<template>
  <div class="asideBox">
    <el-card :body-style="{ padding: '0px' }">
      <div class="title">
        <div style="margin: 0px 8px 0 15px"><i-ep-avatar></i-ep-avatar></div>
        <div>创作中心</div>
        <a href="" style="position: absolute; right: 10px">草稿箱</a>
      </div>
      <div class="buttonBox">
        <div class="btn">
          <el-button color="#409EFF" size="large" circle>
            <div style="padding-top: 23px">
              <i-ep-document></i-ep-document>
              <div style="text-align: center; margin-top: 15px">回复帖子</div>
            </div>
          </el-button>
        </div>
        <div class="btn">
          <el-button color="#E6A23C" size="large" circle>
            <div style="padding-top: 23px">
              <i-ep-edit></i-ep-edit>
              <div style="text-align: center; margin-top: 15px">写帖子</div>
            </div>
          </el-button>
        </div>
        <div class="btn">
          <el-button color="#F56C6C" size="large" circle>
            <div style="padding-top: 23px">
              <i-ep-video-camera></i-ep-video-camera>
              <div style="text-align: center; margin-top: 15px">发视频</div>
            </div>
          </el-button>
        </div>
        <div class="btn">
          <el-button color="#67C23A" size="large" circle>
            <div style="padding-top: 23px">
              <i-ep-magic-stick></i-ep-magic-stick>
              <div style="text-align: center; margin-top: 15px">写想法</div>
            </div>
          </el-button>
        </div>
      </div>
      <div class="textBox">
        <el-carousel trigger="click" height="150px" arrow="hover">
          <el-carousel-item style="background-color: #99a9bf">
            <h3 text="2xl">开启你的论坛之旅</h3>
          </el-carousel-item>
          <el-carousel-item style="background-color: #617a96">
            <h3 text="2xl">在这里你可以尽情享受讨论的乐趣</h3>
          </el-carousel-item>
          <el-carousel-item style="background-color: #6b9acf">
            <h3 text="2xl">赶快发布帖子吧</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }" style="margin-top: 10px">
      <div class="listBox">
        <ul>
          <li>
            <i-ep-star></i-ep-star>
            <a>我的收藏</a>
          </li>
          <li>
            <i-ep-stopwatch></i-ep-stopwatch>
            <a>我关注的帖子</a>
          </li>
          <li>
            <i-ep-user></i-ep-user>
            <a>我的邀请</a>
          </li>
          <li>
            <i-ep-wallet></i-ep-wallet>
            <a>我的余额</a>
          </li>
          <li>
            <i-ep-credit-card></i-ep-credit-card>
            <a>我的礼券</a>
          </li>
          <li>
            <i-ep-message></i-ep-message>
            <a>站务中心</a>
          </li>
          <li>
            <i-ep-headset></i-ep-headset>
            <a>帮助与客服</a>
          </li>
          <li>
            <i-ep-warning></i-ep-warning>
            <a>版权服务中心</a>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>
<script></script>
<style scoped>
.asideBox {
  margin-top: 11px;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
}

.title {
  display: flex;
  margin: 15px 0;
  color: #444;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  position: relative;
}
.buttonBox {
  display: flex;
  margin-bottom: 15px;
  justify-content: space-around;
}
.buttonBox .btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.buttonBox div {
  font-size: 14px;
}
.textBox {
  margin: 20px 0;
  padding: 0 10px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.listBox {
  margin: 10px 0 0 10px;
  color: #444;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
}
.listBox li {
  display: flex;
  margin-bottom: 15px;
  align-items: center;
}
.listBox li a {
  margin-left: 10px;
}
.listBox li a:hover {
  cursor: pointer;
}
</style>
