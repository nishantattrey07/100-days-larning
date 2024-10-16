import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { UserEmail, UserPassword,UserName,UserConfirmPassword } from './store/atoms/Signup-Form';
import { CheckConfirmPassword, PasswordSecurity } from './store/selectors/Password';

function App() {
  

  return (
    <>
      <RecoilRoot>
        <SignupForm />
      </RecoilRoot>
    </>
  )
}


function SignupForm() {
  const [username,setUsername] = useRecoilState(UserName);
  const [email,setEmail] = useRecoilState(UserEmail);
  const [confirmPassword, setConfirmPassword] = useRecoilState(UserConfirmPassword);
  const [password, setPassword] = useRecoilState(UserPassword);
  const passwordSecurity = useRecoilValue(PasswordSecurity);
  const passwordCheck = useRecoilValue(CheckConfirmPassword);
  const handlePress = (e)=>{ 
    e.preventDefault();
    console.log(username, email, confirmPassword);
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    
  }

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handlePress}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />

        {password && (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {passwordSecurity.map((pass, index) => (
              <li key={index} style={{ color: pass.met ? "green" : "red" }}>
                {pass.label}
              </li>
            ))}
          </ul>
        )}

        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        {confirmPassword && (
          <p style={{ color: "red" }}>
            {passwordCheck ? "" : "Password does not match"}
          </p>
        )}
        <br />
        <button
          type="submit"
          disabled={
            !passwordSecurity[0].met ||
            !username ||
            !password ||
            !confirmPassword ||
            !email
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default App
