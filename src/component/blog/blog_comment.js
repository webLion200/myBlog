import React from 'react'
import { List, Avatar } from 'antd';

class BlogComment extends React.Component {
    render() {
        const data = this.props.comments;
        return (
            <div className="comment-box">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={require(`../img/${item.avatar}.png`)} />}
                                title={<div>
                                    <a href="https://ant.design">{item.name}</a><br/>
                                    <span>{item.add_time.split('T')[0]}</span>
                                </div>}
                                description={item.content}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default BlogComment