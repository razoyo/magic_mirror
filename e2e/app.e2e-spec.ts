import { HatMirrorPage } from './app.po';

describe('hat-mirror App', function() {
  let page: HatMirrorPage;

  beforeEach(() => {
    page = new HatMirrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
