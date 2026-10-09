import Icon from "@/components/Icon";
import ThemeToggle from "@/components/ThemeToggle";
import BackToTop from "@/components/BackToTop";
import Navigation from "@/components/Navigation";
import SelectedWork from "@/components/SelectedWork";
import CaseFlow from "@/components/CaseFlow";
import ExpertisePanel from "@/components/ExpertisePanel";

export default function PortfolioPage() {
  return (
<div id="khurram-interactive-2026" data-theme="dark">
  <div className="ka-shell">
    <header className="ka-header" id="ki-home">
      <a className="ka-brand cursor-interaction" href="#ki-home" aria-label="Syed Khurram Munir, home"><span className="ka-mark">SKM</span><span className="ka-brand-label">Syed Khurram Munir</span></a>
      <nav className="ka-nav" aria-label="Portfolio navigation">
        <a className="cursor-interaction" href="#ki-work">Work</a><a className="cursor-interaction" href="#ki-experience">Experience</a><a className="cursor-interaction" href="#ki-approach">Expertise</a><a className="cursor-interaction" href="#ki-about">About</a><a className="cursor-interaction" href="#ki-contact">Contact</a>
      </nav>
      <ThemeToggle />
    </header>
    <main>
      <section className="ka-hero" aria-labelledby="ki-name">
        <div>
          <p className="ka-kicker">Senior full stack engineer</p>
          <h1 id="ki-name">Syed Khurram Munir</h1>
          <p className="ka-hero-lead"><strong>Websites. Applications. Systems.</strong><br />Six years building across the stack.</p>
          <p className="ka-intro">Business websites, enterprise platforms, smart-city monitoring, digital evidence workflows and newsroom tools. I connect thoughtful interfaces with the APIs and data behind them, then follow the work through integration, release and production support.</p>
          <div className="ka-actions">
            <a className="ka-action ka-primary cursor-interaction" href="#ki-work">Explore my work<Icon name="arrow-up-right" /></a>
            <a className="ka-action cursor-interaction" href="#ki-contact">Let’s talk<Icon name="arrow-right" /></a>
            <a className="ka-action cursor-interaction" href="https://github.com/KhurramMunir95" target="_blank" rel="noopener noreferrer">GitHub<Icon name="github" /></a>
          </div>
          <p className="ka-location"><Icon name="map-pin" />Lahore, Pakistan<span className="ka-separator" aria-hidden="true"></span>Open to full stack engineering roles</p>
        </div>
        <div className="ka-hero-art" aria-label="Full stack scope: interfaces, backend systems and production delivery">
          <div className="ka-art-heading"><span>Engineering across the product</span><span>UI → API → Release</span></div>
          <div className="ka-layer ka-layer-first"><Icon name="panels-top-left" /><div><div className="ka-layer-title">Interfaces people can use</div><div className="ka-layer-sub">React · TypeScript · Responsive UI</div></div></div>
          <div className="ka-layer ka-layer-middle"><Icon name="blocks" /><div><div className="ka-layer-title">Systems that do the work</div><div className="ka-layer-sub">Node.js · APIs · Data · Workflows</div></div></div>
          <div className="ka-layer ka-layer-last"><Icon name="cloud" /><div><div className="ka-layer-title">Ownership beyond launch</div><div className="ka-layer-sub">Docker · Azure · Production support</div></div></div>
          <p className="ka-art-caption"><strong>6 years</strong> of building, shipping and improving.</p>
        </div>
      </section>
      <div className="ka-scope" aria-label="Experience across product domains">
        <div className="ka-scope-item"><Icon name="globe" /><div><div className="ka-scope-title">Client websites</div><div className="ka-scope-sub">Marketing, telecom & consulting</div></div></div>
        <div className="ka-scope-item"><Icon name="layers" /><div><div className="ka-scope-title">Enterprise platforms</div><div className="ka-scope-sub">Workflows, inventory & reporting</div></div></div>
        <div className="ka-scope-item"><Icon name="radio" /><div><div className="ka-scope-title">Media & analytics</div><div className="ka-scope-sub">Newsrooms and live information</div></div></div>
        <div className="ka-scope-item"><Icon name="shopping-bag" /><div><div className="ka-scope-title">Digital retail</div><div className="ka-scope-sub">Storefront and admin flows</div></div></div>
      </div>

      <section className="ka-section" id="ki-work" aria-labelledby="ki-work-title">
        <div className="ka-section-top"><div><p className="ka-kicker">Selected projects & engineering work</p><h2 id="ki-work-title">Different domains. Real delivery.</h2></div><p>Business websites, operational platforms, evidence workflows and live sensor data. Projects I’ve developed and systems I’ve helped build.</p></div>
        
        <SelectedWork>

          <article className="ka-work ka-featured" data-ka-category="product">
            <CaseFlow project="dubai" />
            <div className="ka-work-content">
              <p className="ka-work-type">Smart-city monitoring platform</p><h3>Dubai Municipality Smart City IoT Monitoring Platform</h3>
              <p className="ka-work-description">Built and integrated APIs to ingest and process live soil moisture, weather and other field-sensor data, and surface it through operational dashboards.</p>
              <div className="ka-tags"><span>React</span><span>TypeScript</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>REST APIs</span></div>
              <details><summary>Explore my contribution<Icon name="chevron-down" /></summary><div className="ka-contribution"><p><strong>Connect the field data:</strong> built and integrated APIs for sensor-data ingestion and processing.</p><p><strong>Make monitoring usable:</strong> developed dashboard layouts, reusable widgets, data visualizations and responsive interfaces for operational teams.</p><p><strong>Work across the stack:</strong> connected React and TypeScript interfaces with Node.js, Express, MongoDB and REST APIs, focusing on real-time data flow, usability and production-ready delivery.</p></div></details>
            </div>
          </article>
          <article className="ka-work ka-featured" data-ka-category="product">
            <CaseFlow project="saudi" />
            <div className="ka-work-content">
              <p className="ka-work-type">Digital evidence management platform</p><h3>Saudi Ministry of Interior | Digital Evidence Management Platform</h3>
              <p className="ka-work-description">Built and enhanced modules for secure evidence intake, tracking, custody verification, return processing and audit history.</p>
              <div className="ka-tags"><span>React</span><span>TypeScript</span><span>Node.js</span><span>REST APIs</span><span>MongoDB</span></div>
              <details><summary>Explore my contribution<Icon name="chevron-down" /></summary><div className="ka-contribution"><p><strong>Identify and receive evidence:</strong> developed RFID/barcode-based identification, officer verification and document-upload workflows.</p><p><strong>Track custody and storage:</strong> built storage tracking, evidence-status monitoring, custody verification and chain-of-custody records.</p><p><strong>Process returns and preserve history:</strong> enhanced return-processing and audit-history modules across frontend and backend features, focusing on security, traceability and reliable operational workflows.</p></div></details>
            </div>
          </article>
          <article className="ka-work" data-ka-category="web">
            <div className="ka-cover ka-cover-public ka-cover-magfellow" aria-label="MagFellow: international link-building agency website">
              <div className="ka-cover-top"><span>Digital marketing & outreach</span><Icon name="globe" /></div>
              <div className="ka-wordmark">Mag<span>Fellow.</span></div>
              <p className="ka-cover-address"><Icon name="link" />magfellow.com</p>
            </div>
            <div className="ka-work-content">
              <p className="ka-work-type">Client website · Website development</p><h3>MagFellow — a service business online.</h3>
              <p className="ka-work-description">Developed a business website for MagFellow, an international link-building agency. Part of my client-facing web development work, alongside larger application and platform projects.</p>
              <div className="ka-tags"><span>Business website</span><span>Digital marketing</span><span>Client delivery</span></div>
              <div className="ka-project-footer"><p className="ka-project-role">My role<strong>Website development</strong></p><a className="ka-project-link cursor-interaction" href="https://magfellow.com/" target="_blank" rel="noopener noreferrer">Visit website<Icon name="arrow-up-right" /></a></div>
            </div>
          </article>
          <article className="ka-work" data-ka-category="web">
            <div className="ka-cover ka-cover-public ka-cover-wavetel" aria-label="Wavetel Business: UK business communications website">
              <div className="ka-cover-top"><span>UK business communications</span><Icon name="phone" /></div>
              <div className="ka-wordmark">Wavetel <span>Business.</span></div>
              <p className="ka-cover-address"><Icon name="link" />wavetelbusiness.co.uk</p>
            </div>
            <div className="ka-work-content">
              <p className="ka-work-type">Client website · Website development</p><h3>Wavetel Business — telecom services.</h3>
              <p className="ka-work-description">Developed a business website for Wavetel Business, a UK provider of cloud phone systems and connectivity services. A website project in the business communications sector.</p>
              <div className="ka-tags"><span>Business website</span><span>Telecommunications</span><span>UK</span></div>
              <div className="ka-project-footer"><p className="ka-project-role">My role<strong>Website development</strong></p><a className="ka-project-link cursor-interaction" href="https://wavetelbusiness.co.uk/" target="_blank" rel="noopener noreferrer">Visit website<Icon name="arrow-up-right" /></a></div>
            </div>
          </article>
          <article className="ka-work" data-ka-category="web">
            <div className="ka-cover ka-cover-public ka-cover-edraak" aria-label="Edraak: Saudi management consulting and training website">
              <div className="ka-cover-top"><span>Consulting & professional services</span><Icon name="building-2" /></div>
              <div className="ka-wordmark">Edraak<span>.</span></div>
              <p className="ka-cover-address"><Icon name="link" />edraakcm.sa</p>
            </div>
            <div className="ka-work-content">
              <p className="ka-work-type">Client website · Website development</p><h3>Edraak — professional services in Saudi Arabia.</h3>
              <p className="ka-work-description">Developed a website for Edraak, a Saudi management consulting and training company. A professional-services project in a different market and business domain.</p>
              <div className="ka-tags"><span>Business website</span><span>Management consulting</span><span>Saudi Arabia</span></div>
              <div className="ka-project-footer"><p className="ka-project-role">My role<strong>Website development</strong></p><a className="ka-project-link cursor-interaction" href="https://edraakcm.sa/" target="_blank" rel="noopener noreferrer">Visit website<Icon name="arrow-up-right" /></a></div>
            </div>
          </article>
          <article className="ka-work" data-ka-category="product">
            <div className="ka-cover ka-cover-enterprise" aria-label="INNFINI: multi-tenant enterprise platform">
              <div className="ka-cover-top"><span>Enterprise workspace</span><Icon name="layers" /></div>
              <div className="ka-wordmark">INN<span>FINI</span></div>
              <div className="ka-module-line"><span>Workflows</span><span>Reports</span><span>Forms</span><span>Dashboards</span></div>
            </div>
            <div className="ka-work-content">
              <p className="ka-work-type">Enterprise product · Full stack contribution</p><h3>One workspace for complex operations.</h3>
              <p className="ka-work-description">Multi-tenant business software connecting inventory, operations, reporting and configurable workflows. My work spans the React interface, APIs, data and live integrations.</p>
              <div className="ka-tags"><span>React</span><span>TypeScript</span><span>Node.js</span><span>MongoDB</span></div>
              <details><summary className="cursor-interaction">My contribution<Icon name="chevron-down" /></summary><div className="ka-contribution"><p><strong>Built for everyday operations:</strong> reusable interfaces, role-based access, configurable forms, drill-down reports and dashboards with query-based filtering.</p><p><strong>Connected the workflow:</strong> independently built a folder module that brings forms, reports and dashboards together, alongside real-time features, maps and API integrations.</p></div></details>
            </div>
          </article>
          <article className="ka-work" data-ka-category="product">
            <div className="ka-cover ka-cover-media" aria-label="CB Media Content Bazar: newsroom and media analytics">
              <div className="ka-cover-top"><span>Newsroom & media analytics</span><Icon name="radio" /></div>
              <div className="ka-media-wordmark"><div className="ka-wordmark">CB Media<span>.</span></div><div className="ka-media-disc"><Icon name="audio-lines" /></div></div>
              <p className="ka-cover-sub">Stories · News tickers · Channel insights</p>
            </div>
            <div className="ka-work-content">
              <p className="ka-work-type">Media product · Interface & API integration</p><h3>Software for a working newsroom.</h3>
              <p className="ka-work-description">Content Bazar connects newsroom content and channel analytics. Interfaces for staff to work with stories, uploads and news feeds, with live views and multi-channel information.</p>
              <div className="ka-tags"><span>JavaScript</span><span>Bootstrap</span><span>REST APIs</span><span>Analytics</span></div>
              <details><summary className="cursor-interaction">My contribution<Icon name="chevron-down" /></summary><div className="ka-contribution"><p><strong>Connected content and data:</strong> worked on newsroom interfaces and API integration for stories, uploads, tickers and channel analytics.</p><p><strong>Supported newsroom workflows:</strong> contributed to story comments and rundown functionality, alongside graph-based channel information and real-time views.</p></div></details>
            </div>
          </article>
          <article className="ka-work" data-ka-category="product">
            <div className="ka-cover ka-cover-retail" aria-label="Digital retail store: browse, cart, orders and administration">
              <div className="ka-cover-top"><span>Commerce experience</span><Icon name="shopping-bag" /></div>
              <div className="ka-wordmark">Browse<span>.</span> Cart<span>.</span> Order<span>.</span></div>
              <p className="ka-cover-sub">Customer journeys meet store administration</p>
            </div>
            <div className="ka-work-content">
              <p className="ka-work-type">Retail product · Early career contribution</p><h3>A store on both sides of the counter.</h3>
              <p className="ka-work-description">At TV2U, I contributed to a digital retail platform under senior guidance: product discovery and shopping flows for customers, with product and category management for administrators.</p>
              <div className="ka-tags"><span>React</span><span>Vue / Nuxt</span><span>Laravel</span><span>API integration</span></div>
              <details><summary className="cursor-interaction">My contribution<Icon name="chevron-down" /></summary><div className="ka-contribution"><p><strong>Customer-facing features:</strong> product browsing, cart, order management, login and registration flows.</p><p><strong>Administration and integration:</strong> reusable UI components, product/category CRUD and REST API integration. This is where I began connecting frontend features with backend behavior.</p></div></details>
            </div>
          </article>
          <article className="ka-work" data-ka-category="engineering">
            <div className="ka-cover ka-cover-engineering" aria-label="Backend engineering: APIs, business rules and data">
              <div className="ka-cover-top"><span>Backend engineering</span><Icon name="server" /></div>
              <div className="ka-engineering-visual"><div className="ka-engineering-path">API <span>→</span> Logic <span>→</span> Data</div><Icon name="workflow" /></div>
            </div>
            <div className="ka-work-content">
              <p className="ka-work-type">Engineering contribution · Business platforms</p><h3>The application behind the interface.</h3>
              <p className="ka-work-description">At Einnovention and Transcure, I built backend services and database-driven modules for authentication, business workflows, filtering, reporting and frontend integration.</p>
              <div className="ka-tags"><span>Node.js</span><span>Express</span><span>TypeScript</span><span>MongoDB</span></div>
              <details><summary className="cursor-interaction">My contribution<Icon name="chevron-down" /></summary><div className="ka-contribution"><p><strong>Turned requirements into services:</strong> REST APIs, business logic, CRUD modules, data processing and response handling across application features.</p><p><strong>Kept delivery moving:</strong> modular backend structure, frontend integration, production debugging and close collaboration with QA, product and other developers.</p></div></details>
            </div>
          </article>
          <article className="ka-work" data-ka-category="engineering">
            <div className="ka-cover ka-cover-engineering" aria-label="Production engineering: build, deploy and improve">
              <div className="ka-cover-top"><span>Production engineering</span><Icon name="cloud" /></div>
              <div className="ka-engineering-visual"><div className="ka-engineering-path">Build <span>→</span> Ship <span>→</span> Improve</div><Icon name="git-branch" /></div>
            </div>
            <div className="ka-work-content">
              <p className="ka-work-type">Engineering contribution · Delivery & performance</p><h3>The responsibility continues after launch.</h3>
              <p className="ka-work-description">Cloud deployment, frontend performance and production support. I work on the parts that keep a product maintainable and usable as features, teams and requirements evolve.</p>
              <div className="ka-tags"><span>Docker</span><span>Nginx</span><span>Azure</span><span>CI/CD</span></div>
              <details><summary className="cursor-interaction">My contribution<Icon name="chevron-down" /></summary><div className="ka-contribution"><p><strong>Made deployment leaner:</strong> led a multi-stage Docker build improvement that reduced a frontend deployment image from approximately <strong>6 GB to 166 MB</strong>, retaining compiled assets in an Nginx Alpine runtime.</p><p><strong>Improved the product in use:</strong> code splitting, lazy loading, targeted rendering improvements, production fixes and review of maintainable implementation approaches.</p></div></details>
            </div>
          </article>
        
</SelectedWork>
        <div className="ka-work-bottom"><p className="ka-work-note"><Icon name="lock-keyhole" />Enterprise work is shown through high-level contributions. Client source code and private implementation details stay private.</p><a className="ka-project-link cursor-interaction" href="https://github.com/KhurramMunir95" target="_blank" rel="noopener noreferrer">View GitHub profile<Icon name="github" /></a></div>
      </section>

      <section className="ka-section" id="ki-experience" aria-labelledby="ki-experience-title">
        <div className="ka-section-top"><div><p className="ka-kicker">Six years, building on each step</p><h2 id="ki-experience-title">Experience</h2></div><p>From frontend delivery to full stack engineering, enterprise ownership and developer mentoring. The roles and responsibilities behind the work.</p></div>
        <ol className="ka-career" aria-label="Professional experience, most recent first">
          <li className="ka-career-item">
            <div className="ka-career-date"><time dateTime="2024-09">Sep 2024</time> — <time dateTime="2026-09">Sep 2026</time><small>Enterprise & team ownership</small></div>
            <div className="ka-career-content"><h3>Innovent Tech Solutions</h3><p className="ka-career-role">Senior Software Developer</p><p className="ka-career-copy">Owned enterprise MERN features across configurable dashboards, drill-down reports, dynamic forms and real-time workflows. Made implementation decisions, collaborated with product and QA, reviewed code and mentored two interns and two junior developers.</p><p className="ka-career-highlight">Delivered localization for <strong>10 languages across 100+ screens</strong>, including Arabic and Urdu RTL. Led a frontend Docker improvement from approximately <strong>6 GB to 166 MB</strong>.</p><p className="ka-career-tech">React · TypeScript · Redux Toolkit / Saga · Node.js · MongoDB · Socket.io · Docker · Azure</p></div>
          </li>
          <li className="ka-career-item">
            <div className="ka-career-date"><time dateTime="2023-03">Mar 2023</time> — <time dateTime="2024-09">Sep 2024</time><small>Full stack application delivery</small></div>
            <div className="ka-career-content"><h3>Transcure</h3><p className="ka-career-role">Software Developer</p><p className="ka-career-copy">Built backend services for authentication, business workflows, data processing, filtering and reporting. Developed responsive React interfaces from Figma designs, connected APIs to application features, and worked with QA and product teams on release improvements and production issues.</p><p className="ka-career-tech">React · TypeScript · Tailwind CSS · Node.js · Express · MongoDB · REST APIs</p></div>
          </li>
          <li className="ka-career-item">
            <div className="ka-career-date"><time dateTime="2021-11">Nov 2021</time> — <time dateTime="2023-03">Mar 2023</time><small>Client-facing full stack work</small></div>
            <div className="ka-career-content"><h3>Einnovention Software Solutions LLC</h3><p className="ka-career-role">Software Developer</p><p className="ka-career-copy">Delivered React applications and Node.js services for business functionality, with REST APIs and database-driven features. Followed work from requirements and implementation through testing and deployment, collaborating with clients and developers to refine functionality, usability and maintainability.</p><p className="ka-career-tech">React · JavaScript · Node.js · Express · MongoDB · REST APIs · Deployment</p></div>
          </li>
          <li className="ka-career-item">
            <div className="ka-career-date"><time dateTime="2020-12">Dec 2020</time> — <time dateTime="2021-11">Nov 2021</time><small>Websites & CMS delivery</small></div>
            <div className="ka-career-content"><h3>Code Desk Private Limited</h3><p className="ka-career-role">Frontend Developer</p><p className="ka-career-copy">Developed responsive landing pages, business websites and small web applications. Managed requirements, implementation, testing, deployment and post-launch updates, with reusable layouts, CMS work and browser compatibility checks.</p><p className="ka-career-tech">HTML · CSS · JavaScript · HubSpot · Umbraco · Responsive UI</p></div>
          </li>
          <li className="ka-career-item">
            <div className="ka-career-date"><time dateTime="2020-03">Mar 2020</time> — <time dateTime="2020-11">Nov 2020</time><small>Retail application foundations</small></div>
            <div className="ka-career-content"><h3>TV2U Private Limited</h3><p className="ka-career-role">Software Developer Intern</p><p className="ka-career-copy">Contributed to product browsing, cart, orders, authentication and product/category administration under senior-engineer guidance. Built reusable frontend components and integrated Laravel APIs with Nuxt.js, developing a practical foundation across the frontend and backend.</p><p className="ka-career-tech">React · Vue.js · Nuxt.js · Laravel · REST APIs · Git</p></div>
          </li>
        </ol>
      </section>

      <section className="ka-section" id="ki-approach" aria-labelledby="ki-approach-title">
        <div className="ka-section-top"><div><p className="ka-kicker">Depth behind the delivery</p><h2 id="ki-approach-title">More than a list of technologies.</h2></div><p>The decisions and responsibilities behind the work, from reusable UI to the release a team can maintain.</p></div>
        <ExpertisePanel />
      </section>

      <section className="ka-section" id="ki-about" aria-labelledby="ki-about-title">
        <div className="ka-section-top"><div><p className="ka-kicker">The person behind the work</p><h2 id="ki-about-title">Curious about the whole system.</h2></div></div>
        <div className="ka-about-layout">
          <div className="ka-about-card"><h3>I like understanding what a feature needs to do — and why.</h3><div className="ka-about-copy"><p>I’ve worked on marketing, telecom and consulting websites, retail applications, newsroom tools, enterprise software, smart-city monitoring and digital evidence management. Each has a different audience and a different set of problems to solve.</p><p>That range shapes how I work. I think about the user’s next step, the API behind it, the permissions around it and what happens in production. I enjoy turning a complicated requirement into something a team can use and maintain.</p><p>I’ve worked directly with clients, collaborated with design and QA, made technical decisions, reviewed code and helped other developers deliver features. I stay involved beyond the first implementation.</p></div><div className="ka-values"><span>Product understanding</span><span>Clear implementation</span><span>Shared ownership</span></div></div>
          <div className="ka-craft-cards">
            <article className="ka-craft-card"><div className="ka-craft-title"><h3>Growing with the team</h3><Icon name="users" /></div><p>I’ve mentored two interns and two junior developers through feature work, implementation decisions and code reviews. Helping someone get unstuck is part of delivery.</p><div className="ka-craft-meta">Technical guidance · Reviews · Collaboration</div></article>
            <article className="ka-craft-card"><div className="ka-craft-title"><h3>Building practical AI experience</h3><Icon name="sparkles" /></div><p>I use Cursor and Claude in feature development and have worked with OpenAI and Claude API integrations. I’m also building hands-on experience with RAG, agents and Python-based AI services.</p><div className="ka-craft-meta">API integrations · Ongoing learning & experiments</div></article>
          </div>
        </div>
      </section>

      <section className="ka-contact" id="ki-contact" aria-labelledby="ki-contact-title">
        <div><p className="ka-kicker">Let’s build something useful</p><h2 id="ki-contact-title">Have a product or a team in mind?</h2><p>I’m open to senior full stack roles and conversations with teams building websites, business applications and enterprise products.</p><a className="ka-contact-email" href="mailto:khurrammunir9522@gmail.com"><Icon name="mail" />khurrammunir9522@gmail.com</a></div>
        <div className="ka-actions"><a className="ka-action ka-primary cursor-interaction" href="mailto:khurrammunir9522@gmail.com">Say hello<Icon name="arrow-up-right" /></a><a className="ka-action cursor-interaction" href="https://www.linkedin.com/in/syed-khurram-munir-678153166/" target="_blank" rel="noopener noreferrer">LinkedIn<Icon name="arrow-up-right" /></a><a className="ka-action cursor-interaction" href="https://github.com/KhurramMunir95" target="_blank" rel="noopener noreferrer">GitHub<Icon name="github" /></a></div>
      </section>
    </main>
    <footer className="ka-footer"><span>Syed Khurram Munir · Full stack engineer · Lahore, Pakistan</span><span><a className="cursor-interaction" href="mailto:khurrammunir9522@gmail.com">khurrammunir9522@gmail.com</a></span></footer>
  </div>
  <BackToTop />
<Navigation />
</div>
  );
}
