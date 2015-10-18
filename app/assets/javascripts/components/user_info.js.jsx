(function(root){

  "use strict";

  var UserInfo = root.UserInfo = React.createClass({
    getInitialState: function () {
      return ({currentUser: UserStore.get()});
    },

    componentDidMount: function () {
      UserStore.addChangeListener(this._getCurrentUser);
      ApiUtil.fetchCurrentUser();
    },

    componentWillUnmount: function () {
      UserStore.removeChangeListener(this._getCurrentUser);
    },

    _getCurrentUser: function () {
      this.setState({currentUser: UserStore.get()});
    },

    render: function () {

      return (
        <div id="user-info">
          Welcome, {this.state.currentUser.first_name}!
        </div>
      )
    }
  });
}(this));