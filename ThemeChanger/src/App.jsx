
// import './App.css'
import { Button } from './components/Button'
import { AppBar } from './components/AppBar'

function App() {


  return (
    <>
      <AppBar> 
        <Button ButtonName="Light Theme" ClickFunction={()=>{document.body.style.backgroundColor="white";}} ButtonColor="white"TextColor="black"/>
        <Button ButtonName="Dark Theme" ClickFunction={()=>{document.body.style.backgroundColor="black";document.body.style.color="white"}} ButtonColor="black"/>
        <Button ButtonName="Blue Theme" ClickFunction={() => { document.body.style.backgroundColor = "blue"; document.body.style.color = "white" }} ButtonColor="blue" />
        <Button ButtonName="Red Theme" ClickFunction={()=> {document.body.style.backgroundColor="red";document.body.style.color="white"}} ButtonColor={"red"}/>
      </AppBar>
    </>
  )
}

export default App
