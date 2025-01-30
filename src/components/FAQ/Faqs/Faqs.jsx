import faqs from "@/data/Faq/Faqs/Faqs";
export default function Faqs() {
  return (
    <>
      <section class="faq-area  faq-style-2-area" style={{ paddingBottom: "0" }}>
        <div class="custom-container">
          <div class="faq-inner">
            <h6 class="section-subtitle">FAQ</h6>
            <h2 class="section-title">Frequently asked questions</h2>
            <div class="faq-items-box" style={{ gridTemplateColumns: "1fr" }}>
              <div class="faq-col">
                <div id="accordion">
                  {faqs.map((faq, index) => (
                    <div class="faq-box" key={faq.id}>
                      <h6 class="card-header" id={`heading${faq.id}`}>
                        <button data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`} aria-expanded={index === 0} aria-controls={`collapse${faq.id}`}>
                          <div class="icon">
                            <img decoding="async" src="/images/question-icon.svg" />
                          </div>
                          {faq.question}{" "}
                        </button>
                      </h6>

                      <div id={`collapse${faq.id}`} class={`collapse ${index === 0 ? "show" : ""}`} aria-labelledby={`heading${faq.id}`} data-parent="#accordion">
                        <div class="card-body">{faq.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
