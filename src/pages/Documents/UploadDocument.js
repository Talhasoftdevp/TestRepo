import React from 'react'
import Layout from '../../components/structure/layout'
import UploadDocument from '../../assets/Documents/UploadDocument.mp4'

class Upload_Document extends React.Component {
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
    // If Group is on a dodgy connection, don't load the video at all
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
          <h3>To Upload Document, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: Right Click on folder, in which you want to Upload document</h6>
            <h6>Step # 2: Click on Add document</h6>
            <h6>Step # 3: On Add new Document screen in General Tab</h6>
            <h6>Step # 4: Input Document Name</h6>
            <h6>Step # 5: Click on Choose File in Select Document, and select the document from your system you want to upload</h6>
            <h6>Step # 6: Click on "Select Template from List",and assign template</h6>
            <h6>Step # 7: Click on "Keywords/Tags" , and Add Keywords that refrences your document</h6>
            <h6>Step # 8: In Fields Area, Click on "Select  Template from List as per your needs",and then input in required fields</h6>
            <h6>Step # 9: Click on Upload, to successfully uplaoad your document</h6>
          </ul>

          <video controls>
            <source src={UploadDocument} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Upload_Document
