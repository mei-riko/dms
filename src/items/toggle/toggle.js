import $ from 'jquery';

$(function() {
    $(".toggle .toggle__title").on("click", function(){
        let $toggleTitle = $(this);
        let $toggle = $(this).parent(".toggle");
        let $toggleContent = $toggle.find(".toggle__content").eq(0);
        let $toggleIconPlus = $toggle.find(".toggle__icon-plus").eq(0);
        let $toggleIconMinus = $toggle.find(".toggle__icon-minus").eq(0);

        if( $toggleTitle.data("toggle") === false){
            return null;
        }

        if( !$toggleContent.hasClass("toggle__content--open") ){
            $toggleTitle.addClass("toggle__title--active");
            $toggle.addClass("toggle--open");

            $toggleIconPlus.addClass("toggle__icon-plus--hide");
            $toggleIconMinus.addClass("toggle__icon-minus--active");

            $toggleContent.addClass("toggle__content--open");
            $toggleContent.slideDown();
        }else{
            $toggleTitle.removeClass("toggle__title--active");
            $toggle.removeClass("toggle--open");

            $toggleIconPlus.removeClass("toggle__icon-plus--hide");
            $toggleIconMinus.removeClass("toggle__icon-minus--active");

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
            let $toggleIconPlus = $toggle.find(".toggle__icon-plus").eq(0);
            let $toggleIconMinus = $toggle.find(".toggle__icon-minus").eq(0);


            if( !$toggle.hasClass("toggle--open") ){
                $toggle.addClass("toggle--open");
                $toggleTitle.addClass("toggle__title--active");

                $toggleIconPlus.addClass("toggle__icon-plus--hide");
                $toggleIconMinus.addClass("toggle__icon-minus--active");

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
            let $toggleIconPlus = $toggle.find(".toggle__icon-plus").eq(0);
            let $toggleIconMinus = $toggle.find(".toggle__icon-minus").eq(0);

            if( $toggle.hasClass("toggle--open") ){
                $toggle.removeClass("toggle--open");
                $toggleTitle.removeClass("toggle__title--active");

                $toggleIconPlus.removeClass("toggle__icon-plus--hide");
                $toggleIconMinus.removeClass("toggle__icon-minus--active");
        
                $toggleContent.removeClass("toggle__content--open");
                $toggleContent.slideUp();
            }
        });
    });
});