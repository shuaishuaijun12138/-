<template>
    <div class="service-wrapper">
        <div class="service">
            <h5 class="service-title">获得我们的服务</h5>
            <p class="tips">您可以选择上述服务进行咨询，或者致电我们以获得更加专业的服务</p>
            <div class="way">
                <div class="address">
                    <h3 class="title">地址</h3>
                    <div class="cut-line"></div>
                    <p class="desc">深圳市南山区北京航空航天大厦2号楼3A08室</p>
                    <p class="desc">Zip：518000</p>
                </div>
                <div class="contact">
                    <h3 class="title">联系方式</h3>
                    <div class="cut-line"></div>
                    <p class="desc">admin@nuonuo.com</p>
                    <p class="desc">0755-23188265</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer2'
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.service-wrapper {
    overflow: hidden;
    text-align: center;
    padding: 120px 0 152px;
    background-color: #eef1f5;
}
.service-wrapper .service {
    overflow: hidden;
}
.service-wrapper .service .service-title {
    font-size: 36px;
    color: #424242;
    font-weight: 400;
}
h5 {
    display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.service-wrapper .service .tips {
    font-size: 18px;
    color: #a5a5a5;
    margin: 25px 0 138px;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.service-wrapper .service .way {
    overflow: hidden;
    display: inline-block;
    text-align: center;
}
.service-wrapper .service .way .address, .service-wrapper .service .way .contact {
    float: left;
    overflow: hidden;
    display: inline-block;
    width: 300px;
    text-align: left;
}
.service-wrapper .service .way .contact {
    width: 180px;
    margin-left: 300px;
}
.service-wrapper .service .way .address .title, .service-wrapper .service .way .contact .title {
    font-size: 36px;
    color: #424242;
    font-weight: 400;
}
h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.service-wrapper .service .way .address .cut-line, .service-wrapper .service .way .contact .cut-line {
    display: inline-block;
    width: 80px;
    height: 2px;
    margin: 26px 0 29px;
    background-color: #d8d8d8;
}
.service-wrapper .service .way .address .desc, .service-wrapper .service .way .contact .desc {
    font-size: 18px;
    color: #424242;
    line-height: 30px;
}

</style>