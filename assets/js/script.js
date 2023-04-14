const eleRow = document.querySelector(".row");

for (let i = 0; i <= 100; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  eleRow.append(square);

  if (i % 5 == 0 && i % 3 == 0){
    square.append('fizzbuzz');
    square.style.backgroundColor = "var(--bg-fizzBuzz)";
  } 
  else if (i % 3 == 0) {
    square.append('fizz');
    square.style.backgroundColor = "var(--bg-fizz)";
  } else if (i % 5 == 0){
    square.append('buzz');
    square.style.backgroundColor = "var(--bg-buzz)";
  } else {
    square.append(i);
  }
}
