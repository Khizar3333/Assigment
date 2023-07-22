interface car{
make:string;
model: string;
  year: number;
}
interface Book {
    title: string;
    author: string;
    publicationYear: number;
  }
  const book1: Book={
    title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publicationYear: 1925,
  }
const CAR: car={
    make: "toyota",
    model: "corolla",
    year: 2008
}
console.log(CAR)
console.log(book1)