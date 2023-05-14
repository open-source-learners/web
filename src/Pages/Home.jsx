function Home() {
  return (
    <main>
      <section className="hero h-screen">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="font-bold text-left text-green-300 text-4xl max-w-md md:text-5xl md:text-left">
              Open Source Learnars
            </h1>
            <p className="max-w-sm text-center md:text-left">
              we believe in learning by doing and the power of technology to
              create positive change and Address local problems
            </p>
            <div className="flex space-x-5 justify-center md:justify-start">
              <button className="py-3 w-24 space-y-5 rounded-lg bg-green-300">
                Github
              </button>
              <button className="py-3 w-24 ease-in-out duration-300 shadow-green-500 rounded-lg bg-green-300">
                linkdind
              </button>
            </div>
          </div>
          {/* image */}
          <img className="flex w-1/2" src="/logo.png" alt="logo" />
        </div>
      </section>
        <div className="text-center text-2xl md:text-5xl">The Way Forward is Open</div>
      <section id="About" className="flex text-center mx-5 p-6 flex-col md:flex-row">
          {/* list  */}
          <div className="flex flex-col space-y-8 p-6">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-green-300 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-2 bg-green-300">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4">
                    Professional Development
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-black">
              opensource can lead to networking opportunities and professional
              development.Explain how attending conferences, meetups, and other
              events can help build connections and advance a career in tech.
            </p>
          </div>
          {/* 2 */}
          <div className="flex flex-col space-y-8 p-6">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-green-300 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-2 bg-green-300">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4">
                  Building a Portfolio
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-black">
              opensource can lead to networking opportunities and professional
              development.Explain how attending conferences, meetups, and other
              events can help build connections and advance a career in tech.
            </p>
          </div>
          {/* 3 */}
          <div className="flex flex-col space-y-8 p-6">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-green-300 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-2 bg-green-300">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4">
                  Skills-Based Learning
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-black">
              opensource can lead to networking opportunities and professional
              development.Explain how attending conferences, meetups, and other
              events can help build connections and advance a career in tech.
            </p>
          </div>
      </section>

      <div className="text-center text-2xl md:text-5xl">Core Members</div>
    {/* teams */}
    
    <section id="teams">
      

    </section>






      {/* valuse */}
      <section className="continer">
        <div className="box">
          <h1> core values</h1>
          <ul>
            <li>Lifelong Learing</li>
            <li>Collaboration</li>
            <li>Problem-Solving</li>
            <li>inclusivity</li>
            <li>Transparency</li>
          </ul>
        </div>
      </section>
      {/*  */}
      <section className="mession">
        <div className="mession-content">
          <h2>Our Mession</h2>
          <p>
            our mession is to create an inclusive community of open source,
            Advocates, and experts who come together to learn by doing and
            collaborate on technical solutions that address local problems. we
            believe that by leveraging the power of open source technology, we
            can create a move equitable and sudtainable future for everyone.
          </p>
          <button type="button">joint Us</button>
        </div>
      </section>
      <section className="vision">
        <div className="vision-content">
          <h2>Our Vision</h2>
          <p>
            Our vision is to build a world where open source technology is
            accessible to all, and where communities can come together to solve
            local problems through collaboration and innovation. We strive to
            create a supportive and welcoming environment where learners of all
            backgrounds and skill levels can come together to learn, share, and
            create meaningful impact in their communities. By fostering a
            culture of inclusivity, creativity, and lifelong learning, we aim to
            empower individuals and communities to create a more just and
            sustainable world
          </p>
          <button type="button">joint us</button>
        </div>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <p>
          Open source learners are individuals who are passionate about
          learning, sharing knowledge, and contributing to open source projects.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img className="w-12 h-12" src="/logo.png" alt="images" />
            <h3>ADAMU M. MUHAMMAD</h3>

            <span>Founder and Lead</span>
            <p>computer science and software engineering student</p>
          </div>
          <div className="team-member">
            <img className="w-12 h-12" src="/logo.png" alt="team-member-2" />
            <h3>MUBARAK M. IBRAHIM</h3>
            <p>computer science and software engineering student</p>
          </div>
          <div className="team-member">
            <img className="w-12 h-12" src="/logo.png" alt="team-member-3" />
            <h3>IBRAHIM TAMBAYA KUMU</h3>
            <p>computer science and software engineering student</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Open source learners are individuals who are passionate about
          learning, sharing knowledge, and contributing to open source projects.
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
