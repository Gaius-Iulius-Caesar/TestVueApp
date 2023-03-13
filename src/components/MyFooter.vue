<template>
  <div class="footer">
    <span> 线上教学管理系统 | Powered by USTC | 人工客服:1234567890 </span>
    <span>
      Copyright © 1949-2999 USTC All Rights Reserved. | 皖ICP备666666号-6
    </span>
  </div>
</template>

<script>
export default {
  name: "MyFooter"
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  color: grey;
  font-size: 20px;
  background-color: white;
}
</style>
