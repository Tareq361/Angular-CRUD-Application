

export class Book {
  id: number;
  title: string | undefined;
  price: number | undefined;
  yearOfPublish: string | undefined;
  authors: Author[];
  genre: string | undefined;
  publisher: string | undefined;

  constructor(id: number, title: string | undefined, price: number | undefined, yearOfPublish: string | undefined, authors: Author[], genre: string | undefined, publisher: string | undefined) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.yearOfPublish = yearOfPublish;
    this.authors = authors;
    this.genre = genre;
    this.publisher = publisher;
  }

}
export interface Author {
  id: number|undefined;
  authorName: string|undefined;
  gender: string|undefined;
}
