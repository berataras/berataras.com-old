import {SectionHeading} from "../component";
export default function slap(){

    return (
        <section id="slap-area" data-scroll-index="2" className="service-area theme-bg">
            <div className="container">

                <div className="row mb-4">
                    <div className="col-xl-7">
                        <SectionHeading title="SLAP" desc="The part where I paste everything I find and like." />
                    </div>
                </div>

                <div className="row">

                    <div className="col-xl-12 col-lg-4 col-md-6">
                        <div className="slap-item">
                            <h2>
                                <a href="https://www.youtube.com/playlist?list=PL8IHDq7oEkgFKYIoNuubfZMuhhgEukkAg" target="_blank" rel="noreferrer">
                                    React temelini güçlendir
                                </a>
                            </h2>
                            <p>
                                <span>
                                    React'ın temelini en sade şekilde anlatan ders serisi.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-12 col-lg-4 col-md-6">
                        <div className="slap-item">
                            <h2>
                                <a href="https://www.youtube.com/playlist?list=PLkDTLUcoIKU2CA3W69lrw3loOdRGT7uD2" target="_blank" rel="noreferrer">
                                    CSS Grid
                                </a>
                            </h2>
                            <p>
                                <span>
                                    Bulduğum en iyi css grid dersi.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-12 col-lg-4 col-md-6">
                        <div className="slap-item">
                            <h2>
                                <a href="https://www.youtube.com/watch?v=odPWjdRFaAg" target="_blank" rel="noreferrer">
                                    CSS'te rebeccapurpe color'ının hikayesi
                                </a>
                            </h2>
                            <p>
                                <span>
                                    just sad :(
                                </span>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
