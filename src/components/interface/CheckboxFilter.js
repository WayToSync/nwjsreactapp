import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DisplayData from './DisplayData'

export default function CheckboxFilter(props) {

  // let dataInfo = props.fileSelected;

  const [checkboxState, setCheckboxState] = useState({
    checkedError: true,
    checkedWarn: true,
    checkedInfo: true,
    checkedDebug: true,
    checkedTrace: true,
  });

  // checkboxState.filePath = dataInfo;
  console.log(checkboxState);

  /*
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    console.log(checkboxState);
  });
  */

  const handleChange = (event) => {
    setCheckboxState({ ...checkboxState, [event.target.name]: event.target.checked})
  };

  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          control={
          <Switch
            checked={checkboxState.checkedError}
            onChange={handleChange}
            name="checkedError"
            color="primary"
          />
          }
        label="ERROR"
        />
        <FormControlLabel
          control={
          <Switch
            checked={checkboxState.checkedWarn}
            onChange={handleChange}
            name="checkedWarn"
            color="primary"
          />
          }
        label="WARN"
        />
        <FormControlLabel
          control={
          <Switch
            checked={checkboxState.checkedInfo}
            onChange={handleChange}
            name="checkedInfo"
            color="primary"
          />
          }
        label="INFO"
        />
        </FormGroup>
        <FormGroup row>
        <FormControlLabel
          control={
          <Switch
            checked={checkboxState.checkedDebug}
            onChange={handleChange}
            name="checkedDebug"
            color="primary"
          />
          }
        label="DEBUG"
        />
        <FormControlLabel
          control={
          <Switch
            checked={checkboxState.checkedTrace}
            onChange={handleChange}
            name="checkedTrace"
            color="primary"
          />
          }
        label="TRACE"
        />
      </FormGroup>
      <DisplayData dataInfo = { props.fileSelected } checkBoxInfo = { checkboxState }></DisplayData>
    </div>
  )
}
