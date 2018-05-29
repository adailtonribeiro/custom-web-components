import {Component, Prop, Element, Method} from '@stencil/core';

@Component({
  tag: 'ar-progress-bar',
  styleUrl: 'ar-progress-bar.css',
  shadow: true
})
export class ArProgressBar {

  @Element() el: HTMLElement;

  @Prop({mutable: true}) value: number = 0;
  @Prop() max: number = 100;
  @Prop() step: number = 10;

  @Method()
  start() {
    this.increaseValue();
  }

  componentDidLoad() {
    console.log('Component has been rendered');
    //this.increaseValue();
  }

  increaseValue() {
    var _me = this;
    setTimeout(function () {
      if (_me.value < _me.max) {
        _me.value += _me.step;
        _me.el.style.setProperty('--current-value', _me.value.toString());
        _me.increaseValue();
      }
    }, 1000);
  }

  render() {
    this.el.style.setProperty('--current-value', this.value.toString());
    this.el.style.setProperty('--max-value', this.max.toString());

    return (
      <div class="progress-container">
        <div class="progress-bar">
          <span class="progress-value">{this.value}%</span>
        </div>
        <div class="progress-bar-remainder"/>
      </div>
    );
  }
}
