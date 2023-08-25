import React, { useState } from 'react';
import {Button, Text} from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expended, setExpended] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length < limit) return <Text>{ children }</Text>;

  const summary = expended ? children : children.substring(0, limit) + '...';

  return (
    <Text>
      { summary }
      <Button
        size='xs'
        fontWeight='bold'
        marginLeft={1}
        colorScheme='yellow'
        onClick={() => setExpended(!expended)}
      >
        { expended ? 'Show less' : 'Read more' }
      </Button>
    </Text>
  );
};

export default ExpandableText;