interface Attacker {
    attack : () => {};
}

class Weapon implements Attacker {
    public damage : number;

    attack(): {} {
        return {};
    }
}

class Sword extends Weapon {
    attack(): {} {
        return "sword";
    }
}

class Crossbow extends Weapon {
    attack(): {} {
        return "crossbow";
    }
}

class Character {
    weapon: Weapon;

    constructor(weapon: Weapon) {
        this.weapon = weapon;
    }

    changeWeapon(newWeapon: Weapon) {
        this.weapon = newWeapon;
    }

    attack() {
        this.weapon.attack()
    }
}
