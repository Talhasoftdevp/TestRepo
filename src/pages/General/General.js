import React from 'react'
import Layout from '../../components/structure/layout'
import General_Video from '../../assets/General/General.mp4'

class General extends React.Component {
  state = {
    loadVideo: true,
  }

  handleVideoClick = e => {
    e.target.pause()
    e.target.currentTime = 0
    e.target.load()
    e.target.play()
  }

  componentDidMount() {
    // If user is on a dodgy connection, don't load the video at all
    if ('connection' in navigator) {
      if (navigator.connection.downlink < 5) {
        this.setState({ loadVideo: false })
      }
    }
  }
  render() {
    // const posts = this.props.data.allMarkdownRemark.edges
    const { loadVideo } = this.state

    return (
      <Layout>
        <div>
          <h3>Enter Your Company Details:</h3>
          <ul>
            <h6>Step # 1: Input Field Values, with respective to your Company</h6>
            <h6>Step # 2: Proceed to SMTP Configuration tab for Email sending/recieving configurations </h6>
          </ul>
          <video controls>
            <source src={General_Video} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default General
