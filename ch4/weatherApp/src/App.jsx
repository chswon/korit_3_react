import { useEffect, useState } from "react"

function App() {
  const [weather, setweather] = useState({
    temp: number',
    desc: string,
    icon: string
  });
   useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&units=Meric&APIkey=cea70c491e48297c787604d01853ccec')
    .then(response => response.json())
    .then(result => {
      setweather({
        temp: result.main.temp,
        desc: result.weather[0].description,
        icon: result.weather[0].icon
      })
    })
    .catch(err => console.log(err));
   },[]);

if (weather.icon){
  return (
    <>
      <p>온도 : {weather.temp}</p>
      <p>설명 : {weather.desc}</p>
      <p>아이콘 : {weather.icon}</p>
      <img src ={'http://openweathermap.org/omg/wn/${weather.icon}@2x.png'}
      alt="날씨아이콘입니다."/>
    </>
  )
} else {
  return <h1>로딩 중...</h1>
  }
}

export default App
