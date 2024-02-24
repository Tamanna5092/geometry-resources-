function triangleCalculate(){
    // get base value
     const triangleBaseInput = document.getElementById('triangle-base');
     const triangleBaseText = triangleBaseInput.value;
     const base = parseFloat(triangleBaseText);
     console.log(base);
    //  get height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // get calculate triangle value
    const area= 0.5 * base * height;
    console.log('area of the triangle is', area)

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}