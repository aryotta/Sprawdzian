export function validateItem(name, quantityText) {
    if (name.trim() === "") {
        return "Nazwa nie może być pusta.";
    }
    const quantity = Number(quantityText);
    if (quantityText.trim() === "" || !Number.isInteger(quantity) || quantity < 1) {
        return "Liczba musi być jak najmniej 1.";
    }
    return null;
}
