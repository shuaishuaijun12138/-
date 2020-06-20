<template>
    <!-- <div class="fields">
        <h3 class="title">涉及领域</h3> 
        <ul class="fields-case">
            <li class="case-item">
                <img src="../assets/net_img.png" alt="bigPic" class="item-bigPic" style="animation: 0.5s linear 0s 1 normal none running bounce-bottom; top: 0px;"> 
                <img src="../assets/net_pic.png" alt="pic" class="item-pic"> 
                <div class="item-desc">
                    <span class="item-name">移动互联网</span> 
                    <img src="../assets/图标1.png" alt="logo" class="item-logo">
                </div>
            </li>
            <li class="case-item">
                <img src="../assets/lot_img.png" alt="bigPic" class="item-bigPic" style="animation: 0.5s linear 0s 1 normal none running back-top; top: -562px;"> 
                <img src="../assets/lot_pic.png" alt="pic" class="item-pic"> 
                <div class="item-desc">
                    <span class="item-name">物联网</span> 
                    <img src="../assets/图标2.png" alt="logo" class="item-logo">
                </div>
            </li>
            <li class="case-item">
                <img src="../assets/bigdata_img.png" alt="bigPic" class="item-bigPic" style="animation: 0.5s linear 0s 1 normal none running back-top; top: -562px;"> 
                <img src="../assets/bigdata_pic.png" alt="pic" class="item-pic"> 
                <div class="item-desc">
                    <span class="item-name">大数据</span> 
                    <img src="../assets/图标3.png" alt="logo" class="item-logo">
                </div>
            </li>
            <li class="case-item">
                <img src="../assets/ai_img.png" alt="bigPic" class="item-bigPic" style="animation: 0.5s linear 0s 1 normal none running back-bottom; top: 287px;"> 
                <img src="../assets/ai_pic.png" alt="pic" class="item-pic"> 
                <div class="item-desc">
                    <span class="item-name">人工智能</span> 
                    <img src="../assets/图标4.png" alt="logo" class="item-logo">
                </div>
            </li>
            <li class="case-item">
                <img src="../assets/vr_img.png" alt="bigPic" class="item-bigPic" style="animation: 0.5s linear 0s 1 normal none running back-bottom; top: 287px;"> 
                <img src="../assets/vr_pic.png" alt="pic" class="item-pic"> 
                <div class="item-desc">
                    <span class="item-name">虚拟现实</span> 
                    <img src="../assets/图标5.png" alt="logo" class="item-logo">
                </div>
            </li>
            <li class="case-item">
                <img src="../assets/smartcity_img.png" alt="bigPic" class="item-bigPic" style="animation: 0.5s linear 0s 1 normal none running back-bottom; top: 287px;"> 
                <img src="../assets/smartcity_pic.png" alt="pic" class="item-pic"> 
                <div class="item-desc">
                    <span class="item-name">智慧城市</span> 
                    <img src="../assets/图标6.png" alt="logo" class="item-logo">
                </div>
            </li>
        </ul>
    </div> -->


    <div class="company-wrapper">
        <div class="company_logo">
            <img src="../assets/大图标.png" alt="nuonuologo_102px" class="logo">
        </div> 
        <div class="knowMore">
            <div class="introduce">
                <h3 class="company_name">深圳市喏喏网络技术有限公司</h3> 
                <p class="company_desc">深圳市喏喏网络科技有限公司成立于2013年，深圳市双软企业，2017年荣获“国家高新企业“称号。致力于通过深度学习与感知融合技术，让人的“身份”与“行为”数据可以被各类物联网设备实时获取并融入行业，并为行业提供基于AI的人脸识别，证件识别等技术，基于IoT的物联网相关技术以及智慧城市社会综治数据服务。</p> 
                <div class="more-box">
                    <span class="more-white" style="animation: 0.2s linear 0s 1 normal none running moreWhite-out;">了解更多</span> 
                    <span class="more-black" style="animation: 0.2s linear 0s 1 normal none running moreBlack-out; left: -120px;">了解更多</span>
                </div>
            </div>
        </div>
    </div>


    <!-- <div class="map-wrapper">
        <div class="map">
            <a href="#" target="_blank" class="map-position"></a>
        </div>
    </div> -->
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.wrapper .company-wrapper {
    overflow: hidden;
    text-align: center;
    background-color: #fff;
}
.wrapper .company-wrapper .company_logo {
    margin: 0 auto;
    margin: 0 auto -66px;
    padding: 118px 0 0;
}
.wrapper .company-wrapper .company_logo .logo {
    width: 102px;
    height: 102px;
}
.company_logo .logo{
    margin-left:49%;
}
.wrapper .company-wrapper {
    overflow: hidden;
    text-align: center;
    background-color: #fff;
}
.knowMore {
    padding-top: 115px;
}
.knowMore .introduce {
    overflow: hidden;
    text-align: center;
}
.knowMore .introduce .company_name {
    font-size: 36px;
    color: #424242;
    font-weight: 400;
}
.knowMore .introduce .company_desc {
    width: 808px;
    font-size: 16px;
    color: #424242;
    line-height: 30px;
    margin: 24px auto 0;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.knowMore .introduce .more-box {
    overflow: hidden;
    position: relative;
    width: 120px;
    margin: 84px auto 118px;
    cursor: pointer;
}
.knowMore .introduce .more-box .more-black, .knowMore .introduce .more-box .more-white {
    display: block;
    font-size: 18px;
    color: #424242;
    width: 118px;
    height: 41px;
    line-height: 41px;
    border: 1px solid #424242;
}
.knowMore .introduce .more-box .more-black {
    position: absolute;
    left: -120px;
    top: 0;
    z-index: 50;
    color: #fff;
    background-color: #484d52;
}
div {
    display: block;
}
</style>
