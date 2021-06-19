import Image from "next/image";
export default function Home() {
    return (
        <section id="about-area" data-scroll-index="1" className="about-area theme-bg p-tb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="about-content">
                            <h2>Ben Kimim? <span></span></h2>
                            <p>
                                Yaklaşık 13-14 yaşlarımdan itibaren yazılıma ilgiliyim.
                                Python ile başlayan yazılım serüvenim, C#, C++ ile harmanlandıktan sonra
                                eğitimime Lise de Veritabanı Programcılığı ile başladım. Daha sonrasında
                                üniversitede Bilgisayar Programcılığı ile devam ettim. Bu yıllardan itibaren
                                sadece okulun verdikleri ile yetinmeyerek, web ve mobil programlama alanlarına yönelip,
                                internet üzerinden çeşitli dersler aldım. Yaklaşık 3 yıldır web programlama
                                üzerine yoğun bir şekilde çalışmakta ve bunun yanında kendimi mobil alanda da
                                geliştirmekteyim. Şuan da İstanbul da <a style={{color: "#F44158", opacity: '0.8'}} href="https://webeyondcreative.com/">We Beyond Creative </a>
                                adlı şirkette Mid-Level Full Stack Developer olarak projeler üretmekteyim.
                            </p>
                            <div className="about-personal-info">
                                <ul>
                                    <li>
                                        <span className="info-title">E-Posta: </span>
                                        <span className="info-details">m.berataras@gmail.com</span>
                                    </li>
                                    <li>
                                        <span className="info-title">Şehir: </span>
                                        <span className="info-details">İstanbul</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-btn">
                                <a download href="" className="single-btn mr-3 white-btn">CV İNDİR</a>
                                <a href="#" className="single-btn red-btn">İLETİŞİME GEÇ</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-6">
                        <div className="about-img-content">
                            <div className="about-img">
                                <Image src="/assets/img/about/about.jpeg" width={375} height={500} alt="About Section"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <style jsx>{`
                .about-area{
                  height: 85vh !important;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding-top: 10px;
                  padding-bottom: 30px;
                }
            `}</style>
        </section>
    )
}
