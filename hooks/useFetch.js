import { View, Text } from 'react-native'
import {React, useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(null)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get(`http://localhost:3000/api/v1/products`)
            setData(res.data)
            console.log(res.data)
        } catch (error) {
            setErr(error)
            console.log(`Error\n${error}`)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch =()=> {
        setIsLoading(true)
        fetchData()
    }
  return {data, isLoading, err, refetch}
}

export default useFetch