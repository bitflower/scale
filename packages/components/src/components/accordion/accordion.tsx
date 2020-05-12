import { Component, Prop, h, Method } from '@stencil/core';
import { CssClassMap } from '../../utils/utils';
import classNames from 'classnames';

import { styles } from './accordion.styles';
import { CssInJs } from '../../utils/css-in-js';
import { StyleSheet } from 'jss';
import Base from '../../utils/base-interface';

@Component({
  tag: 'scale-accordion',
  shadow: false,
})

export class Accordion implements Base {
  /** (optional) Custom class */
  @Prop() customClass?: string = '';

  /** (optional) Injected jss styles */
  @Prop() styles?: StyleSheet;

  /** decorator Jss stylesheet */
  @CssInJs('Accordion', styles) stylesheet: StyleSheet;

  componentWillLoad() {}
  componentWillUpdate() {}
  componentDidUnload() {}

  @Method() 
  async expandPanel() {
    return 'expanded'
  }

  render() {
    // const { classes } = this.stylesheet;

    return (
      
        <div class={this.getCssClassMap()}>
          <slot></slot>
        </div>
      
    );
  }

  getCssClassMap(): CssClassMap {
    const { classes } = this.stylesheet;
    return classNames(
      classes.alert,
      this.customClass && this.customClass
    );
  }
}
