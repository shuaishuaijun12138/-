<template>
    <div>
        <img src= "static/1.png"/>  
         <a href="#">关于我们</a>
         <a href="#">互联网+</a>
          <a href="#">团队赛事</a>
          <a href="#">赛事</a>
          <a href="#">路线</a>
         <a href="#">首页</a>        
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    div{
        height: 80px;
        background-color: #000;
    }
    div img{
        width: 80px;
        height: 30px;
        padding: 25px 50px 25px 150px;
    }
    div a{
        text-decoration: none;
        color:#fff;
        font-size: 22px;
        padding: 25px 50px;
       float: right;
    }
</style>

