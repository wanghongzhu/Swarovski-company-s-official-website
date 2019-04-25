
    //轮播图JS开始
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        //    grabCursor: true,

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 如果需要自动轮播
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            // 用户操作之后是否自动启动轮播
            disableOnInteraction: false,
        },

    })

    //   $('.swiper-wrapper .swiper-slide img').mousedown(function () {
    //       mySwiper.setGrabCursor();
    //   })
    mySwiper.el.onmouseover = function () {
        mySwiper.autoplay.stop();
    }
    mySwiper.el.onmouseout = function () {
        mySwiper.autoplay.start();
    }


    //适配左右点击按钮
    var lunboImgH = $('.swiper-slide img').height();
    $('.swiper-button-prev').css({
        top: lunboImgH / 2
    })
    $('.swiper-button-next').css({
        top: lunboImgH / 2
    })
    $(window).resize(function () {
        lunboImgH = $('.swiper-slide img').height();
        $('.swiper-button-prev').css({
            top: lunboImgH / 2
        })
        $('.swiper-button-next').css({
            top: lunboImgH / 2
        })

    })
    //轮播图JS结束


    if (localStorage.getItem('xqymxx') != null) {
        localStorage.removeItem('xqymxx');
    }
    if (localStorage.getItem('count') != null) {
        localStorage.removeItem('count');
    }


    //主体部分JS展示
    $(window).scroll(function () {
        var v = $(window).scrollTop();
        //获取一件钟情距离顶部的高度
        var zs = $('.section-divider-text').offset().top;
        //获取 one饰品距离顶部的高度
        var one = $('.fallinlove').offset().top;
        //获取LIFELONG BOW距离顶部的高度
        var bow = $('.fallinlove-two').offset().top;
        //获取第三个 距离顶部的高度
        var treeLis = $('.fallinlove-tree').offset().top;
        //到歌颂友谊的距离
        var songfriend = $('.section-divide-headline1').offset().top;
        //歌颂友谊大图到的距离
        var songFriendBig = $('.F-left a').offset().top;
        //歌颂友谊小图到的距离
        var songSmall = $('.friend-bottom-left-text').offset().top;
        //一生挚爱
        var loveys = $('.section-divide-headline2').offset().top;
        var windowInH = window.innerHeight; //可视区域的大小
        if (v + windowInH >= zs) {
            $('.section-divide-headline').css({
                top: '60%',
                opacity: 1
            })
            $('.section-divider-text').css({
                top: '90%',
                opacity: 1
            })
            $('.section-divider-icon').css({
                opacity: 1
            })
        } else {
            $('.section-divide-headline').css({
                top: '90%',
                opacity: 0.3
            })
            $('.section-divider-text').css({
                top: '120%',
                opacity: 0.3
            })
            $('.section-divider-icon').css({
                opacity: 0
            })
        }
        //one
        if (v + windowInH >= one) {
            $('.fallinlove .left').css({
                left: 0,
                opacity: 1
            })
            $('.fallinlove .right').css({
                right: 0,
                opacity: 1
            })
        } else {
            $('.fallinlove .left').css({
                left: '30%',
                opacity: 0.3
            })
            $('.fallinlove .right').css({
                right: '30%',
                opacity: 0.3
            })
        }
        //bow
        if (v + windowInH >= bow) {
            $('.fallinlove-two .left').css({
                left: 0,
                opacity: 1
            })
            $('.fallinlove-two .right').css({
                right: 0,
                opacity: 1
            })
        } else {
            $('.fallinlove-two .left').css({
                left: '30%',
                opacity: 0.3
            })
            $('.fallinlove-two .right').css({
                right: '30%',
                opacity: 0.3
            })
        }
        //tree
        if (v + windowInH >= treeLis) {
            $('.fallinlove-tree .f-t-one').css({
                opacity: 1
            })
            $('.fallinlove-tree .f-t-two').css({
                opacity: 1
            })
            $('.fallinlove-tree .f-t-tree').css({
                opacity: 1
            })
            $('.fallinlove-tree .f-t-four').css({
                opacity: 1
            })
        } else {
            $('.fallinlove-tree .f-t-one').css({
                opacity: 0
            })
            $('.fallinlove-tree .f-t-two').css({
                opacity: 0
            })
            $('.fallinlove-tree .f-t-tree').css({
                opacity: 0
            })
            $('.fallinlove-tree .f-t-four').css({
                opacity: 0
            })
        }
        //歌颂友谊文字部分
        if (v + windowInH >= songfriend) {
            $('.section-divide-headline1').css({
                top: 0
            })
            $('.section-divider-icon1 img').css({
                opacity: 1
            })
        } else {
            $('.section-divide-headline1').css({
                top: 80
            })
            $('.section-divider-icon1 img').css({
                opacity: 0
            })
        }
        //歌颂友谊大图
        if (v + windowInH >= songFriendBig) {
            $('.F-right img').css({
                top: -20,
                right: -20
            })
        } else {
            $('.F-right img').css({
                top: 0,
                right: 0
            })
        }
        if (v + windowInH >= songSmall) {
            $('.friend-bottom-left-img img').css({
                top: -15,
                left: -15
            })
            $('.friend-bottom-right-img img').css({
                top: -15,
                left: -15
            })
        } else {
            $('.friend-bottom-left-img img').css({
                top: 0,
                left: 0
            })
            $('.friend-bottom-right-img img').css({
                top: 0,
                left: 0
            })
        }
        //一生挚爱
        if (v + windowInH >= loveys) {
            $('.section-divide-headline2').css({
                top: 0
            })
            $('.section-divider-text2').css({
                top: 30
            })
            $('.section-divider-icon2 img').css({
                opacity: 1
            })
        } else {
            $('.section-divide-headline2').css({
                top: 80
            })
            $('.section-divider-text2').css({
                top: 140
            })
            $('.section-divider-icon2 img').css({
                opacity: 0
            })
        }

        if (v > 1000) {
            $('.totop').show();
        } else {
            $('.totop').hide();
        }

    })
    //鼠标进入阴影事件
    $('.fallinlove .left').on('mouseenter', function () {
        $(this).children('.yyc').height($(this).children('img').height())

    })
    $('.fallinlove-two .right').on('mouseenter', function () {
        $(this).children('.yyc').height($(this).children('img').height())

    })
    $('.fallinlove-tree').on('mouseenter', '.enter', function () {
        $(this).find('.yyc').height($(this).find('img').height());

        $(this).find('span').css({
            top: -$(this).find('img').height() / 2 + (-$(this).find('.f-text').height() / 3),
            color: '#fff',
            fontSize: parseInt($(this).find('.f-text').css('font-size')) + 2
        })
    })

    $('.fallinlove-tree').on('mouseleave', '.enter', function () {
        $(this).find('span').css({
            top: 0,
            color: '#333',
            fontSize: $(this).find('.f-text').css('font-size')
        })
    })
    $('.friend-top .F-right').on('mouseenter', function () {
        $(this).children('.yyc').height($(this).children('img').height())
        $(this).children('img').css({
            top: 0,
            right: 0
        })

    })
    $('.friend-top .F-right').on('mouseleave', function () {
        $(this).children('.yyc').height($(this).children('img').height())
        $(this).children('img').css({
            top: -20,
            right: -20
        })
    })
    //给friend双图加鼠标进入时间
    $('.friend-bottom').on('mouseenter', '.enter', function () {
        $(this).find('.yyc').height($(this).find('img').height() + 10);
        $(this).find('img').css({
            top: 0,
            left: 0
        })
        $(this).find('span').css({
            top: -$(this).find('img').height() / 2 + (-$(this).find('.nice-text').height() / 3),
            color: '#fff',
            fontSize: parseInt($(this).find('.nice-text').css('font-size')) + 2
        })

    })
    $('.friend-bottom').on('mouseleave', '.enter', function () {
        $(this).find('img').css({
            top: -15,
            left: -15
        })
        $(this).find('span').css({
            top: 0,
            color: '#333',
            fontSize: $(this).find('.nice-text').css('font-size')
        })
    })
    $('.jamila-left img').on('mousemove', function (e) {
        snowpaly(e.offsetX, e.offsetY, '.jamila-left');

    })


    //雪花特效
    function snowpaly(x, y, element) {
        //定义雪花最小值
        var minSize = 12;
        var snow = $('<span class="snow iconfont"></span>').css({
            'position': 'absolute',
            'z-index': 0,
        }).html('❤');
        //获取雪花随机初始位置-left
        var startW = -20 + Math.random() * 40;
        //获取雪花结束的随机left值
        var end = -20 + Math.random() * 40;
        //获取随机大小的雪花
        var snowSize = minSize + Math.random() * 20;
        //获取随机透明度
        var stocOpca = 0.5 + Math.random() * 0.5;
        //获取雪花飘落随机速度
        var speed = 400 + Math.random() * 400;
        snow.css({
            'top': startW + y,
            'left': startW + x,
            'opacity': stocOpca,
            'font-size': snowSize,
            'color': 'hotpink'
        }).animate({
            'left': end + x,
            'top': end + y,
            'opacity': 0.1
        }, speed, function () {
            $(this).remove();
        }).appendTo(element);

    }