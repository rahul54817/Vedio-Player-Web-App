import React from 'react'

const Account = () => {
  return (
<div id="content-wrapper">
  <div className="container-fluid pb-0">
    <div className="row">
      <div className="col-xl-3 col-sm-6 mb-3">
        <div className="card text-white bg-primary o-hidden h-100 border-none">
          <div className="card-body">
            <div className="card-body-icon">
              <i className="fas fa-fw fa-users" />
            </div>
            <div className="mr-5"><b>26</b> Channels</div>
          </div>
          <a className="card-footer text-white clearfix small z-1" href="#">
            <span className="float-left">View Details</span>
            <span className="float-right">
              <i className="fas fa-angle-right" />
            </span>
          </a>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-3">
        <div className="card text-white bg-warning o-hidden h-100 border-none">
          <div className="card-body">
            <div className="card-body-icon">
              <i className="fas fa-fw fa-video" />
            </div>
            <div className="mr-5"><b>156</b> Videos</div>
          </div>
          <a className="card-footer text-white clearfix small z-1" href="#">
            <span className="float-left">View Details</span>
            <span className="float-right">
              <i className="fas fa-angle-right" />
            </span>
          </a>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-3">
        <div className="card text-white bg-success o-hidden h-100 border-none">
          <div className="card-body">
            <div className="card-body-icon">
              <i className="fas fa-fw fa-list-alt" />
            </div>
            <div className="mr-5"><b>123</b> Categories</div>
          </div>
          <a className="card-footer text-white clearfix small z-1" href="#">
            <span className="float-left">View Details</span>
            <span className="float-right">
              <i className="fas fa-angle-right" />
            </span>
          </a>
        </div>
      </div>
      <div className="col-xl-3 col-sm-6 mb-3">
        <div className="card text-white bg-danger o-hidden h-100 border-none">
          <div className="card-body">
            <div className="card-body-icon">
              <i className="fas fa-fw fa-cloud-upload-alt" />
            </div>
            <div className="mr-5"><b>13</b> New Videos</div>
          </div>
          <a className="card-footer text-white clearfix small z-1" href="#">
            <span className="float-left">View Details</span>
            <span className="float-right">
              <i className="fas fa-angle-right" />
            </span>
          </a>
        </div>
      </div>
    </div>
    <hr />
    <div className="video-block section-padding">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">
            <div className="btn-group float-right right-action">
              <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by <i className="fa fa-caret-down" aria-hidden="true" />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star" /> &nbsp; Top
                  Rated</a>
                <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal" /> &nbsp;
                  Viewed</a>
                <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle" />
                  &nbsp; Close</a>
              </div>
            </div>
            <h6>My Videos</h6>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="video-card">
            <div className="video-card-image">
              <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
              <a href="#"><img className="img-fluid" src="img/v5.png" alt /></a>
              <div className="time">3:50</div>
            </div>
            <div className="video-card-body">
              <div className="video-title">
                <a href="#">There are many variations of passages of Lorem</a>
              </div>
              <div className="video-page text-success">
                Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
              </div>
              <div className="video-view">
                1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="video-card">
            <div className="video-card-image">
              <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
              <a href="#"><img className="img-fluid" src="img/v6.png" alt /></a>
              <div className="time">3:50</div>
            </div>
            <div className="video-card-body">
              <div className="video-title">
                <a href="#">There are many variations of passages of Lorem</a>
              </div>
              <div className="video-page text-danger">
                Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger" /></a>
              </div>
              <div className="video-view">
                1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="video-card">
            <div className="video-card-image">
              <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
              <a href="#"><img className="img-fluid" src="img/v7.png" alt /></a>
              <div className="time">3:50</div>
            </div>
            <div className="video-card-body">
              <div className="video-title">
                <a href="#">There are many variations of passages of Lorem</a>
              </div>
              <div className="video-page text-success">
                Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
              </div>
              <div className="video-view">
                1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="video-card">
            <div className="video-card-image">
              <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
              <a href="#"><img className="img-fluid" src="img/v8.png" alt /></a>
              <div className="time">3:50</div>
            </div>
            <div className="video-card-body">
              <div className="video-title">
                <a href="#">There are many variations of passages of Lorem</a>
              </div>
              <div className="video-page text-success">
                Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
              </div>
              <div className="video-view">
                1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="mt-0" />
    <div className="video-block section-padding">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">
            <div className="btn-group float-right right-action">
              <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by <i className="fa fa-caret-down" aria-hidden="true" />
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star" /> &nbsp; Top
                  Rated</a>
                <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal" /> &nbsp;
                  Viewed</a>
                <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle" />
                  &nbsp; Close</a>
              </div>
            </div>
            <h6>My Channels</h6>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="channels-card">
            <div className="channels-card-image">
              <a href="#"><img className="img-fluid" src="img/s1.png" alt /></a>
              <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
            </div>
            <div className="channels-card-body">
              <div className="channels-title">
                <a href="#">Channels Name</a>
              </div>
              <div className="channels-view">
                382,323 subscribers
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="channels-card">
            <div className="channels-card-image">
              <a href="#"><img className="img-fluid" src="img/s2.png" alt /></a>
              <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
            </div>
            <div className="channels-card-body">
              <div className="channels-title">
                <a href="#">Channels Name</a>
              </div>
              <div className="channels-view">
                382,323 subscribers
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="channels-card">
            <div className="channels-card-image">
              <a href="#"><img className="img-fluid" src="img/s3.png" alt /></a>
              <div className="channels-card-image-btn"><button type="button" className="btn btn-secondary btn-sm">Subscribed <strong>1.4M</strong></button>
              </div>
            </div>
            <div className="channels-card-body">
              <div className="channels-title">
                <a href="#">Channels Name <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle" /></span></a>
              </div>
              <div className="channels-view">
                382,323 subscribers
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="channels-card">
            <div className="channels-card-image">
              <a href="#"><img className="img-fluid" src="img/s6.png" alt /></a>
              <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
            </div>
            <div className="channels-card-body">
              <div className="channels-title">
                <a href="#">Channels Name</a>
              </div>
              <div className="channels-view">
                382,323 subscribers
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="channels-card">
            <div className="channels-card-image">
              <a href="#"><img className="img-fluid" src="img/s8.png" alt /></a>
              <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
            </div>
            <div className="channels-card-body">
              <div className="channels-title">
                <a href="#">Channels Name</a>
              </div>
              <div className="channels-view">
                382,323 subscribers
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="channels-card">
            <div className="channels-card-image">
              <a href="#"><img className="img-fluid" src="img/s7.png" alt /></a>
              <div className="channels-card-image-btn"><button type="button" className="btn btn-secondary btn-sm">Subscribed <strong>1.4M</strong></button>
              </div>
            </div>
            <div className="channels-card-body">
              <div className="channels-title">
                <a href="#">Channels Name <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle" /></span></a>
              </div>
              <div className="channels-view">
                382,323 subscribers
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="channels-card">
            <div className="channels-card-image">
              <a href="#"><img className="img-fluid" src="img/s1.png" alt /></a>
              <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
            </div>
            <div className="channels-card-body">
              <div className="channels-title">
                <a href="#">Channels Name</a>
              </div>
              <div className="channels-view">
                382,323 subscribers
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="channels-card">
            <div className="channels-card-image">
              <a href="#"><img className="img-fluid" src="img/s2.png" alt /></a>
              <div className="channels-card-image-btn"><button type="button" className="btn btn-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
            </div>
            <div className="channels-card-body">
              <div className="channels-title">
                <a href="#">Channels Name</a>
              </div>
              <div className="channels-view">
                382,323 subscribers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Account
