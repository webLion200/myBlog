import React from 'react'

class BlogRead extends React.Component {
    render() {
        const detail = this.props.detail;
        const time = detail.add_time.split('T')[0];
        return (
            <div className="read-record">
                <span>{time}</span>
                <span>喜欢：{detail.like}</span>
                <span>收藏：{detail.star}</span>
            </div>
        )
    }
}


export default BlogRead