import React, { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import videoBg from "./assets/videos/video_3.mp4";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Navigation from "./components/Navigation";
// ..

const App = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 10 });

  AOS.init({ duration: 1200 });

  return (
    <div className="container" ref={scrollRef}>
      <div className="slider header">
        <Navigation />
        <div className="overlay"></div>
        <div className="video-container">
          <video autoPlay loop muted playsInline className="back-video">
            <source src={videoBg} type="video/mp4" />
          </video>
        </div>
        <div className="text">
          <h1 data-aos="fade-right">
            <span>o</span>rionis <span>d</span>igital <span>a</span>gency
          </h1>
        </div>
      </div>
      <div className="slider">
        <div>
          <h3 data-aos="fade-right" data-aos-duration="1000">
            slider 2
          </h3>
          <p data-aos="fade-right" data-aos-duration="1300">
            Lorem, ipsum dolor.
          </p>
          <p data-aos="fade-right" data-aos-duration="1600">
            Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
      <div className="slider">
        <div>
          <h3>slider 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            obcaecati excepturi perferendis sunt temporibus iste quos nesciunt,
            at architecto neque odit corrupti dolorum ut provident a impedit
            pariatur voluptas iure dignissimos soluta minima voluptatum animi
            repellat. Nam voluptas mollitia ratione blanditiis suscipit amet
            labore cum, dignissimos illo in! Voluptas, veritatis?
          </p>
        </div>
      </div>
      <div className="slider">
        <div>
          <h3>slider 4</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis a aperiam sit ipsum repellendus facere? Exercitationem
            tenetur, laudantium sint iste voluptatum nam odit veritatis et.
            Culpa vel nemo debitis. Qui!
          </p>
        </div>
      </div>
      <div className="slider">
        <div>
          <h3>slider 5</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            accusamus explicabo maxime consequatur tempora delectus aperiam
            voluptatem cupiditate, enim, voluptate corrupti qui quasi magni rem
            omnis dolore est in assumenda rerum quo minima doloribus possimus
            voluptatum. Tempore molestiae quasi modi dolorum harum ex aspernatur
            ratione autem ut a nesciunt libero atque aliquid illo porro maiores,
            quo deleniti labore amet consectetur optio quod impedit. Ratione
            nemo porro beatae. Reprehenderit dolorum incidunt ea cupiditate
            recusandae consequuntur. Mollitia ad, iste, incidunt consequatur
            natus quis eius necessitatibus voluptatem saepe dolorum qui? Sequi
            assumenda consequuntur expedita, nihil, ipsa eligendi obcaecati
            ipsum aspernatur labore esse excepturi!
          </p>
        </div>
      </div>
      <div className="slider">
        <div>
          <h3>slider 6</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            sint, nam ducimus asperiores corporis dolore in temporibus hic sed
            excepturi nobis adipisci reiciendis laudantium, similique labore?
            Consectetur fugiat fuga dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
