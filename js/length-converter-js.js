const objFormula = JSON.parse(formula);

function ValidateLengthConverterForm()
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

function RestLengthConverter()
{
    if(confirm("Are you sure want to reset the converter?")){
        document.getElementById("fromLength").value = "";
        document.getElementById("fromUnit").value = "Centimeter";
        document.getElementById("toUnit").value = "Millimeter";
        document.getElementById("outputLength").value = "";

        _cmnRemoveAllErrorMessage();

        _cmnHideElement("OutputResult");
        _cmnShowElement("OutputInfo", "flex");
    }
}

function CalculateLength()
{
    if(ValidateLengthConverterForm())
    {
        var fromUnit = document.getElementById("fromUnit").value;
        var toUnit = document.getElementById("toUnit").value;
        var fromLength = document.getElementById("fromLength").value;
        var outputlength = document.getElementById("outputLength");

        ShowFormula(fromUnit, toUnit);

        var result = ConvertLength(fromLength, fromUnit,  toUnit);
        outputlength.value = Number(result).toFixed(2);      
        document.getElementById("lengthResult").innerHTML = fromLength + ' ' + fromUnit + ' = ' + result.toFixed(2) + ' ' + toUnit; 

        //result div show
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}

function ConvertLength(fromLength, fromUnit,  toUnit)
{
    fromLength = Number(fromLength);
    var result = 0;
    var conversionFactor = 0;
    switch (fromUnit)
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

    switch (toUnit)
    {
        case "Millimeter":
            result = fromLength * conversionFactor;
            break;
        case "Centimeter":
            result = fromLength * conversionFactor / 10;
            break;
        case "Decimeter":
            result = fromLength * conversionFactor / 100;
            break;
        case "Meter":
            result = fromLength * conversionFactor / 1000;
            break;
        case "Kilometer":
            result = fromLength * conversionFactor / 1000000;
            break;
        case "Foot":
            result = fromLength * conversionFactor / 304.8;
            break;
        case "Inch":
            result = fromLength * conversionFactor / 25.4;
            break;
        case "Mile":
            result = fromLength * conversionFactor / 1609344;
            break;
        case "Yard":
            result = fromLength * conversionFactor / 914.4;
            break;
    }
    return result;
}

function ShowFormula(fromUnit,toUnit)
{
    document.getElementById("lengthFormula").innerHTML = "";

    for(var i = 0; i <objFormula.conversions.length; i++)
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