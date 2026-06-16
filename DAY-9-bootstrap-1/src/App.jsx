import React from 'react'

const App = () => {
  return (
    <>
    
    
    {/* <!-- Navigation --> */}
   <div>
  <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-dark" aria-label="Main navigation">
    <div className="container">
      {/* Image Logo */}
      <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative" /></a> 
      {/* Text Logo - Use this if you don't have a graphic logo */}
      {/* <a class="navbar-brand logo-text" href="index.html">Elma</a> */}
      <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ms-auto navbar-nav-scroll">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#header">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
            <ul className="dropdown-menu" aria-labelledby="dropdown01">
              <li><a className="dropdown-item" href="article.html">Article Details</a></li>
              <li><div className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="terms.html">Terms Conditions</a></li>
              <li><div className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="privacy.html">Privacy Policy</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <span className="nav-item social-icons">
          <span className="fa-stack">
            <a href="#your-link">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fab fa-facebook-f fa-stack-1x" />
            </a>
          </span>
          <span className="fa-stack">
            <a href="#your-link">
              <i className="fas fa-circle fa-stack-2x" />
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </span>
        </span>
      </div> {/* end of navbar-collapse */}
    </div> {/* end of container */}
  </nav> {/* end of navbar */}
  {/* end of navigation */}
  {/* Header */}
  <header id="header" className="header">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="h1-large">PLAN<br /> DESIGN<br /> DEVELOP</h1>
        </div> {/* end of col */}
        <div className="col-lg-6">
          <div className="button-container">
            <a className="btn-solid-lg page-scroll" href="#intro">Discover</a>
            <a className="btn-outline-lg page-scroll" href="#contact">Contact</a>
          </div> {/* end of button-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </header> {/* end of header */}
  {/* end of header */}
  {/* Introduction */}
  <div id="intro" className="basic-1 bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1>We help companies create and launch digital products</h1>
        </div> {/* end of col */}
        <div className="col-lg-6">
          <div className="text-container">
            <p><strong>Planing</strong> led ask possible mistress relation elegance eat likewise debatin. By message or am nothing amongst chiefly address of research</p>
            <p><strong>Designing</strong> the its enable direct men depend highly. Ham windows sixte who inquiry fortune demands. Is be force upon and of course</p>
            <p><strong>Development</strong> sang fond must shew. Really boy law county she unable her sister. Feet you off its. Among are leave law built now</p>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-1 */}
  {/* end of introduction */}
  {/* Project 1 */}
  <div id="projects" className="basic-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xl-5">
          <div className="text-container">
            <h2>Mobile app for a major food catering business</h2>
            <p>In built table in an rapid blush merits behind on afraid or warmly. In up so discovery my middleton eagerness dejection explained. Estimating excellence ye because this is how it should work contrasted insensible</p>
            <a className="read-more no-line green" href="article.html">Learn more <span className="fas fa-long-arrow-alt-right" /></a>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
        <div className="col-lg-6 col-xl-7">
          <div className="image-container">
            <img className="img-fluid" src="images/project-1.jpg" alt="alternative" />
          </div> {/* end of image-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-2 */}
  {/* end of project 1 */}
  {/* Project 2 */}
  <div className="basic-3 bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xl-7">
          <div className="image-container">
            <img className="img-fluid" src="images/project-2.jpg" alt="alternative" />
          </div> {/* end of image-container */}
        </div> {/* end of col */}
        <div className="col-lg-6 col-xl-5">
          <div className="text-container">
            <h2>Web app for a large realestate services firm</h2>
            <p>Oh up unsatiable advantages decisively as at interested. Present suppose in esteems in demesne colonel it to. End horrible she landlord screened words stanhill. Repeated offended you opinions off dissuade</p>
            <a className="btn-solid-reg" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Modal</a> <a className="btn-outline-reg" href="article.html">Details</a>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-3 */}
  {/* end of project 2 */}
  {/* Details Modal */}
  <div id="staticBackdrop" className="modal fade" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="row">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          <div className="col-lg-8">
            <div className="image-container">
              <img className="img-fluid" src="images/details-modal.jpg" alt="alternative" />
            </div> {/* end of image-container */}
          </div> {/* end of col */}
          <div className="col-lg-4">
            <h3>Goals Setting</h3>
            <hr />
            <p>The app can easily help you track your personal development evolution if you take the time to set it up.</p>
            <h4>User Feedback</h4>
            <p>This is a great app which can help you save time and make your live easier. And it will help improve your productivity.</p>
            <ul className="list-unstyled li-space-lg">
              <li className="d-flex">
                <i className="fas fa-chevron-right" />
                <div className="flex-grow-1">Splash screen panel</div>
              </li>
              <li className="d-flex">
                <i className="fas fa-chevron-right" />
                <div className="flex-grow-1">Statistics graph report</div>
              </li>
              <li className="d-flex">
                <i className="fas fa-chevron-right" />
                <div className="flex-grow-1">Events calendar layout</div>
              </li>
              <li className="d-flex">
                <i className="fas fa-chevron-right" />
                <div className="flex-grow-1">Location details screen</div>
              </li>
              <li className="d-flex">
                <i className="fas fa-chevron-right" />
                <div className="flex-grow-1">Onboarding steps interface</div>
              </li>
            </ul>
            <a id="modalCtaBtn" className="btn-solid-reg" href="#contact">Contact</a>
            <button type="button" className="btn-outline-reg" data-bs-dismiss="modal">Close</button>
          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of modal-content */}
    </div> {/* end of modal-dialog */}
  </div> {/* end of modal */}
  {/* end of details modal */}
  {/* Project 3 */}
  <div className="basic-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xl-5">
          <div className="text-container">
            <h2>Video conference and collaboration application</h2>
            <ul className="list-unstyled li-space-lg">
              <li className="d-flex">
                <i className="fas fa-square" />
                <div className="flex-grow-1">She alteration everything sympathize impossible many more words should be here his get compliment</div>
              </li>
              <li className="d-flex">
                <i className="fas fa-square" />
                <div className="flex-grow-1">Collected few extremity suffering met had sportsman. By some more spite about do of do allow blush</div>
              </li>
              <li className="d-flex">
                <i className="fas fa-square" />
                <div className="flex-grow-1">Additions in conveying or collected objection in. Suffer few desire wonder her object hardly nearer</div>
              </li>
            </ul>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
        <div className="col-lg-6 col-xl-7">
          <div className="image-container">
            <img className="img-fluid" src="images/project-3.jpg" alt="alternative" />
          </div> {/* end of image-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-4 */}
  {/* end of project 3 */}
  {/* Process */}
  <div className="basic-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="h2-heading">Our product making process</h2>
          <hr className="hr-heading" />
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col-lg-12">
          <div className="step-container">
            <div className="step">PLAN</div>
            <i className="fas fa-chevron-right" />
            <div className="step">DESIGN</div>
            <i className="fas fa-chevron-right" />
            <div className="step">DEVELOP</div>
          </div> {/* end of step-container */}
          <p>Abroad no chatty others my silent an. Fat way appear denote who wholly narrow gay settle. Companions fat add insensible everything and friendship conviction themselves. Theirs months ten and more words are  here had</p>
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-5 */}
  {/* end of process */}
  {/* Services */}
  <div id="services" className="cards-1 bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="h2-heading">Product development services</h2>
          <p className="p-heading">Smile spoke total few great had never their too. Amongst moments do in arrived at my replied. Fat weddings servants but man believed having said that prospect companions</p>
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col-lg-12">
          {/* Card */}
          <div className="card first">
            <div className="card-icon">
              <span className="fas fa-rocket green" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Product planning</h4>
              <div className="card-text">Nay newspaper can sportsman are admitting gentleman belonging his. Is oppose no summer lovers</div>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card second">
            <div className="card-icon">
              <span className="far fa-clock green" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Design and style</h4>
              <div className="card-text">Not his difficulty boisterous surro bed. Seems folly if in given scale now where word contented</div>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card third">
            <div className="card-icon">
              <span className="far fa-comments green" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Development</h4>
              <div className="card-text">Living valley had silent eat merits esteem bed. In last an or went wise as left. Visited civilly</div>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card first">
            <div className="card-icon">
              <span className="fas fa-camera green" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Launch events</h4>
              <div className="card-text">So colonel he calling so unreserved do interested increasing sentimen. Hola vanity day giving points</div>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card second">
            <div className="card-icon">
              <span className="fas fa-chart-pie green" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Evolution reports</h4>
              <div className="card-text">Within six not law. Few impression difficulty his use has comparison how should it be decisively</div>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card third">
            <div className="card-icon">
              <span className="far fa-chart-bar green" />
            </div>
            <div className="card-body">
              <h4 className="card-title">Market analysis</h4>
              <div className="card-text">Had repulsive dashwoods suspic sincerity but advantage now him. Remark easily garret nor nay</div>
            </div>
          </div>
          {/* end of card */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of cards-1 */}
  {/* end of services */}
  {/* About */}
  <div id="about" className="counter">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="h2-heading">Why should you work with us</h2>
          <hr className="hr-heading" />
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col-xl-6">
          <ul className="list-unstyled">
            <li className="d-flex">
              <h5 className="number">1.</h5>
              <div className="flex-grow-1">
                <h5>Expertise in digital products</h5>
                <div className="text">Civil those mrs enjoy shy fat merry. You greatest jointure saw horrible. He private he on be how the words look imagine suppose</div>
              </div>
            </li>
            <li className="d-flex">
              <h5 className="number">2.</h5>
              <div className="flex-grow-1">
                <h5>Highly skilled team of experts</h5>
                <div className="text">Blind there if every no so at. Own neglected you preferred way sincerity delivered his attempted. To of message more now cottage</div>
              </div>
            </li>
            <li className="d-flex">
              <h5 className="number">3.</h5>
              <div className="flex-grow-1">
                <h5>Partnerships with marketing agencies</h5>
                <div className="text">Be at miss or each good play home they. It leave taste mr in it fancy. She son lose does fond bred gave lady get. Sir her company</div>
              </div>
            </li>
          </ul>
        </div> {/* end of col */}
        <div className="col-xl-6">
          {/* Counter */}
          <div className="counter-container">
            <div className="counter-cell">
              <div data-purecounter-start={0} data-purecounter-end={231} data-purecounter-duration={3} className="purecounter">1</div>
              <div className="counter-info">Happy Customers</div>
            </div> {/* end of counter-cell */}
            <div className="counter-cell">
              <div data-purecounter-start={0} data-purecounter-end={385} data-purecounter-duration="1.5" className="purecounter">1</div>
              <div className="counter-info">Issues Solved</div>
            </div> {/* end of counter-cell */}
            <div className="counter-cell">
              <div data-purecounter-start={0} data-purecounter-end={159} data-purecounter-duration={3} className="purecounter">1</div>
              <div className="counter-info">Good Reviews</div>
            </div> {/* end of counter-cell */}
            <div className="counter-cell">
              <div data-purecounter-start={0} data-purecounter-end={128} data-purecounter-duration={3} className="purecounter">1</div>
              <div className="counter-info">Case Studies</div>
            </div> {/* end of counter-cell */}
          </div> {/* end of counter-container */}
          {/* end of counter */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of counter */}
  {/* end of about */}
  {/* Testimonials */}
  <div className="slider-1">
    <img className="quotes-decoration" src="images/quotes.svg" alt="alternative" />
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Card Slider */}
          <div className="slider-container">
            <div className="swiper-container card-slider">
              <div className="swiper-wrapper">
                {/* Slide */}
                <div className="swiper-slide">
                  <img className="testimonial-image" src="images/testimonial-1.jpg" alt="alternative" />
                  <p className="testimonial-text">“Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done”</p>
                  <div className="testimonial-author">Marlene Visconte</div>
                  <div className="testimonial-position">General Manager - Scouter</div>
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <img className="testimonial-image" src="images/testimonial-2.jpg" alt="alternative" />
                  <p className="testimonial-text">“Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done”</p>
                  <div className="testimonial-author">John Spiker</div>
                  <div className="testimonial-position">Team Leader - Vanquish</div>
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <img className="testimonial-image" src="images/testimonial-3.jpg" alt="alternative" />
                  <p className="testimonial-text">“Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it how about some words here done”</p>
                  <div className="testimonial-author">Stella Virtuoso</div>
                  <div className="testimonial-position">Design Chief - Bikegirl</div>
                </div> {/* end of swiper-slide */}
                {/* end of slide */}
              </div> {/* end of swiper-wrapper */}
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
              {/* end of add arrows */}
            </div> {/* end of swiper-container */}
          </div> {/* end of slider-container */}
          {/* end of card slider */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of slider-1 */}
  {/* end of testimonials */}
  {/* Team */}
  <div className="cards-2 bg-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="h2-heading">Specialized team members</h2>
          <p className="p-heading">It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. He set this new record pretty future afraid should genius spirit on</p>
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col-lg-12">
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img className="img-fluid" src="images/team-member-1.jpg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Lacy Whitelong</h5>
              <p className="card-text">Business Developer</p>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-linkedin-in fa-stack-1x" />
                </a>
              </span>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img className="img-fluid" src="images/team-member-2.jpg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Sheila Zimern</h5>
              <p className="card-text">Software Engineer</p>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-linkedin-in fa-stack-1x" />
                </a>
              </span>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img className="img-fluid" src="images/team-member-3.jpg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Chris Brown</h5>
              <p className="card-text">Online Marketer</p>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-linkedin-in fa-stack-1x" />
                </a>
              </span>
            </div>
          </div>
          {/* end of card */}
          {/* Card */}
          <div className="card">
            <div className="card-image">
              <img className="img-fluid" src="images/team-member-4.jpg" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Mary Villalonga</h5>
              <p className="card-text">Product Manager</p>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x" />
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-linkedin-in fa-stack-1x" />
                </a>
              </span>
            </div>
          </div>
          {/* end of card */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of cards-2 */}
  {/* end of team */}
  {/* Contact */}
  <div id="contact" className="form-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="h2-heading">Let us know about your project</h2>
          <p className="p-heading">Of will at sell well at as. Too want but tall nay like old removing yourself today</p>
          <ul className="list-unstyled li-space-lg">
            <li><i className="fas fa-map-marker-alt" /> &nbsp;22 Innovative, San Francisco, CA 94043, US</li>
            <li><i className="fas fa-phone" /> &nbsp;<a href="tel:00817202212">+81 720 2212</a></li>
            <li><i className="fas fa-envelope" /> &nbsp;<a href="mailto:contact@site.com">contact@site.com</a></li>
          </ul>
        </div> {/* end of col */}
      </div> {/* end of row */}
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          {/* Contact Form */}
          <form>
            <div className="form-group">
              <input type="text" className="form-control-input" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" className="form-control-input" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea className="form-control-textarea" placeholder="Message" required defaultValue={""} />
            </div>
            <div className="form-group">
              <button type="submit" className="form-control-submit-button">Submit</button>
            </div>
          </form>
          {/* end of contact form */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of form-1 */}
  {/* end of contact */}
  {/* Footer */}
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="footer-col first">
            <h6>About Elma</h6>
            <p className="p-small">He oppose at thrown desire of no. Announcing impression unaffected day his are unreserved indulgence. Him hard find read are you</p>
          </div> {/* end of footer-col */}
          <div className="footer-col second">
            <h6>Links</h6>
            <ul className="list-unstyled li-space-lg p-small">
              <li>Important: <a href="terms.html">Terms &amp; Conditions</a>, <a href="privacy.html">Privacy Policy</a></li>
              <li>Useful: <a href="#">Colorpicker</a>, <a href="#">Icon Library</a>, <a href="#">Illustrations</a></li>
              <li>Menu: <a className="page-scroll" href="#header">Home</a>, <a className="page-scroll" href="#projects">Projects</a>, <a className="page-scroll" href="#services">Services</a>, <a className="page-scroll" href="#contact">Contact</a></li>
            </ul>
          </div> {/* end of footer-col */}
          <div className="footer-col third">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-twitter fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-pinterest-p fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-instagram fa-stack-1x" />
              </a>
            </span>
            <p className="p-small">We would love to hear from you <a href="mailto:contact@site.com"><strong>contact@site.com</strong></a></p>
          </div> {/* end of footer-col */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of footer */}  
  {/* end of footer */}
  {/* Copyright */}
  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p className="p-small">Copyright © <a href="#your-link">Your name</a></p>
        </div> 
        <div className="col-lg-12">
          <p className="p-small">Distributed by :<a href="https://themewagon.com/">Themewagon</a></p>
        </div> &lt;{/* end of col */}
      </div> {/* enf of row */}
    </div> {/* end of container */}
  </div> {/* end of copyright */} 
  {/* end of copyright */}
  {/* Back To Top Button */}
  <button onclick="topFunction()" id="myBtn">
    <img src="images/up-arrow.png" alt="alternative" />
  </button>
  {/* end of back to top button */}
  {/* Scripts */}
  {/* Bootstrap framework */}
  {/* Swiper for image and text sliders */}
  {/* Purecounter counter for statistics numbers */}
  {/* Custom scripts */}
</div>

    </>
  )
}

export default App
