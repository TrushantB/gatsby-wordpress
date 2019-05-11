import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../components/layout'
const Header = (props) => {
  // const currentPage = this.props.data.wordpressPage;
  console.log(props)
    return(
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <ul className="nav">
    {
      props.data.map((item) => {
        return(
          <Link to={item.node.slug}>{item.node.title}</Link>
          )
        })
      }
      </ul>
    
    </div>
  </header>
)
    }
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;

// export const pageQuery=graphql`
//  header {
//   allWordpressPage {
//     edges {
//       node {
//         id
//         slug
//         status
//         template
//       }
//     }
//   }
// }
// }
// `