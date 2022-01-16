import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const currencies = [
  {
    label: 'Brass Articles',
    value: 'Brass Articles',
  },
  {
    label: 'Cutlery & Napkin Rings',
    value: 'Cutlery & Napkin Rings',
  },
  {
    label: 'Metal Articles',
    value: 'Metal Articles',
  },
  {
    label: 'Wood Craft & Furniture',
    value: 'Wood Craft & Furniture',
  },
  {
    label: 'Glass Articles',
    value: 'Glass Articles',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '125ch',
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
