import {TestWindow} from '@stencil/core/testing';
import {ArTab} from './ar-tab';

describe('ar-tab', () => {
  it('should build', () => {
    expect(new ArTab()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLArTabElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ArTab],
        html: '<ar-tab></ar-tab>'
      });
    });

    it('should work with a title', async () => {
      element.tabTitle = 'Modal Title';
      await testWindow.flush();
      expect(element.textContent.trim()).toContain('Modal Title');
    });

  });
});
