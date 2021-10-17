import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore} from "firebase/firestore/lite";
import {useEffect, useState} from "react";
import getSlaps from "../api/slaps/getSlaps";
import {SectionHeading} from "../component";
export default function slap(){
    const [slaps, setSlaps] = useState([]);

    async function fetchData(){
        getSlaps.then((slaps) => {
            setSlaps(slaps);
            console.log(slaps)
        })
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <section id="slap-area" data-scroll-index="2" className="service-area theme-bg">
            <div className="container">

                <div className="row mb-4">
                    <div className="col-xl-7">
                        <SectionHeading title="SLAP" desc="Bulup beğendiğim her şeyi yabıştırdığım kısım." />
                    </div>
                </div>

                <div className="row">
                    {slaps.map((slap, key) => {
                        return (
                            <div key={key} className="col-xl-12 col-lg-4 col-md-6">
                                <div className="slap-item">
                                    <h2>
                                        <a href={slap.url} target="_blank" rel="noreferrer">
                                            {slap.title}
                                        </a>
                                    </h2>
                                    <p>
                                        <span>{slap.source}</span>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>
            </div>
        </section>
    )
}