const openSidebar = () => {
    $(".sidebar").addClass("sidebar--small");
    $(".sidebar__header").addClass("sidebar__header--small");
    $(".sidebar__body").addClass("sidebar__body--small");
    $(".sidebar__footer").addClass("sidebar__footer--small");
    $(".sidebar__logo").addClass("sidebar__logo--small");

    $(".sidebar .sidebar__title").each(function(){
        $(this).addClass("d-none");
    });
    $(".sidebar .sidebar__item").each(function(){
        $(this).addClass("sidebar__item--small");
        $(this).find(".sidebar__item-title").addClass("d-none");
        $(this).find(".sidebar__item-arrow").addClass("d-none");
    });
    $(".sidebar .sidebar__parent-secondary").each(function(){
        $(this).addClass("sidebar__parent-secondary--small");
    });
    $(".sidebar .sidebar__profile").addClass("sidebar__profile--small");
    $(".sidebar .sidebar__profile-info").addClass("d-none");        
    $(".sidebar .sidebar__profile-image").addClass("sidebar__profile-image--small");

    $(".content").addClass("content--sidebar-small");

    $(".sidebar .sidebar__item.sidebar__item_parent.sidebar__item_parent--open").each(function(){
        let $parent = $(this);
        let children = $parent.data("nav");
        $parent.removeClass("sidebar__item_parent--open")
        $(".sidebar .sidebar__children" + children).removeClass("sidebar__children--open");
    });
}
const closeSidebar = () => {
    $(".sidebar").removeClass("sidebar--small");
    $(".sidebar__header").removeClass("sidebar__header--small");
    $(".sidebar__body").removeClass("sidebar__body--small");
    $(".sidebar__footer").removeClass("sidebar__footer--small");
    $(".sidebar__logo").removeClass("sidebar__logo--small");

    $(".sidebar .sidebar__title").each(function(){
        $(this).removeClass("d-none");
    });
    $(".sidebar .sidebar__item").each(function(){
        $(this).removeClass("sidebar__item--small");
        $(this).find(".sidebar__item-title").removeClass("d-none");
        $(this).find(".sidebar__item-arrow").removeClass("d-none");
    });
    $(".sidebar .sidebar__parent-secondary").each(function(){
        $(this).removeClass("sidebar__parent-secondary--small");
    });
    $(".sidebar .sidebar__profile").removeClass("sidebar__profile--small");
    $(".sidebar .sidebar__profile-info").removeClass("d-none");        
    $(".sidebar .sidebar__profile-image").removeClass("sidebar__profile-image--small");

    $(".content").removeClass("content--sidebar-small");
}

$(function() {
    // Animate Scroll
    $(document).on('click', '[data-trigger="scroll"]', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    // Link Disable
    $(document).on('click', '[data-trigger="click"]', function(e){
        e.preventDefault();
    })
    
    $('.table .table__edit-action').on("click", function(){
        $(this).parent().find('.table__edit-select').toggle();
    })
    $('.status.status_warning[data-toggle="tooltip"]').tooltip({
        customClass: 'warning'
    });
    $('.status.status_true[data-toggle="tooltip"]').tooltip({
        customClass: 'true'
    });
    $('.status.status_false[data-toggle="tooltip"]').tooltip({
        customClass: 'false'
    });

    // Sidebar
    $('.sidebar .sidebar__container').each((index, element) => new SimpleBar(element));

    if ( $(window).width() <= 1200 || !window.matchMedia('screen and (min-width: 1200px)').matches ){
        let $toggle = $(".sidebar-action");
        if( !$toggle.hasClass("sidebar-action--small") ){
            $toggle.addClass("sidebar-action--small");
            openSidebar();
        };
    }

    $(".sidebar-action").on("click", function(){
        let $toggle = $(this);
        if( !$toggle.hasClass("sidebar-action--small") ){
            $toggle.addClass("sidebar-action--small");
            $toggle.addClass("sidebar-action--opened");
    
            openSidebar();
        }else{
            $toggle.removeClass("sidebar-action--small");
    
            closeSidebar();
        }
    });
    
    $(".sidebar .sidebar__item.sidebar__item_parent").on("click", function(){
        let $parent = $(this);
        let $parentIcon = $(this).find(".sidebar__item-arrow");
        let children = $parent.data("nav");
    
        if( !$parent.hasClass("sidebar__item_parent--open") ){
            if( $parent.hasClass("sidebar__item--small") ){
                $(".sidebar-action").removeClass("sidebar-action--small");
                openSidebar();
            }
            $parent.addClass("sidebar__item_parent--open");
            $parentIcon.addClass("sidebar__item-arrow--open");
            $(".sidebar .sidebar__children" + children).addClass("sidebar__children--open");
        }else{
            $parent.removeClass("sidebar__item_parent--open")
            $parentIcon.removeClass("sidebar__item-arrow--open");
            $(".sidebar .sidebar__children" + children).removeClass("sidebar__children--open");
        }
    });

    // Toggle
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

$(document).on('mouseup', function (e){
    let $tableEditSelect = $('.table .table__edit-select');
    let $tableEditAction = $('.table .table__edit-action');
    if (!$tableEditSelect.is(e.target) // клик был не по блоку
        && !$tableEditAction.is(e.target)
        && $tableEditAction.has(e.target).length === 0 // и не по его дочерним
    ) {
        $tableEditSelect.hide();
    }
});

// Resize
$(window).on("resize", function(){
    let $toggle = $(".sidebar-action");

    if ( $(window).width() <= 1200 || !window.matchMedia('screen and (min-width: 1200px)').matches ){
        if( !$toggle.hasClass("sidebar-action--small") ){
            $toggle.addClass("sidebar-action--small");
            openSidebar();
        };
    }else{
        if( !$toggle.hasClass("sidebar-action--opened") ){
            $toggle.removeClass("sidebar-action--small");
            closeSidebar();
        };
    }
});