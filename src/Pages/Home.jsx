function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Open Source Learnars</h1>
          <p>A JavaScript library for building user interfaces</p>
          <button type="button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="./images/logo.png" alt="hero" />
        </div>
      </section>
      <section className="newsletter">
        <h2>Newsletter</h2>
        <p>
          Stay up to date with the latest news from the React universe,
          delivered straight to your inbox every week.
        </p>
        <form>
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
      <section className="sec">
        <div className="value">
          <div className="box">
            <h2>values</h2>
            <p>
              Simply express how your app should look at any given point in
              time, and React will automatically manage all UI updates when your
              underlying data changes.
            </p>
          </div>
          <div className="box">
            <h2>Declarative</h2>
            <p>
              Declarative views make your code more predictable and easier to
              debug.
            </p>
          </div>
          <div className="box">
            <h2>Component-Based</h2>
            <p>
              Build encapsulated components that manage their own state, then
              compose them to make complex UIs.
            </p>
          </div>
        </div>
      </section>
      <section className="mession">
        <div className="mession-image">
          <img src="./images/mession.png" alt="mession" />
        </div>
        <div className="mession-content">
          <h2>Our Mession</h2>
          <p>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and React will efficiently
            update and render just the right components when your data changes.
          </p>
          <button type="button">Learn More</button>
        </div>
      </section>
      <section className="vision">
        <div className="vision-content">
          <h2>Our Vision</h2>
          <p>
            Build encapsulated components that manage their own state, then
            compose them to make complex UIs.
          </p>
          <button type="button">Learn More</button>
        </div>
        <div className="vision-image">
          <img src="./images/vision.png" alt="vision" />
        </div>
      </section>
      <section className="team">
        <h2>Our Team</h2>
        <p>
          We are a team of dedicated developers and designers who love to work
          with ReactJS.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src="./images/team-member-1.png" alt="team-member-1" />
            <h3>ADAMU M. MUHAMMAD</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
          <div className="team-member">
            <img src="./images/team-member-2.png" alt="team-member-2" />
            <h3>MUBARAK M. IBRAHIM</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
          <div className="team-member">
            <img src="./images/team-member-3.png" alt="team-member-3" />
            <h3>IBRAHIM TAMBAYA KUMU</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
        </div>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message" />
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}

export default Home;
