import {test, expect, it, describe} from 'vitest'
import {initMap} from "./index";

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
test('text locations', async ({page}) => {
    await expect(page.getByRole('heading', {name: `UMBC Interactive Map`, exact: true})); // not right, work on this
});
describe('Campus Navigation App', () => {
    describe('side matter', () => {
        describe('search bars', () => {
            it('destination bar', () => {
                let destination_bar = document.getElementById('origin-input');
                expect(destination_bar.innerText).toBe('Enter your destination');
                expect(destination_bar.offsetWidth).gte(10); // make sure it's not too narrow
            });
            it('start bar', () => {
                let start_bar = document.getElementById('pac-input');
                expect(start_bar.innerText).toBe('Enter your starting location');
                expect(start_bar.offsetWidth).gte(10); // make sure it's not too narrow
            });
        });

        describe('buttons', () => {
            it('search button', () => {
                let search_button = document.getElementById('search-button');
                expect(search_button).toBeDefined();
                expect(search_button.innerText).toBe('Go Now');
                expect(search_button.fillColor).toBe('#ffffff'); // fix color
                expect(search_button.offsetWidth).gte(10);
            });

            it('clear button', () => {
                let clear_button = document.getElementById('clear-button');
                expect(clear_button).toBeDefined();
                expect(clear_button.innerText).toBe('Clear');
                expect(clear_button.fillColor).toBe('#ffffff'); // fix color
                expect(clear_button.offsetWidth).gte(10);
            });

            it('favorites button', () => {
                let favorite_button = document.getElementById('view-fave-button');
                expect(favorite_button).toBeDefined();
                expect(favorite_button.innerText).toBe('Favorites');
                expect(favorite_button.fillColor).toBe('#ffffff'); // fix color
                expect(favorite_button.offsetWidth).gte(10);
            });
        });
    });

    describe('nav bar', () => {
        it('nav bar', () => {
            let nav_bar = document.getElementById('navbutton');
            expect(nav_bar).toBeDefined();
            expect(nav_bar.offsetWidth).gte(100); // fix this number
            expect(nav_bar.offsetHeight).gte(10); // fix this number
        })
        it('accessible', () => {
            let accessible = document.getElementById('accessible.html');
            expect(accessible).toBeDefined();
            expect(accessible.offsetWidth).gte(10);
        });
        it('weather', () => {
            let weather = document.getElementById('weather.html');
            expect(weather.innerText).toBeDefined();
            expect(weather.offsetWidth).gte(10);
        })
    })

    describe('Locating Points of Interest', () => {
        it.skip('should highlight building when searching by full name', () => {
            // mock search building
            expect(true).toBe(true); // placeholder
        });
        it.skip('should suggest matches when partial name entered', () => {
            expect(true).toBe(true);
        });
        it.skip('should center map when POI is clicked from list', () => {
            expect(true).toBe(true);
        });
    });

    describe('Getting Information About Points of Interest', () => {
        it.skip('should show popup wit.skip h POI info on click', () => {
            expect(true).toBe(true);
        });
        it.skip('should expand to full info page on "More Info" click', () => {
            expect(true).toBe(true);
        });
        it.skip('should load correct info for multiple POIs', () => {
            expect(true).toBe(true);
        });
    });

    describe('Navigating Between Points', () => {
        it.skip('should draw optimal route between two points', () => {
            expect(true).toBe(true);
        });
        it.skip('should update route if start point changes', () => {
            expect(true).toBe(true);
        });
        it.skip('should avoid closed paths when calculating route', () => {
            expect(true).toBe(true);
        });
    });

    describe('Identifying Accessible Routes', () => {
        it.skip('should select accessible routes when requested', () => {
            expect(true).toBe(true);
        });
        it.skip('should warn if starting point is not accessible', () => {
            expect(true).toBe(true);
        });
        it.skip('should toggle between standard and accessible routes', () => {
            expect(true).toBe(true);
        });
    });

    describe('Weather Routes', () => {
        it.skip('should priorit.skip ize covered routes during bad weather', () => {
            expect(true).toBe(true);
        });
        it.skip('should show normal route during good weather', () => {
            expect(true).toBe(true);
        });
        it.skip('should alert when severe weather prevents navigation', () => {
            expect(true).toBe(true);
        });
    });

    describe('Authentication', () => {
        it.skip('should auto-login using cookie if available', () => {
            expect(true).toBe(true);
        });
        it.skip('should require manual login if cookie missing', () => {
            expect(true).toBe(true);
        });
        it.skip('should prompt login if session expired', () => {
            expect(true).toBe(true);
        });
    });

    describe('Saving Favorit.skip es', () => {
        it.skip('should save POI to favorit.skip es', () => {
            expect(true).toBe(true);
        });
        it.skip('should display saved favorit.skip es', () => {
            expect(true).toBe(true);
        });
        it.skip('should allow removing POI from favorit.skip es', () => {
            expect(true).toBe(true);
        });
    });

    describe('Admin Adding/Removing Buildings', () => {
        it.skip('should allow admin to add a new building', () => {
            expect(true).toBe(true);
        });
        it.skip('should allow admin to remove a building', () => {
            expect(true).toBe(true);
        });
        it.skip('should allow admin to edit.skip  building information', () => {
            expect(true).toBe(true);
        });
    });

    describe('Concurrent Users', () => {
        it.skip('should allow multiple users to login simultaneously', () => {
            expect(true).toBe(true);
        });
        it.skip('should handle multiple users saving favorit.skip es', () => {
            expect(true).toBe(true);
        });
        it.skip('should allow multiple users to navigate at once wit.skip hout issues', () => {
            expect(true).toBe(true);
        });
    });

    describe('Well-Structured UI', () => {
        it.skip('should render the main page wit.skip h correct layout', () => {
            expect(true).toBe(true);
        });
        it.skip('should follow ADA compliance in UI elements', () => {
            expect(true).toBe(true);
        });
        it.skip('should be responsive across mobile and desktop', () => {
            expect(true).toBe(true);
        });
    });
});