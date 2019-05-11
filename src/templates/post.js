import React, { Component } from 'react'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "gatsby"
import Img from 'gatsby-image'
const { Meta } = Card;
export default class Post extends Component {
  render() {
     const post = this.props.data.map((item) => {
         console.log(item);
         if(this.props.slug===item.node.acf.heading){
             return(
                 <Link to={ item.node.title==="Wild Animal" ? 
                "wild-animals" :"pet-animals"
                }>
                <Col span={12} >
                     <Card 
                        hoverable
                        style={{ width: 400 }}
                        cover={<img alt="example" src={item.node.acf.image.source_url} style={{height:"300px"}} />}
                       >
                        <Meta style={{height:"200px"}}
                        title={item.node.title}
                        description={item.node.acf.description}
                        />
                    </Card>
                </Col>
                </Link>
          )
         }
          
      })
    return (
      <div>
          <h1>Types of Animals</h1>
        {post}
      </div>
    )
  }
}
