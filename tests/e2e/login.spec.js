const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/LoginPage');

test.describe('Funcionalidade de Login', () => {
  test('Deve logar com sucesso com usuário padrão', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);
    const title = page.locator('.title');
    await expect(title).toHaveText('Products');
  });

  test('Deve exibir erro ao usar usuário bloqueado', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    const error = page.locator('[data-test="error"]');
    await expect(error).toContainText('Sorry, this user has been locked out');
  });

  test('Deve realizar o logout com sucesso a partir da vitrine', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);

    const menuButton = page.locator('#react-burger-menu-btn');
    const logoutLink = page.locator('#logout_sidebar_link');

    await menuButton.click();
    await logoutLink.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(loginPage.loginButton).toBeVisible();
  });
});