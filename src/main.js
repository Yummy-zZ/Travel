// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'// 解决移动端300毫秒点击延迟问题，紧接着我安装了stylus@0.54.5和stylus-loader@3.0.1
import 'styles/reset.css'// 解决移动端布局问题
import 'styles/border.css'// 解决移动端1像素边框问题
import 'styles/iconfont.css'// 矢量图标引入

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
