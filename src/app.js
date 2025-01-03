window.addEventListener = function() {
  let who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  let action = ["comió", "hizo pis", "aplastó", "rompió"];
  let what = ["mi tarea", "mi teléfono", "el coche"];
  let when = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras estaba rezando"
  ];

  let numeroRandom1 = Math.floor(Math.random() * who.length);
  let numeroRandom2 = Math.floor(Math.random() * action.length);
  let numeroRandom3 = Math.floor(Math.random() * what.length);
  let numeroRandom4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excusa").innerHTML =
    who[numeroRandom1] +
    " " +
    action[numeroRandom2] +
    " " +
    what[numeroRandom3] +
    " " +
    when[numeroRandom4];
};
