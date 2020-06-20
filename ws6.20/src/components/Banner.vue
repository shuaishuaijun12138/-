<template>
    <div class="banner">
        <div class="swiper-container swiper1" v-swiper>
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="../assets/banner1.png" alt=""></div>
                <div class="swiper-slide"><img src="../assets/banner2.png" alt=""></div>
                <div class="swiper-slide"><img src="../assets/banner3.png" alt=""></div>
                <div class="swiper-slide"><img src="../assets/banner4.png" alt=""></div>
                <div class="swiper-slide"><img src="../assets/banner5.png" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'Banner',
  data () {
    return {
      show: false
    }
  },
  directives: {
    'swiper': {
      inserted: function (el) {
        var mySwiper = new Swiper('.swiper1', {
          effect: 'slide',
          mousewheel: true,
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 2000
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigaion: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        })
      }
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.banner img{
  width: 1519px;
}
.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  color: #fff;
}
.banner .swiper-container{
  --swiper-theme-color:#f00;
  --swiper-pagination-color:orange;
  --swiper-navigation-color:#fff;
  --swiper-navigation-size:80px;
}
.swiper-container{
  width: 100%;
}
</style>
