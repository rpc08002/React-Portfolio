const Portfolio = () => {
    return (
        <main class="container-fluid">
            <div class="p-3 mb-5">
            <div class="bg-white mt-3 px-md-3 mb-5 portfolio">
                <header class="page-header mt-3">
                    <h1>Portfolio</h1>
                </header>
                <hr />
                <div class="row">
                  <figure class="col-md-6 col-12">
                    <img class ="img-fluid" src="Assets/Images/PasswordGen.png" alt="PasswordGenScreenshot" />
                    <p><b>Password Generator:</b></p>
                      <ul>
                        <li>
                          <a href="https://rpc08002.github.io/Password-Generator/" title="Test it out!">Password Generator WebPage</a>
                        </li>
                        <li>
                          <a href="https://github.com/rpc08002/Password-Generator" title="GitHub Repo">GitHub Repository</a>
                        </li>
                      </ul>
                  </figure >
                  <figure class="col-md-6 col-12">
                    <img class ="img-fluid" src="Assets/Images/Workday.png" alt="WorkdayScreenshot" />
                    <p><b>Workday Scheduler:</b></p>
                      <ul>
                        <li>
                          <a href="https://rpc08002.github.io/Work-Day-Scheduler/" title="Test it out!">Workday Scheduler WebPage</a>
                        </li>
                        <li>
                          <a href="https://github.com/rpc08002/Work-Day-Scheduler" title="GitHub Repo">GitHub Repository</a>
                        </li>
                      </ul>
                  </figure>
                  <figure class="col-md-6 col-12">
                    <img class ="img-fluid" src="Assets/Images/recipe.png" alt="RecipeScreenshot" />
                    <p><b>Recipe Shopper:</b></p>
                      <ul>
                        <li>
                          <a href="https://rpc08002.github.io/recipe-shopper/" title="Test it out!">Recipe Shopper WebPage</a>
                        </li>
                        <li>
                          <a href="https://github.com/rpc08002/recipe-shopper" title="GitHub Repo">GitHub Repository</a>
                        </li>
                      </ul>
                  </figure>  
                </div>
            </div>
          </div>
      </main>
    );
}
 
export default Portfolio;