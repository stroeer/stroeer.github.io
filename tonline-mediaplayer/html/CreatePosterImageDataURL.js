function GetRandomNumber(min, max) {
	return Math.floor(Math.random() * max) + min;
}

function CreatePosterImageDataURL() {
	const c = document.createElement("canvas");
	c.width = 16;
	c.height = 9;
	const ctx = c.getContext("2d");
	const imgData = ctx.createImageData(16, 9);

	const colorRed = GetRandomNumber(0, 255);
	const colorGreen = GetRandomNumber(0, 255);
	const colorBlue = GetRandomNumber(0, 255);

	let i;
	for (i = 0; i < imgData.data.length; i += 4) {
		imgData.data[i + 0] = colorRed;
		imgData.data[i + 1] = colorGreen;
		imgData.data[i + 2] = colorBlue;
		imgData.data[i + 3] = 255;
	}

	ctx.putImageData(imgData, 0, 0);

	return c.toDataURL("image/jpeg");
}

