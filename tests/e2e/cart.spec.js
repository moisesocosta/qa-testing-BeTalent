const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { ProductsPage } = require('./pages/ProductsPage');

test.describe('Funcionalidade do Carrinho e Inventário', () => {
  
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Deve adicionar e remover um item do carrinho com sucesso', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.addBackpackToCart();
    await expect(productsPage.shoppingCartBadge).toHaveText('1');

    await productsPage.removeBackpackFromCart();
    await expect(productsPage.shoppingCartBadge).not.toBeVisible();
  });

  test('Deve ordenar os produtos por preço (Low to High)', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.sortBy('lohi');

    const firstProductPrice = page.locator('.inventory_item_price').first();
    await expect(firstProductPrice).toHaveText('$7.99');
  });
});