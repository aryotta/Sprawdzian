import { validateItem } from "./validation";
import ShoppingList from "./ShoppingList";
const nameInput = document.querySelector("#nameInput");
const quantityInput = document.querySelector("#quantityInput");
const addButton = document.querySelector("#addButton");
const errorMessage = document.querySelector("#errorMessage");
const filterSelect = document.querySelector("#filterSelect");
const listContainer = document.querySelector("#listContainer");
if (!nameInput || !quantityInput || !addButton || !listContainer) {
    throw new Error("Required elements are missing from the page.");
}
const list = new ShoppingList();
const getFilter = () => {
    const id = filterSelect?.selectedOptions[0]?.id;
    return id === "bought" || id === "toBuy" ? id : "all";
};
const buildList = () => {
    listContainer.innerHTML = list.render(getFilter());
};
const showError = (message) => {
    if (errorMessage) {
        errorMessage.textContent = message ?? "";
    }
};
addButton.addEventListener("click", () => {
    const error = validateItem(nameInput.value, quantityInput.value);
    showError(error);
    if (error)
        return;
    list.add(nameInput.value.trim(), Number(quantityInput.value));
    nameInput.value = "";
    quantityInput.value = "";
    nameInput.focus();
    buildList();
});
listContainer.addEventListener("click", (e) => {
    if (!(e.target instanceof HTMLElement))
        return;
    const action = e.target.dataset.action;
    const row = e.target.closest("[data-id]");
    if (!action || !row)
        return;
    const id = Number(row.dataset.id);
    if (action === "delete") {
        list.remove(id);
    }
    else if (action === "toggle") {
        list.toggle(id);
    }
    buildList();
});
filterSelect?.addEventListener("change", buildList);
buildList();
