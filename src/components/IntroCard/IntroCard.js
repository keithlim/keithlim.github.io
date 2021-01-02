import "./IntroCard.css"
import profilePic from '../../images/keithProfilePic.jpeg'
import { useEffect, useState } from "react";

function IntroCard() {

    const [index, setIndex] = useState(0);
    const quotes = ["Avid Tech Enthusiast", "Avid Car Enthusiast", "Avid Pasta Enthusiast"]

    useEffect(() => {
        const lastIndex = quotes.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, quotes]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 2000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <section className="hero">
            <div className="hero-center">

                <article className="hero-info">
                    <h1>
                        Hello There,<br /> I'm Keith 😁
                    </h1>
                </article>

                <article className='hero-images'>
                    <img src={profilePic} className='profile-img' alt='phone' />
                    <p>"{quotes[index]}"</p>
                </article>

            </div>
        </section>
    )
}

export default IntroCard