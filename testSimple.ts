import {
  PreOrderDecorator, 
  MemberOrderDecorator,
  MemberPreOrderDecorator
} from "./simple";
import { Order } from "./main/Order";
import { products } from "./main/properties";

const order = new Order()
order.products = products
const preOrder = new PreOrderDecorator(order)
const memberOrder = new MemberOrderDecorator(order)
const memberPreOrder = new MemberPreOrderDecorator(order)

console.log(`Oddiy buyurtma ${order.calculateTotalPrice()}`)

console.log(`Avvaldan berilgan buyurtma ${preOrder.calculateTotalPrice()}`)

console.log(`Do'kon a'zosi bergan buyurtma  ${memberOrder.calculateTotalPrice()}`)

console.log(`do'kon a'zosing avvaldan bergan buyurtmasi 
${memberPreOrder.calculateTotalPrice()}`)