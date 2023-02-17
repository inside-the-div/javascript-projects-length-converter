function _cmnRemoveAllErrorMessage()
{
    var allErrorBorder = document.getElementsByClassName('error-border');
	var allErrorMessage = document.getElementsByClassName('error-message');
	var i;
    // remove border
    for(i = (allErrorBorder.length) - 1; i>=0; i--)
    {
        allErrorBorder[i].classList.remove("error-border");
    }
    // remove error message
    for(i = (allErrorMessage.length) - 1; i>=0; i--)
    {
        allErrorMessage[i].remove();
    }	  
}

function _cmnShowErrorMessageBottomOfTheInputFiled(fieldID,errorMessage)
{
    var inputField = document.getElementById(fieldID);   
    inputField.classList.add("error-border"); // add border
    inputField.focus(); // focus error feild
    
    var errorMessageElement = document.createElement("p"); // create a p tag for error message
    errorMessageElement.innerHTML = errorMessage; // set the error message in the p tag
    errorMessageElement.classList.add("error-message"); // add the error message stye clsss
    inputField.parentNode.insertBefore(errorMessageElement, inputField.nextSibling); // set the error message uder the error feild
}

function _cmnHideElement(elementId)
{
    var selectedDisplayValue = document.getElementById(elementId).style.display;
    if(selectedDisplayValue != 'none')
    {
        document.getElementById(elementId).style.display = "none";
    }
}

function _cmnShowElement(elementId, displayName)
{
    var selectedDisplayValue = document.getElementById(elementId).style.display;
    if(selectedDisplayValue != displayName)
    {
        document.getElementById(elementId).style.display = displayName;
    }
}