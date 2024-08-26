let from = document.querySelector('form')
from.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "please enter valid values"
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "please enter valid values"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>${bmi}</span>`;
      }
})