import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../support/pages/login.page.js';
import MainPage from '../support/pages/main.page.js';

Given(/^I am on the login page$/, async () => {
    await browser.url("/")});

When(/^I login with credentials$/, async () => {
    await LoginPage.login('standard_user','secret_sauce')});

Then(/^I am logged in$/, async () => {
    const $button = await $('//div[@id="shopping_cart_container"]')
    await expect($button).toBeDisplayed()});
