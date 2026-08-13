import { test, expect } from '@playwright/test';
import { teamMembers } from '../../src/data/team';

function getLowerFirstName(name: string): string {
    const parts = name.trim().split(/\s+/);
    return parts[0]?.toLowerCase() ?? '';
}

test.describe('Login/TeamPage Happy Path', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/team');
    });

    test('Check URL is correct', async ({ page }) => {
        await expect(page).toHaveURL(/.*\/team/);
    });

    for (const member of teamMembers) {
        test(`Team Card renders and expands: ${member.name}`, async ({ page }) => {
            const card = page.getByTestId(`team-card-${member.name}`);
            const base = card.locator('div.overflow-hidden').first(); // clamped container, always visible
            const overlay = card.locator('[aria-hidden="true"]');     // unclamped container, appears on hover (the full card), 
            // Must seperate since getByText will throw errors since there are two elements with the same text (the base and overlay). 

            await expect(base.getByText(`${member.name}`)).toBeVisible();
            await expect(base.getByText(`${member.role}`)).toBeVisible();
            if (member.blurb) {
                await expect(base.getByText(member.blurb)).toBeVisible();
            }

            const photo = base.getByRole('img', { name: member.name });
            await expect(photo).toBeVisible();

            // Overlay exists in DOM but is not visually shown yet
            await expect(overlay).toHaveCSS('opacity', '0');
            await expect(overlay).toHaveCSS('pointer-events', 'none');

            // On hover we expect the overlay to appear and show the full content
            await card.hover();

            // After hover, the overlay should be visible and test the content
            await expect(overlay).toHaveCSS('opacity', '1');
            await expect(overlay).toHaveCSS('pointer-events', 'auto');

            await expect(overlay.getByText(`${member.name}`)).toBeVisible();
            await expect(overlay.getByText(`${member.role}`)).toBeVisible();
            if (member.blurb) {
                await expect(overlay.getByText(member.blurb)).toBeVisible();
            }
            
            //Using includeHidden: true to find the overlay photo since it is hidden by default and only appears on hover
            const overlayPhoto = overlay.getByRole('img', { name: member.name, includeHidden: true });
            await expect(overlayPhoto).toBeVisible();

            //Move mouse away from the card to hide the overlay again
            await page.locator('body').hover({ position: { x: 0, y: 0 } });
            await expect(overlay).toHaveCSS('opacity', '0');

        });
    }
})