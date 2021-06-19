import Image from "next/image";
export default function Testimonials(){
    return (
        <section id="testimonial-area" className="testimonial-area theme-bg p-tb-100">
            <div className="container">
                <div className="row pb-90 pt-90">
                    <div className="col-xl-7">
                        <div className="seaction-heading">
                            <h2>Yorumlar <span></span></h2>
                            <p>
                                Bu zamana kadar çalıştığım kişilerin, hakkımda güzel görüşleri.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="testimonial-wrapper owl-carousel testimonial-carousel">
                            <div className="single-testimonial">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5 col-md-5">
                                        <div className="testimonial-img">
                                            <Image src="/assets/img/testimonial/burak.png" width={500} height={500} alt="Testimonial" />
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-md-7">
                                        <div className="testimonial-content">
                                            <h4>Burak Avcı</h4>
                                            <span>cto of We Beyond Creative</span>
                                            <p>
                                                Benden bile daha iyi ben böyle bi çocuk görmedim.
                                                Olağanüstü bir yeteneğe sahip ondan çok şey öğrendim.
                                                Teşekkürer...
                                            </p>
                                            <ul className="rating">
                                                <li><i className="ion-ios-star"></i></li>
                                                <li><i className="ion-ios-star"></i></li>
                                                <li><i className="ion-ios-star"></i></li>
                                                <li><i className="ion-ios-star"></i></li>
                                                <li><i className="ion-ios-star"></i></li>
                                                {/*<li><i className="ion-ios-star-half"></i></li>*/}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}