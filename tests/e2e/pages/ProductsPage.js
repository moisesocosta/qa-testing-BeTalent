class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.sortSelect = page.locator('[data-test="product-sort-container"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
    
    this.backpackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.backpackRemoveButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.bikeLightAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    
    this.cartItemName = page.locator('.inventory_item_name');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async addBackpackToCart() {
    await this.backpackAddToCartButton.click();
  }

  async removeBackpackFromCart() {
    await this.backpackRemoveButton.click();
  }

  async addBikeLightToCart() {
    await this.bikeLightAddToCartButton.click();
  }

  async sortBy(option) {
    await this.sortSelect.selectOption(option);
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { ProductsPage };