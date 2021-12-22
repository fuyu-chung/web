$(function() {
    getSum();
    $(".checkAll").change(function() {
            // console.log($(this).prop("checked"));//全選按鈕的狀態
            $(".ed,.checkAll").prop("checked", $(this).prop("checked"));
            getSum();
            if ($(".ed,.checkAll").prop("checked")) {
                //如果全選，讓所有商品新增類名（背景顏色）
                $(".tab tbody").children().addClass("current");
            } else {
                $(".tab tbody").children().removeClass("current");
            }
        })
        //如果所有小按鈕的個數都被選了，全選按鈕就選上，如果小按鈕沒有被選上，則全選按鈕就不選上
        //：checked選擇器，查詢本選中的表單元素
    $(".ed").change(function() {
        // console.log($(".ed:checked").length);//小複選框選中的個數
        // console.log($(".ed").length);
        //console.log($(this).prop("checked"));
        if ($(".ed:checked").length === $(".ed").length) {
            $(".checkAll").prop("checked", true);
        } else {
            $(".checkAll").prop("checked", false);
        }
        getSum();
        if ($(this).prop("checked")) {
            $(this).parents("tr").addClass("current");
        } else {
            $(this).parents("tr").removeClass("current");
        }
    })

    $(".add").click(function() {
        let n = parseInt($(this).siblings(".num").val());
        //console.log(n);
        n++;
        $(this).siblings(".num").val(n);
        let price = $(this).parent().siblings(".price").html();
        price = price.substr(1);
        //console.log(price);
        $(this).parent().siblings(".small_total").text("￥" + (n * price).toFixed(2));
        getSum();
    })
    $(".sub").click(function() {
            let n = parseInt($(this).siblings(".num").val());
            //console.log(n);
            if (n === 1) {
                return false;
            }
            n--;
            $(this).siblings(".num").val(n);
            let price = $(this).parent().siblings(".price").html();
            price = price.substr(1);
            //console.log(price);
            $(this).parent().siblings(".small_total").text("￥" + (n * price).toFixed(2));
            getSum();
        })
        //使用者也可以直接修改表單num裡面的值（小bug），同樣計算小計
    $(".num").change(function() {
        let n = $(this).val();
        let price = $(this).parent().siblings(".price").html();
        price = price.substr(1);
        $(this).parent().siblings(".small_total").text("￥" + (n * price).toFixed(2));
        getSum();
    })

    function getSum() {
        let count = 0; //計算總件數
        let money = 0; //計算總價錢
        $(".num").each(function(index) {
            if ($(".ed").eq(index).prop("checked") == true) {
                count += parseInt($(".num").eq(index).val());
                money += parseFloat($(".small_total").eq(index).text().substr(1));
            }
        })
        $(".num_sum").html(count);
        $(".sum").html(money.toFixed(2));
    }

    //刪除商品模組
    //點選刪除之後一定是刪除當前的商品，所以從$(this)出發
    $(".delete").click(function() {
            //刪除的是當前的商品
            $(this).parent().remove();
            $(".ed").change();
            getSum();
            clearCheckAll();
        })
        //刪除選定的商品:小的複選框如果選中就刪除對應的商品
    $(".delSome").click(function() {
            //刪除的是選中的商品
            $(".ed:checked").parent().parent().remove();
            getSum();
            clearCheckAll();
        })
        //清空購物車
    $(".delAll").click(function() {
        $(".tab tbody").empty();
        getSum();
        clearCheckAll();
    })

    function clearCheckAll() {
        if ($(".tab tbody")[0].innerText == '') {
            $(".checkAll").prop("checked", false);
        }
    }
})