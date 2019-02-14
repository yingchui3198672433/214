$('.list').on('click', 'li', function() {
    var index = $(this).index();
    $('.cont-list>li').eq(index).addClass('block').siblings().removeClass('block');
})