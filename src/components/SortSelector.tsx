import React from 'react';
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/*{selectedPlatform?.name || 'Platforms'}*/}
        Sort by:
      </MenuButton>
      <MenuList>
        {/*{data.map(platform => (*/}
        {/*  <MenuItem*/}
        {/*    key={platform.id}*/}
        {/*    onClick={() => onSelectPlatform(platform)}*/}
        {/*  >*/}
        {/*    { platform.name }*/}
        {/*  </MenuItem>*/}
        {/*))}*/}
        <MenuItem>TEST</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;