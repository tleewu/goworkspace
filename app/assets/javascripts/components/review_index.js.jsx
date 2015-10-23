(function(root){

  "use strict"

  var ReviewIndex = root.ReviewIndex = React.createClass({
    getInitialState: function () {
      return {reviews: [], currentUser: {}};
    },

    componentWillReceiveProps: function () {
      this.setState({currentUser: this.props.currentUser});
    },

    _updateAllReviews: function () {
      this.setState({reviews: ReviewStore.all()});
    },

    componentDidMount: function () {
      ReviewStore.addChangeListener(this._updateAllReviews);
    },

    componentWillUnmount: function () {
      ReviewStore.removeChangeListener(this._updateAllReviews);
    },

    _deleteReview: function (reviewId) {
      ApiUtil.deleteReview(reviewId);
    },

    render: function () {
      var that = this;
      return (
        <div className="container">
          {
            this.state.reviews.map(function (review) {
              var firstLetterLastName = review.user.last_name[0];
              var deleteReview;
              if (review.user.id == that.state.currentUser.id) {
                deleteReview = <div> <button onClick={that._deleteReview(review.id)}> Delete </button> </div>;
              }
              return (
                <div className="row">
                  <div className="col-md-1" id="user-profile-pic-review">
                    <img src={review.user.profile_image_url} className='img-circle' height='30px' width='30px'/>
                  </div>
                  <div className="col-md-1" id="user-info-review">
                    {review.user.first_name} {firstLetterLastName}.
                    <br />
                    {review.user.location}
                    {deleteReview}
                  </div>
                  <div className="col-md-6" id="review-body">
                    <div className="row">
                      <div className="col-md-2 col-md-offset-1">
                        Overall: {review.overall}
                      </div>
                      <div className="col-md-2">
                        Wifi: {review.wifi}
                      </div>
                      <div className="col-md-2">
                        Outlets: {review.power}
                      </div>
                      <div className="col-md-2">
                        Seating: {review.seating}
                      </div>
                      <div className="col-md-2">
                        Pricing: {review.pricing}
                      </div>
                    </div>
                    <div className="row">
                      {review.body}
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      )
    }
  });
}(this));
