import { FC } from "react";
import { Pokemon } from "../../types";
import { ContainerCard } from "./styles";

interface CardComponentProps {
  pokemon: Pokemon;
}

const CardComponent: FC<CardComponentProps> = (props) => {
  const { pokemon } = props;
  const { id, name, image, classification } = pokemon;

  return (
    <ContainerCard>
      <div>
        <img src={image} alt="imagem pokemon" />
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <span>{classification}</span>
      </div>
    </ContainerCard>
  );
};

export default CardComponent;
