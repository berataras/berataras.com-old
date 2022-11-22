import {SectionHeading} from "../component";

export default function Home() {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="about-content">
                            <SectionHeading title="WHO AM I?" />
                            <p className="text-white">
                                I have been interested in software since I was about 13-14 years old.
                                I started my software adventure with Python and C#. Then I became interested in web programming.
                                I started my education in High School with Database Programming.
                                Later I continued with Computer Programming at university.
                                I was interested in web and mobile programming fields. I took various courses online.
                                I have been working professionally for about 4 years.
                                <br/> <br/>
                                I am currently working as a software developer at <a target="_blank" className="not-invert" style={{color: "#F44158", opacity: '0.8'}} href="https://www.vodafone.com.tr"> Vodafone</a>.
                            </p>
                            <div className="about-btn pt-4">
                                <a href="mailto:m.berataras@gmail.com" className="single-btn red-btn not-invert">CONTACT</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 offset-xl-1 offset-lg-1 ">
                        <div className="about-img-content">
                            <div className="about-img">
                                <img src="/img/about/about3.jpg" alt="Berat Aras"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
