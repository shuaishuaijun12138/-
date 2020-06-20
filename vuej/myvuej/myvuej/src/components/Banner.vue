<template>
    <div> 
        <h2><b>陶治赛事流程</b></h2>
        <p>Rjdnjdv </p>
        <div  id="gun">
            <marquee>
                <img src="static/flow3.jpg"/>
                <img src="static/flow4.jpg"/>
                <img src="static/flow5.png"/>
                <img src="static/flow3.jpg"/>
                <img src="static/flow4.jpg"/>
                <img src="static/flow5.png"/>
            </marquee>
            <div id="redd">
                我要举办，获取PPI
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped>
    div{
        height: 600px;
        background-color: #fff;
        margin-left: 150px;
    }
    div #gun{
        width: 1200px;
        height: 580px;
    }
    div #gun img{
        width: 293px;
        height: 263px;
    }
    div #redd{
        width: 320px;
        height: 60px;
        background-color: rgb(245, 100, 100);
        text-align: center;
        line-height: 60px;
        margin-top: 70px;
        margin-left: 250px;
    }
     div #redd:hover{
         background-color: #f00;
     }
</style>

