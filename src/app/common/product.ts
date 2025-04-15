export class Product {
  constructor( public id: string,
    public sku: string,
    public name: string,
    public description: string,
    public unitPrice: number,
    public imageURL: string,
    public active: boolean,
    public unitsInStock: number,
    public dateCreated: Date,
    public lastUpdated: Date
  ) {}
}
