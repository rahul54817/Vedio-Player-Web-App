import React from "react";

const Download = () => {
  return (
    <div id="wrapper">
      <div className="single-channel-page" id="content-wrapper">
  {/* <div class="single-channel-image">
          <img class="img-fluid" alt="" src="img/channel-banner.png">
          <div class="channel-profile">
              <img class="channel-profile-img" alt="" src="img/s2.png">
              <div class="social hidden-xs">
                  Social &nbsp;
                  <a class="fb" href="#">Facebook</a>
                  <a class="tw" href="#">Twitter</a>
                  <a class="gp" href="#">Google</a>
              </div>
          </div>
      </div> */}
  {/* <div class="single-channel-nav">
          <nav class="navbar navbar-expand-lg navbar-light">
              <a class="channel-brand" href="#">Osahan Channel <span title="" data-placement="top"
                      data-toggle="tooltip" data-original-title="Verified"><i
                          class="fas fa-check-circle text-success"></i></span></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">

                  <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                      <li class="nav-item" role="presentation">
                          <a class="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1"
                              role="tab" aria-controls="ex1-tabs-1" aria-selected="true"
                              style="padding: 14px 14px!important;">Home</a>
                      </li>
                      <li class="nav-item" role="presentation">
                          <a class="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab"
                              aria-controls="ex1-tabs-2" aria-selected="false"
                              style="padding: 14px 14px!important;">Videos</a>
                      </li>
                      <li class="nav-item" role="presentation">
                          <a class="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab"
                              aria-controls="ex1-tabs-3" aria-selected="false"
                              style="padding: 14px 14px!important;">Playlists</a>
                      </li>
                      <li class="nav-item" role="presentation">
                          <a class="nav-link" id="ex1-tab-4" data-mdb-toggle="tab" href="#ex1-tabs-4" role="tab"
                              aria-controls="ex1-tabs-4" aria-selected="false"
                              style="padding: 14px 14px!important;">Community</a>
                      </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                       &nbsp;&nbsp;&nbsp; <button class="btn-danger" type="button">Subscribe <strong>1.4M</strong></button>
                      </form>
              </div>
          </nav>
      </div> */}
  <div className="container-fluid">
    <div className="video-block section-padding">
      <div className="tab-content" id="ex1-content">
        <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
          <div className="row">
            {/* <div class="col-xl-3 col-sm-6 mb-3">
                              <div class="video-card">
                                  <div class="video-card-image">
                                      <a class="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                                      <a href="#"><img class="img-fluid" src="img/v1.png" alt=""></a>
                                      <div class="time">3:50</div>
                                  </div>
                                  <div class="video-card-body">
                                      <div class="video-title">
                                          <a href="#">There are many variations of passages of Lorem</a>
                                      </div>
                                      <div class="video-page text-success">
                                          Education <a title="" data-placement="top" data-toggle="tooltip"
                                              href="#" data-original-title="Verified"><i
                                                  class="fas fa-check-circle text-success"></i></a>
                                      </div>
                                      <div class="video-view">
                                          1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
                                      </div>
                                  </div>
                              </div>
                          </div> */}
            <div className="col-md-12">
              <div className="main-title">                                      
                <h3>My download</h3>
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
        <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
          <div className="row">
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
        <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
          {/* <div class="playlist">

                          <div class="main-video-container">
                              <video src="images/vid-1.mp4" loop controls class="main-video"></video>
                              <h3 class="main-vid-title">house flood animation</h3>
                          </div>

                          <div class="video-list-container">

                              <div class="list active">
                                  <video src="images/vid-1.mp4" class="list-video"></video>
                                  <h3 class="list-title">house flood animation</h3>
                              </div>

                              <div class="list">
                                  <video src="images/vid-2.mp4" class="list-video"></video>
                                  <h3 class="list-title">zoombie walking animation</h3>
                              </div>

                              <div class="list">
                                  <video src="images/vid-3.mp4" class="list-video"></video>
                                  <h3 class="list-title">emoji falling animation</h3>
                              </div>

                              <div class="list">
                                  <video src="images/vid-4.mp4" class="list-video"></video>
                                  <h3 class="list-title">3D town animation</h3>
                              </div>

                              <div class="list">
                                  <video src="images/vid-5.mp4" class="list-video"></video>
                                  <h3 class="list-title">man chasing carrot animation</h3>
                              </div>

                              <div class="list">
                                  <video src="images/vid-6.mp4" class="list-video"></video>
                                  <h3 class="list-title">door hinge animation</h3>
                              </div>

                              <div class="list">
                                  <video src="images/vid-7.mp4" class="list-video"></video>
                                  <h3 class="list-title">poeple walking in town animation</h3>
                              </div>

                              <div class="list">
                                  <video src="images/vid-8.mp4" class="list-video"></video>
                                  <h3 class="list-title">knight chasing virus animation</h3>
                              </div>

                              <div class="list">
                                  <video src="images/vid-9.mp4" class="list-video"></video>
                                  <h3 class="list-title">3D helicopter animation</h3>
                              </div>

                          </div>

                      </div> */}
          <div className="col-xl-3 col-sm-6 mb-3" style={{paddingLeft: 10, paddingRight: 0}}>
            <div className="video-card">
              <div className="video-card-image" style={{borderRadius: 15}}>
                <a className="play-icon" href="video-page.html"><i className="fas fa-play-circle" /></a>
                <a href="video-page.html"><img className="img-fluid" src="img/v1.png" alt /></a>
                <div className="time">
                  <h6 style={{marginBottom: 10}}>10</h6>
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{pointerEvents: 'none', display: 'block', width: 100, height: 120}}>rrereregfg<g className="style-scope yt-icon">sddfdf<path d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z" className="style-scope yt-icon" /></g></svg>
                </div>
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
        <div className="tab-pane fade" id="ex1-tabs-4" role="tabpanel" aria-labelledby="ex1-tab-3">
          Tab 4 content
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

    </div>
  );
};

export default Download;
