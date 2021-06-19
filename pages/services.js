export default function services(){
    return (
        <section id="service-area" data-scroll-index="2" className="service-area theme-bg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="seaction-heading">
                            <h2>Freelance Hizmetlerim <span></span></h2>
                            <p>
                                İlgi duyduğum ve uzmanı olduğum alanlar da 15 yaşımdan beri
                                gerek dışarıdan gerekte Bionluk üzerinden Freelance hizmet vermekteyim.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service single-service-one">
                            <i className="ion-ios-monitor-outline"></i>
                            <h3>Web Tasarım</h3>
                            <p>
                                Elinizde veya aklınızda bulunan tasarımı iyi bir şekilde aktarırsanız,
                                koda dökebilirim.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service single-service-two">
                            <i className="ion-ios-photos-outline"></i>
                            <h3>Web Programlama</h3>
                            <p>
                                Web Programlama alanında, backend kısmında Laravel ile frontend
                                kısmında ise isteğe göre, Vue JS ve React JS ile çalışmaktayım.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service single-service-three">
                            <i className="ion-social-apple-outline"></i>
                            <h3>Mobil Programlama</h3>
                            <p>
                                React Native ile orta ölçekli uygulamalarınızı oluşturabilirim.
                            </p>
                        </div>
                    </div>
                  {/*  <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service single-service-four">
                            <i className="ion-ios-search"></i>
                            <h3>Seo Optimizasyonu</h3>
                            <p>
                                Web sitelerinizi Google'da ön plana çıkarabilmek için çeşitli
                                optimizasyonlar yapabilirim.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service single-service-five">
                            <i className="ion-ios-compose-outline"></i>
                            <h3>Fikir Katkıları</h3>
                            <p>
                                Elinizde bulunan projelere, 2 yıllık start up tecrübemle,
                                fikir ve düşüncelerimle yönlendirme yapabilirim.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service single-service-six">
                            <i className="ion-ios-speedometer-outline"></i>
                            <h3>UI/UX Tasarım</h3>
                            <p>
                                Elinizde bulunan, mobil ve web siteleriniz için tasarım fikirleri verebilirim.
                            </p>
                        </div>
                    </div>*/}
                </div>
            </div>
            <style jsx>{`
                .service-area{
                  height: 85vh !important;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding-top: 10px;
                  padding-bottom: 30px;
                }
                .service-area .row{
                  padding-top: 20px;
                }
            `}</style>
        </section>
    )
}