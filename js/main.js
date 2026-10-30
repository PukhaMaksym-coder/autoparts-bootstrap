
document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;

    const cartButtons = document.querySelectorAll(".add-to-cart");

    cartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            cartCount++;

            const productCard = button.closest(".product-card");
            const productName = productCard.querySelector(".card-title").textContent;

            button.textContent = "✓ Додано до кошика";
            button.classList.remove("btn-warning");
            button.classList.add("btn-success");

            // Повідомлення про додавання товару
            alert(
                "Товар «" + productName + "» додано до кошика!\n" +
                "Усього товарів: " + cartCount
            );

            setTimeout(function () {
                button.textContent = "Додати в кошик";
                button.classList.remove("btn-success");
                button.classList.add("btn-warning");
            }, 1500);
        });
    });
});
