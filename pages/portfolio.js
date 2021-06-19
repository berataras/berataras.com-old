import Image from "next/image";
export default function Portfolio(){
    return (
        <section style={{ height: '85vh' }} id="portfolio-area" data-scroll-index="3" className="portfolio-area theme-bg">
            <div className="container">
                <div className="row" style={{ paddingTop: '30px', paddingBottom: '20px' }}>
                    <div className="col-xl-7">
                        <div className="seaction-heading">
                            <h2>Portfolyo <span></span></h2>
                            <p>
                                Buraya çeşitli fotoğraflar gelir :)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row gallery">
                    <div className="col-xl-4 col-lg-4 col-md-6" data-tag="ortam">
                        <div className="single-portfolio">
                            <div className="portfolio-img">
                                <Image src="/assets/img/portfolio/port2.png"  height={500} width={500} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6" data-tag="me">
                        <div className="single-portfolio">
                            <div className="portfolio-img">
                                <Image src="/assets/img/portfolio/port1.png"  height={500} width={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}