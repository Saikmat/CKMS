import { test, expect, it } from 'vitest'
import { initMap } from "./index";



// test that map deploys
test('map deployment', () => {
    expect(initMap()).toBeDefined();
})

// test that title is in the right place
test('text locations', async ({ page }) => {
    await expect(page.getByRole('heading', { name: `UMBC Interactive Map`, exact: true })); // not right, work on this
});

describe('search bars', () => {
    it ('destination bar', () => {
        let destinationbar = document.getElementById('origin-input');
        expect(destinationbar.innerText).toBe('Enter your destination');
        // expect(destinationbar.offsetWidth).toBe(150);
    });
    it ('start bar', () =>{
        let startBar = document.getElementById('pac-input');
        expect(startBar.innerText).toBe('Enter your starting location');
    });
    it.skip('favorites bar', () => {
        let favoriteBar = document.getElementById('favorites');
        expect(favoriteBar.innerText).toBe('Enter a favorite location');
        // expect(favoriteBar.offsetWidth).toBe(4);
    });
});



// test that bottom matter is in the right place