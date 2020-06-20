<template>
  <div id="app">
    <headera></headera>
      <nava></nava>
      <banner></banner>
      <contenta></contenta>
      <footera></footera>
     </div>
</template>

<script>
import Header from './components/Header'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Content from './components/Content'
import Footer from './components/Footer' 
export default {
  name: 'App',
  components: {
    'headera': Header,
    'nava': Nav,
    'banner': Banner,
    'contenta': Content,
    'footera': Footer
  }
}
</script>

<style>
/* #app{
  color: #f00;
} */
</style>
