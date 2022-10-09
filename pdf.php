<?php

 require_once 'vendor/autoload.php';
 use Dompdf\Dompdf;
 $name=$_POST['name'];
 $address=$_POST['address'];
 $phno=$_POST['phno'];
 $invoiceno=$_POST['invoiceno'];
 $receve=$_POST['receve'];
 $date=$_POST['date'];
 $subtotal=$_POST['subtotal'];
 $price=$_POST['price'];
 $pro_name=$_POST['pro_name'];
 $quantity=$_POST['pro_quantity'];
 $tax=$_POST['pro_tax'];
 $sum=$_POST['pro_sum'];
$subtotal=$_POST['subtotal'];
$discount=$_POST['discount'];   
$final= $subtotal - $discount;
 $html='
 <html>
<head>	
<style>


* { margin: 0; padding: 0; }
body { font: 14px/1.4 Georgia, serif; }
#page-wrap { width: 700px; margin: 0 auto; }

textarea { border: 0; font: 14px Georgia, Serif; overflow: hidden; resize: none; }
table { border-collapse: collapse; }
table td, table th { border: 1px solid black; padding: 5px; }


#address { width: 250px; height: 150px; }
#customer { overflow: hidden;padding-left: 44px;
    padding-top: 11px; }

#customer-title { font-size: 20px; font-weight: bold; float: left; }

#meta { margin-top: 1px; width: 300px; }
#meta td { text-align: right;  }
#meta td.meta-head { text-align: left; background: #eee; }
#meta td textarea { width: 100%; height: 20px; text-align: right; }

#items { clear: both; width: 100%; margin: 30px 0 0 0; border: 1px solid black; }
#items th { background: #eee; }
#items textarea { width: 80px; height: 50px; }
#items tr.item-row td { border: 0; vertical-align: top; }
#items td.description { width: 300px; }
#items td.item-name { width: 175px; }
#items td.description textarea, #items td.item-name textarea { width: 100%; }
#items td.total-line { border-right: 0; text-align: right; }
#items td.total-value { border-left: 0; padding: 10px; }
#items td.total-value textarea { height: 20px; background: none; }
#items td.balance { background: #eee; }
#items td.blank { border: 0; }
</style>
</head>

<body>

	<div id="page-wrap" style ="padding-top: 20px;">
		
		<div id="identity">
		
            <textarea id="address">'.$name.'
			'.$address.'

			Phone: '.$phno.'</textarea>

		</div>
		
		   <textarea id="customer-title">'.$receve.'</textarea>
		
		<div style="clear:both"></div>
		
		<div id="customer">
            <table id="meta">
                <tr>
                    <td class="meta-head">Invoice #</td>
                    <td><textarea>'.$invoiceno.'</textarea></td>
                </tr>
                <tr>

                    <td class="meta-head">Date</td>
                    <td><textarea id="date">'.$date.'</textarea></td>
                </tr>
                <tr>
                    <td class="meta-head">Amount Due</td>
                    <td><div class="due">$'.$subtotal.'</div></td>
                </tr>

            </table>
		
		</div>
		
		<table id="items">
		
		  <tr>
		      <th>Item</th>
		      <th>Unit Cost</th>
		      <th>Quantity</th>
		       <th>Tax in %</th>
		      <th>Price</th>
		  </tr>';
		  $i = 0;
     
            foreach($price as $prices)
            {
              $html.='<tr class="item-row">
		      <td class="item-name"><div class="delete-wpr"><textarea>'.$pro_name[$i].'</textarea></div></td>
		      <td><textarea class="cost">$'.$prices.'</textarea></td>
		      <td><textarea class="qty">'.$quantity[$i].'</textarea></td>
		      <td><span class="price">'.$tax[$i].'</span></td>
		      <td><span class="price">$'. $sum[$i].'</span></td>
		 	  </tr>';    
              $i++;
            }

		  
		  $html.='
		  </tr>
		  
		  <tr>
		      <td colspan="2" class="blank"> </td>
		      <td colspan="2" class="total-line">Subtotal</td>
		      <td class="total-value"><div id="subtotal">$'.$subtotal.'</div></td>
		  </tr>
		  <tr>
		      <td colspan="2" class="blank"> </td>
		      <td colspan="2" class="total-line">Amount Paid</td>

		      <td class="total-value"><textarea id="paid">$'.$discount.'</textarea></td>
		  </tr>
		  <tr>
		      <td colspan="2" class="blank"> </td>
		      <td colspan="2" class="total-line balance">Balance Due</td>
		      <td class="total-value balance"><div class="due">$'.$final.'</div></td>
		  </tr>
		
		</table>

	
	</div>
	
</body>

</html>

';
 $dompdf = new Dompdf;
 $dompdf->loadHtml($html);
 $dompdf->setPaper('A4','portrait');
 $dompdf->render();
 $dompdf->stream('invoice.pdf');

?>
