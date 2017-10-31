/*
 * @Author: Administrator
 * @Date:   2017-09-13 10:42:45
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-09-13 11:41:38
 */
$(document).ready(function (){
    loadHeader();
    loadFooter();
    loadBannerid();//首页banner
    loadMjkdLeftMenu();//个人用户
    loadCmjkdLeftMenu();//企业用户
    helpCenterAside();//帮助中心侧边栏
    jkdPopGloble();//全局弹窗
    BackTop();//返回顶部
    //自动投标
    $(".bidop-btn").click(function(){
        $(this).css("background-image","url(../images/bid-open.png)");
        $(".bidcl-btn").css("background-image","url(../images/op-close.png)");
    });
    $(".bidcl-btn").click(function(){
        $(this).css({"background-image":"url(../images/bidclose.png)",});
        $(".bidop-btn").css("background-image","url(../images/op-close.png)");
    });
    //打开计算器
    $(".openCalculator").click(
        function(){
            jkdCalculator();
        }
    );
    //帮助中心-展开详情
    $(".breviary").click(function () {
        $(this).children(".detailed").toggle();
        if($(this).children(".arrow-point").hasClass('help-arrow-point')){
            $(this).children(".arrow-point").removeClass('help-arrow-point').addClass('help-arrow-pointb');
            //收起
        }else{
            $(this).children(".arrow-point").removeClass('help-arrow-pointb').addClass('help-arrow-point');
            //展开
        }
    })
});

//金开贷弹窗
    function popBox(){
        $("#popLayer").show();
    }//end popBox()

    //关闭按钮
    function closeBox(){
        $("#popLayer,.jkdpopBox,.transfer-pop,.return-plan,.loanInfoPop").hide();
        $(".lotteryCoinPop,.detailCoinPop,.lotteryRatesPop,.lotteryManagePop,.lotteryOtherPop,.lotteryCashPop,.lotteryCashbagPop,.lotteryEssPop").hide();
        $(".rechargeBanklist,.lendPop,.jkdCalculator").hide();
    }//end  closeBox()


    //借款信息确认
    function loanInfoPop(){
        popBox();
        $(".loanInfoPop").show();
    }
    //回款计划书调用
    function returnPop(){
        popBox();
        $(".return-plan").show();
    }
    //风险提示书调用
    function jkdpopBox(){
        popBox();
        $(".jkdpopBox").show();
    }
    //风险提示书确认
    function transferPop(){
        popBox();
        $(".transfer-pop").show();
    }
    /*奖券类*/
    //1.活动入场券详
    function lotteryCoinPop(){
        popBox();
        $(".lotteryCoinPop").show();
    }
    //2.金开币奖券详情
    function detailCoinPop(){
        popBox();
        $(".detailCoinPop").show();
    }
    //3.加息券奖券详情
    function lotteryRatesPop(){
        popBox();
        $(".lotteryRatesPop").show();
    }
    //4.管理费优惠券详情
    function lotteryManagePop(){
        popBox();
        $(".lotteryManagePop").show();
    }
    //5.管理费优惠券详情
    function lotteryOtherPop(){
        popBox();
        $(".lotteryOtherPop").show();
    }
    //6.现金红包详情
    function lotteryCashbagPop(){
        popBox();
        $(".lotteryCashbagPop").show();
    }
    //7.现金券详情
    function lotteryCashPop(){
        popBox();
        $(".lotteryCashPop").show();
    }
    //8.实体奖品券详情
    function lotteryEssPop(){
        popBox();
        $(".lotteryEssPop").show();
    }
    //可支持银行卡绑定
    function rechargeBanklist(){
        popBox();
        $(".rechargeBanklist").show();
    }
    //借款申请lendPop
    function lendPop(){
        popBox();
        $(".lendPop").show();
    }
    //金开贷弹窗
    function jkdPopGloble(){
        $(".jkdpop-globle").load("../web/jkdpop-box.html");
    }
    //jkdCalculator
    function jkdCalculator(){
        popBox();
        $(".jkdCalculator").show();
    }
    //金开贷弹窗end
    function loadBannerid() {
        $("#bannerid").load("../web/banner.html");
    }

    function loadMjkdLeftMenu() {
        $("#myjkd-leftmenu").load("../web/myjkd-leftmenu.html");
    }
    function loadCmjkdLeftMenu() {
        $("#cmyjkd-leftmenu").load("../web/cmyjkd-leftmenu.html");
    }
    function helpCenterAside(){
        $("#helpCenterAside").load("../web/help-cener-aside.html");
    }
    function loadFooter() {
        $.ajax({
            url: "../web/footer.html",
            dataType: "html",
            success: function (result) {
                $("#footer").html(result);
            }
        });
    }
    function BackTop(){
        $(window).scroll(function() {
            var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
            if (scrollY > 100){ //如果滚动距离大于100px则显示，
                $('#backto-top').show();
            }
            else {
                $('#backto-top').hide();//否则隐藏
            };
        });
        $('#backto-top').click(function () {
            $('html,body').animate({
                scrollTop : '0px'
            }, 100);//返回顶部所用的时间
        });
    };
    function isInteger(str){
        var reg1 =  /^\d+$/;
        return reg1.test(str);
    }
    function loadHeader(){
        $.ajax({
            url: "../web/header.html",
            cache: false,
            global: false,
            type: "get",
            dataType: "html",
            async:false,
            success: function(html){
                $("#header").html(html);
            }
        })
    }
    //.load会导致某些浏览器JS失效



