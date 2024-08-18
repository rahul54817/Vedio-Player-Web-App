import React from 'react'

const Notification = () => {
  return (
    <div className="single-channel-page" id="content-wrapper">      
  <div className="container-fluid">
    <div className="video-block section-padding">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">
            <h3>Notification</h3>
          </div>
        </div>
        <div className="col-md-12">
          <div className="not">
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center pagination-sm mb-0">
          <li className="page-item disabled">
            <a tabIndex={-1} href="#" className="page-link">Previous</a>
          </li>
          <li className="page-item active"><a href="#" className="page-link">1</a></li>
          <li className="page-item"><a href="#" className="page-link">2</a></li>
          <li className="page-item"><a href="#" className="page-link">3</a></li>
          <li className="page-item">
            <a href="#" className="page-link">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

  )
}

export default Notification
