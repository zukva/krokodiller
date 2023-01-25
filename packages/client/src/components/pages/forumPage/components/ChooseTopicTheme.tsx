import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useLocation } from 'react-router-dom';

type ChooseTopicThemeType = {
  changeTheme: (theme: string) => void;
};

const ChooseTopicTheme: React.FC<ChooseTopicThemeType> = ({ changeTheme }) => {
  const forumPathName = '/forum';
  const { pathname } = useLocation();
  const [value, setValue] = React.useState(
    pathname === forumPathName ? 'Все' : 'Игра'
  );

  const handleChange = (event: React.SyntheticEvent) => {
    setValue((event.target as HTMLInputElement).value);
    if (changeTheme) changeTheme((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Темы</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {pathname === forumPathName && (
          <FormControlLabel value={'Все'} control={<Radio />} label="Все" />
        )}
        <FormControlLabel value="Игра" control={<Radio />} label="Игра" />
        <FormControlLabel value="Общее" control={<Radio />} label="Общее" />
      </RadioGroup>
    </FormControl>
  );
};

export default ChooseTopicTheme;
