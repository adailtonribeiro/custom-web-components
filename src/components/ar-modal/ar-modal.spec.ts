import {TestWindow} from '@stencil/core/testing';
import {ArModal} from './ar-modal';

describe('ar-modal', () => {
  it('should build', () => {
    expect(new ArModal()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLArModalElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ArModal],
        html: '<ar-modal></ar-modal>'
      });
    });

    it('should work with a title', async () => {
      element.modalTitle = 'Modal Title';
      await testWindow.flush();
      expect(element.textContent.trim()).toContain('Modal Title');
    });

  });
});
