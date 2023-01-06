import $ from 'jquery';

const sidebarIsClose = () => {
    console.log("sidebar is close");
    $(".sidebar").addClass("sidebar--small");
    $(".sidebar__header").addClass("sidebar__header--small");
    $(".sidebar__site-name").addClass("d-none");
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
const sidebarIsOpen = () => {
    console.log("sidebar is open");

    $(".sidebar").removeClass("sidebar--small");
    $(".sidebar__header").removeClass("sidebar__header--small");
    $(".sidebar__site-name").removeClass("d-none");
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
    // Sidebar Scroll
    $('.sidebar .sidebar__container').each((index, element) => new SimpleBar(element));

    if ( $(window).width() <= 1200 || !window.matchMedia('screen and (min-width: 1200px)').matches ){
        let $toggle = $(".sidebar-action");
        if( !$toggle.hasClass("sidebar-action--small") ){
            $toggle.addClass("sidebar-action--small");
            sidebarIsClose();
        };
    }
});

$(".sidebar-action").on("click", function(){
    let $toggle = $(this);
    if( !$toggle.hasClass("sidebar-action--small") ){
        $toggle.addClass("sidebar-action--small");
        $toggle.addClass("sidebar-action--opened");
        sidebarIsClose();
    }else{
        $toggle.removeClass("sidebar-action--small");
        sidebarIsOpen();
    }
});

$(".sidebar .sidebar__item.sidebar__item_parent").on("click", function(){
    let $parent = $(this);
    let $parentIcon = $(this).find(".sidebar__item-arrow");
    let children = $parent.data("nav");

    if( !$parent.hasClass("sidebar__item_parent--open") ){
        if( $parent.hasClass("sidebar__item--small") ){
            $(".sidebar-action").removeClass("sidebar-action--small");
            console.log($parent.hasClass("sidebar__item--small"));
            sidebarIsOpen();
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

// Resize
$(window).on("resize", function(){
    let $toggle = $(".sidebar-action");

    if ( $(window).width() <= 1200 || !window.matchMedia('screen and (min-width: 1200px)').matches ){
        if( !$toggle.hasClass("sidebar-action--small") ){
            $toggle.addClass("sidebar-action--small");
            sidebarIsClose();
        };
    }else{
        if( !$toggle.hasClass("sidebar-action--opened") ){
            $toggle.removeClass("sidebar-action--small");
            sidebarIsOpen();
        };
    }
});