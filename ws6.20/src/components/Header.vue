<template>
    <div id="header">
        <div class="header-title">
            <img src="../assets/logo.png" alt="" class="logo">
            <span class="name">诺诺科技</span>
        </div>
        <ul class="header-nav">
            <li class="nav-item active"><router-link :to="{name:'Home'}">首页</router-link></li>
            <li class="nav-item"><router-link :to="{name:'/Product'}">核心业务</router-link></li>
            <li class="nav-item"><router-link :to="{name:'/Plan'}">解决方案</router-link></li>
            <li class="nav-item"><router-link :to="{name:'/About'}">关于我们</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
}
#header{
    background-color: #000000;
    width: 1519px;
    height: 64px;
    background: rgba(0,0,0,0.4);
}
.header-title{
    width: 37.8%;
    height: 64px;
    overflow: hidden;
    float: left;
}
.header-title .logo{
    float: left;
    width: 50px;
    height: 50px;
    padding: 7px 0;
    margin-left: 32.4%;
}
.header-title .name{
    height: 64px;
    line-height: 64px;
    font-size: 24px;
    margin-left: 14px;
    color: #fff;
}
#header .header-nav{
    display: block;
    float:right;
    width: 45%;
    margin-top: -10px;
}
ul{
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.header-nav .nav-item:hover{
    background-color: rgba(0,0,0,.8);
}
.header-nav .nav-item{
    position: relative;
    float: left;
    width: 25%;
    height: 64px;
    line-height: 64px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    list-style: none;
    margin-top: 10px;
}
li{
    display: list-item;
}
a{
    text-decoration: none;
}
</style>
