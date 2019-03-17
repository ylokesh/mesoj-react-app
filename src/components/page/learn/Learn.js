import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { loadLearn } from '../../../redux/actions/learnAction';

import Spinner from '../../atoms/Spinner';

class Learn extends Component {
  componentDidMount() {
    let { actions } = this.props;
    actions.loadLearn();
  }

  renderLearn() {
    let { learn } = this.props;
    let renderLearnList =
      learn.subjectList.length &&
      learn.subjectList.map((item, idx) => {
        let ref = '/subject/' + item.subjectTitle.toLowerCase() + '/' + item._id;
        return (
          <div key={item._id} className='list-subject'>

            {item.subjectTitle}
            <div className='count'>Chapters <span className="badge">{item.chapterCount}</span></div>
            <div className='subject-link'>
              <Link to={ref}>
                Start Course
              </Link>
            </div>
          </div>
        );
      });

    let noLearnDataAvailable = <div className='color-brand-primary'>No Learn Available.</div>;

    if (learn.loading) {
      renderLearnList = <Spinner />;
      noLearnDataAvailable = <Spinner />;
    }

    return learn.subjectList.length ? renderLearnList : noLearnDataAvailable;

  }

  render() {
    return (
      <div>
        <div className='ms-learn'>
          <div className='ms-main'>
            <div className='col-12 p-5 vh-100'>
              <div className='mb-2 color-light-base heading-secondary'>
                <p className='color-brand-base'>Learn</p>
                A team of experts has done a tremendous job to prepare the notes which are then delivered in an intuitive and engaging way to the users of the app
							</div>
              <hr className='bg-dark-decnary mb-5' />
              <div className="learn-container">
                {this.renderLearn()}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  learn: state.learn
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadLearn }, dispatch)
});

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectToStore(Learn);
