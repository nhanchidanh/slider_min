$(document).ready(function () {
    //Xu li su kien khi nhap vao anh thumb
    $(".thumb-item").click(function (e) { 
        e.preventDefault();
        let picture_src = $(this).find('img').attr('src');
        $(".show-picture img").attr('src',picture_src);

        $(".thumb-item").removeClass("active");
        $(this).addClass("active");
    });

    //Xu li nhap vao next va prev
    $(".next-btn").click(function (e) { 
        e.preventDefault();
        if($(".thumb-item:last-child").hasClass('active')){
            $(".thumb-item:first-child").click()
        }
        $(".thumb-item.active").next().click()
    });

    $(".prev-btn").click(function (e) { 
        e.preventDefault();
        if($(".thumb-item:first-child").hasClass('active')){
            $(".thumb-item:last-child").click()
        }
        $(".thumb-item.active").prev().click()
    });

    //active phan tu anh thumb dau tien
    $(".thumb-item:first-child").click()
});
