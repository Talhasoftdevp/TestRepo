import React from 'react'
import Layout from '../../components/structure/layout'
import EditDocument from '../../assets/Documents/EditDocument.mp4'

class Edit_Document extends React.Component {
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
    // If Document is on a dodgy connection, don't load the video at all
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
          <h3>To Edit Document, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Double Click on the Document ,to whom you want to edit</h6>
            <h6>Step # 2: Change Document Name , Uplaod New Version of Document by Clicking on Choose File in Select Document</h6>
          </ul>

          <video controls>
            <source src={EditDocument} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Edit_Document
