import { Order } from "../main/Order";

export class DiscountedOrderDecorator extends Order {
  protected _order: Order;
  constructor(order: Order) {
    super()
    this._order = order
    this.products = order.products
    this.orderDate = order.orderdate
  }
  public override calculateTotalPrice(): number {
    return this._order.calculateTotalPrice()
  }
}