import React, { Component } from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from './post';
export default class Page extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage;
    console.log(this.props.pageContext.post);
    
    return (
        <Layout>
          <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
          <Post data={this.props.pageContext.post} slug={this.props.pageContext.slug}/>
        </Layout>
      )
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    
  }
  
  `