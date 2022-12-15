import $ from 'jquery';

$(function() {
    $(".structure .structure__title").on("click", function(){
        let $toggle = $(this).parent(".structure");
        let $toggleBtn = $toggle.find(".structure__btn").eq(0);

        if( !$toggleBtn.hasClass("structure__btn--active") ){
            $toggleBtn.addClass("structure__btn--active");
        }else{
            $toggleBtn.removeClass("structure__btn--active");
        }
    });
    $(".structure .structure__btn .btn").on("click", function(event){
        event.stopPropagation();
    });

    $( ".structure .structure__title" )
        .mouseover(function() {
            $(this).parent(".structure").find(".structure__btn").eq(0).addClass("structure__btn--hover");
        })
        .mouseout(function() {
            $(this).parent(".structure").find(".structure__btn").eq(0).removeClass("structure__btn--hover");
        });
});