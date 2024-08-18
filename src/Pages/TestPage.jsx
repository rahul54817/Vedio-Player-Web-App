import React from 'react'

const TestPage = () => {
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
              <h3>Just For You Gregory</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="gallery js-flickity" data-flickity-options="{ &quot;wrapAround&quot;: true }">
              <div className="gallery-cell">
                <div className="video-card">
                  <div className="video-card-image" id="video-card-image">
                    <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                    <a href="#"><img className="img-fluid" src="img/v1.png" alt /></a>
                    <div className="time" id="time">3:50</div>
                  </div>
                  <div className="video-card-body">
                    <div className="video-title" id="video-title">
                      <a href="#">There are many variations of passages of Lorem</a>
                    </div>
                    <div className="single-video-author box mb-3" style={{fontSize: 16}}>
                      <div className="float-right">
                        <button className="btn btn-primary" type="button" id="btn">Open </button>
                      </div>
                      <div className="float-right" id="float-right">
                        <p><i className="fas fa-eye" /> 10.4M</p>
                        <p><i className="fa fa-thumbs-up" /> 131K</p>
                      </div>
                      <img className="img-fluid" src="img/s4.png" alt />
                      <p><a href="#"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                      <p>3 Months ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-cell">
                <div className="video-card">
                  <div className="video-card-image" id="video-card-image">
                    <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                    <a href="#"><img className="img-fluid" src="img/v2.png" alt /></a>
                    <div className="time" id="time">3:50</div>
                  </div>
                  <div className="video-card-body">
                    <div className="video-title" id="video-title">
                      <a href="#">There are many variations of passages of Lorem</a>
                    </div>
                    <div className="single-video-author box mb-3" style={{fontSize: 16}}>
                      <div className="float-right">
                        <button className="btn btn-primary" type="button" id="btn">Open </button>
                      </div>
                      <div className="float-right" id="float-right">
                        <p><i className="fas fa-eye" /> 10.4M</p>
                        <p><i className="fa fa-thumbs-up" /> 131K</p>
                      </div>
                      <img className="img-fluid" src="img/s4.png" alt />
                      <p><a href="#"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                      <p>3 Months ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-cell">
                <div className="video-card">
                  <div className="video-card-image" id="video-card-image">
                    <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                    <a href="#"><img className="img-fluid" src="img/v3.png" alt /></a>
                    <div className="time" id="time">3:50</div>
                  </div>
                  <div className="video-card-body">
                    <div className="video-title" id="video-title">
                      <a href="#">There are many variations of passages of Lorem</a>
                    </div>
                    <div className="single-video-author box mb-3" style={{fontSize: 16}}>
                      <div className="float-right">
                        <button className="btn btn-primary" type="button" id="btn">Open </button>
                      </div>
                      <div className="float-right" id="float-right">
                        <p><i className="fas fa-eye" /> 10.4M</p>
                        <p><i className="fa fa-thumbs-up" /> 131K</p>
                      </div>
                      <img className="img-fluid" src="img/s4.png" alt />
                      <p><a href="#"><strong>History</strong></a> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                      <p>3 Months ago</p>
                    </div>
                  </div>
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
              <h3>Business</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div id="recipeCarousel" className="carousel slide" data-bs-interval="false">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="video-card" style={{margin: 5}}>
                    <div className="video-card-image" style={{borderRadius: 15}}>
                      <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                      <a href="video-page.html"><img className="img-fluid" src="img/v1.png" alt /></a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="single-video-author box mb-3" style={{paddingLeft: 0}}>
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
                <div className="carousel-item">
                  <div className="video-card" style={{margin: 5}}>
                    <div className="video-card-image" style={{borderRadius: 15}}>
                      <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                      <a href="video-page.html"><img className="img-fluid" src="img/v2.png" alt /></a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="single-video-author box mb-3" style={{paddingLeft: 0}}>
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
                <div className="carousel-item">
                  <div className="video-card" style={{margin: 5}}>
                    <div className="video-card-image" style={{borderRadius: 15}}>
                      <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                      <a href="video-page.html"><img className="img-fluid" src="img/v3.png" alt /></a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="single-video-author box mb-3" style={{paddingLeft: 0}}>
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
                <div className="carousel-item">
                  <div className="video-card" style={{margin: 5}}>
                    <div className="video-card-image" style={{borderRadius: 15}}>
                      <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                      <a href="video-page.html"><img className="img-fluid" src="img/v4.png" alt /></a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="single-video-author box mb-3" style={{paddingLeft: 0}}>
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
                <div className="carousel-item">
                  <div className="video-card" style={{margin: 5}}>
                    <div className="video-card-image" style={{borderRadius: 15}}>
                      <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                      <a href="video-page.html"><img className="img-fluid" src="img/v5.png" alt /></a>
                      <div className="time">3:50</div>
                    </div>
                    <div className="video-card-body">
                      <div className="video-title">
                        <a href="video-page.html">There are many variations of passages of Lorem</a>
                      </div>
                      <div className="single-video-author box mb-3" style={{paddingLeft: 0}}>
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
              <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev" style={{width: 40, height: 64, top: 50}}>
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{width: 30, height: 30}} />
              </a>
              <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next" style={{width: 40, height: 64, top: 50}}>
                <span className="carousel-control-next-icon" aria-hidden="true" style={{width: 30, height: 30}} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-0" />
    </div>
  </div>
  )
}

export default TestPage
