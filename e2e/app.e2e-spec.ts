import { UIdevelopmentPage } from './app.po';

describe('uidevelopment App', function() {
  let page: UIdevelopmentPage;

  beforeEach(() => {
    page = new UIdevelopmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
