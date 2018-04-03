import React from 'react'
import { connect } from 'react-redux'
import {List, Avatar, Icon} from 'antd';
import { getBlogList } from '../redux/blog_redux'


class Blog extends React.Component {
    componentDidMount() {
        this.props.getBlogList();
    }
    render() {
        let {blogs} = this.props;
        let { blogList } = blogs;
        if(blogList.length<=0) {
            return false;
        }
        const listData = blogList.data;
        const totalCount = blogList.totalCount;
        const currentPage = blogList.page;
        const pagination = {
            pageSize: 10,
            current: currentPage,
            total: totalCount,
            onChange: ((e) => {this.props.getBlogList(e)})
        };
        const IconText = ({type, text}) => (
            <span>
                <Icon type={type} style={{marginRight: 8}}/>
                {text}
             </span>
        );

        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={pagination}
                dataSource={listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="star-o" text={item.star} />, <IconText type="like-o" text={item.like} />, <IconText type="message" text={item.message} />]}
                        extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        )
    }
}
const mapStateToProps = state => {
    return {
        blogs: state.blog
    }
}

export default connect(mapStateToProps,{getBlogList})(Blog)