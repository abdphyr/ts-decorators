export class Order {
  private prs: { name: string,price: number  }[] = [];
  protected orderDate: number = Date.now()

  public calculateTotalPrice (): number {
    return this.prs.reduce((acc, item) => acc + item.price, 0)
  }
  public set products (prs: typeof this.prs) {
    this.prs = prs;
  }
  public get products () {
    return this.prs;
  }
  public get orderdate () {
    return this.orderDate
  }
}