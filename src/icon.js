import React, { Component, PropTypes } from 'react';
import Styles from './styles';
import kebabCase from 'lodash.kebabCase';

export default class Icon extends Component {
  static propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.oneOf([
      'isSmall',
      'isMedium',
      'isLarge',
    ]),
  };

  static defaultProps = {
    style: {},
    className: '',
  };

  createClassName() {
    const styles = new Styles().getStyles();
    return [
      styles.icon,
      styles[kebabCase(this.props.size)],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    const styles = new Styles().getStyles();
    return (
      <span {...this.props} className={this.createClassName()}>
        <i className={[styles.fa, this.props.icon].join(' ').trim()} />
      </span>
    );
  }
}
