import './App.css';

const Wrapper = ({ children }) =>
  <div className="wrapper">
    {children}
  </div>

const Container = ({ children }) =>
  <div className="container">
    {children}
  </div>

const MenuItem = ({ url = "#", urlName }) =>
  <li><a href={url}>{urlName}</a></li>

const NavMenu = () =>
  <nav className="menu">
    <input id="toggle" type="checkbox" />
    <label className="menu-toggle" htmlFor="toggle"><span /></label>
    <ul>
      <MenuItem url="#about" urlName="About us" />
      <MenuItem url="#reservation" urlName="Reservation" />
      <MenuItem url="#gallery" urlName="Gallery" />
      <MenuItem url="#blog" urlName="Blog" />
      <MenuItem url="#features" urlName="Elements" />
      <MenuItem url="#shop" urlName="Shop" />
    </ul>
  </nav>

const Logo = ({ url = "#" }) =>
  <a href={url} className="logo"><img src="images/logo.png" alt="A-level" /></a>

const HeaderHolder = () =>
  <div className="header-holder">
    <Logo url="#body" src="images/logo.png" />
    <NavMenu />
  </div>

const Header = () =>
  <header id="header">
    <Container>
      <HeaderHolder />
    </Container>
  </header>

const Section = ({ sectionName, sectionClass, children }) =>
  <section id={sectionName} className={sectionClass}>
    {children}
  </section>

const SectionHead = ({ text }) =>
  <h2>{text}</h2>

const SliderContent = ({ tagLine, tagLineText }) =>
  <div className="slider-content">
    <h1>{tagLine}</h1>
    <span>{tagLineText}</span>
  </div>

const SliderForm = ({ formName, 
  classOption_1 = "Yoga for health", 
  classOption_2 = "Yoga for lose weight", 
  classOption_3 = "Yoga for children", 
  classOption_4 = "Yoga for elderly", 
  btnName = "Try it" }) =>
  <div className="slider-form-container">
    <form className="slider-form" action="#">
      <h3>{formName}</h3>
      <input type="text" placeholder="Enter your name" />
      <input type="tel" placeholder="Enter your phone" />
      <select id="class-options" value="Chose">
        <option value="Chose" disabled>Chose your class</option>
        <option value="option_1">{classOption_1}</option>
        <option value="option_2">{classOption_2}</option>
        <option value="option_3">{classOption_3}</option>
        <option value="option_4">{classOption_4}</option>
      </select>
      <button className="btn form-btn" type="submit">{btnName}</button>
    </form>
  </div >

const Slider = () =>
  <Section sectionName="reservation" sectionClass="slider">
    <Container>
      <SliderContent tagLine="Just Balance your Mind & Body" tagLineText="Create the healthy living for yourself" />
      <SliderForm formName="Trial Class" />
    </Container>
  </Section>

const ClassesCard = ({ imgUrl, imgAlternateText, cardName, children, cardUrl = "#", cardUrlName = "Ashtanga - Hatha" }) =>
  <li>
    <div className="card">
      <div className="card-visual"><img src={imgUrl} alt={imgAlternateText} /></div>
      <div className="card-body">
        <h4>{cardName}</h4>
        <p>{children}</p>
        <a href={cardUrl}>{cardUrlName}</a>
      </div>
    </div>
  </li>

const Classes = () =>
  <Section sectionName="blog" sectionClass="classes">
    <Container>
      <SectionHead text="Yoga feature program" />
      <span>Our classes</span>
      <ul className="classes-cards">
        <ClassesCard imgUrl="images/img-01.jpg" imgAlternateText="exercise plank" cardName="Yoga For Health">
          Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </ClassesCard>
        <ClassesCard imgUrl="images/img-02.jpg" imgAlternateText="exercise stretching" cardName="Yoga For Lose Weight">
          Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </ClassesCard>
        <ClassesCard imgUrl="images/img-03.jpg" imgAlternateText="exercise for children" cardName="Yoga For Children">
          Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </ClassesCard>
        <ClassesCard imgUrl="images/img-04.jpg" imgAlternateText="exercise for elderly" cardName="Yoga For Elderly">
          Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </ClassesCard>
      </ul>
    </Container>
  </Section>

const GalleryPhoto = ({ photoUrl = "#", img, photoAlternate = "photo" }) =>
  <li><a href={photoUrl}><img src={img} alt={photoAlternate} /></a></li>

const Gallery = () =>
  <Section sectionName="gallery" sectionClass="gallery">
    <SectionHead text="Gallery" />
    <ul className="gallery-box">
      <GalleryPhoto img="images/img-05.jpg" />
      <GalleryPhoto img="images/img-06.jpg" />
      <GalleryPhoto img="images/img-07.jpg" />
      <GalleryPhoto img="images/img-08.jpg" />
      <GalleryPhoto img="images/img-09.jpg" />
      <GalleryPhoto img="images/img-10.jpg" />
      <GalleryPhoto img="images/img-11.jpg" />
      <GalleryPhoto img="images/img-12.jpg" />
    </ul>
  </Section>

const AboutContentText = ({ children }) =>
  <div className="about-text-box">
    <SectionHead text="About us" />
    <p>{children}</p>
  </div>

const AboutContent = ({ children }) =>
  <div className="about-content">
    <AboutContentText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation toui
      ullamcomi
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor it in lorei
      voluptate
      velit esse cillum dolore eu fugiat nulla pariatur lorem ispum loting sokui.
    </AboutContentText>
  </div>

