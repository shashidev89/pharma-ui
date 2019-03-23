import { PharmaUiPage } from './app.po';

describe('pharma-ui App', () => {
  let page: PharmaUiPage;

  beforeEach(() => {
    page = new PharmaUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
