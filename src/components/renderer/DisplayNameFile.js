// import React from 'react';

export default function DisplayNameFile(allFilesName, typeListValue) {

    const filesName = allFilesName.UploadFileName;
     if(filesName){
        const regex = new RegExp(typeListValue);
        const filesAfterFilter = filesName.filter((fileName) => regex.test(fileName.name));
        console.log(filesAfterFilter)
        return filesAfterFilter;
     }else{
        return [];
     }
}
