<template>
  <div id="app">
    <!-- <router-link :to="{name:'Header'}"></router-link>
    <router-view></router-view>
    <banner></banner>
    <contenta></contenta>
    <footera></footera> -->
    <!-- <child></child>
    <ul>
      <li><router-link :to="{name:'Home'}">首页</router-link></li>
      <li v-navDowm>
        <router-link :to="{name:'About'}">关于我们</router-link>
        <ul>
          <li>
            <router-link to="/about/componey">公司介绍</router-link>
          </li>
          <li>
            <router-link to="/about/product">产品页面</router-link>
          </li>
        </ul>
      </li>
    </ul>
    <router-view></router-view>
    <router-view name="banner"></router-view>
    <router-view name="content"></router-view>
    <router-view name="footer"></router-view> -->
    <!-- <child></child> -->
    <!-- <router-view name="header"></router-view> -->
    <headera></headera>
    <banner></banner>
    <contenta></contenta>
    <footere></footere>
    <footera></footera>
  </div>
</template>

<script>
// import $ from 'jquery'
import Header from './components/Header'
import Banner from './components/Banner'
import Content from './components/Content'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
export default {
  name: 'App',
  data () {
    return {
      show: false
    }
  },
  components: {
    'headera': Header,
    'banner': Banner,
    'contenta': Content,
    'footera': Footer,
    'footere': Footer2
  }
  // data () {
  //   return {
  //     show: false
  //   }
  // },
  // directives: {
  //   'navDown': {
  //     inserted: function (el) {
  //       el.addEventListener('mouseenter', function () {
  //         $(el).children('ul').slideDown()
  //       })
  //       el.addEventListener('mouseleave', function () {
  //         $(el).children('ul').slideUp()
  //       })
  //     }
  //   }
  // },
  // components: {
  // 'headera': Header
  // 'banner': Banner,
  // 'contenta': Content,
  // 'Footera': Footer
  // }
}
</script>

<style>
/* #app{
  background-color: #f00;
  width: 100px;
  height: 100px;
} */
</style>
