function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
class ShoppingItem {
    id;
    name;
    quantity;
    isBought;
    constructor(id, name, quantity, isBought = false) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.isBought = isBought;
    }
    toggle() {
        this.isBought = !this.isBought;
    }
    render() {
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
