function toUppercase() {
    let inputField = document.getElementById("input-field");
    let outputField = document.getElementById("output-field");
    outputField.value = inputField.value.toUpperCase();
  }
  
  function toLowercase() {
    let inputField = document.getElementById("input-field");
    let outputField = document.getElementById("output-field");
    outputField.value = inputField.value.toLowerCase();
  }
  
  function reverseString() {
    let inputField = document.getElementById("input-field");
    let outputField = document.getElementById("output-field");
    outputField.value = inputField.value.split("").reverse().join("");
  }

  function copyOutput() {
    /* Get the text from the output-field */
    const outputText = document.getElementById('output-field').value;
  
    /* Create a temporary input element */
    const tempInput = document.createElement('input');
    tempInput.type = 'text';
    tempInput.value = outputText;
  
    /* Append the input element to the body */
    document.body.appendChild(tempInput);
  
    /* Select the text in the input element */
    tempInput.select();
  
    /* Copy the selected text */
    document.execCommand('copy');
  
    /* Remove the temporary input element */
    document.body.removeChild(tempInput);
  }
  
  