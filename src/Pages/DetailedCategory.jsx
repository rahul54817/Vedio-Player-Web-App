import React from 'react'

const DetailedCategory = () => {
  return (
<div id="content-wrapper">
  <div className="container-fluid pb-0">
    <div className="top-mobile-search">
      <div className="row">
        <div className="col-md-12">
          <form className="mobile-search">
            <div className="input-group">
              <input type="text" placeholder="Search for..." className="form-control" />
              <div className="input-group-append">
                <button type="button" className="btn btn-dark"><i className="fas fa-search" /></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="top-category section-padding mb-4">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">                              
            <h6>Channels Categories</h6>
          </div>
        </div>
        <div className="col-md-12">
          <div className="owl-carousel owl-carousel-category">
            <div className="item">
              <div className="category-item">
                <a href="#">
                  <img className="img-fluid" src="img/art.png" alt />
                  <h6>Art</h6>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="#">
                  <img className="img-fluid" src="img/Architecture.png" alt />
                  <h6>Architecture</h6>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="#">
                  <img className="img-fluid" src="img/comedy.png" alt />
                  <h6>Comedy</h6>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="#">
                  <img className="img-fluid" src="img/Entertainment.png" alt />
                  <h6>Entertainment  <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></h6>                                            
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="#">
                  <img className="img-fluid" src="img/news.png" alt />
                  <h6>News</h6>                                            
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="#">
                  <img className="img-fluid" src="img/business.png" alt />
                  <h6>Business</h6>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="#">
                  <img className="img-fluid" src="img/music.png" alt />
                  <h6>Music</h6>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="#">
                  <img className="img-fluid" src="img/live.png" alt />
                  <h6>Live</h6>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="#">
                  <img className="img-fluid" src="img/gaming.png" alt />
                  <h6>Gaming</h6>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="#">
                  <img className="img-fluid" src="img/cricket.png" alt />
                  <h6>Cricket</h6>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="#">
                  <img className="img-fluid" src="img/cars.png" alt />
                  <h6>Cars <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified" /></h6>
                </a>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <a href="#">
                  <img className="img-fluid" src="img/all.png" alt />
                  <h6>All</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="video-block section-padding">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title">                                
            <h6>Featured Videos</h6>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3" style={{paddingLeft: 10, paddingRight: 0}}>
          <div className="video-card">
            <div className="video-card-image" style={{borderRadius: 15}}>
              <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
              <a href="video-page.html"><img className="img-fluid" src="img/v1.png" alt /></a>
              <div className="time">3:50</div>
            </div>
            <div className="video-card-body">
              <div className="video-title">
                <a href="video-page.html">There are many variations of passages of
                  Lorem</a>
              </div>
              <div className="single-video-author box mb-3" style={{paddingLeft: 0, paddingRight: 0}}>
                <div className="float-right">
                  <p><i className="fas fa-eye" /> 10.4M</p>
                  <p><i className="fa fa-thumbs-up" /> 131K</p>
                </div>
                <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                <p>3 Months ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3" style={{paddingLeft: 10, paddingRight: 0}}>
          <div className="video-card">
            <div className="video-card-image" style={{borderRadius: 15}}>
              <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
              <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
              <div className="time">3:50</div>
            </div>
            <div className="video-card-body">
              <div className="video-title">
                <a href="video-page.html">There are many variations of passages of
                  Lorem</a>
              </div>
              <div className="single-video-author box mb-3" style={{paddingLeft: 0, paddingRight: 0}}>
                <div className="float-right">
                  <p><i className="fas fa-eye" /> 10.4M</p>
                  <p><i className="fa fa-thumbs-up" /> 131K</p>
                </div>
                <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                <p>3 Months ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3" style={{paddingLeft: 10, paddingRight: 0}}>
          <div className="video-card">
            <div className="video-card-image" style={{borderRadius: 15}}>
              <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
              <a href="video-page.html"><img className="img-fluid" src="img/v3.png" alt /></a>
              <div className="time">3:50</div>
            </div>
            <div className="video-card-body">
              <div className="video-title">
                <a href="video-page.html">There are many variations of passages of
                  Lorem</a>
              </div>
              <div className="single-video-author box mb-3" style={{paddingLeft: 0, paddingRight: 0}}>
                <div className="float-right">
                  <p><i className="fas fa-eye" /> 10.4M</p>
                  <p><i className="fa fa-thumbs-up" /> 131K</p>
                </div>
                <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                <p>3 Months ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3" style={{paddingLeft: 10, paddingRight: 0}}>
          <div className="video-card">
            <div className="video-card-image" style={{borderRadius: 15}}>
              <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
              <a href="video-page.html"><img className="img-fluid" src="img/v4.png" alt /></a>
              <div className="time">3:50</div>
            </div>
            <div className="video-card-body">
              <div className="video-title">
                <a href="video-page.html">There are many variations of passages of
                  Lorem</a>
              </div>
              <div className="single-video-author box mb-3" style={{paddingLeft: 0, paddingRight: 0}}>
                <div className="float-right">
                  <p><i className="fas fa-eye" /> 10.4M</p>
                  <p><i className="fa fa-thumbs-up" /> 131K</p>
                </div>
                <a href="viewprofile.html"> <img className="img-fluid" src="img/s4.png" alt /></a>
                <p><a href="viewprofile.html"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                <p>3 Months ago</p>
              </div>
            </div>
          </div>
        </div>           
      </div>
    </div>
    <hr className="mt-0" />
  </div>
</div>

  )
}

export default DetailedCategory
