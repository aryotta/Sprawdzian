export function validateItem(name: string, quantityText: string): string | null {
    if (name.trim() === "") {
        return "Nazwa nie może być pusta.";
    }

    const quantity = Number(quantityText);
    if (quantityText.trim() === "" || !Number.isInteger(quantity) || quantity < 1) {
        return "Liczba musi być jak najmniej 1.";
    }

    return null; 
}
