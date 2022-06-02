$(function() {
    if( $('.select_table').length > 0 ){
        function actionFormateState (state) {
            if (!state.id) {
                return state.text;
            }
            var obj = $(state.element);
            var objType = obj.data("type");
		    var objAction = obj.data("action");
			var objHref = obj.data("href");
            
            var $state = $(
            '<span data-type="' + objType + '" data-href="' + objHref + '" data-action="' + objAction + '">' + state.text + '</span>'
            );
            return $state;
        };
        let selectTable = $('.select_table').select2({
            theme: "table",
            minimumResultsForSearch: Infinity,
            templateResult: actionFormateState,
            dropdownPosition: 'auto',
        });
        $('.select_table').on("select2:select", function (e) {
            let $selectChanged = $(this);
            let $option = $($(this).select2('data')[0]["element"]);
            let type =  $option.data("type") ;
            let action =  $option.data("action") ;
			let href =  '' ;
			if(($option.data("href"))&&($option.data("href")!=''))
				 href = $option.data("href") ;

            switch(type) {
                case 'link':
                    window.location.href = action;
                    break;
                case 'modal':
					if(href!=''){
					$.ajax({
					url: href,
					method: 'GET',
					dataType: 'html',
						success: function(data){
							$(action+' .modal-body').html(data);
						}
					});
					}
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