<html>
	<head>
		<meta charset="utf-8">
		<title>Invoice</title>
		<link rel="stylesheet" href="assets/style.css">
		<link rel="license" href="https://www.opensource.org/licenses/mit-license/">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		<script src="assets/main.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
		<script type="text/javascript" src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>

	</head>
	<body>
		<form action="pdf.php" method="POST" >
		<div id="content">
	<!-- 	<header> -->
		<div class=header></div>
			<h1>Invoice</h1>
			<div>
				<input type="text" name="name" value="Jonathan Neal" id="name"><br>
				<input type="text" name="address" value="101 E. Chapman Ave,Orange, CA 92866" id="address"><br>
				<input type="text" name="phno" value="(800) 555-1234" id="phno">
			</div>
	<article>
			
			<table class="meta">
				<tr>
					<th><span contenteditable >Address</span></th>
					<td><input type="text" name="receve" value="Some Company ,c/o Some Guy" id="receve" class="input_field"></td>
				</tr>
				<tr>
					<th><span contenteditable >Invoice #</span></th>
					<td><input type="text" name="invoiceno" value="101138" class="input_field" id="invoiceno"></td>
				</tr>
				<tr>
					<th><span contenteditable>Date</span></th>
					<td><input type="text" name="date" value="January 1, 2012" id="date" class="input_field" ></td>
				</tr>
				<tr>
					<th><span contenteditable>Amount Due</span></th>
					<td><span id="prefix">$</span> <input type="number" name="subtotal" value="408.00" id="amount" class="input_field"  readonly></span></td>
				</tr>
			</table>
			<table class="inventory" id="invent">
				<thead>
					<tr>
						<th><span contenteditable>Item</span></th>
						<th><span contenteditable>Description</span></th>
						<th><span contenteditable>Rate</span></th>
						<th><span contenteditable>Quantity</span></th>
						<th><span contenteditable>Tax(in %)</span></th>
						<th><span contenteditable>Price</span></th>
						
					</tr>
				</thead>
				<tbody>
					<tr class="tabRow" id="tabrow">

						<td><a class="cut">-</a><input type="hidden" name="" value="" class="table_id"><input type="text" name="pro_name[]" value="Test productname" class="input_field"></td>
						<td><input type="number" name="pro_desc[]" value="test desc" class="input_field"></td>
						<td><span data-prefix>$</span><input type="text" name="price[]" value="100.00" class="input_field price " onkeyup="calculfac()" required></td>
						<td><input type="number" name="pro_quantity[]" value="4" class="input_field Quantity" onkeyup="calculquantiy()" required></td>
						<td><input type="number" name="pro_tax[]" value="2" class="input_field tax" onkeyup="calcultax()" required></td>
						<td><span data-prefix>$</span><input type="number" pattern="[0-9]+([\.,][0-9]+)?" step="0.01" name="pro_sum[]" value="408.00" class="input_field sum" readonly></td>
						
					</tr>
				</tbody>
			</table>
			<!-- <button onclick="onclick_button() return false;" class="button_click">+</button> -->
			<a class="button_click add">+</a>
			  <!-- <input type="button" value="+" class="add-more-btn btn btn-primary inv_btn_primary_add" onclick="onclick_button()"> -->
			<table class="balance">
				<tr>
					<th><span contenteditable>Total</span></th>
					<td><span data-prefix>$</span><span class="subtotal">408.00</span></td>
				</tr>
				<tr>
					<th><span contenteditable>Amount Paid</span></th>
					<td><span data-prefix>$</span><input type="number" name="discount" value="0.00" class="input_field discount" onkeyup="calcdiscount()"></td>
				</tr>
				<tr>
					<th><span contenteditable>Balance Due</span></th>
					<td><span data-prefix>$</span><span class="finaltotal">408.00</span></td>
				</tr>
			</table>
		</article>

		</div>
		<input type="submit" name="submit" id="submit" value="submit">
		
	</form>
	</body>
	

</html>