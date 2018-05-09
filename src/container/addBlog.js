import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getNewBlog} from '../redux/blog_redux'

class AddBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.props.blog.code = 0;
    }

    handleChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit() {
        this.props.getNewBlog(this.state.title, this.state.content);
    }

    render() {
        const blog = this.props.blog;
        return (
            <div>
                {blog.code === 1 ? <Redirect to={`/blog/detail/?blog_id=${blog.blog_id}`}/> : null}
                <form className="add_blog_form">
                    <div className="row">
                        <label><span className="red">*</span>标题：</label>
                        <input type="text" name="title" onChange={this.handleChange}/>
                    </div>
                    <div className="row">
                        <label><span className="red">*</span>内容：</label>
                        <textarea name="content" cols="50" rows="10" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="row">
                        <label></label>
                        <button className="submit_btn" type="button" onClick={this.handleSubmit}>提交</button>
                    </div>
                </form>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        blog: state.blogReducer
    }
};

export default connect(mapStateToProps, {getNewBlog})(AddBlog)