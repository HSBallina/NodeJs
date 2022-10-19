// Constants are block scoped and can't be changed
const outer = 42;
let variable = 1234;
hello();
console.log(inner);

function hello() {
  console.log(`outer = ${outer}`);
  const inner = 50;
  try {
    outer = 1;
  } catch (e) {
    console.log(`Name: ${e.name}`);
    console.log(`Msg: ${e.message}`);
  }
  variable++;
  console.log(variable);
}


