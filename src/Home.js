const Home = () => {
    return (
    <main>
      <article className="p-3 mb-5">
        <div>
          <header className="page-header profile">
            <h1>About Me</h1>
          </header>
          <hr />
          <div>
            <img
              src="Assets/Images/profile.jpeg"
              className="img-fluid float-left mr-3 photo"
              alt="Profile"
            />
            <p>
              Hello and welcome to my page! My name is Ryan Patrick Curtin and I
              am currently employed with Indeed.com on a growth sales team for
              nearly 2 years. I have always been interested in working with
              coding languages and I made the best out of what 2020 gave me and
              enrolled into UConn's Coding Bootcamp.
            </p>
            <p>
              As I am learning this course, I am always surprised as to how many
              pathways you can take to bring you to the same solution. I am
              excited to continue building out my projects and learning how to
              make myself hireable in this field. Feel free to click around and
              check out some of the work I have done so far.
            </p>
            <a
              className="btn btn-primary mb-1"
              role="button"
              href="https://www.linkedin.com/in/ryan-curtin-b65710126/"
              >LinkedIn Profile <i className="fab fa-linkedin"></i></a
            ><br />
            <a
              className="btn btn-primary mb-1"
              role="button"
              href="https://github.com/rpc08002"
              >GitHub Profile <i className="fab fa-github"></i
            ></a>
            <br />
            <a
              className="btn btn-primary"
              role="button"
              href="Assets/Images/Resume - Coding.pdf"
              >Resume <i className="fas fa-briefcase"></i
            ></a>
          </div>
        </div>
      </article>
    </main>
    );
}
 
export default Home;