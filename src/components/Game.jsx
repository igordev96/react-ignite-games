//Styling and Animation
import { motion } from "framer-motion";
import styled from "styled-components";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";

import { Link } from "react-router-dom";

// import smallImage from "../util";

const Game = ({ name, released, image, id }) => {
  //Load Detail
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame layoutId={+id} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={`${name} cover`} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  cursor: pointer;
  height: 36vh;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.35);
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
  img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
  }
`;

export default Game;
