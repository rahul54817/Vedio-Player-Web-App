import React from 'react'

const VedioList = () => {
  return (
    <div id='wrapper'>
    <div id="content-wrapper">
    <div className='container-fluid pb-0'>
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
            <h6>Top Vedios </h6>
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


    </div>
    
    </div>
     
    </div>
  )
}

export default VedioList
