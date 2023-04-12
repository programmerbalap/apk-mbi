const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value);

  if (!weight) {
    let errorWeight = document.getElementById('error-weight');
    errorWeight.innerText = 'Please fill in the weight first!';
  } else {
    let removeWeight = document.getElementById('error-weight');
    removeWeight.innerText = '';
  }

  if (!height) {
    let errorHeight = document.getElementById('error-height');
    errorHeight.innerText = 'Please fill in the height first!';
  } else {
    let removeHeight = document.getElementById('error-height');
    removeHeight.innerText = '';
  }

  let bmi = weight / (height / 100) ** 2;

  function choose_desimal(n) {
    const x = 10 ** 1;
    return Math.round(n * x) / x;
  }

  let proses = choose_desimal(bmi);
  console.log(proses);

  if (proses) {
    let status;
    if (proses < 18.5) {
      status = 'Underweight';
    } else if (18.5 <= proses && proses <= 24.9) {
      status = 'Normal Weight';
    } else if (25 <= proses && proses <= 29.9) {
      status = 'Overweight';
    } else {
      status = 'Obesity';
    }
    document.getElementById('result').innerText = `You BMI is ${proses} which means You are ${status}.`;
  } else {
    document.getElementById('result').innerText = '';
  }
});

function choose_desimal(n, d) {
  const x = 10 ** d;
  return Math.round(n * x) / x;
}
