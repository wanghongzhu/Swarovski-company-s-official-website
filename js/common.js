//data数据
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

if (localStorage.getItem('userNameShow') != null) {
  $('.userflex .login span').text(localStorage.getItem('userNameShow'));
}

$('.right .login').click(function () {
  if (localStorage.getItem('userNameShow') != null) {
    var boolean = confirm('您已登录是否退出？');
    if (boolean) {
      localStorage.removeItem('userNameShow');
      location.reload();
    }
    return false;
  }
})
if (localStorage.getItem('arrMessage') != null) {
  var spgs = localStorage.getItem('arrMessage').split(',').length;
  if ($('.login span').text() == '登录') {
    $('.shopcarnum').text('0');
  } else {
    $('.shopcarnum').text(spgs);
  }



}
//主导航栏部分JS
$(".nav-ul").on("mouseenter", "li", function () {
  if ($(this).index() != 0 && $(this).index() != $(this).index().length - 1) {
    $(".main-nav-slide").show();
    $(".main-nav-slide .w>div")
      .eq($(this).index() - 1)
      .stop()
      .show(300)
      .siblings()
      .stop()
      .hide(300);
  }
});
$(".mouseleave").on("mouseleave", function () {
  $(".main-nav-slide").hide(200);
});
$(".main-nav-slide .off").on("click", function () {
  $(".main-nav-slide").hide(200);
});

//给关于我们设置时间委托
$(".moblie-guanyu").on("click", ".clickhandle", function () {
  if (
    $(this)
    .find(".zankai")
    .css("display") == "block"
  ) {
    $(this)
      .find(".zankai")
      .slideUp(500);
    return;
  }
  $(this)
    .find(".zankai")
    .slideDown(500)
    .parent()
    .siblings()
    .find(".zankai")
    .slideUp(500);
});
//手机端侧边栏JS实现
$(".sibarlist").on("click", "li", function () {
  if (
    $(this)
    .children(".lists")
    .css("display") == "block"
  ) {
    $(this)
      .children(".lists")
      .stop()
      .slideUp(500)
      .prev()
      .find("span")
      .css({
        "font-weight": 400
      })
      .next("i")
      .html("&#xe731;");
  } else {
    $(this)
      .children(".lists")
      .stop()
      .slideDown(500)
      .prev()
      .find("span")
      .css({
        "font-weight": 600
      })
      .next("i")
      .html("&#xe730;");
  }
});
$(".S-title i").on("click", function () {
  $(".mobilesidbar")
    .stop()
    .fadeOut(300);
});
$(".sidbar").on("click", function () {
  $(".mobilesidbar")
    .stop()
    .fadeIn(300);
});
$(document).on("click", function (e) {
  var e = e || window.event; //浏览器兼容性
  var elem = e.target || e.srcElement;

  //循环判断至跟节点，防止点击的是div子元素
  if (elem.className == "mobilesidbar") {
    $(".mobilesidbar").fadeOut(300);
  }
});

$('.jz .close').on('click', function () {
  $('.shuru').fadeOut(200);
})
$('.totop').on('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500)
})
$('.main-nav .search input').on('focus', function () {
  $(this).parent().animate({
    width: 300
  }, 500, function () {
    //这里让下拉框出现
  });
  $('.main-nav .nav-ul').css({
    width: '60%'
  })
})
$('.main-nav .search input').on('blur', function () {
  //先让下拉框消失
  if ($(this).val() == "") {
    $('.seach_list').stop().slideUp();
    $(this).parent().animate({
      width: 150
    }, 500);
    $('.main-nav .nav-ul').css({
      width: '70%'
    })
  }


})

$('.main-nav .search input').keyup(function () {
  var text = $('.main-nav .search input').val();
  if (text != "") {
    $('.seach_list').stop().slideDown(100);
    $('.seach_list').empty();
    for (var i = 0; i < date.length; i++) {
      var dateName = date[i].name;
      var datedes = date[i].des;
      if (dateName.indexOf(text) != -1 || datedes.indexOf(text) != -1) {
        if ($('<li></li>').length <= 4) {
          $('<li></li>').appendTo('.seach_list').text(date[i].name)
        }
      }
    }
  } else {
    $('.seach_list').empty();
    $('.seach_list').stop().slideUp(100);
  }

});
$('.seach_list').on('click', 'li', function () {
  $('.main-nav .search input').val($(this).text());
  $('.seach_list').stop().slideUp();
  localStorage.setItem('dateName', $('.main-nav .search input').val());
  location.href = 'list.html';
})
$('.search i').on('click', function () {
  localStorage.setItem('dateName', $('.main-nav .search input').val());
  location.href = 'list.html';
})





$('.mobileS-seach input').keyup(function () {
  var text = $('.mobileS-seach input').val();
  if (text != "") {
    $('.mobileS_seach_list').stop().slideDown(100);
    $('.mobileS_seach_list').empty();
    for (var i = 0; i < date.length; i++) {
      var dateName = date[i].name;
      var datedes = date[i].des;
      if (dateName.indexOf(text) != -1 || datedes.indexOf(text) != -1) {
        if ($('<li></li>').length <= 4) {
          $('<li></li>').appendTo('.mobileS_seach_list').text(date[i].name)
        }
      }
    }
  } else {
    $('.mobileS_seach_list').empty();
    $('.mobileS_seach_list').stop().slideUp(100);
  }

});
$('.mobileS_seach_list').on('click', 'li', function () {
  $('.mobileS-seach input').val($(this).text());
  $('.mobileS_seach_list').stop().slideUp();
  localStorage.setItem('dateName', $(this).text());
  location.href = 'list.html';
})
$('.mobileS-seach span').on('click', function () {
  localStorage.setItem('dateName', $('.mobileS-seach input').val());
  location.href = 'list.html';
})







$('.moblie-seach input').keyup(function () {
  var text = $('.moblie-seach input').val();
  if (text != "") {
    $('.moblie-seach_list').stop().slideDown(100);
    $('.moblie-seach_list').empty();
    for (var i = 0; i < date.length; i++) {
      var dateName = date[i].name;
      var datedes = date[i].des;
      if (dateName.indexOf(text) != -1 || datedes.indexOf(text) != -1) {
        if ($('<li></li>').length <= 4) {
          $('<li></li>').appendTo('.moblie-seach_list').text(date[i].name)
        }
      }
    }
  } else {
    $('.moblie-seach_list').empty();
    $('.moblie-seach_list').stop().slideUp(100);
  }

});
$('.moblie-seach_list').on('click', 'li', function () {
  $('.moblie-seach input').val($(this).text());
  $('.moblie-seach_list').stop().slideUp();
  localStorage.setItem('dateName', $(this).text());
  location.href = 'list.html';
})
$('.moblie-seach i').on('click', function () {
  localStorage.setItem('dateName', $('.moblie-seach input').val());
  location.href = 'list.html';
})






$('.shopcar').click(function () {
  if (localStorage.getItem('userNameShow') == null) {
    var islogin = confirm('请先登录后再查询购物车');
    if (islogin) {
      location.href = 'login.html'
    } else {
      return false;
    }
  } else {
    if (localStorage.getItem('xqymxx') != null) {
      localStorage.removeItem('xqymxx')
    }
    location.href = 'shopcar.html'
  }
});