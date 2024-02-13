import profilePic from 'images/profile-pic1.png';
import 'styles/profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faCheck, faLink } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <>
      <div className="flex mt-4 flex-col lg:flex-row">
        <div className="flex flex-col pl-0 pr-0 lg:pl-10 lg:pr-10">
          <div className="flex justify-center items-center">
            <img
              className="rounded-[50%] max-w-[250px] h-[250px] ring-2 ring-gray-900/[0.1]"
              src={profilePic}
              alt="profile pic"
            />
          </div>
          <ul className="flex flex-row justify-center items-center mt-2 h-14 social-list">
            <a
              href="https://www.facebook.com/YallaBlagan"
              target="_blank"
              rel="noreferrer"
            >
              <li className="py-3 px-5 rounded">
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamadhusari"
              target="_blank"
              rel="noreferrer"
            >
              <li className="py-3 px-5 rounded">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </li>
            </a>
            <a
              href="https://github.com/MohamadHusari"
              target="_blank"
              rel="noreferrer"
            >
              <li className="py-3 px-5 rounded">
                <FontAwesomeIcon icon={faGithub} />
              </li>
            </a>
            <a
              href="https://wa.me/972502236611"
              target="_blank"
              rel="noreferrer"
            >
              <li className="py-3 px-5 rounded">
                <FontAwesomeIcon icon={faWhatsapp} />
              </li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col">
          <div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold italic p-0 m-0"
              id="my-name"
            >
              Mohamad Husari
            </h1>
          </div>
          <div>
            <h6 className="font-thin text-base">Software engineering</h6>
          </div>
          <div className="flex flex-col items-start pt-3 px-2 lg:pt-8">
            <h6 className="text-lg font-bold italic">
              <u>PERSONAL SUMMARY:</u>
            </h6>
            <div className="pl-2 text-left">
              <p className="m-0">
                <span className="inline-block mr-1 text-[18px]">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Frontend engineer with experience building{' '}
                <b className="font-bold">
                  high-performance presentation layers
                </b>
                , building <b className="font-bold">reusable components</b>,
                <b className="font-bold"> performance optimization</b>, building
                <b className="font-bold"> automation frameworks</b> from
                scratch, building APIs, designing and developing web
                applications across multiple <b className="font-bold">APIs</b>,
                and third-party <b className="font-bold">integrations</b>.
              </p>
              <p>
                <span className="inline-block mr-1 text-[18px]">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Highly motivated, able to work
                <b className="font-bold"> independently</b>, organized and
                results-oriented with excellent
                <b className="font-bold"> interpersonal</b>, communication, and
                <b className="font-bold"> presentation skills</b>, and ability
                to work in a<b className="font-bold"> team environment</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-2 border-b-[1px]"></div>
      <div className="px-2 grid gap-y-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="justify-self-start lg:justify-self-center lg:pl-0">
            <h6 className="text-lg font-bold italic">
              <u>WORK EXPERIENCE:</u>
            </h6>
          </div>
          <div className="lg:col-span-2"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="col-span-1"></div>
          <div className="col-span-2 lg:self-end lg:justify-self-start">
            <b className="titles font-bold">
              Frontend engineer, Salesforce (Datorama)
            </b>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="self-center mb-3 lg:mb-0">
            <h5 className="text-l lg:text-xl font-light italic">
              1/2020 – Present
            </h5>
          </div>
          <div className="col-span-2 grid gap-0 text-left">
            <p className="m-0">
              <b className="font-black">•</b> Developing new features in the
              <b className="font-bold">
                {' '}
                Datorama marketing intelligence platform{' '}
              </b>
              more specifically in the
              <b className="font-bold"> Marketplace Tab</b> with
              <b className="font-bold"> Angular</b>.
            </p>
            <p>
              <b className="font-black">•</b> Developing
              <b className="font-bold"> Marketplace Apps</b> using
              <b className="font-bold"> React</b> and
              <b className="font-bold"> Angular</b>.
            </p>
            <p>
              <b className="font-black">•</b> At Datorama,
              <b className="font-bold"> partners</b> build apps that come
              through me for
              <b className="font-bold"> checking</b>,
              <b className="font-bold"> submitting</b>, and
              <b className="font-bold"> feedback</b>.
            </p>
            <p>
              <b className="font-black">•</b> Used
              <b className="font-bold"> Cypress</b> to write
              <b className="font-bold"> E2E tests </b>
              and integrated them into<b className="font-bold"> CI/CD</b>{' '}
              pipeline using
              <b className="font-bold"> CircleCI</b>.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="col-span-1"></div>
          <div className="col-span-2 lg:self-end lg:justify-self-start">
            <b className="titles font-bold">
              Software Developer and Automation, GalilSoftware - MediaKind
              project
            </b>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="self-center mb-2 lg:mb-0">
            <h5 className="text-l lg:text-xl font-light italic">
              8/2018 – 1/2020
            </h5>
          </div>
          <div className="col-span-2 grid gap-0 text-left">
            <p className="m-0">
              <b className="font-black">•</b> Researching and developing Scripts
              of comparing files in <b className="font-bold">big data </b>
              system, with scripting skills (<b className="font-bold">Bash </b>
              and <b className="font-bold">Shell</b>).
            </p>
            <p>
              <b className="font-black">•</b> Developing Automation E2E API
              testing using
              <b className="font-bold"> python</b> under
              <b className="font-bold"> Linux</b>.
            </p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="justify-self-start lg:justify-self-center lg:pl-0">
            <h6 className="text-lg font-bold italic">
              <u>EDUCATION:</u>
            </h6>
          </div>
          <div className="lg:col-span-2"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="col-span-1"></div>
          <div className="col-span-2 lg:self-end lg:justify-self-start">
            <b className="titles font-bold">
              B.Sc. Software Engineering, Ort Braude College – Karmiel, Israel
            </b>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="self-center mb-2 lg:mb-0">
            <h5 className="text-l lg:text-xl font-light italic">
              2014 – 2018
              <br />
              Graduated
            </h5>
          </div>
          <div className="col-span-2 grid gap-0 text-left">
            <p>
              <b className="font-black">• </b>
              <b className="font-bold">Final Project</b>: Development of an
              algorithm for{' '}
              <b className="font-bold">
                predict results of competitions between football teams by a
                stochastic model
              </b>
              . Using <b className="font-bold">Angular</b>,{' '}
              <b className="font-bold">PHP</b>,
              <b className="font-bold"> Python</b>,
              <b className="font-bold"> Ionic</b> and
              <b className="font-bold"> MYSQL</b>. (
              <b className="font-bold">Final grade 94</b>).
              <br />
            </p>
            <p className="text-ellipsis overflow-hidden ...">
              <span className="pl-2">
                <FontAwesomeIcon className="text-[#007bff]" icon={faLink} />{' '}
                <b className="font-bold">GitHub link: </b>
                <a
                  className="text-[#007bff]"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/MohamadHusari/Predicting-EPL-Matches-Results"
                >
                  https://github.com/MohamadHusari/Predicting-EPL-Matches-Results
                </a>
              </span>
            </p>
            <p>
              <b className="font-black">• </b>
              <b className="font-bold">Project</b>: Development an{' '}
              <b className="font-bold">Academic Management System</b> for
              universities with JAVA language.
              <br />
            </p>
            <p className="text-ellipsis overflow-hidden ...">
              <span className="pl-2">
                <FontAwesomeIcon className="text-[#007bff]" icon={faLink} />{' '}
                <b className="font-bold">GitHub link: </b>
                <a
                  className="text-[#007bff]"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/MohamadHusari/SchoolBookV0.9"
                >
                  https://github.com/MohamadHusari/SchoolBookV0.9
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="justify-self-start lg:justify-self-center lg:pl-0">
            <h6 className="text-lg font-bold italic">
              <u>COURSES:</u>
            </h6>
          </div>
          <div className="lg:col-span-2"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="col-span-1"></div>
          <div className="col-span-2 lg:self-end lg:justify-self-start">
            <b className="titles font-bold">
              Front End Development, Tsofen organization with WIX – Nazareth,
              Israel
            </b>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="self-center mb-2 lg:mb-0">
            <h5 className="text-l lg:text-xl font-light italic">
              2/2019 – 6/2019
              <br />
              Graduated
            </h5>
          </div>
          <div className="col-span-2 grid gap-0 text-left">
            <p>
              Research Practical training course operated by Tsofen
              organization, in cooperation with
              <b className="font-bold"> Wix </b>
              and academic instruction by
              <b className="font-bold"> Grauman Hi-Tech Dev Courses</b> totaling
              <b className="font-bold"> 200</b> academic hours.
            </p>
            <p>
              <b className="font-black">• </b>Developing Theoretical contents
              and a hands-on development project using industry methodologies
              and practices.
            </p>
            <p>
              <b className="font-black">• </b>Technologies:
              <b className="font-bold"> React</b>,
              <b className="font-bold"> JS</b>(<b className="font-bold">ES6+</b>
              ), <b className="font-bold">HTML5</b>/
              <b className="font-bold">CSS3</b>,
              <b className="font-bold"> Bootstrap</b> and
              <b className="font-bold"> Agile</b> development methodology.
            </p>
            <p>
              <b className="font-black">• </b>Developing a
              <b className="font-bold"> social website</b>, Sharing wishes and
              events with registration ability, <br />
              <span>
                <b className="font-black">• </b>
                <b className="font-bold">
                  Self-Study: Back-end development, developing server side using
                  Node.js, Express.js, Express-jwt, MySQL
                </b>
                .
              </span>
            </p>
            <p className="text-ellipsis overflow-hidden ...">
              <span className="pl-2">
                <FontAwesomeIcon className="text-[#007bff]" icon={faLink} />
                <b className="font-bold"> GitHub link: </b>
                <a
                  className="text-[#007bff]"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/MohamadHusari/Wishes"
                >
                  https://github.com/MohamadHusari/Wishes
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="justify-self-start lg:justify-self-center lg:pl-0">
            <h6 className="text-lg font-bold italic">
              <u>TECHNICAL SKILLS:</u>
            </h6>
          </div>
          <div className="lg:col-span-2"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-0">
          <div className="col-span-1"></div>
          <div className="col-span-5 text-left">
            <p>
              <span className="d-inline-block mr-3">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <b className="font-bold">
                React, Redux, React Query, JavaScript (ES6+), HTML5, CSS3,
                Bootstrap, MYSQL, Python.
              </b>
              <br />
              <span className="d-inline-block mr-3">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <b className="font-bold">
                Angular, Akita, SCSS, jQuery, TypeScript, Ionic, MongoDB, GIT,
                SVN, JAVA, Cypress, Selenium.
              </b>
            </p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="justify-self-start lg:justify-self-center lg:pl-0">
            <h6 className="text-lg font-bold italic">
              <u>LANGUAGES:</u>
            </h6>
          </div>
          <div className="lg:col-span-2"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-0">
          <div className="col-span-1"></div>
          <div className="col-span-5 flex flex-col md:flex-row justify-self-center md:justify-self-auto md:justify-between text-left">
            <p className="flex-1 mb-4 md:mb-0">
              <span className="mr-3">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <b className="font-weight-bold">English</b> – Proficient
            </p>
            <p className="flex-1 mb-4 md:mb-0">
              <span className="d-inline-block mr-3">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <b className="font-weight-bold">Hebrew</b> – Fluent
            </p>
            <p className="flex-1">
              <span className="d-inline-block mr-3">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <b className="font-weight-bold">Arabic</b> – Mother tongue
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
