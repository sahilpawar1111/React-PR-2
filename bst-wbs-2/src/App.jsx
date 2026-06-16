import React from 'react'

const App = () => {
  return (
    <>
      {/* <!-- ***** Header Area Start ***** --> */}
      <div>
        <header className="header-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* ***** Logo Start ***** */}
                  <a href="index.html" className="logo">
                    <img src="assets/images/logo.png" />
                  </a>
                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul className="nav">
                    <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                    <li className="scroll-to-section"><a href="#services">Services</a></li>
                    <li className="scroll-to-section"><a href="#about">About</a></li>
                    <li className="has-sub">
                      <a href="javascript:void(0)">Pages</a>
                      <ul className="sub-menu">
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="our-services.html">Our Services</a></li>
                        <li><a href="contact-us.html">Contact Us</a></li>
                      </ul>
                    </li>
                    <li className="scroll-to-section"><a href="#testimonials">Testimonials</a></li>
                    <li><a href="contact-us.html">Contact Support</a></li>
                  </ul>
                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                  {/* ***** Menu End ***** */}
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* ***** Header Area End ***** */}
        {/* ***** Main Banner Area Start ***** */}
        <div className="swiper-container" id="top">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slide-inner" style={{ backgroundImage: 'url(assets/images/slide-01.jpg)' }}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="header-text">
                        <h2>Get <em>ready</em> for your business<br />&amp; upgrade <em>all aspects</em></h2>
                        <div className="div-dec" />
                        <p>Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.</p>
                        <div className="buttons">
                          <div className="green-button">
                            <a href="#">Discover More</a>
                          </div>
                          <div className="orange-button">
                            <a href="#">Contact Us</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-inner" style={{ backgroundImage: 'url(assets/images/slide-02.jpg)' }}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="header-text">
                        <h2><em>Digital</em> Currency for you <br />&amp; Best <em>Crypto</em> Tips</h2>
                        <div className="div-dec" />
                        <p>You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free. It does not ask you anything in return. You have a total freedom to use any template for any purpose.</p>
                        <div className="buttons">
                          <div className="green-button">
                            <a href="#">Discover More</a>
                          </div>
                          <div className="orange-button">
                            <a href="#">Contact Us</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-inner" style={{ backgroundImage: 'url(assets/images/slide-03.jpg)' }}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="header-text">
                        <h2>Best One in Town<br />&amp; Crypto <em>Services</em></h2>
                        <div className="div-dec" />
                        <p>When you browse through different tags on TemplateMo website, you can see a variety of CSS templates which are responsive website designs for different individual needs. Please tell your friends about our website. Thank you.</p>
                        <div className="buttons">
                          <div className="green-button">
                            <a href="#">Discover More</a>
                          </div>
                          <div className="orange-button">
                            <a href="#">Contact Us</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-next swiper-button-white" />
          <div className="swiper-button-prev swiper-button-white" />
        </div>
        {/* ***** Main Banner Area End ***** */}
        <section className="services" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="service-item">
                  <i className="fas fa-archive" />
                  <h4>CSS Templates</h4>
                  <p>TemplateMo website is the best for you to explore and download free website templates.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-item">
                  <i className="fas fa-cloud" />
                  <h4>HTML5 Web Pages</h4>
                  <p>Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-item">
                  <i className="fas fa-charging-station" />
                  <h4>Responsive Designs</h4>
                  <p>All of our CSS templates are 100% free to use for commercial or business websites.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-item">
                  <i className="fas fa-suitcase" />
                  <h4>Mobile and Tablet ready!</h4>
                  <p>Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-item">
                  <i className="fas fa-archway" />
                  <h4>Fast Customer Support</h4>
                  <p>Do not be hesitated to contact us if you have any question or concern about our templates.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-item">
                  <i className="fas fa-puzzle-piece" />
                  <h4>Fully Customizable</h4>
                  <p>If you have any idea or suggestion about new templates, feel free to let us know.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="simple-cta">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <h4>Business <em>Solutions</em> and <strong>Crypto</strong> Investments</h4>
              </div>
              <div className="col-lg-7">
                <div className="buttons">
                  <div className="green-button">
                    <a href="#">Discover More</a>
                  </div>
                  <div className="orange-button">
                    <a href="#">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-us" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h6>About Us</h6>
                  <h4>Know Us Better</h4>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="naccs">
                  <div className="tabs">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="menu">
                          <div className="active gradient-border"><span>Web Design</span></div>
                          <div className="gradient-border"><span>Graphics</span></div>
                          <div className="gradient-border"><span>Web Coding</span></div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <ul className="nacc">
                          <li className="active">
                            <div>
                              <div className="main-list">
                                <span className="title">Project Title</span>
                                <span className="title">Budget</span>
                                <span className="title">Deadline</span>
                                <span className="title">Client</span>
                              </div>
                              <div className="list-item">
                                <span className="item item-title">Website Redesign</span>
                                <span className="item">$1,500 to $2,200</span>
                                <span className="item">2022 Dec 12</span>
                                <span className="item">Web Biz</span>
                              </div>
                              <div className="list-item">
                                <span className="item item-title">Website Renovation</span>
                                <span className="item">$2,500 to $3,600</span>
                                <span className="item">2022 Dec 10</span>
                                <span className="item">Online Ads</span>
                              </div>
                              <div className="list-item">
                                <span className="item item-title">Marketing Plan</span>
                                <span className="item">$2,500 to $4,200</span>
                                <span className="item">2022 Dec 8</span>
                                <span className="item">Web Biz</span>
                              </div>
                              <div className="list-item last-item">
                                <span className="item item-title">All-new Website</span>
                                <span className="item">$3,000 to $6,600</span>
                                <span className="item">2022 Dec 2</span>
                                <span className="item">Web Presence</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div>
                              <div className="main-list">
                                <span className="title">Project Title</span>
                                <span className="title">Budget</span>
                                <span className="title">Deadline</span>
                                <span className="title">Client</span>
                              </div>
                              <div className="list-item">
                                <span className="item item-title">Graphics Redesign</span>
                                <span className="item">$500 to $800</span>
                                <span className="item">2022 Nov 24</span>
                                <span className="item">Media One</span>
                              </div>
                              <div className="list-item">
                                <span className="item item-title">Digital Graphics</span>
                                <span className="item">$1,500 to $3,000</span>
                                <span className="item">2022 Nov 18</span>
                                <span className="item">Second Media</span>
                              </div>
                              <div className="list-item">
                                <span className="item item-title">New Artworks</span>
                                <span className="item">$2,200 to $4,400</span>
                                <span className="item">2022 Nov 10</span>
                                <span className="item">Artwork Push</span>
                              </div>
                              <div className="list-item last-item">
                                <span className="item item-title">Complex Arts</span>
                                <span className="item">$1,100 to $2,400</span>
                                <span className="item">2022 Nov 3</span>
                                <span className="item">Media One</span>
                              </div>
                            </div></li>
                          <li>
                            <div>
                              <div className="main-list">
                                <span className="title">Project Title</span>
                                <span className="title">Budget</span>
                                <span className="title">Estimated</span>
                                <span className="title">Technology</span>
                              </div>
                              <div className="list-item">
                                <span className="item item-title">Backend Coding</span>
                                <span className="item">$2,000 to $5,000</span>
                                <span className="item">2022 Nov 28</span>
                                <span className="item">PHP MySQL</span>
                              </div>
                              <div className="list-item">
                                <span className="item item-title">New Web App</span>
                                <span className="item">$1,500 to $3,000</span>
                                <span className="item">2022 Nov 18</span>
                                <span className="item">Python Programming</span>
                              </div>
                              <div className="list-item">
                                <span className="item item-title">Frontend Interactions</span>
                                <span className="item">$3,000 to $6,000</span>
                                <span className="item">2022 Nov 10</span>
                                <span className="item">JavaScripts</span>
                              </div>
                              <div className="list-item last-item">
                                <span className="item item-title">Video Creations</span>
                                <span className="item">$1,800 to $4,400</span>
                                <span className="item">2022 Nov 3</span>
                                <span className="item">Multimedia</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="right-content">
                  <h4>Please tell us about your idea and how you want it to be</h4>
                  <p>You are allowed to use this template for your websites. You are <b>NOT allowed</b> to redistribute the template ZIP file on any other template websites.<br /><br />Thank you for downloading and using our templates. Please tell your friends about our website.</p>
                  <div className="green-button">
                    <a href="about-us.html">Discover More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="calculator">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="left-image">
                  <img src="assets/images/calculator-image.png" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="section-heading">
                  <h6>Your Freedom</h6>
                  <h4>Get a Financial Plan</h4>
                </div>
                <form id="calculate" action method="get">
                  <div className="row">
                    <div className="col-lg-6">
                      <fieldset>
                        <label htmlFor="name">Your Name</label>
                        <input type="name" name="name" id="name" placeholder autoComplete="on" />
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <label htmlFor="email">Your Email</label>
                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder required />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <label htmlFor="subject">Subject</label>
                        <input type="subject" name="subject" id="subject" placeholder autoComplete="on" />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                         <label htmlFor="chooseOption" className="form-label">Your Reason</label>
                         <select name="Category" className="form-select" aria-label="Default select example" id="chooseOption" onChange="this.form.click()">
                          <option>Choose an Option</option>
                          <option type="checkbox" name="option1" value="Online Banking">Online Banking</option>
                          <option value="Financial Control">Financial Control</option>
                          <option value="Yearly Profit">Yearly Profit</option>
                          <option value="Crypto Investment">Crypto Investment</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="orange-button">Submit Now</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials" id="testimonials">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h6>Testimonials</h6>
                  <h4>What They Say</h4>
                </div>
              </div>
              <div className="col-lg-10 offset-lg-1">
                <div className="owl-testimonials owl-carousel" style={{ position: 'relative', zIndex: 5 }}>
                  <div className="item">
                    <i className="fa fa-quote-left" />
                    <p>“Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.”</p>
                    <h4>David Eigenberg</h4>
                    <span>CEO of Mexant</span>
                    <div className="right-image">
                      <img src="assets/images/testimonials-01.jpg" />
                    </div>
                  </div>
                  <div className="item">
                    <i className="fa fa-quote-left" />
                    <p>“Etiam id ligula risus. Fusce fringilla nisl nunc, nec rutrum lectus cursus nec. In blandit nibh dolor, at rutrum leo accumsan porta. Nullam pulvinar eros porttitor risus condimentum tempus.”</p>
                    <h4>Andrew Garfield</h4>
                    <span>CTO of Mexant</span>
                    <div className="right-image">
                      <img src="assets/images/testimonials-01.jpg"  />
                    </div>
                  </div>
                  <div className="item">
                    <i className="fa fa-quote-left" />
                    <p>“Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo. Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo.”</p>
                    <h4>George Lopez</h4>
                    <span>Crypto Manager</span>
                    <div className="right-image">
                      <img src="assets/images/testimonials-01.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partners">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="item">
                  <img src="assets/images/client-01.png" />
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="item">
                  <img src="assets/images/client-01.png"/>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="item">
                  <img src="assets/images/client-01.png"/>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="item">
                  <img src="assets/images/client-01.png"  />
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="item">
                  <img src="assets/images/client-01.png"  />
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-6">
                <div className="item">
                  <img src="assets/images/client-01.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>Copyright © 2022 Mexant Co., Ltd. All Rights Reserved.
                  <br />Designed by <a title="CSS Templates" rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a></p>
              </div>
            </div>
          </div>
        </footer>
        {/* Scripts */}
        {/* Bootstrap core JavaScript */}

        {'}'}
      </div>
    </>
  )
}


export default App;