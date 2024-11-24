const message: string = "Hello World!";
message.toLowerCase();

const user = {
  name: "Daniel",
  age: 26,
  location: "us",
};

user.location;

const getFavoriteNumber = (): number => {
  return 26;
};

const printId = (id: number | string) => {
  console.log("Your ID is: " + id);
};

printId(5);
printId("20ns");

const printId2 = (id: number | string) => {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
};

console.log(5);
console.log("test");

type Point = {
  x: number;
  y: number;
};

const printCoord = (pt: Point) => {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's x value is " + pt.y);
};

printCoord({ x: 100, y: 500 });

// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
//
// const a = expr as any as T;
//
let changingString = "Hello World";
changingString = "Ola Mundo";

changingString;

const constantString = "Hello World";
constantString;

let x: "hello" = "hello";
x = "hello";

const printText = (s: string, alignment: "left" | "right" | "center") => {
  console.log(s, alignment);
};

printText("Hello, world", "left");
printText("G'day, mate", "center");

const compare = (a: string, b: string): -1 | 0 | 1 => {
  return a === b ? 0 : a < b ? -1 : 1;
};
