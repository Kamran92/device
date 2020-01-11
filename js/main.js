$(function () {
    $('.slider').slick({
        "dots": true
    });

    $('.services-control-slider').slick({
        "dots": true,
        customPaging: function (slider, i) {
            let servicesControlArr = ["Доставка", "Гарантия", "Кредит"];
            return "<button>" + servicesControlArr[i] + "</button>";
        },
    });
    $(".catalog-body__filter-slider").ionRangeSlider({
        min: 0,
        max: 10000,
        from: 0,
        to: 5000,
        type: "double",
        hideMinMax: "false",
        onLoad: function (obj) { // callback, вызывается при запуске и обновлении
            $(".min-price").attr("value", obj["fromNumber"]);
            $(".max-price").attr("value", obj["toNumber"]);
        },
        onFinish: function (obj) {
            $(".min-price").attr("value", obj["fromNumber"]);
            $(".max-price").attr("value", obj["toNumber"]);
        },
    });

    $("[data-fancybox]").fancybox({
        btnTpl: {
            smallBtn:
                '<button type = "button" data-fancybox-close class = "fancybox-button fancybox-close-small" title = "{{CLOSE}}"></button>'
        },
    });
});
