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
    let btnStyle = {backgroundColor: this.props.canDelete? "red": "" };
    debugger;
    return (
      <div className="manage-btn-container"  >
        <button type="button" className="btn" onClick={this.onManageClick} id="btnToggleManage" style = {btnStyle}>Manage</button>
      </div>
    );
  }
}

ManageButton.propTypes = {
  actions: PropTypes.object.isRequired,
  canDelete: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userInterfaceActions, dispatch)
  };
}

function mapStateToProps(state){
  return {
    canDelete: state.userInterface.canDelete
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageButton);
