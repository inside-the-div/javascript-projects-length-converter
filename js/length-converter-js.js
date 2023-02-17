const objFormula = JSON.parse(formula);

document.getElementById("fromSelectBox").value = "Centimeter";
function LengthCalculatorFormValidate()
{
    _cmnRemoveAllErrorMessage();
    
    var fromLength = document.getElementById("fromLength").value;
    if(fromLength == "" || isNaN(fromLength)  || (!isNaN(fromLength) && Number(fromLength) <= 0))
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("fromLength", "Enter valid Length.");
        return false;
    }
    
    return true;
}

function LengthCalculatorReset()
{
    if(confirm("Are you sure want to reset the converter?")){
        document.getElementById("fromLength").value = "";
        document.getElementById("fromSelectBox").value = "Centimeter";
        document.getElementById("toSelectBox").value = "Millimeter";
        document.getElementById("toLength").value = "";

        _cmnRemoveAllErrorMessage();

        _cmnHideElement("OutputResult");
        _cmnShowElement("OutputInfo", "flex");
    }
}

function LengthCalculation()
{
    if(LengthCalculatorFormValidate())
    {
        var fromUnit = document.getElementById("fromSelectBox").value;
        var toUnit = document.getElementById("toSelectBox").value;
        var inputLength = document.getElementById("fromLength").value;
        var outputlength = document.getElementById("toLength");

        ShowFormula(fromUnit, toUnit);

        var result = ConvertLength(inputLength, fromUnit,  toUnit);
        outputlength.value = Number(result).toFixed(2);      
        document.getElementById("lengthResult").innerHTML = inputLength + ' ' + fromUnit + ' = ' + result.toFixed(2) + ' ' + toUnit; 

        //result div show
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}

function ConvertLength(value, from_unit,  to_unit)
{
    value = Number(value);
    var result = 0;
    var conversionFactor = 0;
    switch (from_unit)
    {
        case "Millimeter":
            conversionFactor = 1;
            break;
        case "Centimeter":
            conversionFactor = 10;
            break;
        case "Decimeter":
            conversionFactor = 100;
            break;
        case "Meter":
            conversionFactor = 1000;
            break;
        case "Kilometer":
            conversionFactor = 1000000;
            break;
        case "Foot":
            conversionFactor = 304.8;
            break;
        case "Inch":
            conversionFactor = 25.4;
            break;
        case "Mile":
            conversionFactor = 1609344;
            break;
        case "Yard":
            conversionFactor = 914.4;
            break;
    }

    switch (to_unit)
    {
        case "Millimeter":
            result = value * conversionFactor;
            break;
        case "Centimeter":
            result = value * conversionFactor / 10;
            break;
        case "Decimeter":
            result = value * conversionFactor / 100;
            break;
        case "Meter":
            result = value * conversionFactor / 1000;
            break;
        case "Kilometer":
            result = value * conversionFactor / 1000000;
            break;
        case "Foot":
            result = value * conversionFactor / 304.8;
            break;
        case "Inch":
            result = value * conversionFactor / 25.4;
            break;
        case "Mile":
            result = value * conversionFactor / 1609344;
            break;
        case "Yard":
            result = value * conversionFactor / 914.4;
            break;
    }
    return result;
}

function ShowFormula(fromUnit,toUnit)
{
    document.getElementById("lengthFormula").innerHTML = "";

    for(var i = 0; i < (objFormula.conversions.length) - 1; i++)
    {            
        if(
            objFormula.conversions[i].from.toLowerCase() == fromUnit.toLowerCase() 
            && objFormula.conversions[i].to.toLowerCase() == toUnit.toLowerCase()
            )
        {
            document.getElementById("lengthFormula").innerHTML = objFormula.conversions[i].formula;
        }
    }
}