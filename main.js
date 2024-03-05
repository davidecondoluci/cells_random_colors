function createRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100) + "%"; // Genera una saturazione casuale (0-100%)
  const lightness = Math.floor(Math.random() * 100) + "%"; // Genera una luminosità casuale (0-100%)
  const alpha = Math.random(); // Genera un'opacità casuale (0-1)

  return `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})`;
}

let buttons = document.getElementsByClassName("click");

for (let i = 0; i < buttons.length; i++) {
  let color = createRandomColor();
  buttons[i].style.backgroundColor = color;
}

function addHTML(element) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = `<div class="column_4">
      <button class="click" onclick="addHTML(this)"></button>
      <button class="click" onclick="addHTML(this)"></button>
      <button class="click" onclick="addHTML(this)"></button>
      <button class="click" onclick="addHTML(this)"></button>
    </div>`;

  let buttons = newDiv.getElementsByClassName("click");

  for (let i = 0; i < buttons.length; i++) {
    let color = createRandomColor();
    buttons[i].style.backgroundColor = color;
  }

  element.replaceWith(newDiv);
}
