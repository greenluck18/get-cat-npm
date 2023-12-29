
class Cat {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
  meow() {
    const cats = [
      " /\\_/\\" + "\n" +
      "( o.o )" + "\n" +
      " > ^ <",
      " /\\_/\\ " + "\n" +
      "(=^.^=)" + "\n" +
      " c ^ c ",
      " /\\_/\\ " + "\n" +
      "( ^_^ )" + "\n" +
      " > ^ < ",
      " /\\_/\\" + "\n" +
      "( o.o )" + "\n" +
      "(\")^(\")",
      " /\\_/\\ " + "\n" +
      "( >_< )" + "\n" +
      " c ^ c ",
      " /\\_/\\" + "\n" +
      "( 'x' )" + "\n" +
      " > ^ <",
      " /\\_/\\ " + "\n" +
      "( ' ' ) " + "\n" +
      " > ^ <",
      " /\\_/\\"  + "\n" +
      "(- . -) " + "\n" + 
      " > ^ <",
      " /\\_/\\" + "\n" +
      "( o_o )"  + "\n" +
      " > ^ <",
      " /\\__/\\" + "\n" +
      "(=^..^=)" + "\n" +
      " > >< <"
    ];
    return cats[Math.floor(Math.random() * cats.length)];
  }
}
console.log("sssssssssssssssssssss");
export { Cat }