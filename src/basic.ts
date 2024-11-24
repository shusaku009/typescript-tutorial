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
printId("202");
