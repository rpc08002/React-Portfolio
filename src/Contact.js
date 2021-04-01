const Contact = () => {
    return (
    <main className="container-fluid">
        <div className="row p-3 mb-5">
          <section className="col-sm-8 my-5 contact">
            <header className="page-header mt-3">
              <h1>Contact</h1>
            </header>
            <hr/>
            <div className="row-fluid ml-2">
              <form>
                  <div className="form-group px-3 col-sm-10">
                    <label for="contactName">Name</label>
                    <input type="text" className="form-control" id="contactName" placeholder="Name" />
                  </div>
                  <div className="form-group px-3 col-sm-10">
                    <label for="InputEmail">Email</label>
                    <input type="email" className="form-control" id="InputEmail" placeholder="Email" />
                  </div>
                  <div className="form-group px-3 col-sm-10">
                    <label for="TextArea">Message</label>
                    <textarea className="form-control" id="TextArea" rows="3" placeholder="Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-info p-3 mb-3">Submit</button>
              </form>
            </div>
          </section>
        </div>
      </main>
    );
}
 
export default Contact;