const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');
const { ProductsPage } = require('./pages/ProductsPage');

test.describe('Análise de Falhas - Problem User', () => {

  test('BUG: Verificar quebra de assets (imagens) na vitrine de produtos', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login('problem_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);

    const backpackImage = page.locator('.inventory_item_img img').first();
    
    await expect(backpackImage).toBeVisible();

    const imageSrc = await backpackImage.getAttribute('src');

    expect(imageSrc).not.toContain('sl-404');
  });
});