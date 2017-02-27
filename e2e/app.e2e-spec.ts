import { BlockchainpocPage } from './app.po';

describe('blockchainpoc App', function() {
  let page: BlockchainpocPage;

  beforeEach(() => {
    page = new BlockchainpocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
