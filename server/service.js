const QRCode = require('qrcode');

//format data into string
exports.formatData = (data) => {
	const qrCodeText = `Product Name: ${data.name}, Price: $${data.price}`;
	return qrCodeText;
};

//take input string, return buffer
exports.generateQRCode = async (qrCodeText) => {
	const options = {
		errorCorrectionLevel: 'M',
		type: 'image/png',
		margin: 1,
        color: {
            dark: '#0000ff',
            light: '#ffffff'
        }
	};

	const qrCodeBuffer = await QRCode.toBuffer(qrCodeText, options);
	return qrCodeBuffer;
};

