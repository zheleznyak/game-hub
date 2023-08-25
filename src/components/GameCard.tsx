import React from 'react';
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/img-url";
import {Link} from "react-router-dom";
import Game from "../entities/Game";

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl' marginBottom={2}>
          <Link to={'/games/' + game.slug}>{ game.name }</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;