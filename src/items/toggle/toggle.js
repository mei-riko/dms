import $ from 'jquery';

$(function() {
    $(".toggle .toggle__title").on("click", function(){
        let $toggleTitle = $(this);
        let $toggle = $(this).parent(".toggle");
        let $toggleContent = $toggle.find(".toggle__content").eq(0);
        let $toggleIcon = $toggle.find(".toggle__icon").eq(0);

        if( !$toggleContent.hasClass("toggle__content--open") ){
            $toggleTitle.addClass("toggle__title--active");
            $toggle.addClass("toggle--open");
            $toggleIcon.addClass("toggle__icon--active");
            $toggleContent.addClass("toggle__content--open");
            $toggleContent.slideDown();
        }else{
            $toggleTitle.removeClass("toggle__title--active");
            $toggle.removeClass("toggle--open");
            $toggleIcon.removeClass("toggle__icon--active");
            $toggleContent.removeClass("toggle__content--open");
            $toggleContent.slideUp();
        }
    });
    $(".toggle .toggle__title-btns .btn").on("click", function(event){
        event.stopPropagation();
    });
    $(document).on("click", ".open-all-toggles", function(){
        let $action = $(this);
        $action.removeClass("open-all-toggles");
        $action.addClass("close-all-toggles");
        $action.text("Close all");

        $(".toggle").each(function(){
            let $toggle = $(this);
            let $toggleTitle = $toggle.find(".toggle__title").eq(0);
            let $toggleContent = $toggle.find(".toggle__content").eq(0);
            let $toggleIcon = $toggle.find(".toggle__icon").eq(0);

            if( !$toggle.hasClass("toggle--open") ){
                $toggle.addClass("toggle--open");
                $toggleTitle.addClass("toggle__title--active");
                $toggleIcon.addClass("toggle__icon--active");
                $toggleContent.addClass("toggle__content--open");
                $toggleContent.slideDown();
            }
        });
    });
    $(document).on("click", ".close-all-toggles", function(){
        let $action = $(this);
        $action.removeClass("close-all-toggles");
        $action.addClass("open-all-toggles");
        $action.text("Open all");

        $(".toggle").each(function(){
            let $toggle = $(this);
            let $toggleTitle = $toggle.find(".toggle__title").eq(0);
            let $toggleContent = $toggle.find(".toggle__content").eq(0);
            let $toggleIcon = $toggle.find(".toggle__icon").eq(0);

            if( $toggle.hasClass("toggle--open") ){
                $toggle.removeClass("toggle--open");
                $toggleTitle.removeClass("toggle__title--active");
                $toggleIcon.removeClass("toggle__icon--active");
                $toggleContent.removeClass("toggle__content--open");
                $toggleContent.slideUp();
            }
        });
    });
});