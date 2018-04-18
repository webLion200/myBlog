import React from 'react'
class BlogContent extends React.Component {
    render() {
        const detail = this.props.detail;
        return (
            <div className="content-box">
                <h1>{detail.title}</h1>
                <div className="blog-cont">
                    {detail.content}
                </div>
            </div>
        )
    }
}

export default  BlogContent