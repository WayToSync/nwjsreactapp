import React, { useState } from 'react';
import TypeListFilter from './TypeListFilter';

export default function FileButton() {

  
  const [fileState, setFileState] = useState([{
    UploadFileName: '',
  }]);

  console.log(fileState)

  /*useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    console.log(state.DisplayFileName[0]);
  });*/
  
  const handleChange = (event) => {
    setFileState({[event.target.name]: Array.from(event.target.files)
       .map(file => ({name: file.name, path: file.path}))});
      // .map(({name}) => name)});
    event.preventDefault();
  };

  return (
    <div>
      <input type="file"
             name="UploadFileName"
             onChange={ handleChange }
             webkitdirectory="true"
      />
      <TypeListFilter uploadFileName = { fileState }></TypeListFilter>
    </div>
  )
}
