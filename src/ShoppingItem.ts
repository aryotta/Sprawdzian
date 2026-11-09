function escapeHtml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

class ShoppingItem {
    id: number;
    name: string;
    quantity: number;
    isBought: boolean;

    constructor(id: number, name: string, quantity: number, isBought: boolean = false) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.isBought = isBought;
    }

    toggle(): void {
        this.isBought = !this.isBought;
    }

    render(): string {
        return `
        <div class="item ${this.isBought ? "bought" : ""}" data-id="${this.id}">
            <p>${this.id}</p>
            <h3>${escapeHtml(this.name)}</h3>
            <p>${this.quantity}</p>
            <input type="checkbox" data-action="toggle" ${this.isBought ? "checked" : ""}>
            <button data-action="delete">Delete</button>
        </div>`;
    }
}

export default ShoppingItem;
