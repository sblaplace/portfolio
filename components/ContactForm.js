export default function ContactForm() {
    return (
        <form name="contact" method="POST" data-netlify="true" className="min-w-full" data-netlify-recaptcha="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label htmlFor="yourname">
                    Your Name:
                </label> <br />
                <input type="text" name="name" id="yourname" />
            </p>
            <p>
                <label htmlFor="youremail">
                    Your Email:
                </label> <br />
                <input type="email" name="email" id="youremail" />
            </p>
            <p>
                <label htmlFor="yourmessage">
                    Message:
                </label> <br />
                <textarea name="message" id="yourmessage"></textarea>
            </p>
            <div data-netlify-recaptcha="true"></div>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}