const AboutSection = () =>
  <Section sectionName="about" sectionClass="about">
    <Container>
      <AboutContent>
        <AboutContentText />
      </AboutContent>
    </Container>
  </Section>

const FeatureCard = ({ icon, title, children }) =>
  <li>
    <div className="feature-box">
      <div className="feature-visual">
        <img src={icon} alt="icon" />
      </div>
      <div className="feature-text">
        <h5>{title}</h5>
        <p>{children}</p>
      </div>
    </div>
  </li>

const FeatureSection = () =>
  <Section sectionName="features" sectionClass="features">
    <Container>
      <ul className="feature-list">
        <FeatureCard icon="images/ico-01.png" title="IMPROVED OVERALL HEALTH">
          Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut
          aliquip ex
          ea com.
        </FeatureCard>
        <FeatureCard icon="images/ico-02.png" title="INCREASED CONCENTRATION">
          Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut
          aliquip ex
          ea com.
        </FeatureCard>
        <FeatureCard icon="images/ico-03.png" title="BАLANCE YOUR MIND">
          Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut
          aliquip ex
          ea com.
        </FeatureCard>
        <FeatureCard icon="images/ico-04.png" title="SLEEP BETTER">
          Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut
          aliquip ex
          ea com.
        </FeatureCard>
        <FeatureCard icon="images/ico-05.png" title="WEIGHT LOSS">
          Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut
          aliquip ex
          ea com.
        </FeatureCard>
        <FeatureCard icon="images/ico-06.png" title="STRENGTHENS YOUR BONES">
          Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut
          aliquip ex
          ea com.
        </FeatureCard>
        <FeatureCard icon="images/ico-07.png" title="INCREASED FLEXIBILITY">
          Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut
          aliquip ex
          ea com.
        </FeatureCard>
        <FeatureCard icon="images/ico-08.png" title="LOWER BLOOD PRESSURE">
          Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut
          aliquip ex
          ea com.
        </FeatureCard>
      </ul>
    </Container>
  </Section>

const ShopCard = ({ price, cardDateOption = "MON – FRI", cardTimeOption = "8A.M – 8P.M", cardAdvicerOption = "NO", btnUrl = "#", btnName = "Buy now" }) =>
  <li>
    <div className="shop-item">
      <h2 className="item-cost">{price}</h2>
      <div className="item-conditions">
        <span>ENTRY DATE:{cardDateOption}</span>
        <span>ENTRY TIME:{cardTimeOption}</span>
        <span>NUTRITION ADVICER:{cardAdvicerOption}</span>
      </div>
      <a className="btn shop-btn" href={btnUrl}>{btnName}</a>
    </div>
  </li>

const Shop = () =>
  <Section sectionName="shop" sectionClass="shop">
    <Container>
      <ul class="shop-list">
        <ShopCard price="49" />
        <ShopCard price="69" />
        <ShopCard price="99" cardDateOption="MON – SUN" cardAdvicerOption="YES" />
      </ul>
    </Container>
  </Section>

const Main = () =>
  <main id="main">
    <Slider />
    <Classes />
    <Gallery />
    <AboutSection />
    <FeatureSection />
    <Shop />
  </main>

const FooterSocial = ({ socialUrl = "#" }) =>
  <li><a href={socialUrl} target="_blank"></a></li>

const FooterInfoText = ({ infoTitle = "About", children }) =>
  <div className="about-info">
    <h3>{infoTitle}</h3>
    <p>{children}</p>
    <ul class="social">
      <FooterSocial />
      <FooterSocial />
      <FooterSocial />
      <FooterSocial />
      <FooterSocial />
    </ul>
  </div>

const FooterInfoContacts = ({ contactsTitle = "Contact us", address, addressUrl = "address:", mail, mailUrl = "mailto:", tel, telUrl = "tel:", telReserv, telReservUrl = "tel:", site, siteUrl = "https://" }) =>
  <div className="contacts-info">
    <h3>{contactsTitle}</h3>
    <ul className="contacts-items">
      <li><a href={addressUrl} target="_blank">{address}</a></li>
      <li><a href={mailUrl} target="_blank">{mail}</a></li>
      <li>
        <a href={telUrl} target="_blank">{tel}</a><br />
        <a href={telReservUrl} target="_blank">{telReserv}</a>
      </li>
      <li><a href={siteUrl} target="_blank">{site}</a></li>
    </ul>
  </div>

const Footer = ({ copyright = "Copyright © 2016-2017 Yoga classes" }) =>
  <footer id="footer">
    <Container>
      <div className="footer-info">
        <FooterInfoText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad m inim veniam, quis nostrud exercitation toui
          ullamcomi laboris nisi ut aliquip ex ea commodo consequat.
        </FooterInfoText>
        <FooterInfoContacts address="5419 Joseph Mountains Apt. 716"
          addressURL="address:5419JosephMountainsApt.716"
          mail="yoga.info@example.com"
          mailUrl="mailto:yoga.info@example.com"
          tel="+1 234 567 89"
          telUrl="tel:+123456789"
          telReserv="+1 234 678 90"
          telReservUrl="tel:+123467890"
          site="www.example.com"
          siteUrl="https://www.example.com" />
      </div>
    </Container>
    <span>{copyright}</span>
  </footer>

const App = () =>
  <Wrapper>
    <Header />
    <Main />
    <Footer />
  </Wrapper>

export default App;