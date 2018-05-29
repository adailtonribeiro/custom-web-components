import {Component, Prop, Element, Method} from '@stencil/core';

@Component({
  tag: 'ar-modal',
  styleUrl: 'ar-modal.css',
  shadow: true
})
export class ArModal {

  @Element() modalEl: HTMLElement;

  @Prop() modalTitle: string;

  @Method()
  open() {
    this.modalEl.shadowRoot.querySelector('.modal')['style'].display = 'block';
  }

  @Method()
  close() {
    this.modalEl.shadowRoot.querySelector('.modal')['style'].display = 'none';
  }

  render() {
    return (
      <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <span class="close" onClick={this.close.bind(this)}>&times;</span>
            <h2>{this.modalTitle}</h2>
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
