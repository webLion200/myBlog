import React from 'react'
import {connect} from 'react-redux'
import {getBlogList} from '../../redux/blog_redux'
import BlogList from './blog_list'

class Blog extends React.Component {
    componentDidMount() {
        this.props.getBlogList();
    }

    render() {
        let {blogs} = this.props;
        let {blogList} = blogs;
        if (blogList.length <= 0) {
            return false;
        }
        const listData = blogList.data;
        const totalCount = blogList.totalCount;
        const currentPage = blogList.page;
        const pagination = {
            pageSize: 10,
            current: currentPage,
            total: totalCount,
            onChange: ((e) => {
                this.props.getBlogList(e)
            })
        };

        return (
            <div>
                <BlogList
                    pagination = {pagination}
                    listData = {listData}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        blogs: state.blog
    }
}

export default connect(mapStateToProps, {getBlogList})(Blog)