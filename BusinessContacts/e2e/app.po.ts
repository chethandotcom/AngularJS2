import { browser, element, by } from 'protractor';

export class BuisinesscontactPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bc-root h1')).getText();
  }
}
