(function(root){
  var Link = ReactRouter.Link;

  "use strict";

  var WorkspaceIndexItem = root.WorkspaceIndexItem = React.createClass({

    render: function () {
      var workspace = this.props.workspace;
      var idx = 1;
      var empty = [];
      var filled = [];

      while (idx <= workspace.overall) {
        filled.push(<span className="glyphicon glyphicon-star"></span>);
        idx += 1;
      }

      while (idx <= 5) {
        empty.push(<span className="glyphicon glyphicon-star-empty"> </span>)
        idx += 1;
      }

      var workspace_url = "/workspace/" + workspace.id;
      return (
        <div className="workspace-item">
          <div className="container">
            <div className="row">
              <div className="col-md-1" id="workspace-profile-picture">
                <img src = {workspace.profile_image_url} height="90px" width="90px"/>
              </div>
              <div className="col-md-3">
                <br/>
                <Link to={workspace_url} id="workspace-name"> {workspace.name} </Link>
                <br/>
                {filled}
                {empty}
              </div>
              <div className="col-md-3">
                <br/>
                <div> {workspace.street_address} </div>
                <div> {workspace.city_address}</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  });
}(this));
