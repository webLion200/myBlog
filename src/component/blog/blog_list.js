import React from 'react'
import { Link } from "react-router-dom";
import {List, Avatar, Icon} from 'antd';

class BlogList extends React.Component {
    render() {
        const Item = List.Item;
        const Meta = Item.Meta;
        const props = this.props;
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
                pagination={props.pagination}
                dataSource={props.listData}
                renderItem={item => (
                    <Item
                        key={item.title}
                        actions={[<IconText type="star-o" text={item.star} />, <IconText type="like-o" text={item.like} />, <IconText type="message" text={item.message} />]}
                        extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                    >
                        <Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<Link to={`/blog/detail/?blog_id=${item.blog_id}`}>{item.title}</Link>}
                            description={item.description}
                        />
                        {item.content}
                    </Item>
                )}
            />
        )
    }
}

export default BlogList