/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface ArModal {
      'close': () => void;
      'modalTitle': string;
      'open': () => void;
    }
  }

  interface HTMLArModalElement extends StencilComponents.ArModal, HTMLStencilElement {}

  var HTMLArModalElement: {
    prototype: HTMLArModalElement;
    new (): HTMLArModalElement;
  };
  interface HTMLElementTagNameMap {
    'ar-modal': HTMLArModalElement;
  }
  interface ElementTagNameMap {
    'ar-modal': HTMLArModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ar-modal': JSXElements.ArModalAttributes;
    }
  }
  namespace JSXElements {
    export interface ArModalAttributes extends HTMLAttributes {
      'modalTitle'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ArProgressBar {
      'max': number;
      'start': () => void;
      'step': number;
      'value': number;
    }
  }

  interface HTMLArProgressBarElement extends StencilComponents.ArProgressBar, HTMLStencilElement {}

  var HTMLArProgressBarElement: {
    prototype: HTMLArProgressBarElement;
    new (): HTMLArProgressBarElement;
  };
  interface HTMLElementTagNameMap {
    'ar-progress-bar': HTMLArProgressBarElement;
  }
  interface ElementTagNameMap {
    'ar-progress-bar': HTMLArProgressBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ar-progress-bar': JSXElements.ArProgressBarAttributes;
    }
  }
  namespace JSXElements {
    export interface ArProgressBarAttributes extends HTMLAttributes {
      'max'?: number;
      'step'?: number;
      'value'?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;