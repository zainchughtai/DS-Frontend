import React, { useState, useEffect } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [legalPermission, setLegalPrmission] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState("");
  const [captchaValue, setCaptchaValue] = useState("8");

  useEffect(() => {
    // Trigger toast notification when the component is mounted
  }, []);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const submitContact = (e) => {
    e.preventDefault();
    setError("");
    if (!fname || !lname || !email || !phone || !country || !message || !legalPermission) {
      toast.error("Fill the form", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    if (!isNaN(captchaValue)) {
      toast.error("Captcha is not verified", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    const template_params = {
      firstname: fname,
      lastname: lname,
      email: email,
      number: phone,
      country: country,
      message: message,
      "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd",
    };

    emailjs
      .send("service_oun0nle", "template_ey62obm", template_params, "LaEGg_zQpuyhvgd_f")
      .then((response) => {
        toast.success("Form is submitted successfully.", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        console.log("Email sent successfully!", response.status, response.text);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          number: "",
          country: "",
          message: "",
          legalPermission: false,
        });
        setError("");
      })
      .catch((error) => {
        console.error("Failed to send email. Error:", error);
        setError("Failed to send your message. Please try again.");
      });
  };

  const copyrightYear = new Date().getFullYear();
  const services = [
    { slug: "web-development", name: "Web Development" },
    { slug: "crm-integration", name: "CRM Integration" },
    { slug: "digital-marketing", name: "Digital Marketing" },
    { slug: "e-commerce", name: "E-Commerce" },
    { slug: "mobile-app-development", name: "Mobile Application Development" },
    { slug: "project-management", name: "Project Management & Consultation" },
  ];
  return (
    <>
      <section className="contact-area">
        <div className="custom-container">
          <div className="custom-row">
            <div className="contact-form-wrap">
              <div className="contact-form-body">
                <h6 className="section-subtitle">Contact</h6>
                <h2 className="section-title">Lets get in touch</h2>
                <p>
                  You can reach us anytime via{" "}
                  <a target="_blank" href="mailto:sales@devsspace.com">
                    sales@devsspace.com
                  </a>
                </p>

                <div className="contact-form">
                  <div className="wpcf7 no-js" id="wpcf7-f313-p9-o1">
                    {error && (
                      <p className="text-danger" style={{ border: "0", paddingBottom: "0", fontWeight: "900" }}>
                        {error}
                      </p>
                    )}
                    <form onSubmit={submitContact} method="post" className="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
                      <div className="input-row">
                        <div className="input-group">
                          <label for="first_name">First Name</label>

                          <input
                            size="40"
                            maxlength="400"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                            id="first_name"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="First Name"
                            value={fname}
                            type="text"
                            name="first_name"
                            onChange={(e) => setFname(e.target.value)}
                          />
                        </div>
                        <div className="input-group">
                          <label for="last_name">Last Name</label>

                          <input
                            size="40"
                            maxlength="400"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                            id="last_name"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Last Name"
                            value={lname}
                            type="text"
                            name="last_name"
                            onChange={(e) => setLname(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="input-group">
                          <label for="email">Email</label>

                          <input
                            size="40"
                            maxlength="400"
                            className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                            id="email"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Your Email"
                            value={email}
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="input-group phone-number">
                          <label for="phone_number">Phone Number</label>

                          <input
                            size="40"
                            maxlength="400"
                            className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                            id="phone_number"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Your Number"
                            value={phone}
                            type="tel"
                            name="phone_number"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                        <div className="input-group">
                          <label for="country">Country</label>

                          <input
                            size="40"
                            maxlength="400"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                            id="homeland"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Your Country"
                            value={country}
                            type="text"
                            name="country"
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="input-group">
                          <label for="message">Message</label>

                          <textarea
                            cols="40"
                            rows="10"
                            maxlength="2000"
                            className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                            id="message"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Leave us a message...."
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="input-group input-checkbox">
                          <label>
                            <input type="checkbox" name="acceptance" checked={legalPermission} onChange={(e) => setLegalPrmission(e.target.checked)} id="privacy_policy_accept" />
                            <span className="wpcf7-list-item-label">
                              You agree to our <a href="#">terms and conditions.</a>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="input-group">
                          <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} // Replace with your actual site key
                            onChange={handleCaptchaChange}
                          />
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="input-group">
                          <button id="submit" className="theme-btn">
                            Get Started
                          </button>
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="input-group alert-notification">
                          <div id="alert-message" className="alert-msg"></div>
                        </div>
                      </div>
                      <div className="wpcf7-response-output" aria-hidden="true"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-experience">
              <ul>
                <li>
                  <h2>
                    13+ <span>Years</span>
                  </h2>
                  <p>Field Experience</p>
                </li>
                {/* <li>
                  <h2>
                    950+ <span>Projects</span>
                  </h2>
                  <p>Done Around World</p>
                </li> */}
                <li>
                  <h2>99%</h2>
                  <p>Client Satisfaction</p>
                </li>
                <li>
                  <h2>
                    2012 <span>Year</span>
                  </h2>
                  <p>Established On</p>
                </li>
                <li>
                  <h2>
                    2 <span>Mins</span>
                  </h2>
                  <p>Response Time</p>
                </li>
              </ul>
            </div>

            <div className="contact-infos">
              <div className="contact-infos-inner">
                <div className="contact-info" style={{ maxWidth: "100%" }}>
                  <img decoding="async" src="/images/support-icon.svg" />
                  <h4>Contact Info</h4>
                  <a href="tel:+92-(042)-35721419" style={{ color: "#1c1c1ccc", display: "block" }}>
                    +92-(042)-35721419
                  </a>
                  <a href="mailto:sales@devsspace.com" style={{ color: "#1c1c1ccc", display: "block" }}>
                    sales@devsspace.com
                  </a>
                </div>
                <div className="contact-info" style={{ maxWidth: "100%" }}>
                  <img decoding="async" src="/images/map-icon.svg" />
                  <h4>Visit our office</h4>
                  <p>38-XX, second floor Khayaban-e-Iqbal, DHA Phase 3, Lahore, 54000</p>
                  <p style={{ marginTop: "20px" }}>45th floor, The One Tower - Sheikh Zayed Rd - Barsha Heights - Dubai.</p>
                </div>

                <ul className="contact-social-links">
                  <li>
                    <a target="_blank" href="https://www.facebook.com/devsspace/">
                      <i className="lab la-facebook-f"></i>
                      Facebook
                    </a>
                  </li>
                  {/* <li>
                    <a target="_blank" href="#">
                      <i className="lab la-twitter"></i>
                      Twitter
                    </a>
                  </li> */}
                  <li>
                    <a target="_blank" href="https://www.instagram.com/devsspaceds/">
                      <i className="lab la-instagram"></i>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.linkedin.com/company/devsspace/">
                      <i className="lab la-linkedin-in"></i>
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-area">
        <img src="/images/bg-shape-4.svg" alt="" className="animation-slide-right bg-shape" />

        <div className="footer-top">
          <div className="custom-container">
            <div className="custom-row align-items-center justify-content-between">
              <div className="left-content">
                <a href="index.html" className="logo">
                  <img
                    src="/images/DS-Logo.png"
                    alt=""
                    width={"240px"}
                    style={{
                      filter: "brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(0%) hue-rotate(107deg) brightness(115%) contrast(100%)",
                    }}
                  />
                </a>
                <p>
                  We provide the expertise and support to <br />
                  propel your business forward.
                </p>

                {/* <div className="wpcf7 no-js" id="wpcf7-f505-o2" lang="en-US" dir="ltr" data-wpcf7-id="505">
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                    <ul></ul>
                  </div>
                  <form action="#" method="post" className="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
                    <div className="subscribe-box">
                      <p>
                        <span className="wpcf7-form-control-wrap" data-name="email">
                          <input
                            size="40"
                            maxlength="400"
                            className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Enter Your Email"
                            value=""
                            type="email"
                            name="email"
                          />
                        </span>
                        <button id="submit2" className="theme-btn">
                          Get Started
                        </button>
                      </p>
                    </div>
                    <div className="input-row">
                      <div className="input-group alert-notification">
                        <div id="alert-message-subscribe" className="alert-msg"></div>
                      </div>
                    </div>
                    <div className="wpcf7-response-output" aria-hidden="true"></div>
                  </form>
                </div> */}

                <div className="footer-clients d-flex align-items-center">
                  <div className="footer-client-img">
                    <a href="https://www.upwork.com/agencies/devsspace/">
                      <img src="/images/upwork.svg" alt="" />
                    </a>
                  </div>
                  <div className="footer-client-img">
                    <a href="https://www.linkedin.com/company/devsspace/">
                      <img src="/images/linkedin-white.png" alt="" style={{ width: "100%", maxWidth: "100px" }} />
                    </a>
                  </div>
                  <div className="footer-client-img">
                    <a href="https://www.instagram.com/devsspaceds/">
                      <img src="/images/instagram-white.png" alt="" style={{ width: "100%", maxWidth: "100px", marginBottom: "-10px" }} />
                    </a>
                  </div>
                  <div className="footer-client-img">
                    <a href="https://clutch.co/profile/devsspace#highlights">
                      <img src="/images/clutchco.svg" alt="" style={{ width: "100%", maxWidth: "89px" }} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="right-content">
                <div className="right-content-inner">
                  <h3>Let’s get started on something great</h3>
                  <p>
                    Our team of IT experts looks forward to meeting with you <br />
                    and providing valuable insights tailored to your business.
                  </p>

                  <Link href="/contact-us" className="theme-btn">
                    Get an appointment now
                  </Link>

                  <div className="footer-experience d-flex align-items-center">
                    <div className="footer-experience-item">
                      <h2>
                        2 <span>Mins</span>
                      </h2>
                      <p>Response Time</p>
                    </div>
                    <div className="footer-experience-item">
                      <h2>99%</h2>
                      <p>Client Satisfaction</p>
                    </div>
                    <div className="footer-experience-item">
                      <h2>
                        13+ <span>Years</span>
                      </h2>
                      <p>Field Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="custom-container">
            <div className="custom-row">
              <div className="footer-all-links-wrap justify-content-between d-flex">
                <div className="footer-links">
                  <h4>Services</h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <div className="menu-footer-services-menu-links-container">
                      <ul style={{ paddingLeft: "0" }} id="menu-footer-services-menu-links" className="menu">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link href={`/services/${service.slug}`}>{service.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ul>
                </div>
                <div className="footer-links">
                  <h4>Company</h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <div className="menu-footer-company-menu-links-container">
                      <ul style={{ paddingLeft: "0" }} id="menu-footer-company-menu-links" className="menu">
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <Link href="/culture">Culture</Link>
                        </li>
                        <li>
                          <Link href="/careers">Careers</Link>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div className="footer-links footer-extras">
                  {/* <h4>Product</h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <div className="menu-footer-product-menu-links-container">
                      <ul style={{ paddingLeft: "0" }} id="menu-footer-product-menu-links" className="menu">
                        <li id="menu-item-3884" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3884">
                          <a href="case-studies/index.html">Case Studies</a>
                        </li>
                        <li id="menu-item-2463" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2463">
                          <a href="our-pricing/index.html">Our Pricing</a>
                        </li>
                        <li id="menu-item-2623" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2623">
                          <a href="features/index.html">Features</a>
                        </li>
                        <li id="menu-item-2630" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2630">
                          <a href="overview/index.html">Overview</a>
                        </li>
                        <li id="menu-item-4135" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4135">
                          <a href="new-releases/index.html">New Releases</a>
                        </li>
                        <li id="menu-item-2151" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2151">
                          <a href="solutions/index.html">Solutions</a>
                        </li>
                      </ul>
                    </div>
                  </ul> */}
                </div>
                <div className="footer-links footer-extras">
                  {/* <h4>Our Fields</h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <div className="menu-footer-our-fields-menu-links-container">
                      <ul style={{ paddingLeft: "0" }} id="menu-footer-our-fields-menu-links" className="menu">
                        <li id="menu-item-3169" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3169">
                          <a href="our-field-details/index.html">Healthcare</a>
                        </li>
                        <li id="menu-item-3170" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3170">
                          <a href="our-field-details/index.html">Banks</a>
                        </li>
                        <li id="menu-item-3171" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3171">
                          <a href="our-field-details/index.html">Logistics</a>
                        </li>
                        <li id="menu-item-3172" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3172">
                          <a href="our-field-details/index.html">Supermarkets</a>
                        </li>
                        <li id="menu-item-3173" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3173">
                          <a href="our-field-details/index.html">Industries</a>
                        </li>
                        <li id="menu-item-3174" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3174">
                          <a href="our-field-details/index.html">Hotels</a>
                        </li>
                      </ul>
                    </div>
                  </ul> */}
                </div>
                <div className="footer-links footer-extras">
                  {/* <h4>Legal</h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <div className="menu-footer-legal-menu-links-container">
                      <ul style={{ paddingLeft: "0" }} id="menu-footer-legal-menu-links" className="menu">
                        <li id="menu-item-3175" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3175">
                          <a href="#">Licenses</a>
                        </li>
                        <li id="menu-item-3176" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3176">
                          <a href="#">Settings</a>
                        </li>
                        <li id="menu-item-3177" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3177">
                          <a href="#">Cookies</a>
                        </li>
                        <li id="menu-item-3178" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3178">
                          <a href="#">Document</a>
                        </li>
                        <li id="menu-item-3179" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3179">
                          <a href="#">Terms</a>
                        </li>
                        <li id="menu-item-3180" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3180">
                          <a href="#">Privacy</a>
                        </li>
                      </ul>
                    </div>
                  </ul> */}
                </div>
              </div>

              <div className="footer-contact-info">
                <div className="footer-contact-info-item">
                  <h5>Phone</h5>
                  <p>
                    <a href="tel:+92-(042)-35721419">+92-(042)-35721419</a> <br />
                  </p>
                </div>
                <div className="footer-contact-info-item">
                  <h5>Mail</h5>
                  <p>
                    <a href="mailto:sales@devsspace.com">sales@devsspace.com</a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="custom-container">
            <div className="custom-row d-flex align-items-center justify-content-between">
              <ul className="social-links d-flex align-items-center">
                <li>
                  <a href="https://www.facebook.com/devsspace/" style={{ fontSize: "19px", marginTop: "-15px" }}>
                    <i className="lab la-facebook-f"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="lab la-twitter"></i>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.instagram.com/devsspaceds/">
                    <i className="lab la-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/devsspace/">
                    <i className="lab la-linkedin-in"></i>
                  </a>
                </li>
              </ul>

              <p>&copy; Copyright {copyrightYear} - DevsSpace. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
      <ToastContainer />
    </>
  );
};

export default Footer;
