           
$(document).ready(function() {



});


 $(document).on("click", "#submit", function(){
		
		var invoiceno = $("#invoiceno").val();
		var name = $('#name').val();
		var address=$('#address1').val();
		var phno=$('#phno').val();
		var receve=$('#receve').val();
		var date=$('#date').val();
		var subtotal=$('.subtotal').val();
		console.log(name);

		$.ajax({
			 headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
			type: "POST",
			url:"pdf.php",
			data:{"name": name,"address" : address, "phno" : phno, "invoiceno":  invoiceno,"receve":receve , "date":date,"subtotal":subtotal},
			success: function(data)
			{
					
			}

		});

	});

$(document).on("click", ".button_click", function(){
var rowCount = $('#invent tr').length;
$("input:hidden").val(rowCount);
                       // console.log(rowCount);
	$("tr.tabRow:first").clone(true).appendTo("#invent>tbody");                      
	$("tr.tabRow:last").children("td").children("input").each(function(index, element){
                        $(element).val('');
                        
                        });
    });


    $(document).on("click", ".cut", function(){
                if($(this).parents("tr").siblings("tr.tabRow").length > 0)
                {
                   $(this).closest("tr.tabRow").remove();   
                   var rowCount = $('#invent tr').length - 1;
                   $("input:hidden").val(rowCount);
                      //  console.log(rowCount);       
                }
             
            });

 function calculfac(e) {

 	     var grand_total = 0;
        $(".price").each(function(){
        var price = $(this).val(); 
        var quantity = $(this).parent().closest('td').next('td').find('.Quantity').val();  
        var tax = $(this).parent().closest('td').next('td').next('td').find('.tax').val(); 
        var mult = parseFloat(price) * quantity;
 		var totaltax = parseFloat(price) * parseFloat(tax/100) * parseFloat(quantity);
 		var total = parseFloat(totaltax) + parseFloat(mult);
 		
 		total = total.toFixed(2); 
 		$(this).parent().closest('td').next('td').next('td').next('td').find('.sum').val(total);
 		var sub_total = parseFloat($(this).parent().closest('td').next('td').find('.sum').val());
  		grand_total +=  sub_total;
 		
 		
    });
         grand_total = grand_total.toFixed(2);
 		$('.subtotal').text(grand_total);
 		 document.getElementById('amount').setAttribute('value', grand_total);
 		 $('.finaltotal').text(grand_total);
    }

         function calculquantiy(e) {

 	         var grand_total = 0;
        $(".Quantity").each(function(){
        var quantity = $(this).val();
        var price = $(this).parent().closest('td').prev('td').find('.price').val();  
        var tax = $(this).parent().closest('td').next('td').find('.tax').val();
        var mult = price * quantity;
 		var totaltax = price * tax/100 * quantity;
 		var total = totaltax + mult; 
 
 		total = total.toFixed(2); 
 		$(this).parent().closest('td').next('td').next('td').find('.sum').val(total);
 		// var grand_total=total;
 		// grand_total+=grand_total;
 		var sub_total = parseFloat($(this).parent().closest('td').next('td').find('.sum').val());
  		grand_total +=  sub_total;
 		
 		
    });
         grand_total = grand_total.toFixed(2);
 		$('.subtotal').text(grand_total);
 		 document.getElementById('amount').setAttribute('value', grand_total);
 		  $('.finaltotal').text(grand_total);
    }


         function calcultax(e) {

 	         var grand_total = 0;
        $(".tax").each(function(){
        var tax = $(this).val(); 
        var quantity = $(this).parent().closest('td').prev('td').find('.Quantity').val();  
        var price = $(this).parent().closest('td').prev('td').prev('td').find('.price').val(); 
        
        var mult = price * quantity;
 		var totaltax = price * tax/100 * quantity;
 		var total = totaltax + mult;

 		

 		total = total.toFixed(2); 
 		$(this).parent().closest('td').next('td').find('.sum').val(total);
 		var sub_total = parseFloat($(this).parent().closest('td').next('td').find('.sum').val());
  		grand_total +=  sub_total;
 		

    });
        grand_total = grand_total.toFixed(2);
 		$('.subtotal').text(grand_total);
 		 document.getElementById('amount').setAttribute('value', grand_total);
 		 $('.finaltotal').text(grand_total);

}
  function calcdiscount(e) {
  	var discount_total=0;
  	var discount = $('.discount').val(); 
  	var final_t= $('.finaltotal').text();
  	var discount_total= final_t - discount;
 	$('.finaltotal').text(discount_total);
  	}


