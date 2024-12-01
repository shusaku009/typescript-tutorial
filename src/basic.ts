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

const doSomething = (x: string | null) => {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
};

const liveDangerrously = (x?: number | null) => {
  // No error
  console.log(x?.toFixed());
};

// const padLeft = (padding: number | string, input: string): string => {
//   throw new Error("Not implemented.");
// };

const padLeft2 = (padding: number | string, input: string): string => {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
};

// const printAllNg = (strs: string | string[] | null) => {
//   if (typeof strs === "object") {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     do notting
//   }
// };

const getUsersOnlineMessage = (numUsersOnline: number) => {
  if (numUsersOnline) {
    return "There are ${numUsersOnline} online now!";
  }
  return "Nobody's here. :(";
};

const printAll = (strs: string | string[] | null) => {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
};
