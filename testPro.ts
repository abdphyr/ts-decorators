import { 
  PreOrderDecorator, 
  MemberOrderDecorator, 
  MemberPreOrderDecorator 
} from "./pro";
import { Order } from "./main/Order";
import { products } from "./main/properties";

@PreOrderDecorator()
export class PreOrder extends Order {}

@MemberOrderDecorator()
export class MemberOrder extends Order  {}

@MemberPreOrderDecorator()
export class MemberPreOrder extends Order {}

const order = new Order()
order.products = products

const preOrder = new PreOrder()
preOrder.products = products

const memberOrder = new MemberOrder()
memberOrder.products = products

const memberPreOrder = new MemberPreOrder()
memberPreOrder.products = products

console.log(`Oddiy buyurtma ${order.calculateTotalPrice()}`)

console.log(`Avvaldan berilgan buyurtma ${preOrder.calculateTotalPrice()}`)

console.log(`Do'kon a'zosi bergan buyurtma  ${memberOrder.calculateTotalPrice()}`)

console.log(`do'kon a'zosing avvaldan bergan buyurtmasi 
${memberPreOrder.calculateTotalPrice()}`)