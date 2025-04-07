import { useState } from "react"
import { Box, Container, Modal, Typography} from "@mui/material"
import InputForm from './components/InputForm.jsx'

import ClockImage from'./assets/clock.png'
import TitleImage from './assets/title.png'

function App() {
  const [field, setField ] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading ] = useState(false);
  const [resultVisible, setResultVisibla] = useState(false);
  const [ modlaOpen, setModalOpen ] = useState(false);

  const handelCalculate = () => {
    const timeValue = Number(time);
    if(!field){
      alert('입력되지 않았습니다.')
      return;
    }
    if(!time|| timeValue > 24){
      alert('잘못된 값입니다, 24 이하의 값을 입력하세요')
      return
    }
    setLoading(true);
    setResultVisibla(false);

    setTimeout(() => {
      setLoading(false)
      setResultVisibla(true)
    },1800);
  }

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('URL이 복사되었습니다.');
    });
  };

  return (
    <Box sx={{ 
      backgroundColor: '#5b2386',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'GmarketSansMedium'
      }}>
        <Container maxWidth='md' sx={{ pt:5 }} >
          <Box sx={{
            display:"flex",
            flexDirection:'column',
            alignItems:'center',
            md: 5,
          }}>
            <img src={ClockImage} alt="Clock" width={265} height={265} style={{position: 'relative'}} />
            <Box 
              sx={{
                position:'absolute',
                width:564,  
              }}>
                <img src={TitleImage} alt="Title" style={{width:'100%'}}/>
            </Box>
          </Box>
              <InputForm
                field={field}
                setField={setField}
                time={time}
                setTim={setTime}
                handelCalculate={handelCalculate}>

              </InputForm>
        </Container>
    </Box>
  )
}

export default App
