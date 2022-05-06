<template>
  <div style="display:flex;background-color:#ffffff;width:95vw;height:2.8em;">
    <!-- 图标 -->
    <svg
      class="icon svg-icon"
      style="top:0;bottom:0;margin:auto;margin-left:2.5vw;margin-right:0vw;"
      aria-hidden="true"
    >
      <use :xlink:href="info.iconName" />
    </svg>

    <!-- 任务内容 TODO:字体大小自适应；字体样式-->
    <p style="top:0;bottom:0;margin:auto;margin-left:2.5vw;font-size:15px">{{info.title}}</p>
  </div>

  <!-- <div class="layout" style="width:95vw;">
      <svg class="icon svg-icon" style="margin-left:2.5vw;margin-top:0.45em;" aria-hidden="true">
        <use :xlink:href="iconName" />
      </svg>
      <p slot="extra">{{title}}</p>
      
  </div>-->
</template>

<script>
export default {
  methods: {

  },
  props: ['info'],
  data: function () {
    return {
      //   iconName: "#icon-yishu",
      // title: "你好"
    }
  },
};

</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
}
.layout-assistant {
  width: 300px;
  margin: 0 auto;
  height: inherit;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>