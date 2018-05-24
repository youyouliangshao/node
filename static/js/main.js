$(document).ready(function() {
    if(!sessionStorage.getItem('key')) {
        Cookies.remove('phone');
        Cookies.remove('cook');
    }
    var t = "http://api.live.limixuexi.com/lesson/yue-ke";



    $("#username,.logphone,.logmes").bind('input propertychange', function() {
        if($(this).val() != '') {
            $(this).next('.closeput').show()
        } else {
            $(this).next('.closeput').hide()
        }
    });
    $(".closeput").click(function() {
        $(this).hide().prev("#username").val('')
    })

    //验证手机号
    if(window.sessionStorage.getItem("jzphone")) {
        var useriphone = window.sessionStorage.getItem("jzphone");
        $(".useriphone").val(useriphone);
    }
    //验证码获取
    var flag = true;
    $(".getvercode").click(function() {
        var useriphone = $("#useriphone").val();
        var userName = $("#username").val();
        if(userName.length < 2) {
            alert("学生姓名最少输入两个字符");
            return false;
        }
        if(!(/^1[345789]\d{9}$/.test(useriphone))) {
            alert("手机号码有误，请重填");
            return false;
        }
        if(!flag) return;
        flag = false;
        var time = 60,
            Interval;
        var _self = $(this);
        var data = {
            ig: 'true',
            phonenum: useriphone,
            type: '7',
            version: 'v2.0'
        };
        $.ajax({ ///limi-edu-applet/send-mobile-verify-code-v2
            url: "https://api-sso.limixuexi.com/verifycode-login/send-login-verifycode",
            type: "get",
            headers: {
                "ua-limi": "livevideo-student"
            },
            data: data,
            dataType: "jsonp",
            success: function(e) {
                if(1000 === e.code) {
                    $('.codesms').attr('disabled', false)
                    _self.html('<em id="fix" disabled="disabled">' + time + '</em>秒后再获取');
                    Interval = setInterval(function() {
                        if(time == 1) {
                            _self.html("重新获取");
                            clearInterval(Interval);
                            flag = true;
                        }
                        time--;
                        $("#fix").html(time);
                    }, 1000)
                } else {
                    alert("请求错误")
                    _self.html("重新获取");
                    flag = true;
                    return;
                }
                //			console.log(e)
            },
            error: function() {
                alert("网络错误");
                flag = true;
                return;
            }
        })
    })
    $(document).click(function() {
        $(".drop-down").slideUp();
    })

    //验证码失焦
    $(".codesms").on('keyup', function() {
        var val = $.trim($(this).val()).length;
        checkcode();
        btnbgchang();
    })

    //姓名输入框失焦
    $(".username").on('blur', function() {
        var val = $.trim($(this).val()).length;
        checkname();
        btnbgchang();
    })

    function checkname() {
        var namesms = $(".username").val();
        if(!namesms || namesms.length < 2) {
            $(".username").parent().addClass("liborde")
            $(".lipmes").eq(0).children().show();
            $(".lipmes").eq(0).children("i").removeClass("yesp").addClass("errp");
            return false;
        } else {
            $(".username").parent().removeClass("liborde")
            $(".lipmes").eq(0).children().hide();
        }
    }

    function checkcode() {
        var codesms = $(".codesms").val();
        if(!codesms || codesms.length != 4) {
            $(".codesms").parent().addClass("liborde")
            $(".lipmes").eq(2).children().show();
            $(".lipmes").eq(2).children("i").removeClass("yesp").addClass("errp");
            return false;
        } else {
            $(".codesms").parent().removeClass("liborde")
            $(".lipmes").eq(2).children().hide();
        }
    }

    //	function checkgrade() {
    //		var stugrade = $(".stugrade").text();
    //		if(stugrade == "" || stugrade == "请选择孩子的年级") {
    //			$(".lipmes").eq(3).children().show();
    //			$(".lipmes").eq(3).children("i").removeClass("yesp").addClass("errp");
    //			return false;
    //		} else {
    //			$(".lipmes").eq(3).children().hide();
    //		}
    //	}

    //立即领取颜色变换
    $(".chekbox").click(btnbgchang)

    function btnbgchang() {
        if($("input[type='checkbox']").is(':checked') == true && $(".codesms").val() != "" && $(".codesms").val().length == 4 && $(".stugrade").text() != "请选择孩子的年级" && $('.username').val().length > 1) {
            $(".form_btn").addClass("form_btn_active");
        } else {
            $(".form_btn").removeClass("form_btn_active");
        }
    }
    //领取
    $(".form_btn").click(function() {
        var checked = $(".form_btn").hasClass("form_btn_active");
        if(!checked) return;
        //验证手机
        var codesms = $(".codesms").val();
        var useriphone = $("#useriphone").val();
        var username = $("#username").val();
        //		var grade = $(".select span").data("da");
        var o = {
            ig: 'true',
            username: useriphone,
            yzm: codesms,
            realname: username,
            //			grade: grade,
            source: 1 //来源
        };
        $.ajax({
            url: "http://cc.limiketang.com/limi-math-web/api-add-appoint-info",
            type: "get",
            headers: {
                "ua-limi": "livevideo-student"
            },
            data: o,
            dataType: "jsonp",
            success: function(e) {
                if(e.code === 'E_SUCCESS') {
                    window.location.href = "/back"
                } else {
                    $(".codesms").parent().addClass("liborde")
                    $(".lipmes").eq(2).children().show();
                    $(".lipmes").eq(2).children("i").removeClass("yesp").addClass("errp");
                    alert("手机号与验证码不匹配~")
                }
            },
            error: function() {
                alert("网络错误");
                return;
            }
        })
    })

})
