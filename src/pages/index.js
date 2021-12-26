import {SectionHeading} from "../component";

export default function Home() {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="about-content">
                            <SectionHeading title="Ben KİMİM?" />
                            <p className="text-white">
                                Yaklaşık 13-14 yaşlarımdan itibaren yazılıma ilgiliyim.
                                Python ile başlayan yazılım serüvenim, C#, C++ ile harmanlandıktan sonra
                                web programlamaya ilgi duymaya başladım.
                                eğitimime Lise de Veritabanı Programcılığı ile başladım. Daha sonrasında
                                üniversitede Bilgisayar Programcılığı ile devam ettim. Bu yıllardan itibaren
                                sadece okulun verdikleri ile yetinmeyerek, web ve mobil programlama alanlarına yönelip,
                                internet üzerinden çeşitli dersler aldım. Yaklaşık 3 yıldır web programlama
                                üzerine yoğun bir şekilde çalışmakta ve bunun yanında kendimi mobil alanda da
                                geliştirmekteyim. <br/> <br/> Şu an da İstanbul'da,
                                <a target="_blank" className="not-invert" style={{color: "#F44158", opacity: '0.8'}} href="https://www.vodafone.com.tr"> Vodafone</a>
                                'da Software Developer olarak projelere katkı sağlıyorum.
                            </p>
                            <div className="about-btn pt-4">
                                <a download href="/files/berat_aras_cv.pdf" className="single-btn mr-3 white-btn">CV İNDİR</a>
                                <a href="mailto:m.berataras@gmail.com" className="single-btn red-btn not-invert">İLETİŞİME GEÇ</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 offset-xl-1 offset-lg-1 ">
                        <div className="about-img-content">
                            <div className="about-img">
                                <img src="/img/about/about.jpeg" alt="Berat Aras"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
