const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { ProductsPage } = require('./pages/ProductsPage');
const { CheckoutPage } = require('./pages/CheckoutPage');

test.describe('Processo de Checkout', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('Deve realizar o fluxo completo de compra com sucesso', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.addBackpackToCart();
    await productsPage.addBikeLightToCart();
    await productsPage.goToCart();

    await expect(page).toHaveURL(/cart.html/);
    await expect(productsPage.cartItemName.first()).toContainText('Sauce Labs Backpack');
    
    await productsPage.clickCheckout();
    await expect(page).toHaveURL(/checkout-step-one.html/);

    await checkoutPage.fillInformation('Moises', 'Tester', '12345-678');
    await expect(page).toHaveURL(/checkout-step-two.html/);

    await checkoutPage.finalizeCheckout();

    await expect(page).toHaveURL(/checkout-complete.html/);
    await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    
    await expect(productsPage.shoppingCartBadge).not.toBeVisible();
  });
});