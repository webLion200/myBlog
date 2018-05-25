import React from 'react'
import {Icon} from 'antd';
import {connect} from 'react-redux'
import { userAction } from '../../redux/blog_redux'

class BlogRead extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        const blog_id = this.props.detail.blog_id;
        const name = event.target.getAttribute('name');
        this.props.userAction(blog_id, name);
    }
    render() {
        const detail = this.props.details.detail;
        const time = detail.add_time.split('T')[0];
        return (
            <div className="read-record">
                <span>{time}</span>
                <span><Icon type="like-o" name="like" className="icon-hover" onClick={this.handleClick} />: {detail.like}</span>
                <span><Icon type="star-o" name="star" className="icon-hover" onClick={this.handleClick} />: {detail.star}</span>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        details: state.blogReducer.blogDetail
    }
};
export default connect(mapStateToProps, { userAction })(BlogRead)