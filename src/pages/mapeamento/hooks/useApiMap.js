import { useEffect, useState } from "react"
import * as CepAPI from "services/ConversaoCep"


export default function useApiMap(configRequest){
  const {method, url, othersConfig = {}} = configRequest
  const [data, setData] = useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await CepAPI[method](url, {
        ...othersConfig,
      })
      setData(response.data)
    } catch {
      (alert("Error"))
    }
  }
  fetchData()
}, [])

  return [data]
}