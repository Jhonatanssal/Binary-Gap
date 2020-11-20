import binary from './binary';
import zerosGap from './zerosGap';

const window = () => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const title = document.createElement('h1');
  const form = document.createElement('form');
  const input1 = document.createElement('input');
  const input2 = document.createElement('input');
  const h41 = document.createElement('h4');
  const binary1 = document.createElement('p');
  const h42 = document.createElement('h4');
  const binary2 = document.createElement('p');

  h41.textContent = 'The number converted to binary is:';
  h42.textContent = 'The binary gap is:';

  body.className = 'd-flex flex-column mt-5 justify-content-center align-items-center text-center bg-light';

  form.className = 'my-5';

  title.textContent = 'Binary Gap';

  input1.type = 'text';
  input2.type = 'submit';


  input2.addEventListener('click', (e) => {
    e.preventDefault();
    const bin = binary(Number(input1.value));
    binary1.textContent = bin;
    binary2.textContent = zerosGap(bin);
    form.reset();
  });

  form.appendChild(input1);
  form.appendChild(input2);

  div.appendChild(title);
  div.appendChild(form);
  div.appendChild(h41);
  div.appendChild(binary1);
  div.appendChild(h42);
  div.appendChild(binary2);

  body.appendChild(div);
};

window();