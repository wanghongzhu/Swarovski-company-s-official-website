$(function () {
    // 左侧收缩按钮
    // var isAdd = true
    // $('.topTitle').click(function () {
    //     var index = $(this).parent().index();
    //     $('.b-li').eq(index).find('ul').toggleClass('hide');

    //     if (isAdd) {
    //         $('.b-li').eq(index).find('span').text("+");
    //         isAdd = false;
    //     } else {
    //         $('.b-li').eq(index).find('span').text("-");
    //         isAdd = true;
    //     }
    // })
    if (localStorage.getItem('xqymxx') != null) {
        localStorage.removeItem('xqymxx');
    }
    if (localStorage.getItem('count') != null) {
        localStorage.removeItem('count');
    }
    $('.topTitle').click(function () {
        var index = $(this).parent().index();
        var $ul = $('.b-li').eq(index).find('ul');
        var $span = $('.b-li').eq(index).find('span');
        if ($ul.css('display') == 'block') {
            $span.text("+");
            $ul.slideUp(300);

        } else {
            $span.text("-");
            $ul.slideDown(300)
        }

    })

    // 给左侧input添加点击事件,点击后,让其背景颜色变为红色
    $('input[type=checkbox]').click(function () {
        $(this).toggleClass('backgroundRed')
    })

    // // 给图片加蒙版mask,不好看,算了
    // $('.product-item img').mouseenter(function(){
    //     $(this).next('div').height($(this).innerHeight());     
    // });


     var date = [{
             name: "Lifelong Bow 穿孔耳环  白色  混搭多种镀层",
             imgsrc: "upload/index1.jpg",
             price: "¥ 1590.00",
             des: "耳环",
             index: 0
         },
         {
             name: "Lifelong Bow 阔手镯  白色  混搭多种镀层",
             imgsrc: "upload/index2.jpg",
             price: "¥ 2290.00",
             des: "手镯",
             index: 1
         },
         {
             name: "Lifelong Bow 链坠  白色  混搭多种镀层",
             imgsrc: "upload/index3.jpg",
             price: "¥ 2290.00",
             des: "项链",
             index: 2
         },
         {
             name: "Lifelong Bow Y形项链  白色 混搭多种镀层",
             imgsrc: "upload/index4.jpg",
             price: "¥ 2290.00",
             des: "项链",
             index: 3
         },
         {
             name: "Lifelong Bow 双环戒指 白色 混搭多种镀层",
             imgsrc: "upload/index5.jpg",
             price: "¥ 2290.00",
             des: "戒指",
             index: 4
         },
         {
             name: "Lifelong Medium Bow 手表 白色 混搭多种镀层",
             imgsrc: "upload/index6.jpg",
             price: "¥ 2290.00",
             des: "手表",
             index: 5
         },
         {
             name: "Lucky Goddess Wings 项链 彩色设计 镀金色",
             imgsrc: "upload/index7.jpg",
             price: "¥ 1290.00",
             des: "项链",
             index: 6
         },
         {
             name: "Luckily 穿孔耳环 彩色设计 镀金色",
             imgsrc: "upload/index8.jpg",
             price: "¥ 590.00",
             des: "耳环",
             index: 7
         },
         {
             name: "Oxygen 穿孔耳环 绿色 镀白金色",
             imgsrc: "upload/index9.jpg",
             price: "¥ 690.00",
             des: "耳环",
             index: 8
         },
         {
             name: "Out of this World Queen 项链 白色 混搭多种镀层",
             imgsrc: "upload/index10.jpg",
             price: "¥ 2290.00",
             des: "项链",
             index: 9
         },
         {
             name: "Out of this World Space 穿孔耳环 彩色设计 混搭多种镀层",
             imgsrc: "upload/index11.jpg",
             price: "¥ 2290.00",
             des: "耳环",
             index: 10
         },
         {
             name: "Out of this World Space Y形项链 彩色设计 混搭多种镀层",
             imgsrc: "upload/index4.jpg",
             price: "¥ 2290.00",
             des: "项链",
             index: 11
         }
     ];
    var ishave;

    function getsearch() {
        // 动态获取search里input的值
        var searchIconVal;
        var flag = true;
        ishave = false;
        searchIconVal = localStorage.getItem('dateName');

        // 如果搜索框里的内容查询不到,显示
        for (var i = 0; i < date.length; i++) {
            var dateName = date[i].name;
            var datedes = date[i].des;
            if (dateName.indexOf(searchIconVal) == -1 && datedes.indexOf(searchIconVal) == -1) {

            } else {
                ishave = true;
                if (flag) {
                    $('.product-list').empty();
                    flag = false;
                }
                $('.sellOut').css('display', 'none');
                // 如果内容为有效内容(如:项链),那么创建相应的[product-item]
                if (dateName.indexOf(searchIconVal) != -1 || datedes.indexOf(searchIconVal) != -1) {
                    $('<div class="product-item"></div>').appendTo('.product-list').html(
                        // ES6语法
                        ` <a href="spxq2.html">
                           <img src="${date[i].imgsrc}" alt="">
                           <p>
                             ${date[i].name}
                           </p>
                           <h6 class="product-price">
                            ${date[i].price}
                           </h6>
                         </a>`
                    )
                }
            }
        }
        kongbai();
        flag = true;
        localStorage.removeItem('dateName');
    }
    if (localStorage.getItem('dateName') != null) {

        getsearch();
    }




    // 动态创建 product-list里的div[product-item]

    function addlis() {
        if ($('.sel option:selected').text() == '筛选条件') {
              $('.product-kongbai').remove();
            for (var i = 0; i < date.length; i++) {
                $('<div class="product-item"></div>').appendTo('.product-list').html(
                    // ES6语法
                    ` <a href="spxq2.html">
                       <img src="${date[i].imgsrc}" alt="">
                       <p>
                         ${date[i].name}
                       </p>
                       <h6 class="product-price">
                        ${date[i].price}
                       </h6>
                     </a>`
                )
            }
              kongbai();
        } else {
            $('.product-kongbai').remove();
            for (var i = 0; i < date.length; i++) {
                if ($('.sel option:selected').text() == date[i].des) {
                    $('<div class="product-item"></div>').appendTo('.product-list').html(
                        // ES6语法
                        ` <a href="spxq2.html">
                           <img src="${date[i].imgsrc}" alt="">
                           <p>
                             ${date[i].name}
                           </p>
                           <h6 class="product-price">
                            ${date[i].price}
                           </h6>
                         </a>`
                    )
                }

            }
            kongbai();
        }

    }
    if (!ishave) {
        addlis();
        if (ishave != undefined) {
            $('.sellOut').css('display', 'block');
        }

    }



    // 给加载更多的按钮添加点击事件,一点击生成12个商品列表
    $('.more').on('click', function () {
        addlis();
    })


    // 清空商品列表项
    // $('.product-list').empty();

    // 点击top-choice里的某一项option,如果该项option(项链)被选中,清空列表项,同时筛选出date里的des为(项链)的都添加到product-list中
    $('.sel').on('change', function () {
        $('.product-list').empty();
        console.log($('.sel option:selected').text());
        for (var i = 0; i < date.length; i++) {
            if ($('.sel option:selected').text() == date[i].des) {
                $('<div class="product-item"></div>').appendTo('.product-list').html(
                    // ES6语法
                    ` <a href="spxq2.html">
                       <img src="${date[i].imgsrc}" alt="">
                       <p>
                         ${date[i].name}
                       </p>
                       <h6 class="product-price">
                        ${date[i].price}
                       </h6>
                     </a>`
                )
            }
        }
        kongbai();
    })
    $('.special-nav-left').on('change', function () {
        $('.product-list').empty();
        console.log($('.special-nav-left option:selected').text());
        for (var i = 0; i < date.length; i++) {
            if ($('.special-nav-left option:selected').text() == date[i].des) {
                $('<div class="product-item"></div>').appendTo('.product-list').html(
                    // ES6语法
                    ` <a href="spxq2.html">
                       <img src="${date[i].imgsrc}" alt="">
                       <p>
                         ${date[i].name}
                       </p>
                       <h6 class="product-price">
                        ${date[i].price}
                       </h6>
                     </a>`
                )
            }
        }
        kongbai();
    })

    function kongbai() {
        if ($('.product-list>div').length % 3 == 2) {
            $('<div class="product-kongbai"></div>').appendTo('.product-list')
        }
    }


})

$(window).scroll(function () {
    var v = $(window).scrollTop();
    if (v > 1000) {
        $('.totop').show();
    } else {
        $('.totop').hide();
    }

})

//注册一个点击事件传给商品详情页面
$('.product-list').on('click', '.product-item',function(){
   var text= $(this).find('p').text();
   localStorage.setItem('xqymxx',text);
})