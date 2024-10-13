function downloadImage(imgPath, fileName) {
    var a = document.createElement('a');
    a.href = imgPath;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}