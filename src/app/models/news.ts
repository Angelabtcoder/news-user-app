export class News {
  _id?: number;
  author: string;
  title: string;
  description: string;
  date: string;  
  archiveDate: string;
  content: string;

  constructor(author: string, title: string, description: string, date: string, archiveDate:string, content: string) {
      this.author = author;
      this.title = title;
      this.description = description;
      this.date = date;
      this.archiveDate = archiveDate;
      this.content = content;
  }  
}
