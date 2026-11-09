import ShoppingItem from "./ShoppingItem";
class ShoppingList {
    items = [];
    nextId = 1;
    add(name, quantity) {
        const item = new ShoppingItem(this.nextId++, name, quantity);
        this.items.push(item);
        return item;
    }
    remove(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
    toggle(id) {
        this.items.find(item => item.id === id)?.toggle();
    }
    getFiltered(filter = "all") {
        switch (filter) {
            case "bought":
                return this.items.filter(item => item.isBought);
            case "toBuy":
                return this.items.filter(item => !item.isBought);
            default:
                return this.items;
        }
    }
    render(filter = "all") {
        return this.getFiltered(filter)
            .map(item => item.render())
            .join("");
    }
}
export default ShoppingList;
