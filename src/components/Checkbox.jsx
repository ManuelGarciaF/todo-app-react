import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    const { checked } = this.props;
    this.state = {
      checked,
    };
  }

  handleChange(event) {
    const { checked } = this.state;
    const { onChange } = this.props;

    this.setState({
      checked: !checked,
    });

    onChange(event);
  }

  render() {
    const { checked } = this.state;
    const { title } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className="c-checkbox">
        <span className={`c-checkbox__checkmark ${checked ? 'is-checked' : ''}`}>
          {checked ? <i className="fas fa-check fa-xs" /> : ''}
        </span>
        <h3 className={`c-checkbox__title ${checked ? 'is-completed' : ''}`}>{title}</h3>
        <input
          className="c-checkbox__input"
          onChange={this.handleChange}
          type="checkbox"
          checked={checked}
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
