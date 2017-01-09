import { BuisinesscontactPage } from './app.po';

describe('buisinesscontact App', function() {
  let page: BuisinesscontactPage;

  beforeEach(() => {
    page = new BuisinesscontactPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bc works!');
  });
});
