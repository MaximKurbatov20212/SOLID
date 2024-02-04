class Order {
    public totalSum : number;
    public items : number [];

    public static printOrder() : void { }
    public showOrder() : void {}

    public static load() : Order { return new Order()}
    public save() : void {}
    public update() : void {}
    public delete() : void {}
}

const order = new Order();