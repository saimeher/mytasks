import { MytaksPage } from './app.po';

describe('mytaks App', () => {
  let page: MytaksPage;

  beforeEach(() => {
    page = new MytaksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
