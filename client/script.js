//on Submit, get data from form, send it to server, get QR code image from server, display it on the client at #'img'
document.getElementById('qr-form').addEventListener('submit', function (e) {
	e.preventDefault();

	const name = document.getElementById('qr-name').value;
	const price = document.getElementById('qr-price').value;
	const data = { name, price }

	fetch('http://localhost:3000/generate-qr', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ data })
	})
		.then(response => response.blob())
		.then(blob => {
			const qrImage = document.createElement('img');
			const qrImageUrl = URL.createObjectURL(blob);
			qrImage.src = qrImageUrl;
			const qrResultDiv = document.getElementById('qr-result');
			qrResultDiv.innerHTML = '';
			qrResultDiv.appendChild(qrImage);
		})
		.catch(error => console.error('Error generating QR code:', error));

});