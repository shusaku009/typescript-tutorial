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
