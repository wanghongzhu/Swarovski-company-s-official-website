//目标1：实现动态添加商品
//目标2：实现加减，删除，收藏，免费判断，结账
//目标3：更多按钮
//目标4：个人信息输入文字个数判断
//目标5：优惠卷默认，点击功能
//目标6：轮播图
//入口函数
$(function () {
    //动态添加
    var datas = [{
            name: "Lifelong Bow 穿孔耳环  白色  混搭多种镀层",
            imgsrc: "upload/index1.jpg",
            price: "1590.00",
            des: "耳环",
            index: 0
        },
        {
            name: "Lifelong Bow 阔手镯  白色  混搭多种镀层",
            imgsrc: "upload/index2.jpg",
            price: "2290.00",
            des: "手镯",
            index: 1
        },
        {
            name: "Lifelong Bow 链坠  白色  混搭多种镀层",
            imgsrc: "upload/index3.jpg",
            price: "2290.00",
            des: "项链",
            index: 2
        },
        {
            name: "Lifelong Bow Y形项链  白色 混搭多种镀层",
            imgsrc: "upload/index4.jpg",
            price: "2290.00",
            des: "项链",
            index: 3
        },
        {
            name: "Lifelong Bow 双环戒指 白色 混搭多种镀层",
            imgsrc: "upload/index5.jpg",
            price: "2290.00",
            des: "戒指",
            index: 4
        },
        {
            name: "Lifelong Medium Bow 手表 白色 混搭多种镀层",
            imgsrc: "upload/index6.jpg",
            price: "2290.00",
            des: "手表",
            index: 5
        },
        {
            name: "Lucky Goddess Wings 项链 彩色设计 镀金色",
            imgsrc: "upload/index7.jpg",
            price: "1290.00",
            des: "项链",
            index: 6
        },
        {
            name: "Luckily 穿孔耳环 彩色设计 镀金色",
            imgsrc: "upload/index8.jpg",
            price: "590.00",
            des: "耳环",
            index: 7
        },
        {
            name: "Oxygen 穿孔耳环 绿色 镀白金色",
            imgsrc: "upload/index9.jpg",
            price: "690.00",
            des: "耳环",
            index: 8
        },
        {
            name: "Out of this World Queen 项链 白色 混搭多种镀层",
            imgsrc: "upload/index10.jpg",
            price: "2290.00",
            des: "项链",
            index: 9
        },
        {
            name: "Out of this World Space 穿孔耳环 彩色设计 混搭多种镀层",
            imgsrc: "upload/index11.jpg",
            price: "2290.00",
            des: "耳环",
            index: 10
        },
        {
            name: "Out of this World Space Y形项链 彩色设计 混搭多种镀层",
            imgsrc: "upload/index4.jpg",
            price: "2290.00",
            des: "项链",
            index: 11
        }
    ];
    //前面页面传来的datas name 唯一标示值
    var message = localStorage.getItem('xqymxx');
    var count = parseInt(localStorage.getItem('count'));
    var arrMessage = [];
    var arrcount = [];
    var flag = false;
    // console.log(localStorage.getItem('arrMessage'));

    if (localStorage.getItem('arrMessage') != null && localStorage.getItem('arrMessage') != '') {
        console.log(111);

        //先看看这个里面有没有数据 如果有就先遍历所有的购物车
        //这个就是个数组
        $('.carn').empty();
        //这里获取的是 全部标识的素组
        arrMessage = localStorage.getItem('arrMessage').split(',');
        //这里获取的是所有的 数量 
        arrcount = localStorage.getItem('arrcount').split(',');
        for (var f = 0; f < arrMessage.length; f++) {
            for (var g = 0; g < datas.length; g++) {
                if (arrMessage[f].indexOf(datas[g].name) != -1) {
                    //遍历创建
                    //如果进入这个if 证明找到了商品 那么 datas[g] 就可以获取到对象中值
                    // arrcount[g]就是当前商品有多少个 就是数量
                    // $('<li class=" li clearfix"></li>').appendTo($('.carn'));
                    createLi(datas[g].name, parseFloat(datas[g].price), datas[g].imgsrc, parseInt(arrcount[f]))
                    break;
                }
            }

        }
    }


    if (message != null && count != null) {
        //防止刷新再进 或者是直接查询
        if ($('.carn>li').length == 0) {
            //证明购物车内还没有东西  直接根据message 和count去加
            for (var k = 0; k < datas.length; k++) {
                if (message.indexOf(datas[k].name) != -1) {
                    //这里可以取出对应的各种数据就创建一个li就行
                    // $('<li class=" li clearfix"></li>').appendTo($('.carn'));
                    createLi(datas[k].name, parseFloat(datas[k].price), datas[k].imgsrc, parseInt(count));
                }
            }
            arrMessage[arrMessage.length] = message;
            arrcount[arrcount.length] = count;
            localStorage.setItem('arrMessage', arrMessage);
            localStorage.setItem('arrcount', arrcount);


        } else {
            //证明购物车里已经有东西了
            //先把之前存储的东西给取出。
            arrMessage = localStorage.getItem('arrMessage').split(',');
            arrcount = localStorage.getItem('arrcount').split(',');

            //先遍历arrMessage这个数组看看 新来的东西再购物车中是否有了
            for (var e = 0; e < arrMessage.length; e++) {
                if (message.indexOf(arrMessage[e]) != -1) {
                    //证明能找到 那就数字 加1 
                    arrcount[e] = (arrcount[e] - 0 + count) + '';
                    //  把对应的购物车中的数字也要加1
                    $('.carn li').eq(e).find('.count').text(arrcount[e]);
                    localStorage.setItem('arrcount', arrcount);
                    flag = true;
                }
            }
            if (!flag) {
                //    证明没有 就改变新数据
                arrcount[arrcount.length] = count;
                arrMessage[arrMessage.length] = message;
                localStorage.setItem('arrMessage', arrMessage);
                localStorage.setItem('arrcount', arrcount);
                //并创建一个新的
                // $('<li class=" li clearfix"></li>').appendTo($('.carn'));
                for (var l = 0; l < datas.length; l++) {
                    if (message.indexOf(datas[l].name) != -1) {
                        createLi(datas[l].name, parseFloat(datas[l].price), datas[l].imgsrc, parseInt(count));
                    }
                }
                flag = false;

            }


        }
        //移除缓存
        localStorage.removeItem('xqymxx');
        localStorage.removeItem('count')

    }
    //创建一个li
    function createLi(name, price, imgsrc, count) {
        var $ul = $('.carn');
        var $tr = $('<li class=" li clearfix"></li>').appendTo($ul);
        var htmldiv1 = `<img src = "${imgsrc}" alt = "">`;
        $('<div class="ima"></div>').html(htmldiv1).appendTo($tr);
        var $div2 = $('<div class="details"></div>').appendTo($tr);
        var htmldiv2L = `
        <p class="pName">${name}</p>
        <p class="xiaodj">￥<span class="dj">${(price * count).toFixed(2)}</span></p>
        <p>
            <span>产品价格：</span>
            <span >￥
                <i class="price">${price.toFixed(2)}</i>
            </span>

        </p>
        <p>
            <span>产品编号：</span>
            <span>5211314</span>
        </p>
        `;
        $('<div class="details_T f18"></div>').html(htmldiv2L).appendTo($div2);
        var htmldiv2R = `
                <div class="details_L fl clearfix">
                    <div class="reduce fl">-</div>
                    <div class="count fl">${count}</div>
                    <div class="add fl">+</div>
                </div>
                <div class="details_R  fr">
                    <a href="javascript:" class="collect">
                    <i class="iconfont">&#xe659;</i>
                    </a>
                    <a href="javascript:" class="delete">
                        <i class="iconfont">&#xe629;</i>
                    </a>
                </div>`;
        $('<div class="details_B clearfix"></div>').html(htmldiv2R).appendTo($div2);

    }
    console.log(arrcount);
    console.log(arrMessage);

    if (localStorage.getItem('arrMessage') != null) {
        var spgs = localStorage.getItem('arrMessage').split(',').length;
         if ($('.login span').text() == '登录') {
             $('.shopcarnum').text('0');
         } else {
             $('.shopcarnum').text(spgs);
         }
    }
    //总价计算
    function zongj() {
        var counts = $('.carn .count');
        var parices = $('.carn .dj');


        var sumCount = 0;
        var sumParice = 0;
        for (var j = 0; j < counts.length; j++) {
            sumCount += Number(counts.eq(j).text());
            sumParice += Number(parices.eq(j).text());
        }
        $('.totalCount').text(sumCount.toFixed(2));
        $('.totalPrice').text(sumParice.toFixed(2));

    }
    zongj();
    //减法运算
    $('.carn').on('click', '.reduce', function () {
        var count = $(this).next().text();
        var index = $(this).index();
        count--;
        if (count <= 1) {
            count = 1;
        }
        var indexs = $(this).parent().parent().siblings();
        var price = indexs.find('.price').text();
        indexs.find('.dj').text(count * price);
        $(this).next().text(count);
        zongj();


    })
    //加法运算
    $('.carn').on('click', '.add', function () {
        var add = $(this).prev().text();
        add++;
        var index = $(this).parent().parent().siblings();
        var price = index.find('.price').text();
        index.find('.dj').text(add * price);
        $(this).prev().text(add);
        zongj();
    })
    //鼠标进入删除
    $('.carn').on('mouseover', '.delete', function (e) {
        var x = e.clientX;
        var y = e.clientY;
        newDiv = $('<div></div>');
        newDiv.css({
            'position': 'fixed',
            'width': '33px',
            'height': '23px',
            'border': '1px solid #b8b7b6',
            'text-align': 'center',
            'left': x + 15 + 'px',
            'top': y + 15 + 'px',
            'color': '#b8b7b6'
        })

        newDiv.addClass('newdiv').appendTo('body')
        $('.newdiv').html('删除')
        $('.newdiv').animate({
            top: y + 20 + 'px'
        })

    })

    //鼠标离开删除
    $('.carn').on('mouseout', '.delete', function () {
        $('.newdiv').remove();
    })
    //删除
    $('.delete').on('click', function () {
        var isdelet = confirm('确定要删除么？');
        if (isdelet) {
            var delindex = $(this).parent().parent().parent().parent().index();
            arrMessage = localStorage.getItem('arrMessage').split(',');
            arrcount = localStorage.getItem('arrcount').split(',');
            arrMessage.splice(delindex, 1);
            arrcount.splice(delindex, 1);
            localStorage.setItem('arrMessage', arrMessage);
            localStorage.setItem('arrcount', arrcount);
            if (localStorage.getItem('arrMessage') != null) {
                var spgs = localStorage.getItem('arrMessage').split(',').length;
                if ($('.login span').text() == '登录') {
                    $('.shopcarnum').text('0');
                } else {
                    $('.shopcarnum').text(spgs);
                }
            }
            $(this).parent().parent().parent().parent().remove();
            zongj();
            $('.newdiv').remove();
            showH();
            //获取下标志
        }
    })
    //显示更多
    var ter = false;
    $('.a').on('click', function () {
        if (ter) {
            $('.i1').slideUp(0);
            $('.i2').slideDown(0);
            $('.a_b').slideDown(300);

            ter = false;

        } else {
            $('.i1').slideDown(0);
            $('.i2').slideUp(0);
            $('.a_b').slideUp(300);
            console.log(ter)
            ter = true;
        }
    })
    //免费礼品选择
    $('.check1').on('click', function () {
        if ($('.check1').prop('checked') == true) {
            $('.checkl1').text('是');
        } else {
            $('.checkl1').text('否');
        }

    })
    $('.check2').on('click', function () {
        if ($('.check2').prop('checked') == true) {
            $('.checkl2').text('是');
            $('.ger').slideDown(500);
        } else {
            $('.checkl2').text('否');
            $('.ger').slideUp(500);
        }

    })
    //个人信息字数判断
    $('#text')[0].oninput = function () {
        var w = $(this).val().length;
        $('.zifu').text(350 - w);
    }
    //鼠标进入结账，编码，汇总按钮
    $('.size').on('mouseover', '.bian , .jie , .hre', function () {
        $(this).addClass('color');
    })
    $('.size').on('mouseout', '.bian , .jie , .hre', function () {
        $(this).removeClass('color');
    })
    //是否显示购物车为空
    function showH() {
        var show = $('.li').length;
        if (show == 0) {
            $('.h2').slideDown(200);
            $('.shopping_Y').slideUp(200);
        } else {
            $('.h2').slideUp(200);
            $('.shopping_Y').slideDown(200);
        }
    }
    //
    var v1 = $('.jz').offset().top;
    $(window).scroll(function () {
        var v2 = $(window).scrollTop();
        if (v2 >= v1) {
            $('.foot_D').show();
            // console.log(v2);
        } else {
            $('.foot_D').hide();
        }
    })
    //轮播图
    //  //轮播图1
    //鼠标进入
    $('.shoppingH').on('mouseover', '.del', function () {
        $(this).find('.left').show();
        $(this).find('.right').show();

        clearInterval(timer1);

    })
    //鼠标离开
    $('.shoppingH').on('mouseout', '.del ', function () {
        $(this).find('.left').hide();
        $(this).find('.right').hide();
        autoPlay1();
    })
    //点击右侧
    var index = 0;
    $('.shoppingH').on('click', '.del .right', function () {

        var width = $('.details li').outerWidth();
        index++;
        var r = $(this).siblings().find('li').length - 4;
        if (index > r) {
            index = 0;
        }
        var thi = $(this).siblings('ul');
        thi.stop().animate({
            left: -width * index,
        }, 1000)

    })
    //点击左侧
    $('.shoppingH').on('click', '.del .left', function () {
        var width = $('.details li').outerWidth();
        index--;
        if (index <= 0) {
            index = 0;
        }
        var thi = $(this).siblings('ul');
        thi.stop().animate({
            left: -width * index,
        }, 1000)
    })
    // // 自动轮播
    var timer1;

    function autoPlay1() {
        timer1 = setInterval(function () {
            $('.del .right').trigger('click');
        }, 2600);
    }
    autoPlay1();

    //轮播图2
    //鼠标进入
    $('.shoppingH').on('mouseover', ' .der', function () {
        $(this).find('.left').show();
        $(this).find('.right').show();
        clearInterval(timer2);
    })
    //鼠标离开
    $('.shoppingH').on('mouseout', ' .der', function () {
        $(this).find('.left').hide();
        $(this).find('.right').hide();
        autoPlay2();
    })
    //点击右侧
    var index1 = 0;
    $('.shoppingH').on('click', ' .der .right', function () {

        var width = $('.details li').outerWidth();
        index1++;
        var r = $(this).siblings().find('li').length - 4;
        if (index1 > r) {
            index1 = 0;
        }
        var thi = $(this).siblings('ul');
        thi.stop().animate({
            left: -width * index1,
        }, 1000)

    })
    //点击左侧
    $('.shoppingH').on('click', ' .der .left', function () {
        var width = $('.details li').outerWidth();
        index1--;
        if (index1 <= 0) {
            index1 = 0;
        }
        var thi = $(this).siblings('ul');
        thi.stop().animate({
            left: -width * index1,
        }, 1000)
    })
    // 自动轮播
    var timer2;

    function autoPlay2() {
        timer2 = setInterval(function () {
            $('.der .right').trigger('click');
        }, 2600);
    }
    autoPlay2();
});