import {SectionHeading} from "../component";

export default function Portfolio(){
    return (
        <section id="portfolio-area" data-scroll-index="3" className="portfolio-area theme-bg">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-xl-7">
                        <SectionHeading title="Portfolyo" desc="Buraya çeşitli fotoğraflar gelir :)" />
                    </div>
                </div>
                <div className="row gallery">
                    <div className="col-xl-4 col-lg-4 col-md-6" data-tag="ortam">
                        <div className="single-portfolio">
                            <div className="portfolio-img">
                                <img src="/img/portfolio/port2.png" alt="berat aras" />

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6" data-tag="me">
                        <div className="single-portfolio">
                            <div className="portfolio-img">
                                <img src="/img/portfolio/port1.png" alt="berat aras" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}