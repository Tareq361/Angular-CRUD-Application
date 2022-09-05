import {Book} from "./Book";

export class BookShop{
  id: number;
  shopName: string | undefined;
  shopNumber: string | undefined;
  location: string | undefined;
  booklist: Book[] | undefined;
  contactNumber:string|undefined;
  email:string|undefined;

  constructor(id: number, shopName: string | undefined, shopNumber: string | undefined, location: string | undefined, booklist: Book[] | undefined, contactNumber: string | undefined, email: string | undefined) {
    this.id = id;
    this.shopName = shopName;
    this.shopNumber = shopNumber;
    this.location = location;
    this.booklist = booklist;
    this.contactNumber = contactNumber;
    this.email = email;
  }
}
