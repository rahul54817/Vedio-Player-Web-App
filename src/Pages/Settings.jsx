import React from 'react'

const Settings = () => {
  return (
   <div id="content-wrapper">
  <div className="container-fluid">
    <div className="video-block section-padding">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">                               
            <h6>Setting</h6>
          </div>
        </div>
        <div className="col-xl-3 col-sm-3 mb-3">
          <div className="category-item mt-0 mb-0" style={{background: '#fafafa'}}>
            <a href>
              <img className="img-fluid" src="img/profile.png" alt />
              <h5>Profile Settings <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified" /></h5>
            </a>
            {/* <div class="ss"><img src="img/art.png" alt=""><h5>Art </h5> </div> */}
          </div>
        </div>
        <div className="col-xl-3 col-sm-3 mb-3">
          <div className="category-item mt-0 mb-0" style={{background: '#fafafa'}}>
            <a href>
              <img className="img-fluid" src="img/data.png" alt />
              <h5>data Saving<span title data-placement="top" data-toggle="tooltip" data-original-title="Verified" /></h5>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-3 mb-3">
          <div className="category-item mt-0 mb-0" style={{background: '#fafafa'}}>
            <a href>
              <img className="img-fluid" src="img/Download.png" alt />
              <h5>Download</h5>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-3 mb-3">
          <div className="category-item mt-0 mb-0" style={{background: '#fafafa'}}>
            <a href>
              <img className="img-fluid" src="img/tv.jpg" alt />
              <h5>Watch on tv <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified" /></h5>                                
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-3 mb-3">
          <div className="category-item mt-0 mb-0" style={{background: '#fafafa'}}>
            <a href>
              <img className="img-fluid" src="img/Chat.png" alt />
              <h5>Chat</h5>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-3 mb-3">
          <div className="category-item mt-0 mb-0" style={{background: '#fafafa'}}>
            <a href>
              <img className="img-fluid" src="img/notification.jpg" alt />
              <h5>Notification</h5>
            </a>
          </div>
        </div>
        <div className="col-xl-3 col-sm-3 mb-3">
          <div className="category-item mt-0 mb-0" style={{background: '#fafafa'}}>
            <a href>
              <img className="img-fluid" src="img/see.png" alt />
              <h5>About</h5>
            </a>
          </div>
        </div>                     
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center pagination-sm mb-0">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex={-1}>Previous</a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>

  )
}

export default Settings
