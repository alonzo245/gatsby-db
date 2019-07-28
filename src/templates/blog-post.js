import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends Component {
  render() {
    console.log(this.props)

    const article = this.props.data.mysqlArticles
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={article.title}
          description={'none'}
        />
        <h1> {article.title} </h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mysqlArticles(slug: {eq: $slug}) {
      id
      content
      title
      slug
    }
  }
`
