import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const currencies = [
  {
    label: 'BAR PRODUCTS & ACCESSORIES',
    value: 'BAR PRODUCTS & ACCESSORIES',
  },
  {
    label: 'COPPERWARE PRODUCTS',
    value: 'COPPERWARE PRODUCTS',
  },
  {
    label: 'CUTLERY & NAPKIN RINGS',
    value: 'CUTLERY & NAPKIN RINGS',
  },
  {
    label: 'KITCHENWARED',
    value: 'KITCHENWARED',
  },
  {
    label: 'LAMPS & LIGHTING',
    value: 'LAMPS & LIGHTING',
  },
  {
    label: 'LANTERNS AND CANDLE HOLDERS',
    value: 'LANTERNS AND CANDLE HOLDERS',
  },
  {
    label: 'METAL FURNITURES',
    value: 'METAL FURNITURES',
  },
  {
    label: 'MIRRORS & DECORATIVE',
    value: 'MIRRORS & DECORATIVE',
  },
  {
    label: 'TABLETOP ITEMS',
    value: 'TABLETOP ITEMS',
  },
  {
    label: 'WOODEN FURNITURES',
    value: 'WOODEN FURNITURES',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100ch',
      margin:0,
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency((p)=>event.target.value);
    props.setType(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
        
        <TextField
          id="outlined-select-currency-native"
          select
          label="type"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
    </form>
  );
}
