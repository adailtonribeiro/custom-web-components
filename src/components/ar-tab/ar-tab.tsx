import {Component, Prop, Element, Method} from '@stencil/core';

@Component({
  tag: 'ar-tab',
  styleUrl: 'ar-tab.css',
  shadow: true
})
export class ArTab {

  @Element() tabEl: HTMLElement;

  @Prop() tabTitle: string;

  @Method()
  open() {
    this.tabEl.shadowRoot.querySelector('.modal')['style'].display = 'block';
  }

  @Method()
  close() {
    this.tabEl.shadowRoot.querySelector('.modal')['style'].display = 'none';
  }

  render() {
    return (
      <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close" onClick={this.close.bind(this)}>&times;</span>
            <h2>{this.tabTitle}</h2>
          </div>
          <div class="modal-body">
            <slot name="item-body"/>
          </div>
          <div class="modal-footer">
            <slot name="item-footer"/>
          </div>
        </div>
      </div>
    );
  }
}
