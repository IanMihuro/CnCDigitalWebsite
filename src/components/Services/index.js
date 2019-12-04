import React from "react"

export default function Services() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 mx-auto text-center">
            {/* <Title title="" /> */}
            <h4 className=" mb-5 mt-5 font-weight-bold">
              Our services include:
            </h4>
            <div className=" text-muted text-justify">
              <p className=" mb-3">
                <u>Brand Strategy:</u> Our bespoke neuro-mapping methodology
                gives us a unique insight into what emotionally motivates your
                consumer. We then use these insights to build brand and comms
                strategies that disrupt categories and grow market share.
              </p>
              <p className=" mb-3">
                <u>Creative Advertising:</u> We use our strategic edge to create
                high impact, emotive campaigns that build lasting impressions on
                audiences across TV, Cinema, OOH, Press, Digital, Radio and VOD.
              </p>
              <p className=" mb-3">
                <u>Social Media:</u> Strategically led and creatively driven,
                our social media team engages consumers and motivates
                communities through Channel Strategy, Content Creation,
                Community Management and Reporting.
              </p>
              <p className=" mb-5">
                <u>Digital Production:</u> Our digital studio works directly
                with our Creative and Social teams to produce high quality,
                engaging content and experiences through digital design and
                front-end development, video production and motion design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
