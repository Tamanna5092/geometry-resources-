function parallelogramCalculation(){
// get base value
const parallelogramInputBase = document.getElementById('parallelogram-base');
const parallelogramTextBase = parallelogramInputBase.value
const base = parseFloat(parallelogramTextBase);
console.log(base)

// get height value
const parallelogramInputHeight = document.getElementById('parallelogram-height');
const parallelogramTextHeight = parallelogramInputHeight.value
const height = parseFloat(parallelogramTextHeight);
console.log(height);

// get area value
const area = base * height;
console.log('area of the parallelogram is', area);

const parallelogramAreaSpan = document.getElementById('parallelogram-area');
parallelogramAreaSpan.innerText = area;
}