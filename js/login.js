$(function () {

  var passwordStr;

  // 需求：1.登陆注册页面一开始都不显示
  // 登陆页面的类名是login-top-up 注册页面的类名是 login-buttom-up 都为display none
  // 2.当点击注册边上i箭头 类名 icon-icon-xia的时候 登录页面login-top-up
  // 显示display：block
  // 不管怎么样。。。先试试吧！
  // var count = 0;

  // $('#title1').click(function () {
  //     // count++;
  //     //  $('.login-buttom').offset(top,398);
  //     // if (count % 2 == 0) {
  //     //     $('.login-top-up').stop()
  //     //         .fadeOut(600);

  //     //     $('.login-buttom-up').css('display', 'none');
  //     // } else {
  //     //     $('#xia1').stop().fadeOut(60);
  //     //     $('#shang1').stop().fadeIn(60);
  //     //     $('.login-top-up').stop().fadeIn(600);
  //     //     // $('.login-buttom-up').css('display', 'none');
  //     // }
  //     //当我点击下箭头的时候 变成上箭头 同时登陆块显示
  //     $('#xia1').stop().fadeOut(60);
  //     $('#shang1').stop().fadeIn(60);
  //     $('.login-top-up').stop().fadeIn(600);

  // })

  // // 当我点击上箭头的时候 登陆块隐藏
  // $('#shang1').click(function(){
  //     $('#shang1').stop().fadeOut(60);
  //     $('#xia1').stop().fadeIn(60);
  //     $('.login-top-up').stop().fadeOut(600);

  // })
  // // 在点击注册那里的箭头的时候 也是点下箭头显示上箭头头隐藏
  // $('#title2').click(function () {

  //     //当我点击下箭头的时候 变成上箭头 同时注册块显示
  //     $('#xia2').stop().fadeOut(60);
  //     $('#shang2').stop().fadeIn(60);
  //     $('.login-buttom-up').stop().fadeIn(600);

  // })
  // // 当我点击上箭头的时候 注册块隐藏
  // $('#shang2').click(function(){
  //     $('#shang2').stop().fadeOut(60);
  //     $('#xia2').stop().fadeIn(60);
  //     $('.login-buttom-up').stop().fadeOut(600);

  // })
  // 1.点击#title1的时候 下面的

  // 现在的情况是 1.实现点击#title1 的时候下面next
  // （）的login-top-up 显示sildDown（600）再点parent 找到
  // 父元素login-top 再点next兄弟元素login-buttom的
  // 子元素children（login-buttom-up）让他隐藏sildeUp（）

  var userName = localStorage.getItem("userNameSession");

  if (userName != null) {
    $("#phone").siblings('label').children('span').addClass('span-change').animate({
      top: 5,
      left: 80,
      fontSize: 12
    }, 500);;
    $("#phone").val(userName);
  }


  $("#title1").click(function () {
    if ($(".login-top-up").css("display") == "block") {
      $("#title1")
        .next(".login-top-up")
        .slideUp(400);

      $("#xia1").show(60);
      $("#shang1").hide(60);
      // $('#xia2').show();
      // $('#shang2').hide();
      return;
    } else {
      $("#xia1").hide(60);
      $("#shang1").show(60);
      $("#xia2").show();
      $("#shang2").hide();
      $("#title1")
        .next(".login-top-up")
        .slideDown(400);
      $(".login-buttom-up").slideUp(400);
    }
  });

  $("#title2").click(function () {
    if ($(".login-buttom-up").css("display") == "block") {
      $("#title2")
        .next(".login-buttom-up")
        .slideUp(400);
      $("#xia2").show(60);
      $("#shang2").hide(60);
      return;
    } else {
      $("#xia2").hide(60);
      $("#shang2").show(60);

      $("#xia1").show(60);
      $("#shang1").hide(60);
      $(".login-top-up").slideUp(400);
      $("#title2")
        .next(".login-buttom-up")
        .slideDown(400);
    }
  })
  //   点哪个span让哪个span有动画开始
  // jquery的事件委托

  // $('label').on('click','span',function(){
  //     $(this).addClass('span-change');
  //     $(this).animate({top:5,left:80,fontSize:12},500);
  // });
  $('.loginMain').on('click', 'input[type=text]', function () {
    $(this).siblings('label').children('span').addClass('span-change').animate({
      top: 5,
      left: 80,
      fontSize: 12
    }, 500);;
    // $(this).animate({top:5,left:80,fontSize:12},500);
  });
  $('.loginMain').on('click', 'input[type=password]', function () {
    $(this).siblings('label').children('span').addClass('span-change').animate({
      top: 5,
      left: 80,
      fontSize: 12
    }, 500);;
    // $(this).animate({top:5,left:80,fontSize:12},500);
  });

});

