const Contact = () => {
    return (
    <main class="container-fluid">
        <div class="row p-3 mb-5">
          <section class="col-sm-8 my-5 contact">
            <header class="page-header mt-3">
              <h1>Contact</h1>
            </header>
            <hr/>
            <div class="row-fluid ml-2">
              <form>
                  <div class="form-group px-3 col-sm-10">
                    <label for="contactName">Name</label>
                    <input type="text" class="form-control" id="contactName" placeholder="Name" />
                  </div>
                  <div class="form-group px-3 col-sm-10">
                    <label for="InputEmail">Email</label>
                    <input type="email" class="form-control" id="InputEmail" placeholder="Email" />
                  </div>
                  <div class="form-group px-3 col-sm-10">
                    <label for="TextArea">Message</label>
                    <textarea class="form-control" id="TextArea" rows="3" placeholder="Message"></textarea>
                  </div>
                  <button type="submit" class="btn btn-info p-3 mb-3">Submit</button>
              </form>
            </div>
          </section>
        </div>
      </main>
    );
}
 
export default Contact;