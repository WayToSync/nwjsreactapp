import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
// import StreamData from '../renderer/StreamData'

export default function DisplayData(props) {

  const dataFile = props.dataInfo;
  const checkboxState = props.checkBoxInfo;
  console.log(dataFile);
  console.log(checkboxState);

  const [infoDataState, setInfoDataState] = useState({
    InfoDataSelected: '',
  });

  // StreamData(dataFile, checkboxState);

  // console.log(StreamData(dataFile));

  console.log(infoDataState);

  /*
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    console.log(nameState);
  });
*/

/*{selectNameFile.map((name) => (
    <option key={name} value={name}>
    {name}
  </option>
  ))}
  </Select>
  <CheckboxFilter fileSelected = { currentSelectFile }></CheckboxFilter>
*/

  const handleChange = (event) => {
    setInfoDataState({[event.target.name]: event.target.value});
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
          name="InfoDataSelected"
          onChange={handleChange}
        >
          <option key={0} value={0}>
          test
        </option>
        </Select>
    </div>
  )
}