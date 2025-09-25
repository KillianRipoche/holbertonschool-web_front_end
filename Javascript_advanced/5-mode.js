function changeMode(size, weight, transform, background, color) {
  return function applyTheme() {
    document.body.style.fontSize = `${size}px`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const p = document.createElement('p');
  p.textContent = 'Welcome Holberton!';
  document.body.appendChild(p);

  function makeButton(label, onClick) {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.style.marginRight = '8px';
    btn.addEventListener('click', onClick);
    document.body.appendChild(btn);
    return btn;
  }

  makeButton('Spooky', spooky);
  makeButton('Dark Mode', darkMode);
  makeButton('Scream Mode', screamMode);
}

main();
