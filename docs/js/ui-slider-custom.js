$( function() {
    if( $('#slider-range').length > 0 ){
        // Init Slider UI
        $("#slider-range").slider({
            min: 0,
            max: 1000,
            values: [0,1000],
            range: true,
            stop: function(event, ui) {
                $("input#minAmount").val($("#slider-range").slider("values",0));
                $("input#maxAmount").val($("#slider-range").slider("values",1));
            },
            slide: function(event, ui){
                $("input#minAmount").val($("#slider-range").slider("values",0));
                $("input#maxAmount").val($("#slider-range").slider("values",1));
            }
        });

        $("input#minAmount").val($( "#slider-range" ).slider( "values", 0 ));
        $("input#maxAmount").val($( "#slider-range" ).slider( "values", 1 ));

        // Look Change Input
        $("input#minAmount").on("change", function(){
            var value1=$("input#minAmount").val();
            var value2=$("input#maxAmount").val();
            if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                $("input#minAmount").val(value1);
            }
            $("#slider-range").slider("values",0,value1);	
        });
        $("input#maxAmount").on("change", function(){
            var value1=$("input#minAmount").val();
            var value2=$("input#maxAmount").val();
            if (value2 > 1000) { value2 = 1000; $("input#maxAmount").val(1000)}
            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                $("input#maxAmount").val(value2);
            }
            $("#slider-range").slider("values",1,value2);
        });
    }

});