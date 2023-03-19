app.component("contact-section", {
	template:
		/*html*/
		`<section id="contact" class="contact">
    <div class="container">
        <div class="section-title">
            <h2>Contact</h2>
            <p>
                I assure you 24*7 support.Intrested In Working
                Together?.Get in touch with me just by dailing
                my number or contact me through my email or just
                fill the form below i will get back to as soon
                as possible
            </p>
        </div>

        <div class="row" data-aos="fade-in">
            <div class="col-lg-5 d-flex align-items-stretch">
                <div class="info">
                    <div class="address">
                        <i class="icofont-google-map"></i>
                        <h4>Location:</h4>
                        <p>
                            Subbaraj Nagar,Bodinayakanur,Theni
                            dt
                        </p>
                    </div>

                    <div class="email">
                        <i class="icofont-envelope"></i>
                        <h4>Email:</h4>
                        <p>vignesh26.manoharan@gmail.com</p>
                    </div>

                    <div class="phone">
                        <i class="icofont-phone"></i>
                        <h4>Call:</h4>
                        <p>+91 9715668285</p>
                    </div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.782042419893!2d77.33392462652904!3d10.02135543538346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b077323d2acb5d1%3A0xe6a7488a013ba23b!2sBodinayackanur%2C%20Tamil%20Nadu%20625582!5e0!3m2!1sen!2sin!4v1621267387460!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div
                class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
            >
                <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    class="php-email-form"
                >
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="name">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                class="form-control"
                                id="name"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                            />
                            <div class="validate"></div>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="name">Your Email</label>
                            <input
                                type="email"
                                class="form-control"
                                name="email"
                                id="email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                            />
                            <div class="validate"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="name">Subject</label>
                        <input
                            type="text"
                            class="form-control"
                            name="subject"
                            id="subject"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 8 chars of subject"
                        />
                        <div class="validate"></div>
                    </div>
                    <div class="form-group">
                        <label for="name">Message</label>
                        <textarea
                            class="form-control"
                            name="message"
                            rows="10"
                            data-rule="required"
                            data-msg="Please write something for us"
                        ></textarea>
                        <div class="validate"></div>
                    </div>
                    <div class="mb-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">
                            Your message has been sent. Thank
                            you!
                        </div>
                    </div>
                    <div class="text-center">
                        <button type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>`,
	data() {
		return {};
	},
});
