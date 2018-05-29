import {TestWindow} from '@stencil/core/testing';
import {ArProgressBar} from './ar-progress-bar';

describe('ar-progress-bar', () => {
  it('should build', () => {
    expect(new ArProgressBar()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLArProgressBarElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ArProgressBar],
        html: '<ar-progress-bar></ar-progress-bar>'
      });
    });

    it('should work with a value', async () => {
      element.value = 50;
      await testWindow.flush();
      expect(element.textContent.trim()).toContain('50');
    });

  });
});
