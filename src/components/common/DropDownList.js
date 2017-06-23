import React from 'react';
import * as categories from '../../api/categories';
import PropTypes from 'prop-types';

class DropDownList extends React.Component {

  constructor(props) {
    super();

    this.state = {
      value: props.value
    };
    this.onChange=this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({ value: event.target.value});
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.onChange}>
           {categories.items.map((category) =>
               <option key={category.id} value={category.itemName}>{category.itemName}</option>
               )}
         </select>
    );
  }
}
DropDownList.propTypes = {
  value: PropTypes.string.isRequired
};
export default DropDownList;
