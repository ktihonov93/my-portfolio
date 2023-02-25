import React from "react";
import WorkCard from "./WorkCard";
import "./Work.css";

export default function Work() {
  return (
    <div className="work">
      <h2 className="work-header">My Recent Works</h2>
      <div className="workcards">
        <WorkCard
          link1="https://github.com/ktihonov93/wizarding-world"
          link2="https://ktihonov93.github.io/wizarding-world/"
          src="https://images.ctfassets.net/usf1vwtuqyxm/2pcaAS2VS1yEZe5xz42LUF/436fcbacbbf9834a009b23ff677e3522/USJ_wwhp2.jpg"
          title="Wizarding World"
          description={
            <div>
              App uses{" "}
              <b>
                Redux, RTK Query, TypeScript, Context API, useDebounce
                optimization hook, ErrorBoundary, custom Middleware{" "}
              </b> etc.
              App has smart/dumb components architecture. On homepage you can
              start to search Harry Potter universe characters and open
              character details. After registration and authorization you can
              add characters to Favourites page or remove them if you
              want. Also you can check your search history and move on homepage
              with selected history item in search input. You can check your
              personal info on profile page and logout.
            </div>
          }
        />
        <WorkCard
          link1="https://github.com/ktihonov93/mosaic-art"
          link2="https://ktihonov93.github.io/mosaic-art/"
          src="https://i.ibb.co/Xx1Cj0v/woman-1283009-960-720.jpg"
          title="Mosaic art"
          description={
            "Mobile React application uses Art Institute of Chicago's API. It will help those who want to go deeper in art. If you don't know where to start, you can view the main page that will show you the random artwork. Or you can go to the archive and search by artist or artwork."
          }
        />
        <WorkCard
          link1="https://github.com/ktihonov93/ktihonov93.github.io"
          link2="https://ktihonov93.github.io/"
          src="https://i.ibb.co/FB57p29/image.png"
          title="Pokedex"
          description={
            <div>
              Fully responsive React app. You can check a list of pokemons,
              change the page to see another pokemons, click "catch" button to
              catch the pokemon and you can see on Caught Pokemon page the list
              of your caught pokemons. If you refresh the page, your caught
              pokemons will still be in caught list. You can click on "release"
              button to remove pokemon from caught list. Also if you click on a
              pokemon card you can see the details of pokemon and the actual
              date of caught.
            </div>
          }
        />
        <WorkCard
          link1="https://github.com/ktihonov93/wcs_project1"
          link2="https://ktihonov93.github.io/wcs_project1/index.html"
          src="https://i.ibb.co/vwZM6bG/pexels-photo-1581554.jpg"
          title="Wild Code Bar"
          description={
            <div>
              Out first project with{" "}
              <a href="https://github.com/chhavi-choudhary">Chhavi</a> and{" "}
              <a href="https://github.com/glanzwulf">Vladyslav</a>. Full
              responsive website of Wild Code Bar made with HTML, CSS and
              JavaScript. You can check our menu, fill the form to join us by
              clicking our fancy button, look at testimonials left by previous
              clients, leave your personal review with stars and avatar by
              clicking another fancy button, and also book a table.
            </div>
          }
        />
      </div>
    </div>
  );
}
