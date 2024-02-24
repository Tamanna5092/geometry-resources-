function rectangleCalculation(){
    // get width value
    const rectangleInputWidth = document.getElementById('rectangle-width');
    const rectangleTextWidth = rectangleInputWidth.value;
    const width = parseFloat(rectangleTextWidth);
    console.log(width)
    // get length value
    const rectangleInputLength = document.getElementById('rectangle-length');
    const rectangleTextLength = rectangleInputLength.value;
    const length = parseFloat(rectangleTextLength);
    console.log(length)
    // get area value
    const area = width * length;
    console.log('area of the rectangle is',area)
}