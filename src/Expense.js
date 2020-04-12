class Expense {
  constructor(item, price, tax) {
    this.item = item;
    this.price = price;
    this.tax = tax;
  }

  itemCost() {
    return this.price + this.tax;
  }
}

const printerExpense = ['Printer toner', 50, 5];
const expense = new Expense(...printerExpense);

console.log(`${expense.item}
cost: ${expense.price}
total: ${expense.itemCost()}`);
