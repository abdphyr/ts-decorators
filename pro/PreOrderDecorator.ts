
export function PreOrderDecorator(): ClassDecorator {
  return (target) => {
    target.prototype.calculateTotalPrice = function () {
      return this.products
      .reduce((acc: number, item: {name: string, price: number}) => 
      acc + item.price, 0) * 0.90
    }
  };
}