<template>
    <div class="footer-box">
        <div class="footer-wrapper">
            <div class="footer">
                <span class="copyright">Copyright © 2013 - 2019  喏喏imnuonuo.com 版权所有</span>
                <span class="secrets">隐私政策</span>
                <div class="wechat-box">
                    <img src="../assets/we-chat.png" alt="" class="we-chat">
                    <img src="../assets/we-chat-two.png" alt="" class="we-chat-hover">
                    <img src="../assets/wechat二维码.png" alt="" class="qrcode_pic">
                </div>
                <div class="weibo-box">
                    <img src="../assets/wei-bo.png" alt="" class="wei-bo">
                    <a href="#" class="wei-bo-link">
                        <img src="../assets/wei-bo-two.png" alt="" class="wei-bo-hover">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
div{
    display: block;
}
.footer-wrapper {
    width: 100%;
    font-size: 0;
    text-align: center;
    padding: 53px 0;
    background-color: #fff;
}
.footer-wrapper .footer .copyright {
    width: 465px;
    font-size: 18px;
    color: #a5a5a5;
}
.footer-wrapper .footer .secrets {
    visibility: hidden;
    font-size: 18px;
    color: #424242;
    margin: 0 30% 0 38px;
}
.footer-wrapper .footer .wechat-box {
    margin-left: 29px;
}
.footer-wrapper .footer .wechat-box, .footer-wrapper .footer .weibo-box {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 26px;
    vertical-align: bottom;
    cursor: pointer;
}
.footer-wrapper .footer .wechat-box .we-chat, .footer-wrapper .footer .wechat-box .wei-bo, .footer-wrapper .footer .wechat-box .wei-bo-link, .footer-wrapper .footer .weibo-box .we-chat, .footer-wrapper .footer .weibo-box .wei-bo, .footer-wrapper .footer .weibo-box .wei-bo-link {
    width: 32px;
    height: 26px;
}
.footer-wrapper .footer .wechat-box .we-chat-hover, .footer-wrapper .footer .wechat-box .wei-bo-link, .footer-wrapper .footer .weibo-box .we-chat-hover, .footer-wrapper .footer .weibo-box .wei-bo-link {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 32px;
    height: 26px;
}
.footer-wrapper .footer .wechat-box .qrcode_pic {
    display: none;
    position: absolute;
    left: -40px;
    top: -110px;
    width: 100px;
    height: 100px;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
}
a{
    text-decoration: none;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
}
.weibo-box{
    margin-left: 30px;
}
</style>
