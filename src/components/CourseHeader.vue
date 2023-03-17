<template>
  <div id="header">
    <div id="header-content">
      <div id="header-content-left">
        <img src="../../public/logo.jpg" alt="" />
        <span>线上教学平台</span>
      </div>
      <div id="header-content-right"></div>
    </div>
  </div>
</template>

<script setup></script>
<script>
export default {
  name: "CourseHeader"
}
</script>
<style scoped>
#header {
  height: 100%;
  width: 100%;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
}
#header-content {
  display: flex;
  justify-content: space-between;
  width: 61.8%;
  height: 100%;
  margin: 0 auto;
}
#header-content-left {
  display: flex;
  align-items: center;
}
#header-content-left span {
  font-size: 20px;
}
img {
  height: 100%;
  width: 70px;
}
</style>
