// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, { createApp } from 'vue';
import App from './App'
import router from './router'
import store from './store'
// import fastClick from 'fastclick'
// 解决移动端300毫秒点击延迟问题，紧接着我安装了stylus@0.54.5和stylus-loader@3.0.1
// 可以直接在html加上touch-action manipulation解决
import VueAwesomeSwiper from 'vue-awesome-swiper'// 轮播图的引入
import 'styles/reset.css'// 解决移动端布局问题,.02rem相当于1px
import 'styles/border.css'// 解决移动端1像素边框问题
import 'styles/iconfont.css'// 矢量图标引入
import 'swiper/swiper-bundle.css'// 轮播图的css引入
import 'babel-polyfill' // 兼容老安卓手机，添加ES6新特性

// fastClick.attach(document.body)
// 轮播图的挂载使用

/* eslint-disable no-new */
createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
