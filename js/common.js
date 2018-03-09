
;(function(){
    var onOff = true;
    var num = 0;
    //input 输入数字变色
    //表格 文本域点击输入时字体变色
    var fnInput = {
        //初始化
        init: function () {
            var _this = this;
            _this.input();
        },

        //value 值点击、聚焦问题
        input:function(){
            var $input = $('input[type=text]');
            var val = $input.val();

            if( $('input').is('.input-password') ){
                $('.input-password').on('focus click',function(){
                    if(this.value=='密码/域认证密码'){
                        this.value='';
                        this.type='password';
                        this.style.color='#333';
                    };
                });
                $('.input-password').on('blur',function() {
                    if (!this.value) {
                        this.type = 'text';
                        this.value = '密码/域认证密码';
                        this.style.color='#999';
                    }
                })
            }

            $input.focus(function() {
                if (val == "用户名/域用户名" || val == "输入查询菜单名称") {
                    $(this).attr({value:""});
                    $(this).css({color:'#333'});
                }
            }).blur(function() {
                if (val == "") {
                    $(this).attr({value:val});
                    $(this).css({color:'#999'});
                }
            }).click(function(){
                if (val == "") {
                    $(this).attr({value:val});
                    $(this).css({color:'#333'});
                }
            });

        /*导航折起*/
            $('.turn-up').on('click',function() {
                var $nav = $('.erm-navigation');
                if( onOff ){
                    $nav.css("display","none");
                    $('.turn-up span.kai').css('display','none');
                    $('.turn-up span.guan').css('display','block');
                    onOff = false;
                } else if(onOff == false){
                    $nav.css("display","block");
                    $('.turn-up span.kai').css('display','block');
                    $('.turn-up span.guan').css('display','none');
                    onOff = true;
                }
            });

                //判断有没有内容 样式不一样
                function iconShow(obj){
                    var $obj = obj;
                    if($obj.children('li').length>0){
                        for(var i=0;i<$obj.children('li').length;i++){
                            var objTwo = $obj.children('li')[i];
                            var $objTwo = $(objTwo);
                            var Ul = objTwo.getElementsByTagName('ul')[0];
                            var hasUl = Ul ? true : false;
                           if( hasUl ){
                                $objTwo.children('span').show().next('s').remove();
                            } else{
                                $objTwo.children('span').remove().next('s').show();
                            }
                        }
                    }                   
                }
                iconShow($('.tree-one .li-tree-one .a-tree-one').nextAll('ul.tree-two'));
                iconShow($(".tree-two").find("li:has(ul)").children("a").nextAll('ul'));
                
            /*树形结构导航点击事件*/
                 /*一级导航点击*/
                $('.tree-one .li-tree-one .a-tree-one').on('click',function(){
                    $(this).parent('li').addClass('active-bo').children('ul').addClass('one-active').parent('li').siblings().removeClass('active-bo');
                });
            
                /*二级以上导航点击*/ 
                $(".tree-two").find("li:has(ul)").children("a").on('click',function(){
                    if($(this).nextAll("ul").is(":hidden")){ 
                            $(this).nextAll('span').css('background-position','0 -294px').addClass('bottom');                  
                        if($(this).parent("li").siblings("li").children("ul").is(":visible")){
                            $(this).nextAll('span').css('background-position','0 -273px').removeClass('bottom');
                            $(this).parent("li").siblings("li").children('span').css('background-position','0 -273px').removeClass('bottom');             
                            }
                        }else{
                            $(this).nextAll('span').css('background-position','0 -273px').removeClass('bottom');
                            }
                });
                $(".tree-one").find("li:has(ul)").children("a").on('click',function(){
                    iconShow($(this).nextAll('ul'));
                    if($(this).nextAll("ul").is(":hidden")){ 
                        $(this).nextAll("ul").show();        
                        if($(this).parent("li").siblings("li").children("ul").is(":visible")){
                            $(this).parent("li").siblings("li").find("ul").hide();          
                            }
                                return false;
                        }else{
                            $(this).nextAll("ul").hide();
                            $(this).nextAll("ul").children("li").find("ul").show();
                                return false;
                            }
                              /*滚动条*/
                            $(".n-scroll-wrap").tinyscrollbar();
                });
                 /*滚动条*/
                $(".n-scroll-wrap").tinyscrollbar();

                /*nav 点击*/
                $('.erm-header-nav-one li').on('click',function(){
                    var _this = $(this);
                    _this.addClass('active').siblings().removeClass('active');
                    _this.prev().children('a').css('border-right','#fff');
                });
                $('.erm-header-nav-two li').on('click',function(){
                    var _this = $(this);
                    _this.addClass('active').siblings().removeClass('active');
                    _this.parents('ul').css('border-bottom','1px solid #4990e2');
                });

                /*收起、点开*/
                $('.right-unfold').on('click',function(){
                    var _this = $(this);
                    if( onOff ){
                        $('.right-unfold em').css('display','block'); 
                        $('.right-unfold span').hide();               
                        $('.bg_grey_one').hide();
                        onOff = false;
                    } else if(onOff == false){
                        $('.right-unfold span').css('display','block'); 
                        $('.right-unfold em').hide();   
                        $('.bg_grey_one').show();
                        onOff = true;
                    }

                });
            
        }
    }

    fnInput.init();

})();