// $('.icon-yanjing-bi').click(function () {

//   if ($("#password").val() !== '') {

//     passwordStr = $('#password').val();
//     console.log(passwordStr);
//     $("#password").val('*********');
//   }

//   $('.icon-yanjing-bi').css('display', 'none');
//   $('.icon-yanjing-shi').css('display', 'block');
// });
// $('.icon-yanjing-shi').click(function () {
//   // $("#password").val('*********');
//   console.log(passwordStr);
//   $("#password").val(passwordStr);
//   $('.icon-yanjing-shi').css('display', 'none');
//   $('.icon-yanjing-bi').css('display', 'block');
// });

$('.check-password i').click(function () {
  if ($('#password').attr('type') == 'password') {
    $('#password').attr('type', 'text');
    $('.icon-yanjing-bi').css('display', 'none');
    $('.icon-yanjing-shi').css('display', 'block');
  } else {
    $('#password').attr('type', 'password');
    $('.icon-yanjing-bi').css('display', 'block');
    $('.icon-yanjing-shi').css('display', 'none');
  }
})

function loginByUserName() {
  var password = $("#password").val();

  var userName = $("#phone").val();



  var jizhuMy = $('input[name="jizhuMy"]:checked').val();



  if (userName.trim() == "") {
    // // alert("请输入手机号  /BE SWAROVSKI 卡号*");
    // layer.msg('请输入手机号  /BE SWAROVSKI 卡号') {
    //   time: 20000,
    //   btn: ['明白了', '知道了', '哦']}
    // // $('#phone').css('border','2px solid red');
    // // $('#phone').css('placeholder','请输入手机号  /BE SWAROVSKI 卡号！')
    layer.msg('请输入手机号  /BE SWAROVSKI 卡号', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });

    return;
  }


  // if (password.trim() == "") {
  //   // alert("密码 /BE SWAROVSKI 卡密*");
  //   // $('#password').css('border','2px solid red');
  //   layer.msg('密码 /BE SWAROVSKI 卡密', {
  //     time: 200000, //20s后自动关闭
  //     btn: ['确认']
  //   });
  //   return;
  // }
  // if(password.trim() == "" &&userName.trim() == "" ){
  //   $('#phone').css('border','2px solid red');
  //   $('#password').css('border','2px solid red');
  // }




  var passwordStr = localStorage.getItem(userName);
  console.log();
  
  console.log(passwordStr);

  if (passwordStr == password) {

    if (jizhuMy == undefined) {

    } else {

      localStorage.setItem("userNameSession", userName);

    }
    // alert("登陆成功");
    // layer.msg('登陆成功', {
    //   time: 3000, //20s后自动关闭
    //   btn: ['确认']
    // });
    localStorage.setItem("userNameShow", userName);
    history.back();
    return;
  } else {
    // alert("用户名或者密码错误");
    layer.msg('用户名或者密码错误', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;

  }


}
// loginByUserName();
// 给按钮注册click事件
$('#yanzhengma').click(function () {
  // 禁用按钮
  $(this).prop('disabled', true);
  // 定义一个数字
  var num = 60;
  // 设置按钮的内容
  $(this).val(num + '秒后重新发送');
  // 创建一个变量，暂存this。 this在定时器外部中代表的是事件源
  var that = this;
  // 开启一个定时器
  var timer = window.setInterval(function () {
    // this 在定时器中默认代表的是window
    console.log(that);
    num--;
    // 更新按钮的内容
    $(that).val(num + '秒后重新发送');
    // 判断num是否等于0
    if (num == 0) {
      // 清除定时器
      clearInterval(timer);
      // 更新内容
      $(that).val('发送');
      // 消除禁用
      $(that).prop('disabled', false)
    }
  }, 1000);
});

