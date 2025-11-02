import { test, expect } from '@playwright/test';

test('Flujo B - Gestión de Cuenta', async ({ page }) => {

    // Ir al home
    await page.goto('/');

    // Ir a Sign In
    await page.getByRole('link', { name: 'Sign In' }).click();

    // Login
    await page.fill('input[name="username"]', 'dgreene');
    await page.fill('input[name="password"]', '123456');
    await page.getByRole('button', { name: 'Login' }).click();

    // Abrir menú del usuario - clic en el botón dropdown (no en el link)
    // FIX: Se utiliza un localizador más preciso para evitar seleccionar el botón oculto del menú móvil.
    // Se asume que el menú de usuario es el último dropdown toggle visible.
    await page.locator('.dropdown-toggle:visible').last().click();

    // Clic en "My Account" dentro del menú desplegable (ahora visible)
    await page.getByRole('link', { name: 'My Account' }).click();

    // Editar campos del formulario
    await page.fill('input[name="firstName"]', 'Jose actualizado');
    await page.fill('input[name="email"]', 'joseactualizado@mail.com');

    // Guardar cambios
    await page.getByRole('button', { name: 'Save Account Information' }).click();

    // Validar mensaje
    // FIX: Se usa getByText para verificar que el mensaje de éxito ("Your account has been updated.") sea visible.
    await expect(page.getByText('Your account has been updated.')).toBeVisible();
});
