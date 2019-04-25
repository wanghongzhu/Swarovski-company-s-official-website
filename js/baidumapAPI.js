$('.map').on('click', function () {
    $('.shuru').fadeIn(500);
    // 百度地图API功能  Baidu maps API features
    var map = new BMap.Map("allmap");
    var lng, lat;
    var point = new BMap.Point(116.640016, 40.170009);
    map.centerAndZoom(point, 16);
    var geolocation = new BMap.Geolocation();
    // alert('正在定位，请稍后...');
    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            startOper(map, r);
            //alert('您的位置：'+r.point.lng+','+r.point.lat);
        } else {
            alert('failed' + this.getStatus());
        }
    }, {
        enableHighAccuracy: true
    })

    setTimeout(function () {
        map.setZoom(14);
    }, 2000); //2秒后放大到14级
    map.enableScrollWheelZoom(true);

    //查找我的位置 Find my place
    function myPosition() {
        // alert("正在查找我的位置，请稍后！");
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {

                startOper(map, r);
            } else {
                alert('failed' + this.getStatus());
            }
        }, {
            enableHighAccuracy: true
        })
    }
    //启动定位操作  Boot location operation
    function startOper(map, r) {
        //使用新图标替换原始图标
        var point = new BMap.Point(116.640016, 40.170009);
        var myIcon = new BMap.Icon("upload/favico.ico", new BMap.Size(50, 50));
        var mk = new BMap.Marker(r.point, {
            icon: myIcon
        });
        mk.enableDragging(); //设置其可拖拽   
        mk.addEventListener("dragend", function (e) {
            //   addressAnalysis(e.point, mk);
            addressAnalysis(point, mk);
        });
        // var label = new BMap.Label("我在这", {
        //     offset: new BMap.Size(110, 70)
        // });
        map.addOverlay(mk);
        // mk.setLabel(label);
        //   map.panTo(r.point);
        map.panTo(point);
        //   lng = r.point.lng;
        //   lat = r.point.lat;
        lng = point.lng;
        lat = point.lat;
        // alert("查找完成");
        addressAnalysis(r.point);
    }
    //店铺寻找  Shop looking
    function search() {
        var allOverlay = map.getOverlays();
        for (var i = 0; i < allOverlay.length - 1; i++) {
            try {
                if (allOverlay[i].getLabel().content == "搜索到这里" || allOverlay[i].getLabel().content == "我在这") {

                } else {
                    map.removeOverlay(allOverlay[i]);
                }
            } catch (e) {
                map.removeOverlay(allOverlay[i]);
            }

        }
        //   var selectInfo = document.getElementById("selectInfo").value;
        var selectInfo = '施华洛世奇';
        map.centerAndZoom(new BMap.Point(lng, lat), 11);
        var local = new BMap.LocalSearch(map, {
            renderOptions: {
                map: map,
                autoViewport: true
            }
        });
        local.searchNearby(selectInfo, "附近");

    }
    $('.jz button').on('click', function () {
        search();
    })
    //地址解析器  Address parser
    function addressAnalysis(point, marker) {
        var gc = new BMap.Geocoder();
        var point = new BMap.Point(116.640016, 40.170009);
        gc.getLocation(point, function (rs) {
            var opts = {
                width: 250, // 信息窗口宽度
                height: 30, // 信息窗口高度
                //title : "此为自定义信息窗口" , // 信息窗口标题
                enableMessage: true //设置允许信息窗发送短息
            };
            var addComp = rs.addressComponents;
            var adr = "你处于 " + addComp.city + ", " + addComp.district + ", " + addComp.street + "附近";
            //创建信息窗口，点击标注时显示标注对应的车牌号码以及当前地址
            var infoWindow1 = new BMap.InfoWindow(adr, opts);
            //marker.addEventListener("click", function(){map.openInfoWindow(infoWindow1,point);});
            map.openInfoWindow(infoWindow1, point);
            search();
        });
    }
})