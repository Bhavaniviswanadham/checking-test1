import {withRouter} from 'react-router-dom'
import './index.css'

const NotFound = props => {
  const goToHome = () => {
    const {history} = props
    history.push('/')
  }

  return (
    <div className="home-bg-cont">
      <div className="failure-view">
        <img
          className="home-img"
          src="https://res.cloudinary.com/dlij3u1jb/image/upload/v1718696497/no_data_found_ax3wph.jpg"
          alt="not found"
        />
        <h1 className="home-h1 failure-para not-found-h1">PAGE NOT FOUND</h1>
        <p className="not-found-p">
          we’re sorry, the page you requested could not be found Please go back
          to the homepage
        </p>
        <button
          className="retry-btn not-found-btn"
          type="button"
          onClick={goToHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}
export default withRouter(NotFound)
