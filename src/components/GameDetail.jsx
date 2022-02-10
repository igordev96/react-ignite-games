//Styling and Animation
import { motion } from "framer-motion";
import styled from "styled-components";
//Redux
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import StarRatings from "react-star-ratings";

import smallImage from "../util";

import logos from "../img/logos";

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  //Exit Detail Handler
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "visible";
      navigate("/");
    }
  };

  //Get Platforms Images
  const { apple, gamepad, nintendo, playstation, steam, xbox } = logos;

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={+pathId}>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <StarRatings
                  rating={+game.rating}
                  numberOfStars={5}
                  starRatedColor="rgb(255, 124, 124)"
                  starDimension="2.2vw"
                  starSpacing="2px"
                />
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      title={data.platform.name}
                      alt={`${data.platform.name} logo`}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={smallImage(game.background_image, 1280)}
                alt="background"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screenshot) => (
                <img
                  key={screenshot.id}
                  src={smallImage(screenshot.image, 1280)}
                  alt="screenshot"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Detail = styled(motion.div)`
  width: 80%;
  height: 100%;
  border-radius: 1rem;
  overflow-y: auto;
  padding: 2rem 10rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetail;
