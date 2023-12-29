// Task 2. Storage

// PERFORM THIS TASK IN task-2.js

// Create a Storage class that will create objects for managing the warehouse of goods.
// The class expects only one argument — the initial array of goods, which is written to the created object in the items private property.

// Declare the following class methods:

// getItems() — returns an array of the current items in the private property "items".
// addItem(newItem) — accepts the new item "newItem" and adds it to the array of items in the private property "items" of the object.
// removeItem(itemToRemove) — accepts a string with the name of the product "itemToRemove" 
// and removes it from the array of products in the private property "items" of the object.
// Take the code below with the instance initialization and method calls and paste it after the class declaration to check that it works correctly. 
// The results of their work will be displayed in the console. Please do not change anything there.

class Storage {
  #items;

  constructor(items){
    this.#items = items;
  }
  getItems(){
    return this.#items
  }
  addItem(newItem){
    this.#items.push(newItem);
  }
  removeItem(itemToRemove){
    this.#items = this.#items.filter((elem) => elem !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Leave this code for a mentor to review.

// What the mentor will pay attention to during the inspection:
// Declared class "Storage"
// The "getItems" method is declared in the "Storage" class
// The "addItem" method is declared in the "Storage" class
// The "removeItem" method is declared in the "Storage" class 
// The "items" property in the "Storage" class is declared as a private
// The "getItems" method returns the value of the private property "items" of the instance of the class that calls it
// The "addItem" method changes the value of the private property "items" of the instance of the class that calls it
// The "removeItem" method changes the value of the private property "items" of the instance of the class that calls it
// As a result of the call of "new Storage(["Nanitoids", "Prolonger", "Antigravitator"])" the value of the "storage" variable is an object
// The "storage" object does not have a public property items
// The first call storage.getItems() immediately after instance initialization returns an array ["Nanitoids", "Prolonger", "Antigravitator"]
// The second call storage.getItems() after call storage.addItem("Droid") returns an array ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// The third call storage.getItems() after call storage.removeItem("Prolonger") returns an array ["Nanitoids", "Antigravitator", "Droid"]