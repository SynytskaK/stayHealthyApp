import './Landing_Page.css';

const Landing_Page = () => {
    return (
        <section className="hero-section">
            <div>
                <div data-aos="fade-up" className="flex-hero">

                    <h1>
                        Your Health<br />
                        <span className="text-gradient">

                            Our Responsibility
                        </span>
                    </h1>
                    <div className="blob-cont">
                        <div className="blue blob"></div>
                    </div>
                    <div className="blob-cont">
                        <div className="blue1 blob"></div>
                    </div>
                    <h4>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
                    </h4>
                    <a href="instant-consultation">
                        <button className="button">Get Started</button>
                    </a>

                </div>

            </div>
        </section>
    )
}

export default Landing_Page;