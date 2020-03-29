import React from 'react'
import Layout from '../../components/structure/layout'
import SearchResults from '../../assets/SearchResults/SearchResults.mp4'

class Search_Results extends React.Component {
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
                    <h3>Search Results, displays your Search History....</h3>
                    <h4>To test this feature,Please follow bellow mention steps</h4>
                    <ul>
                        <h6>Step # 1: Click on Search Bar, located at top right in Navigation Bar</h6>
                        <h6>Step # 2: Input the name of document, you want to search</h6>
                        <h6>Step # 3: Press Enter to perform operation</h6>
                        <h6>Step # 4: Proceed to Search Results,located at Side Navigation Bar,to see your Search History</h6>

                    </ul>

                    <video controls>
                        <source src={SearchResults} type="video/mp4" />
                    </video>
                </div>
            </Layout>
        )
    }
}
export default Search_Results
