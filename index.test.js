import { test, expect, } from 'vitest'
import { initMap } from "./index";


// test that map deploys
test('map deployment', () => {
    expect(initMap()).toBeDefined();
})

// test that title is in the right place
test('text locations', async ({ page }) => {
    await expect(page.getByRole('heading', { name: `UMBC Interactive Map`, exact: true })); // not right, work on this
});

// test that bottom matter is in the right place