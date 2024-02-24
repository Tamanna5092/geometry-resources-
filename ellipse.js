function ellipseCalculation(){
    const ellipseA = getInputValueById('ellipse-a');
    const ellipseBase = getInputValueById('ellipse-base');
    const area = 3.1416 * ellipseA * ellipseBase
    setInnerTextById('ellipse-area', area)
}