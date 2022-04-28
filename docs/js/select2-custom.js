$(function() {
    if( $('.select_table').length > 0 ){
        function actionFormateState (state) {
            if (!state.id) {
                return state.text;
            }
            var obj = $(state.element);
            var objType = obj.data("type");
		    var objAction = obj.data("action");
            
            var $state = $(
            '<span data-type="' + objType + '" data-action="' + objAction + '">' + state.text + '</span>'
            );
            return $state;
        };
        let selectTable = $('.select_table').select2({
            theme: "table",
            minimumResultsForSearch: Infinity,
            templateResult: actionFormateState,
            dropdownPosition: 'auto',
        });
        $('.select_table').on("change", function (e) { 
            // console.log( $(this).select2('data') );]
            let $selectChanged = $(this);
            let $option = $($(this).select2('data')[0]["element"]);
            let type =  $option.data("type") ;
            let action =  $option.data("action") ;

            switch(type) {
                case 'link':
                    window.location.href = action;
                    break;
                case 'modal':
                    $(action).modal('show');
                    break;
                default:
                // code to be executed if n is different from case 1 and 2
                    break;
            }
            $selectChanged.val(null).trigger("change");
        });
    }
    if( $('.select_right').length > 0 ){
        let selectRights = $('.select_right').select2({
            theme: "rights",
            minimumResultsForSearch: Infinity,
        });
    }

    if( $('.select_options').length > 0 ){
        let selectOptions = $('.select_options').select2();
    }
});