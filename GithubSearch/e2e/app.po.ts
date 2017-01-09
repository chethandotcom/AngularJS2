import { browser, element, by } from 'protractor';

export class GithubsearchPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gs-root h1')).getText();
  }
}
