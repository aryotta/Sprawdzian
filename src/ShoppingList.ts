import ShoppingItem from "./ShoppingItem";

export type Filter = "all" | "bought" | "toBuy";

class ShoppingList {
    private items: ShoppingItem[] = [];
    private nextId: number = 1;

    add(name: string, quantity: number): ShoppingItem {
        const item = new ShoppingItem(this.nextId++, name, quantity);
        this.items.push(item);
        return item;
    }

    remove(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }

    toggle(id: number): void {
        this.items.find(item => item.id === id)?.toggle();
    }

    getFiltered(filter: Filter = "all"): ShoppingItem[] {
        switch (filter) {
            case "bought":
                return this.items.filter(item => item.isBought);
            case "toBuy":
                return this.items.filter(item => !item.isBought);
            default:
                return this.items;
        }
    }

    render(filter: Filter = "all"): string {
        return this.getFiltered(filter)
            .map(item => item.render())
            .join("");
    }
}

export default ShoppingList;
