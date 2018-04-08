import React from 'react'
import {connect} from 'react-redux'
import {getBlogDetail} from '../redux/blog_redux'

import BlogContent from '../container/blog/blog_content'
import BlogRead from '../container/blog/blog_read'
import BlogComment from '../container/blog/blog_comment'

class BlogDetail extends React.Component {
    componentDidMount() {
        const blog_id = this.props.location.search.split('_id=')[1];
        this.props.getBlogDetail(blog_id);
    }
    render() {
        const detail = this.props.details;
        if(!detail) {
            return false
        }
        console.log(detail)
        return (
            <div>
                <BlogContent detail={detail}/>
                <BlogRead detail={detail}/>
                <BlogComment detail={detail}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        details: state.blog.blogDetail
    }
};

export default connect(mapStateToProps, {getBlogDetail})(BlogDetail)