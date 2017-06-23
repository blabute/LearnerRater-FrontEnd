import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as userInterfaceActions from '../../actions/userInterfaceActions';

class ManageButton extends React.Component {

  constructor() {
    super();

    this.onManageClick = this.onManageClick.bind(this);
  }

  onManageClick() {
    this.props.actions.toggleCanDelete();
  }

  render() {

    return (
      <div className="manage-btn-container">
        <button type="button" className="btn" onClick={this.onManageClick} id="btnToggleManage">Manage</button>
      </div>
    );
  }
}

ManageButton.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userInterfaceActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ManageButton);
