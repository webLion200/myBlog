import React from 'react'
import {connect} from 'react-redux'
import {getBlogDetail} from '../redux/blog_redux'

import BlogContent from '../component/blog/blog_content'
import BlogRead from '../component/blog/blog_read'
import BlogComment from '../component/blog/blog_comment'

class BlogDetail extends React.Component {
    componentDidMount() {
        const blog_id = this.props.location.search.split('blog_id=')[1];
        this.props.getBlogDetail(blog_id);
    }
    render() {
        const context = this.props.details;
        const detail = context.detail;
        const comments = context.comments;
        if(!detail) {
            return false
        }
        return (
            <div>
                <BlogContent detail={detail}/>
                <BlogRead detail={detail}/>
                <BlogComment comments={comments}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        details: state.blogReducer.blogDetail
    }
};

export default connect(mapStateToProps, {getBlogDetail})(BlogDetail)