function rightByUserName() {


  var gender = $('input[name="gender"]:checked').val();

  var userName = $("#usename").val();

  var add_name = $("#add-name").val();

  var add_yanzheng = $("#add-yanzheng").val();

  var addressByCity = $("#addressByCity").val();

  var addressByCityQu = $("#addressByCityQu").val();

  var addressByCityQuTwo = $("#addressByCityQuTwo").val();

  var address = $("#address").val();

  var add_mail = $("#add-mail").val();

  var check_mail = $("#check-mail").val();

  var birth_year = $("#birth_year").val();

  var birth_money = $("#birth_money").val();

  var birth_day = $("#birth_day").val();

  var add_password = $("#add-password").val();

  var ok_password = $("#ok-password").val();

  var cookieXieYi = $('input[name="cookieXieYi"]:checked').val();

  var newXinwen = $('input[name="newXinwen"]:checked').val();

  var xieYiTwo = $('input[name="xieYiTwo"]:checked').val();


  if (userName.trim() == "") {
    // alert("请输入姓名");
    layer.msg('请输入姓名', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (add_name.trim() == "") {
    // alert("请输入手机号");
    layer.msg('请输入手机号', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }
  var userName = localStorage.getItem(add_name);
  console.log(userName);
  
  if (userName != null) {

    // alert("您输入的账号已存在");
    layer.msg('您输入的账号已存在，请重新输入', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;

  }

  if (!(/^1[3|4|5|8|9|6|7][0-9]\d{4,8}$/.test(add_name))) {
    // alert("请输入正确的手机号");
    layer.msg('请输入正确的手机号', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });

    return;
  }



  if (add_yanzheng.trim() == "") {
    // alert("请输入短信验证码");
    layer.msg('请输入短信验证码', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (addressByCity.trim() == "") {
    // alert("请选择所在地区");
    layer.msg('请选择所在地区', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (addressByCityQu.trim() == "") {
    // alert("请选择所在城区");
    layer.msg('请选择所在地区', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (addressByCityQuTwo.trim() == "") {
    // alert("请选择所在地区");
    layer.msg('请选择所在地区', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (address.trim() == "") {
    // alert("请输入具体地址");
    layer.msg('请输入具体地址', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (add_mail.trim() == "") {
    // alert("请输入电子邮件");
    layer.msg('请输入电子邮件', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (check_mail.trim() == "") {
    // alert("请输入确认电子邮件");
    layer.msg('请确认您的电子邮件', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (add_mail.trim() != check_mail.trim()) {
    // alert("邮件不一致");
    layer.msg('两次输入的邮件地址不一致', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (!reg.test(add_mail)) {
    // alert("请输入正确的邮箱");
    layer.msg('请输入正确的邮箱', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (birth_year.trim() == "") {
    // alert("请选择年");
    layer.msg('请选择年', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (birth_money.trim() == "") {
    // alert("请选择月");
    layer.msg('请选择月', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (birth_day.trim() == "") {
    // alert("请选择日");
    layer.msg('请选择日', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (add_password.trim() == "") {
    // alert("请输入密码");
    layer.msg('请输入密码', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }

  if (ok_password.trim() == "") {
    // alert("请确认你的密码");
    layer.msg('请确认您的密码', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;
  }


  if (add_password.trim() != ok_password.trim()) {
    // alert("密码不一致");
    layer.msg('密码不一致 请检查', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });

    return;

  }

  if (cookieXieYi == undefined) {
    // alert("请同意接受我们的隐私和 COOKIE 政策");
    layer.msg('请同意接受我们的隐私和 COOKIE 政策', {
      time: 200000, //20s后自动关闭
      btn: ['确认', '感谢您的支持！']
    });

    return;

  }

  // if(newXinwen == undefined){
  //   alert("请同意接受我们的新闻通讯");
  //   return;

  // }


  // if (xieYiTwo == undefined) {
  //   // alert("请同意接受我们的隐私政策");
  //   layer.msg('请确认您有关参与 BE SWAROVSKI 的相关政策', {
  //     time: 200000, //20s后自动关闭
  //     btn: ['确认', '感谢您的支持！']
  //   });
  //   return;

  // }


  var userName = localStorage.getItem(add_name);

  if (userName != null) {

    // alert("您输入的账号已存在");
    layer.msg('您输入的账号已存在，请重新输入', {
      time: 200000, //20s后自动关闭
      btn: ['确认']
    });
    return;

  }

  //存储数据
  localStorage.setItem(add_name, add_password);

  // alert("注册成功");
  layer.msg('注册成功', {
    time: 2000, //20s后自动关闭
    btn: ['确认']
  });
  $("#title1").trigger('click');
  
}
// rightByUserName();