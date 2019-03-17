import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../../atoms/Spinner';
import { loadTopics } from '../../../redux/actions/learnAction';
import { bindActionCreators } from 'redux';

class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    componentDidMount() {
        let { actions, match } = this.props;
        actions.loadTopics(match.params.id);
        this.setState({
            title: match.params.title
        })
    }
    renderChapter() {
        let { learn } = this.props;
        let renderLearnList =
            learn.topicList.length &&
            learn.topicList.map((item, idx) => {

                let ref = '/';
                return (
                    <div key={item._id} className='list-subject'>

                        {item.topicTitle}
                        <div className='count'>Chapters <span className="badge">{item.chapterCount}</span></div>
                        <div className='subject-link'>
                            <Link to={ref}>
                                Start Course
                      </Link>
                        </div>
                    </div>
                );
            });

        let noLearnDataAvailable = <div className='color-brand-primary'>No Topic Available.</div>;

        if (learn.loading) {
            renderLearnList = <Spinner />;
            noLearnDataAvailable = <Spinner />;
        }

        return learn.topicList.length ? renderLearnList : noLearnDataAvailable;

    }
    render() {
        return (
            <div>
                <div className='ms-learn'>
                    <div className='ms-main'>
                        <div className='col-12 p-5 vh-100'>
                            <div className='mb-2 color-light-base heading-secondary'>
                                <p className='color-brand-base'>{this.state.title}</p>
                            </div>
                            <hr className='bg-dark-decnary mb-5' />
                            <div className="learn-container">
                                {this.renderChapter()}
                            </div>
                            {/* <hr /> */}
                            <button className='btn button-primary mt-5' onClick={e => this.props.history.goBack()}>
                                back
                                  </button>
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
    actions: bindActionCreators({ loadTopics }, dispatch)
});
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connectToStore(Topics);
