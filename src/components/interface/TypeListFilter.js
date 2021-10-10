import React, { useState } from 'react';
import SelectFileName from './SelectFileName';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DisplayNameFile from '../renderer/DisplayNameFile'

export default function TypeListFilter(props) {

  const allFilesName = props.uploadFileName;
  
  const [typeState, setTypeState] = useState({
    TypeListFilter: '',
  });

  console.log(typeState);

  const filterName = DisplayNameFile(allFilesName, typeState.TypeListFilter);
  console.log(filterName);

  /*
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    // console.log(filterName);
  });
  */

  const handleChange = (event) => {
    setTypeState({[event.target.name]: event.target.value});
    event.preventDefault();
  };

  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">TLF</InputLabel>
        <Select
          native
          name="TypeListFilter"
          onChange={handleChange}
          label="TLF"
        >
          <option aria-label="None" value="" />
          <option value={"all"}>ALL</option>
          <option value={"default"}>Default</option>
          <option value={"firmwareCpu-production"}>Fir.CPU</option>
          <option value={"firmwareCpuStatus-production"}>Fir.CPUStat.</option>
          <option value={"firmwarePrint"}>Fir.Print</option>
          <option value={"webApi"}>WebAPI</option>
        </Select>
      </FormControl>
      <SelectFileName fileName = { filterName } ></SelectFileName>
    </div>
  )
}
