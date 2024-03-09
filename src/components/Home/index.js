import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1 className="find-home-heading">Find The Job That Fits Your Life</h1>
      <p className="home-paragraph">
        Millions of people are searching for jobs, Salary information,company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <Link to="/jobs">
        <button type="button" className="findJob-button">
          Find Job
        </button>
      </Link>
    </div>
  </>
)
export default Home
