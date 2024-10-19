import { Button } from "./components/Buttons"


function App() {

  const handelClick = () => { 
    console.log("Button Clicked");
    
  }

  const subscribeStyle = {
    backgroundColor: "rgb(200,0,0)",
    color: "white",
    height: "46px",
    width: "125px",
    margin:"5px",
    borderRadius: "5px",
    cursor:"pointer"
  }

  const joinStyle = {
    backgroundColor: "whitesmoke",
    color: "rgb(41,118,211)",
    borderStyle:"solid",
    borderColor: "rgb(41,118,211)",
    borderWidth:"2px",
    height: "46px",
    width: "125px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight:"Bold",
    margin:"5px"
  }

  const tweetStyle = {
    backgroundColor: "rgb(0,172,237)",
    color: "white",
    height: "46px",
    width: "125px",
    borderRadius: "25px",
    border:"none",
    cursor: "pointer",
    fontWeight: "Bold",
    margin: "5px"
  }

  const RequestnowStyle = {
    backgroundColor: "black",
    borderRadius: "2px",
    border: "none",
    margin: "5px",
    height: "56px",
    width: "150px",
    padding:"15px"
  }

  const AmazonStyle = {
    backgroundColor: "rgb(248,216,76)",
    color: "black",
    borderRadius: "23px",
    border: "none",
    margin: "5px",
    height: "46px",
    width: "170px",
  };
  
  const GithubStyle = {
    backgroundColor: "rgb(87,164,89)",
    color: "white",
    fontWeight: "bold",
    borderRadius: "5px",
    border: "none",
    margin: "5px",
    height: "46px",
    width: "100px",

    
  };

  return (
    <>
      <div>
        <Button click={handelClick} looks={subscribeStyle} name="Subscribe" />
        <Button click={handelClick} looks={joinStyle} name="Join" />
        <Button click={handelClick} looks={tweetStyle} name="Tweet" />
      </div>

      <div>
        <Button click={handelClick} looks={RequestnowStyle} name="Request now" />
        <Button click={handelClick} looks={AmazonStyle} name="Add to Cart" />
        <Button click={handelClick} looks={GithubStyle} name="Sign up" />
      </div>

      <div>
        <Button click={handelClick} looks={subscribeStyle} name="Subscribe" />
        <Button click={handelClick} looks={joinStyle} name="Join" />
        
      </div>
    </>
  );
}

export default App
