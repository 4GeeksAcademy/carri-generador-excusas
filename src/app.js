window.addEventListener = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  let numeroRandom1 = Math.floor(Math.random() * who.length);
  let numeroRandom2 = Math.floor(Math.random() * action.length);
  let numeroRandom3 = Math.floor(Math.random() * what.length);
  let numeroRandom4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excusa").innerHTML =
    who[numeroRandom1] +
    action[numeroRandom2] +
    what[numeroRandom3] +
    when[numeroRandom4];
};
