interface IItem {
    size : number;
    color : number;
}

interface IDiscountable {
    applyDiscount(discount : number) : void;
}

interface ISale {
    price() : number;
}
