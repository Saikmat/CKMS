import { test, expect, it } from 'vitest'
import { initMap } from "./index";

// noinspection JSUnusedLocalSymbols
const clickable_element_width = 10;
// noinspection JSUnusedLocalSymbols
const full_width_element = 100;
// noinspection JSUnusedLocalSymbols
const side_bar_element = 35;

// test that map deploys
test('map deployment', () => {
    expect(initMap()).toBeDefined();
})

// test that title is in the right place
test('text locations', async ({ page }) => {
    await expect(page.getByRole('heading', { name: `UMBC Interactive Map`, exact: true })); // not right, work on this
});

describe('side matter', () => {
    describe('search bars', () => {
        it ('destination bar', () => {
            let destination_bar = document.getElementById('origin-input');
            expect(destination_bar.innerText).toBe('Enter your destination');
            expect(destination_bar.offsetWidth).gte(10); // make sure it's not too narrow
        });
        it ('start bar', () =>{
            let start_bar = document.getElementById('pac-input');
            expect(start_bar.innerText).toBe('Enter your starting location');
            expect(start_bar.offsetWidth).gte(10); // make sure it's not too narrow
        });
    });

    describe ('buttons', () =>{
        it ('search button', () => {
            let search_button = document.getElementById('search-button');
            expect(search_button).toBeDefined();
            expect(search_button.innerText).toBe('Go Now');
            expect(search_button.fillColor).toBe('#ffffff'); // fix color
            expect(search_button.offsetWidth).gte(10);
        });

        it ('clear button', () => {
            let clear_button = document.getElementById('clear-button');
            expect(clear_button).toBeDefined();
            expect(clear_button.innerText).toBe('Clear');
            expect(clear_button.fillColor).toBe('#ffffff'); // fix color
            expect(clear_button.offsetWidth).gte(10);
        });

        it ('favorites button', () => {
            let favorite_button = document.getElementById('view-fave-button');
            expect(favorite_button).toBeDefined();
            expect(favorite_button.innerText).toBe('Favorites');
            expect(favorite_button.fillColor).toBe('#ffffff'); // fix color
            expect(favorite_button.offsetWidth).gte(10);
        });
    });
});

describe('nav bar', () => {
    it ('nav bar', () => {
        let nav_bar = document.getElementById('navbutton');
        expect(nav_bar).toBeDefined();
        expect(nav_bar.offsetWidth).gte(100); // fix this number
        expect(nav_bar.offsetHeight).gte(10); // fix this number
    })
    it ('accessible', () => {
        let accessible = document.getElementById('accessible.html');
        expect(accessible).toBeDefined();
        expect(accessible.offsetWidth).gte(10);
    });
    it ('weather', () => {
        let weather = document.getElementById('weather.html');
        expect(weather.innerText).toBeDefined();
        expect(weather.offsetWidth).gte(10);
    })
})

