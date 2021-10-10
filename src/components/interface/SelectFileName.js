import React, { useState } from 'react';
import CheckboxFilter from './CheckboxFilter'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export default function SelectFileName(props) {

  const selectNameFile = props.fileName;
  console.log(selectNameFile);

  const [nameState, setNameState] = useState({
    NameSelected: '',
  });

  let currentSelectFile = "";

  if(selectNameFile.length) currentSelectFile = nameState.NameSelected;

  /*
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    console.log(nameState);
  });
*/

  const handleChange = (event) => {
    setNameState({[event.target.name]: event.target.value});
    event.preventDefault();
  };

  return (
    <div>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          name="NameSelected"
          onChange={handleChange}
        >
        {selectNameFile.map((fileFiltered) => (
          <option key={fileFiltered.name} value={fileFiltered.path}>
          {fileFiltered.name}
        </option>
        ))}
        </Select>
        <CheckboxFilter fileSelected = { currentSelectFile }></CheckboxFilter>
    </div>
  )
}
