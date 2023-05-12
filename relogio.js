const cronometro = () => {
  let data = new Date();
  let horas = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();
  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  const titleHoursEl = document.querySelector("#hours");
  titleHoursEl.innerHTML = horas;

  const titleMinuteEl = document.querySelector("#minute");
  titleMinuteEl.innerHTML = minutos;

  const titleSecundEl = document.querySelector("#secund");
  titleSecundEl.innerHTML = segundos;
};

setInterval(() => {
  cronometro();
}, 1000);
