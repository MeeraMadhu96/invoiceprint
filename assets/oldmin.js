           
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

// function onclick_button(e){
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
        var mult = price * quantity;
 		var totaltax = price * tax/100 * quantity;
 		var total = totaltax + mult; 
 		$(this).parent().closest('td').next('td').next('td').next('td').find('.sum').val(total);
 		var grand_total=total;
 		grand_total+=grand_total;
 		$('.subtotal').text(grand_total);
    });
    }
         function calculquantiy(e) {

 	         var grand_total = 0;
        $(".Quantity").each(function(){
        var quantity = $(this).val(); 
        var price = $(this).parent().closest('td').prev('td').find('.Quantity').val();  
        var tax = $(this).parent().closest('td').next('td').find('.tax').val(); 
        var mult = price * quantity;
 		var totaltax = price * tax/100 * quantity;
 		var total = totaltax + mult; 
 		$(this).parent().closest('td').next('td').next('td').next('td').find('.sum').val(total);
 		var grand_total=total;
 		grand_total+=grand_total;
 		$('.subtotal').text(grand_total);
    });
    }

         function calcultax(e) {

 	         var grand_total = 0;
        $(".tax").each(function(){
        var tax = $(this).val(); 
        var quantity = $(this).parent().closest('td').prev('td').find('.Quantity').val();  
        var price = $(this).parent().closest('td').prev('td').prev('td').find('.tax').val(); 
        var mult = price * quantity;
 		var totaltax = price * tax/100 * quantity;
 		var total = totaltax + mult; 
 		$(this).parent().closest('td').next('td').next('td').next('td').find('.sum').val(total);
 		var grand_total=total;
 		grand_total+=grand_total;
 		$('.subtotal').text(grand_total);
    });
}



// function generateTableRow() {
// 	var emptyColumn = document.createElement('tr');

// 	emptyColumn.innerHTML = '<td><a class="cut">-</a><span contenteditable></span></td>' +
// 		'<td><span contenteditable></span></td>' +
// 		'<td><span data-prefix>$</span><span contenteditable>0.00</span></td>' +
// 		'<td><span contenteditable>0</span></td>' +
// 		'<td><span contenteditable>0</span></td>'+
// 		'<td><span data-prefix>$</span><span>0.00</span></td>'
// 		;

// 	return emptyColumn;
// }

// function parseFloatHTML(element) {
// 	return parseFloat(element.innerHTML.replace(/[^\d\.\-]+/g, '')) || 0;
// }

// function parsePrice(number) {
// 	return number.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
// }

// /* Update Number
// /* ========================================================================== */

// function updateNumber(e) {
// 	var
// 	activeElement = document.activeElement,
// 	value = parseFloat(activeElement.innerHTML),
// 	wasPrice = activeElement.innerHTML == parsePrice(parseFloatHTML(activeElement));

// 	if (!isNaN(value) && (e.keyCode == 38 || e.keyCode == 40 || e.wheelDeltaY)) {
// 		e.preventDefault();

// 		value += e.keyCode == 38 ? 1 : e.keyCode == 40 ? -1 : Math.round(e.wheelDelta * 0.025);
// 		value = Math.max(value, 0);

// 		activeElement.innerHTML = wasPrice ? parsePrice(value) : value;
// 	}

// 	updateInvoice();
// }

// /* Update Invoice
// /* ========================================================================== */

// function updateInvoice() {
// 	var total = 0;
// 	var cells, price, total, a, i;

// 	// update inventory cells
// 	// ======================

// 	for (var a = document.querySelectorAll('table.inventory tbody tr'), i = 0; a[i]; ++i) {
// 		// get inventory row cells
// 		cells = a[i].querySelectorAll('span:last-child');

// 		// set price as cell[2] * cell[3]
// 		price = parseFloatHTML(cells[2]) * parseFloatHTML(cells[3]) +  parseFloatHTML(cells[4])/100 ;

// 		// add price to total
// 		total += price;

// 		// set row total
// 		cells[5].innerHTML = price;
// 	}

// 	// update balance cells
// 	// ====================

// 	// get balance cells
// 	cells = document.querySelectorAll('table.balance td:last-child span:last-child');

// 	// set total
// 	cells[0].innerHTML = total;

// 	// set balance and meta balance
// 	cells[2].innerHTML = document.querySelector('table.meta tr:last-child td:last-child span:last-child').innerHTML = parsePrice(total - parseFloatHTML(cells[1]));

// 	// update prefix formatting
// 	// ========================

// 	var prefix = document.querySelector('#prefix').innerHTML;
// 	for (a = document.querySelectorAll('[data-prefix]'), i = 0; a[i]; ++i) a[i].innerHTML = prefix;

// 	// update price formatting
// 	// =======================

// 	for (a = document.querySelectorAll('span[data-prefix] + span'), i = 0; a[i]; ++i) if (document.activeElement != a[i]) a[i].innerHTML = parsePrice(parseFloatHTML(a[i]));
// }

// /* On Content Load
// /* ========================================================================== */

// function onContentLoad() {
// 	updateInvoice();

// 	var
// 	input = document.querySelector('input'),
// 	image = document.querySelector('img');

// // 	function onClick_button(e) {
// // 		var element = e.target.querySelector('[contenteditable]'), row;

// // 		element && e.target != document.documentElement && e.target != document.body && element.focus();

// // 		  // if (e.target.classNames('.inv_btn_primary_add')) {
// // 			document.querySelector('table.inventory tbody').appendChild(generateTableRow());
// // //}
// // 		 if (e.target.className == 'cut') {
// // 			row = e.target.ancestorQuerySelector('tr');

// // 			row.parentNode.removeChild(row);
// // 		}

// // 		updateInvoice();
// // 	}


// 	// if (window.addEventListener) {
// 	// 	//document.addEventListener('click', onClick_button);

// 	// 	document.addEventListener('mousewheel', updateNumber);
// 	// 	document.addEventListener('keydown', updateNumber);

// 	// 	document.addEventListener('keydown', updateInvoice);
// 	// 	document.addEventListener('keyup', updateInvoice);
// 	// }
// }

// //window.addEventListener && document.addEventListener('DOMContentLoaded', onContentLoad);
