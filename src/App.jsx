import "./App.css";
import companyLogo from './assets/images/logo-benadika.png';
import storeImg from './assets/images/store.png';
import crewCertificateImg from './assets/images/certificate-icon.png';
import shipImg from './assets/images/cargo.png';
import safetyImg from './assets/images/safety.png';
import organizationChartImg from './assets/images/organization-chart.png';
import activity1Img from './assets/images/activity-1.jpg';
import activity2Img from './assets/images/activity-2.jpg';
import activity3Img from './assets/images/activity-3.jpg';
import activity4Img from './assets/images/activity-4.jpg';
import activity5Img from './assets/images/activity-5.jpg';
import activity6Img from './assets/images/activity-6.jpg';
import activity7Img from './assets/images/activity-7.jpg';
import activity8Img from './assets/images/activity-8.jpg';
import activity9Img from './assets/images/activity-9.jpg';
import phoneIcon from './assets/images/icons8-phone-96.png';
import addressIcon from './assets/images/address-icon.png';
import emailIcon from './assets/images/email-icon.png';
import webIcon from './assets/images/website-icon.png';

function App() {
  return (
    <>
      <header
        class="absolute top-0 left-0 z-20 flex w-full items-center bg-transparent transition duration-300 ease-in-out">
        <div class="container sm:px-3">
          <div class="relative flex items-center justify-between">
            <div class="px-4 py-2">
              <img src={companyLogo} alt="Logo Benawa" class="w-12 md:w-16 lg:w-20" />
            </div>
            <div class="flex items-center px-4 py-4">
              <button id="hamburger-btn" class="absolute right-4 lg:hidden">
                <span id="hamburger"
                  class="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span id="hamburger" class="hamburger-line transition duration-300 ease-in-out"></span>
                <span id="hamburger"
                  class="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>
              <nav id="nav-menu"
                class="absolute -top-56 right-1 w-full max-w-[250px] rounded-lg bg-slate-800 py-4 shadow-xl transition duration-300 lg:static lg:flex lg:max-w-full lg:bg-transparent lg:shadow-none lg:transition-none">
                <ul tabindex="0" class="space-y-2 lg:flex lg:translate-x-0 lg:space-y-0">
                  <li class="group">
                    <a id="nav-link" href="#home"
                      class="border-link mx-8 inline-block py-1 text-base font-medium text-slate-300 after:content-[''] group-hover:text-white lg:text-xl">Home</a>
                  </li>
                  <li tabindex="0" class="dropdown-hover group dropdown">
                    <a id="nav-link" href="#about"
                      class="border-link mx-8 inline-block py-1 text-base font-medium text-slate-300 after:content-[''] group-hover:text-white lg:text-xl">About
                      Us</a>
                    <ul id="about-dropdown"
                      class="dropdown-content menu menu-compact w-48 rounded-md bg-primary-blue-light p-2 shadow-lg lg:menu-normal">
                      <li>
                        <a href="#visimisi"
                          class="text-slate-100 hover:bg-primary-blue-dark active:bg-primary-blue-dark">Vision
                          & Mission</a>
                      </li>
                      <li>
                        <a href="#teams"
                          class="text-slate-100 hover:bg-primary-blue-dark active:bg-primary-blue-dark">Our
                          Teams</a>
                      </li>
                    </ul>
                  </li>
                  <li class="group">
                    <a id="nav-link" href="#services"
                      class="border-link mx-8 inline-block py-1 text-base font-medium text-slate-300 after:content-[''] group-hover:text-white lg:text-xl">Services</a>
                  </li>
                  <li class="group">
                    <a id="nav-link" href="#footer"
                      class="border-link mx-8 inline-block py-1 text-base font-medium text-slate-300 after:content-[''] group-hover:text-white lg:text-xl">Contacts</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main class="relative">
        {/* Hero Section Start */}
        <section
          class="relative flex min-h-screen items-center bg-hero bg-cover bg-left after:absolute after:bottom-0 after:block after:h-full after:w-full after:bg-gradient-to-t after:from-slate-900 after:to-transparent after:content-[''] sm:after:bg-gradient-to-tl lg:after:bg-gradient-to-bl">
          <div class="container relative z-[1]">
            <div class="w-full px-8">
              <h1
                class="max-w-sm text-2xl font-extrabold tracking-wider text-slate-100 md:max-w-md md:text-3xl lg:max-w-xl xl:text-4xl">
                We provides a high standard of service and quality
              </h1>
              <p class="mt-3 text-base text-slate-200 lg:max-w-lg lg:text-lg">
                We pride ourselves on delivering top-notch service and exceptional quality to meet the unique
                needs of the maritime industry.
              </p>
            </div>
          </div>
        </section>
        {/* Hero Section End */}

        {/* About section start */}
        <section id="about" class="flex min-h-screen items-center">
          <div class="container">
            <div class="flex flex-wrap justify-around">
              <div class="w-full px-5 sm:px-7 md:px-8 lg:w-1/2 lg:max-w-lg xl:max-w-xl">
                <h2 class="mb-5 text-2xl font-bold capitalize tracking-wide text-primary-red md:text-3xl">About
                  Us</h2>
                <p class="mb-10 text-base text-slate-700 md:text-justify lg:text-lg">
                  <span class="font-semibold text-primary-blue">PT. BENAWA ADIKA DARYA</span> is a ship
                  chandler and food supplier based in Jakarta, Indonesia. Benawa Ship Chandlers
                  is a dedicated team and offer a high standard of service and quality of provision and
                  technical stores at a very competitive prices to meet your requirments.
                </p>
              </div>
              <div class="w-full px-5 sm:px-7 lg:w-1/2 lg:max-w-lg lg:pt-14 xl:max-w-xl">
                <p class="text-base text-slate-700 md:text-justify lg:text-lg">
                  Our orientation is to maintain an ever-growing customer base with our outstanding service
                  and quality guarantee. Provide the highest standards of quality with
                  cost-effective prices, fast delivery, efficient services and are committed to customer
                  satisfaction. Selection is another important factor getting the correct
                  products in the hands of our customer
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* About section end */}

        {/* Vision Mission start--> */}
        <section id="visimisi" class="flex min-h-screen items-center bg-primary-blue-dark py-40">
          <div class="container">
            <div class="w-full px-5 sm:px-7 md:mx-auto md:max-w-lg md:text-center lg:max-w-xl">
              <h2
                class="relative mb-5 max-w-xl pl-5 text-2xl font-bold tracking-wide text-white after:absolute after:left-0 after:top-0 after:h-8 after:w-2 after:bg-primary-red after:content-[''] sm:mx-auto sm:mb-8 sm:w-32 sm:pl-0 sm:pb-1 sm:text-center sm:after:top-full sm:after:h-2 sm:after:w-32 md:text-3xl">
                Vision
              </h2>
              <p class="mb-20 text-base text-secondary lg:text-lg">
                Become a leader in the ship chandlery business. To be a national reference by constantly
                improving the quality of our processes and developing the potential of our
                human resources in order to meet the expectations and needs of our customers.
              </p>
              <h2
                class="relative mb-5 max-w-xl pl-5 text-2xl font-bold tracking-wide text-white after:absolute after:left-0 after:top-0 after:h-8 after:w-2 after:bg-primary-red after:content-[''] sm:mx-auto sm:mb-8 sm:w-32 sm:pl-0 sm:pb-1 sm:text-center sm:after:top-full sm:after:h-2 sm:after:w-32 md:text-3xl">
                Mission
              </h2>
              <p class="mb-5 text-base text-secondary lg:text-lg">
                To offer the most complete and fastest ship supply service by covering the needs and
                expectations of our clients, in variety, quality and price competitiveness. To
                apply the best practices in our processes by working with a highly qualified human team, and
                contributing to the achievement of pemanent and lucrative business
                growth.
              </p>
            </div>
          </div>
        </section>
        {/* Vision Mission end--> */}

        {/* Services start */}
        <section id="services" class="pt-36 pb-32">
          <div class="container">
            <div class="w-full px-5 sm:px-7">
              <h2
                class="mb-10 text-center text-2xl font-bold capitalize tracking-wide text-primary-blue-light md:text-3xl">
                our services</h2>
              <div class="mx-auto flex w-full flex-wrap justify-around">
                <div class="mb-10 md:max-w-xl lg:w-1/2 lg:max-w-sm xl:max-w-lg">
                  <img src={storeImg} alt="Provisions Store" class="mx-auto w-28" />
                  <h3 class="mb-3 text-center text-xl font-semibold capitalize text-primary-blue-dark">
                    provisions store</h3>
                  <p class="text-base text-slate-700 md:text-justify lg:text-center lg:text-lg">
                    Our vast provision stores include rare and exclusive foods and specialty items imported
                    from around the world. Wide variety of products, perishable and non
                    perishable, such as meats, chicken, fish, canned, dairy, etc. All the while you can be
                    assured of freshness, quality, and best value.
                  </p>
                </div>
                <div class="mb-10 md:max-w-xl lg:w-1/2 lg:max-w-sm xl:max-w-lg">
                  <img src={crewCertificateImg} alt="Crew Certificate" class="mx-auto w-28" />
                  <h3 class="mb-3 text-center text-xl font-semibold capitalize text-primary-blue-dark">Crew
                    Certificate</h3>
                  <p class="text-base text-slate-700 md:text-justify lg:text-center lg:text-lg">
                    Assisting you in obtaining and managing essential crew certificates, ensuring that your
                    crew members are compliant with industry standards and regulations.
                  </p>
                </div>
                <div class="mb-10 md:max-w-xl lg:w-1/2 lg:max-w-sm xl:max-w-lg">
                  <img src={shipImg} alt="Ship Documents" class="mx-auto w-28" />
                  <h3 class="mb-3 text-center text-xl font-semibold capitalize text-primary-blue-dark">Ship
                    documents</h3>
                  <p class="text-base text-slate-700 md:text-justify lg:text-center lg:text-lg">
                    We offer comprehensive Ship Documents services to ensure smooth and compliant maritime
                    operations. Allowing you to focus on what matters most: safe and efficient
                    navigation. With our Ship Documents service, you can sail with confidence, knowing that
                    your paperwork is in expert hands.
                  </p>
                </div>
                <div class="mb-10 md:max-w-xl lg:w-1/2 lg:max-w-sm xl:max-w-lg">
                  <img src={safetyImg} alt="Safety Equipments" class="mx-auto w-28" />
                  <h3 class="mb-3 text-center text-xl font-semibold capitalize text-primary-blue-dark">safety
                    equipments</h3>
                  <p class="text-base text-slate-700 md:text-justify lg:text-center lg:text-lg">
                    We know that having the necessary safety equipment is the priority for vessels, so we
                    have inventory and provide the different elements necessary for any need,
                    such as flares, life jackets, life rings, epirb and anothers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services end */}

        {/* Team start */}
        <section id="teams" class="bg-slate-800 pt-36 pb-32">
          <div class="container">
            <div class="w-full px-5 sm:px-7 md:px-10 lg:px-7">
              <div class="mx-auto lg:w-3/4">
                <h2
                  class="mb-10 text-center text-2xl font-bold capitalize tracking-wide text-slate-100 md:text-3xl">
                  Company Structure</h2>
                <img src={organizationChartImg} alt="Organization Chart" class="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        {/* Team end */}

        {/* Gallery start */}
        {/* <section id="gallery" class="pt-36 pb-32">
          <div class="container">
            <div class="w-full px-5 sm:px-7 md:px-10 lg:px-7">
              <div class="mx-auto lg:w-3/4">
                <h2
                  class="mb-10 text-center text-2xl font-bold capitalize tracking-wide text-primary-blue md:text-3xl">
                  Gallery</h2>
                <div class="owl-carousel owl-theme">
                  <div class="item">
                    <img src={activity1Img} alt="Activity 1" class="mb-2 w-5 rounded-md bg-slate-700" />
                  </div>
                  <div class="item">
                    <img src={activity2Img} alt="Activity 2" class="mb-2 w-full rounded-md" />
                  </div>
                  <div class="item">
                    <img src={activity3Img} alt="Activity 3" class="mb-2 w-full rounded-md" />
                  </div>
                  <div class="item">
                    <img src={activity4Img} alt="Activity 4" class="mb-2 w-full rounded-md" />
                  </div>
                  <div class="item">
                    <img src={activity5Img} alt="Activity 5" class="mb-2 w-full rounded-md" />
                  </div>
                  <div class="item">
                    <img src={activity6Img} alt="Activity 6" class="mb-2 w-full rounded-md" />
                  </div>
                  <div class="item">
                    <img src={activity7Img} alt="Activity 7" class="mb-2 w-full rounded-md" />
                  </div>
                  <div class="item">
                    <img src={activity8Img} alt="Activity 8" class="mb-2 w-full rounded-md" />
                  </div>
                  <div class="item">
                    <img src={activity9Img} alt="Activity 9" class="mb-2 w-full rounded-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Gallery end */}

        {/* CTA start */}
        <section
          class="after:to-transparents relative flex h-80 items-center bg-map bg-contain bg-center bg-no-repeat after:absolute after:bottom-0 after:block after:h-full after:w-full after:bg-gradient-to-t after:from-slate-200 after:content-[''] md:h-96">
          <div class="container relative z-[10]">
            <div class="px-5 text-center">
              <h1 class="text-2xl font-bold capitalize tracking-wide text-slate-800 md:text-3xl">Our services
                reach all regions in Indonesia</h1>
              <p class="mt-3 text-base text-slate-800 lg:text-lg">Don't hesitate to contact us to discuss more.
              </p>
            </div>
          </div>
        </section>
        {/* CTA end */}

        {/* Footer-daisy start */}
        <footer id="footer" class="footer bg-slate-200 px-5 py-16 text-base sm:px-7 md:px-8 xl:px-20">
          <div class="md:mr-16">
            <img src={companyLogo} alt="Logo Benawa" class="w-24 md:w-16 lg:w-24" />
            <p class="text-lg font-bold">PT. Benawa Adika Darya</p>
          </div>
          <div class="md:mr-16">
            <span class="footer-title">Company</span>
            <a href="#about" class="duration-800 transition ease-in-out hover:text-primary-red">About Us</a>
            <a href="#visimisi" class="duration-800 transition ease-in-out hover:text-primary-red">Vission &
              Mission</a>
            <a href="#services" class="duration-800 transition ease-in-out hover:text-primary-red">Services</a>
            <a href="#teams" class="duration-800 transition ease-in-out hover:text-primary-red">Our Teams</a>
            <a href="#footer" class="duration-800 transition ease-in-out hover:text-primary-red">Contact</a>
          </div>
          <div>
            <span class="footer-title">Contact</span>
            <div class="mb-1 flex">
              <div>
                <img src={phoneIcon} alt="Phone icon" class="mr-2 w-7" />
              </div>
              <div>
                +62 813-9566-2881 - Intan Nurbaety <br />
                +62 812-1205-0045 - Dwi Yuliastuti <br />
                +62 813-8130-0941 - Tri Wibowo <br />
              </div>
            </div>
            <div class="mb-1 flex">
              <img src={addressIcon} alt="Address icon" class="mr-2 h-7 w-7" />
              <div>
                <span class="text-red-800">Head Office:</span> Graha Perdana <br />Jl. Raya Legok No.33,
                RT.003/RW.007<br />
                Jatimekar, Kec. Jatiasih, Kota Bekasi, Jawa Barat, 17422
                <br />
                <span class="text-red-800">Branch Office:</span> Patimban, Subang, West Java - Indonesia
              </div>
            </div>
            <div class="mb-1 flex">
              <img src={emailIcon} alt="Email icon" class="mr-2 w-7" />
              <a href="mailto:ops@benawa.id"
                class="duration-800 transition ease-in-out hover:text-primary-red">ops@benawa.id</a>
            </div>
            <div class="mb-1 flex">
              <img src={webIcon} alt="Web icon" class="mr-2 w-7" />
              <p>
                <a href="www.benawa.id" target="_blank"
                  class="duration-800 transition ease-in-out hover:text-primary-red">www.benawa.id</a>
              </p>
            </div>
          </div>
        </footer>
        {/* Footer-daisy end */}
      </main>
    </>
  );
}

export default App;

{
  /* <h1 classNameName='text-red-400 text-2xl'>halo</h1> */
}
{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} classNameName="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} classNameName="logo react" alt="React logo" />
        </a>
      </div>
      <h1 classNameName='text-red-500'>Vite + React</h1>
      <div classNameName="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p classNameName="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
