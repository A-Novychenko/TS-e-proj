// Давайте побудуємо будинок.

// Створіть абстрактний клас House, в ньому повинна бути наступна логіка

// властивість door – вона може бути закрита, або відкрита.
// властивість key – об'єкт класу Key.
// конструктор приймає аргумент класу Key та зберігає його у властивість key.

// метод comeIn, який додає об'єкт класу Person у властивість tenants і це спрацьовує лише, якщо door відкрита.
// абстрактний метод openDoor приймає аргумент класу Key
// Створіть клас MyHouse, який реалізує клас House

// створюємо метод openDoor, оскільки він приймає ключ, звіряємо збережений ключ у властивості key чи дорівнює він ключу з аргументу, якщо так, відкриваємо двері.

// Створіть об'єкт Key

// є тільки властивість signature
// під час створення об'єкта генерує випадкове число та зберігає його у signature
// метод getSignature повертає випадкове число з signature

// Створіть об'єкт Person

// конструктор приймає ключ класу Key і зберігає його у властивість key
// метод getKey повертає key
// Зробіть так, щоб мешканець потрапив додому.

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random() * 100;
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error("Door is close");
    }
    this.tenants.push(person);
    console.log("Person inside");
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }
    return (this.door = true);
  }
}
const key = new Key();
const person = new Person(key);
const myHouse = new MyHouse(key);

myHouse.openDoor(person.getKey());
myHouse.comeIn(person);
