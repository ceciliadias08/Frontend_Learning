function multiplicationtable() {
  let num = document.getElementById("txtn"); //Get input element
  let tab = document.getElementById("seltab"); //Get select element
  if (num.value.length == 0) {
    //If enter box is empty
    window.alert("Please enter a number");
  } else {
    let n = Number(num.value); //Convert input value to number
    let c = 1; //Counter variable
    tab.innerHTML = ""; //Clear previous options
    while (c <= 10) {
      // Multiplication table loop
      let item = document.createElement("option"); //New option element
      item.text = `${n} x ${c} = ${n * c}`; //Set the text of option
      item.value = `tab${c}`; //Set value option
      tab.appendChild(item); //Append option to the select element
      c++; //Inclement counter
    }
  }
}
