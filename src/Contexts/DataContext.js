import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'

const AuthContext = React.createContext();

export function useDataAuth() {
    return useContext(AuthContext)
}



export function AuthDataProvider({ children }) {


    
    const [workdata, setWorkdata] = useState([]);
    const [playdata, setPlaydata] = useState([]);
    const [studydata, setStudydata] = useState([]);
    const [exercisedata, setExercisedata] = useState([]);
    const [socialdata, setSocialdata] = useState([]);
    const [selfcaredata, setSelfcaredata] = useState([]);


    const getData = () => {
        axios.get('./data.json')
        .then((response) => {
          setWorkdata(response.data[0])
          setPlaydata(response.data[1])
          setStudydata(response.data[2])
          setExercisedata(response.data[3])
          setSocialdata(response.data[4])
          setSelfcaredata(response.data[5])
        })
        .catch((err) => {
          throw err;
        })
      }
    
      useEffect(() => {
        getData();
      }, [])


    const value = {
        workdata,
        playdata,
        studydata,
        exercisedata,
        socialdata,
        selfcaredata
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
