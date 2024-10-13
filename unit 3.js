const slider2 = document.getElementById('slider2');
const slider1 = document.getElementById('slider1');
const dropdown = document.getElementById('dropdown');
const output = document.getElementById('output');

slider1.addEventListener('input', (event) => {
  slider2.value = slider1.value;
    output.value = "";
  for(let i=0; i<slider1.value;i++){
      output.value += dropdown.value;
  }
});

dropdown.addEventListener('input', (event) => {
  slider1.value = dropdown.value;
  output.value = dropdown.value;
});