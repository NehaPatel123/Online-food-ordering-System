async function placeOrder() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  const items = [];
  let total = 0;

  checkboxes.forEach(cb => {
    items.push(cb.value);
    total += parseInt(cb.getAttribute('data-price'));
  });

  const order = { name, address, items, total };

  const response = await fetch('http://localhost:5000/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  });

  if (response.ok) {
    alert("Order placed!");
  } else {
    alert("Error placing order.");
  }
}