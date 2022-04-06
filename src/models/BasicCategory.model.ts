

export class BasicCategory{

  constructor(categoryName:string,categoryDescription:string,categoryBackgroundImageUrl:string){
    this.CategoryName=categoryName;
    this.CategoryDescription=categoryDescription;
    this.CategoryBackgroundImageUrl=categoryBackgroundImageUrl;
  }
  CategoryName!: string;

  CategoryDescription!: string;

  CategoryBackgroundImageUrl!: string;
}
