class Weapon {
    type: string;
    damage: number;

    constructor(type: string, damage: number) {
        this.type = type;
        this.damage = damage;
    }
}

class Character {
    weapon : Weapon;

    constructor(weapon : Weapon) {
        this.weapon = weapon;
    }

    changeWeapon(newWeapon: Weapon) {
        this.weapon = newWeapon;
    }


    // плохо, что нужно при каждом добавлении нвого оружия добавлять if
    attack() {
        if (this.weapon.type === 'sword') {
            console.log('удар мечом')
        }
        else {
            console.log("выстрел из арбалета")
        }
    }
}


const sword = new Weapon("sword", 10);
const crossbow = new Weapon("crossbow", 20);

const charater = new Character(sword);
charater.attack();

charater.changeWeapon(crossbow);
charater.attack();


