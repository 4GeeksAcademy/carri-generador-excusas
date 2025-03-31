document.addEventListener("DOMContentLoaded", () => {
  const subjects = ["The dog", "My grandmother", "The mailman", "My bird"];
  const actions = ["ate", "peed on", "crushed", "broke"];
  const objects = ["my homework", "my phone", "the car"];
  const times = [
    "before class",
    "while I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const getRandomElement = array =>
    array[Math.floor(Math.random() * array.length)];

  document.querySelector("#excuse").textContent = `${getRandomElement(
    subjects
  )} ${getRandomElement(actions)} ${getRandomElement(
    objects
  )} ${getRandomElement(times)}`;
});
