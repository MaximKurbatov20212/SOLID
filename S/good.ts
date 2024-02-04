class Order {
    public totalSum : number;
    public items: [number];
}

class OrderViewer {
    public static printOrder() : void { }
    public showOrder() : void {}
}

class OrderRepo {
    public static load() : Order { return new Order() }
    public save() : void {/*...*/}
    public update() : void {/*...*/}
    public delete() : void {/*...*/}
}

