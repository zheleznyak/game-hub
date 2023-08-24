import React from 'react';
import useGenres from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/img-url";
import useGameQueryStore from "../store";


const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />

  return (
    <>
      <Heading as='h3' fontSize='2xl' marginBottom={5}>Genres</Heading>
      <List>
        {genres?.results.map(genre => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button whiteSpace='normal' textAlign='left' fontSize='lg' fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} variant='link' onClick={() => setSelectedGenreId(genre.id)}>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;