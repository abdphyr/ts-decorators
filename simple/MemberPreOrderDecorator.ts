import { DiscountedOrderDecorator } from "./DiscountedOrderDecorator";
import { Order } from "../main/Order";

export class MemberPreOrderDecorator extends DiscountedOrderDecorator{
  constructor(order: Order) {
    super(order)
  }
  public override calculateTotalPrice(): number {
    return this._order.calculateTotalPrice() * 0.95 * 0.90
  }
}