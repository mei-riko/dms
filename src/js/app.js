import $ from 'jquery';

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

    if( $('.select_table').length > 0 ){
        function actionFormateState (state) {
            if (!state.id) {
              return state.text;
            }
            var $state = $(
              '<span data-value="' + state.element.value + '">' + state.text + '</span>'
            );
            return $state;
        };
        $('.select_table').select2({
            theme: "table",
            placeholder: "Action",
            minimumResultsForSearch: Infinity,
            // containerCssClass: ':all:',
            templateResult: actionFormateState,
            dropdownPosition: 'auto',
        });
    }
    $('.table .table__edit-action').on("click", function(){
        $(this).parent().find('.table__edit-select').toggle();
    })
    // Fancybox
    // Fancybox.bind("[data-fancybox]", {
    //     autoFocus: false,
    //     dragToClose: false,
    // });

    // Tooltips
    // $('[data-toggle="tooltip"]').tooltip();

    $('.status.status_warning[data-toggle="tooltip"]').tooltip({
        customClass: 'warning'
    });
    $('.status.status_true[data-toggle="tooltip"]').tooltip({
        customClass: 'true'
    });
    $('.status.status_false[data-toggle="tooltip"]').tooltip({
        customClass: 'false'
    });
});

import './mouseup';
import '../blocks/sidebar/sidebar';
