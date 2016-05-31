export default ({}) => (
    <div className="card center-block">
        <h3 className="card-header">How are we doing?</h3>
        <form className="card-block">
            <fieldset className="form-group">
                <label htmlFor="fld-fromName">What is your name?</label>
                <input id="fld-fromName" className="form-control" name="fromName" placeholder="Your name..." required />
                <small className="text-muted">Henceforth you shall be known as...</small>
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="fld-fromEmail">What is your email?</label>
                <input id="fld-fromEmail" className="form-control" type="email" name="fromEmail" placeholder="Your email..." required />
                <small className="text-muted">We'll never share this with anyone else.</small>
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="fld-theMessage">What say you?</label>
                <textarea id="fld-theMessage" className="form-control" name="theMessage" placeholder="Your message..." rows="4" required />
                <small className="text-muted">Send your suggestions, comments or concerns.</small>
            </fieldset>
            <fieldset className="form-group">
                <div className="checkbox">
                    <label><input type="checkbox" name="optIn" value="1" /> Sure, you can send me updates &amp; stuff.</label>
                    <br /><small className="text-muted">We might have important things to say.</small>
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary">
                <i className="fa fa-envelope-o" aria-hidden="true" /> Send Email
            </button>
        </form>
    </div>
);