function pentagonCalculation(){
    const pentagonPerimeter = getInputValueById('pentagon-perimeter');
    const pentagonBase = getInputValueById('pentagon-base');
    const area = 0.5 * pentagonPerimeter * pentagonBase
    setInnerTextById('pentagon-area', area);

}