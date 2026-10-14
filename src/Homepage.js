import React from 'react';
import Portrait from './Portrait';
import publications from './publications.json';

const scholarUrl = 'https://scholar.google.co.uk/citations?user=AKjpAowAAAAJ&hl=en&oi=ao';
const years = [...new Set(publications.map(paper => paper.year))];

function Authors({ children }) {
  return children.split('Songbo Hu').map((part, index) => (
    <React.Fragment key={index}>
      {index > 0 && <strong>Songbo Hu</strong>}{part}
    </React.Fragment>
  ));
}

export default function Homepage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <main id="main" className="container">
        <section className="hero" id="about" aria-labelledby="intro-title">
          <div className="hero-text">
            <div className="intro-heading">
              <h1 id="intro-title">Songbo Hu <span lang="zh">胡淞博</span></h1>
              <p className="role">Research Associate, University of Cambridge</p>
            </div>
            <div className="hero-copy">
              <p>I am a research associate at the <a href="https://ltl.mmll.cam.ac.uk">Language Technology Lab</a>, <a href="https://www.cam.ac.uk">University of Cambridge</a>. I completed my PhD under the supervision of Prof. <a href="https://sites.google.com/site/annakorhonen/">Anna Korhonen</a> and Dr. <a href="https://sites.google.com/site/ivanvulic/">Ivan Vulić</a>.</p>
              <p>I am interested in building conversational AI for real-world applications, with a particular focus on development and deployment in resource-constrained settings.</p>
              <div className="profile-links" aria-label="Profile links">
                <a href="mailto:sh2091@cam.ac.uk">Email</a>
                <a href={scholarUrl}>Google Scholar</a>
                <a href="https://github.com/songbohu">GitHub</a>
                <a href="https://www.linkedin.com/in/songbohu/">LinkedIn</a>
              </div>
            </div>
          </div>
          <Portrait />
        </section>

        <section className="section publications-section" id="publications" aria-labelledby="publications-title">
          <div className="section-heading">
            <h2 id="publications-title">Publications</h2>
            <p className="contribution-note">* Equal contribution · ** Equal senior contribution</p>
          </div>
          <div className="publication-groups">
            {years.map(value => (
              <div className="publication-year" key={value}>
                <h3 className="year-label">{value}</h3>
                <ol className="publication-list">
                  {publications.filter(paper => paper.year === value).map(paper => (
                    <li className="publication" key={paper.title}>
                      <h4><a href={paper.url}>{paper.title}</a></h4>
                      <p className="authors"><Authors>{paper.authors}</Authors></p>
                      <p className="publication-venue">
                        {paper.venue}
                        {paper.award && <span className="award">{paper.award}.</span>}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education" aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          <div className="education-list">
            <article className="education-entry">
              <span className="education-date">2021–2025</span>
              <div>
                <h3>University of Cambridge</h3>
                <p>PhD in Computation, Cognition and Language</p>
                <p className="education-detail">Funded by <a href="https://www.cambridgetrust.org">Cambridge Trust</a>.</p>
              </div>
            </article>
            <article className="education-entry">
              <span className="education-date">2020–2021</span>
              <div>
                <h3>University of Cambridge</h3>
                <p>MPhil in Advanced Computer Science</p>
              </div>
            </article>
            <article className="education-entry">
              <span className="education-date">2016–2020</span>
              <div>
                <h3>University of Edinburgh</h3>
                <p>BSc in Artificial Intelligence and Computer Science</p>
                <p className="education-detail">Ranked 1st in class.</p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Songbo Hu</span>
          <a className="back-to-top" href="#about">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
