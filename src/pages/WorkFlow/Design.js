import React from 'react'
import Layout from '../../components/structure/layout'
import DesignWorkFlow from '../../assets/WorkFlow/DesignWorkFlow.mp4'

class Work_Flow extends React.Component {
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
          <h3>To Design Work FLow, please follow below mention steps:</h3>
          <ul>
            <h6>Step # 1: proceed to settings, in side navigation bar, click on workflows</h6>
            <h6>Step # 2: click on "+" sign</h6>
            <h6>Step # 3: proceed to right side navigation bar and input field values like below:
            <br />
              <br />
              <uL style={{
                paddingLeft: '9.0rem',
                alignItems: 'center',
              }}>
                <li style={{ marginBottom: 5 }}>Name: Input the name you want to assign to your workflow</li>
                <li style={{ marginBottom: 5 }}>Description: Input berief description regarding functionality, your workflow will perform</li>
                <li style={{ marginBottom: 5 }}>Template: Select template you want to assign to your workflow from drop down menu</li>
                <li style={{ marginBottom: 5 }}>Workflow Stage: select In Test (for testing your workflow) or In Production (for deployment)</li>
                <li style={{ marginBottom: 5 }}>Pre Post: Select what validation you want to perform</li>
              </uL>
            </h6>
            <h6>Step # 4: In left side navigation bar, from BPM Operation drop down, select start Operation by dragging it at center screen</h6>
            <h6>Step # 5: from Metadata tools, select Get Template Field, by dragging it at center screen</h6>
            <h6>Step # 6: Click on Get Template Field and in right side nav bar, In template fields, select the template fields you want to assign to your workflow</h6>
            <h6>Step # 7: From Routing, where you want to route to by dragging your selection</h6>
            <h6>Step # 8: From actions, select what actions you want to perform</h6>
            <h6>Step # 9: connect all these dragged tabs, in the order of their creation</h6>
            <h6>Step # 10: Click on save button, located at the bottom bar</h6>
          </ul>

          <video controls>
            <source src={DesignWorkFlow} type="video/mp4" />
          </video>
        </div>
      </Layout>
    )
  }
}
export default Work_Flow
