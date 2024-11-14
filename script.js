const btn = document.querySelector('#joke-btn');

// Initialize a new XMLHttpRequest
const fetchJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);

      //   const li = document.createElement('li');
      //   li.innerHTML = `<h2><strong>Joke of the day</strong> - ${data.value}</h2>`;
      //   document.querySelector('#joke').appendChild(li);

      document.querySelector(
        '#joke'
      ).innerHTML = `<li><h2><strong>Joke of the day</strong> - ${data.value}</h2></li>`;
    }
  };

  xhr.send();
};

btn.addEventListener('click', fetchJoke);
