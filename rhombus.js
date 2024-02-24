function rhombusCalculation(){
    const rhombusDiagonal1 = getInputValueById('rhombus-diagonal-1');
    const rhombusDiagonal2 = getInputValueById('rhombus-diagonal-2');
    console.log(rhombusDiagonal1, rhombusDiagonal2);

    const area = 0.5 * rhombusDiagonal1 * rhombusDiagonal2;
    setInnerTextById('rhombus-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const input = parseFloat(inputValueText);
    return input
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}