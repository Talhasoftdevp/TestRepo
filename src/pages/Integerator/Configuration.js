import React from 'react'
import Layout from '../../components/structure/layout'
import Integerator from '../../assets/Integerator/Integerator.mp4'

class Configurations extends React.Component {
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
          <h3>To Configure DataBase, & fetch data as per requirements,<br /><br />Please  Follow  below mention steps:</h3 >
          <ul>
            <h6>Step # 1: Proceed to settings, click on Integerator,located at Side Navigation Bar</h6>
            <h6>Step # 2: In Integerator Screen,Click on "+" sign</h6>
            <h6>Step # 3: Enter Field Values such as:
            <br />
              <br />
              <uL style={{
                paddingLeft: '12.5rem',
                alignItems: 'center',
              }}>
                <li style={{ marginBottom: 5 }}>Name: Enter the name, for this Database Connection</li>
                <li style={{ marginBottom: 5 }}>Link Type: From Drop down, select The Database Server you want to connect to</li>
                <li style={{ marginBottom: 5 }}>Server Name: Enter Your Server Name</li>
                <li style={{ marginBottom: 5 }}>Database Name: Enter Your Database Name</li>
                <li style={{ marginBottom: 5 }}>Port: Enter Port Number, on which your Server is running</li>
                <li style={{ marginBottom: 5 }}>User: Enter Your Database User Name</li>
                <li style={{ marginBottom: 5 }}>Password: Enter Your Database Password</li>
              </uL>
            </h6>
            <h6>Step # 4: Click on Test Connection, to verify Connection Status</h6>
            <h6>Step # 5: Click on Connect to successfully connect to the DB</h6>
            <h6>Step # 6: On "Develop & Define" Screen, you will see your Selected DataBase Tables, select Table you want to use</h6>
            <h6>Step # 7: In right side dialog box, enter Select Query to fetch your desire table fields (Minimum 2 are Manadatory)  </h6>
            <h6>Step # 8: Clcik on "|>" icon to execute query </h6>
            <h6>Step # 9: Click on save to successsfully create Database Connection</h6>
          </ul>
          <video controls>
            <source src={Integerator} type="video/mp4" />
          </video>
        </div>
      </Layout >
    )
  }
}
export default Configurations
