import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';
import { useGlobalDispatch, useGlobalState } from '../Context';

interface SearchProps {
  store?: {};
  updateStore?: (val) => void;
}

// OR

//interface SearchProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

export function Search(props: SearchProps) {
  const state = useGlobalState();
  const dispatch = useGlobalDispatch();
  const searchedValue = state.search || ''

  const onChange = (value) => {
    dispatch({type:"SEARCH", payload: value})
  }

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={searchedValue}
      type="search"
      onChange={(e) => onChange(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}
