  import SignupForm from "../../component/sign-up/SignupForm";
  import SignIn from "../../component/sign-in/SignIn";

  import "./Authentication.styles.scss"


const Authentication = () => {
   

  return (
    <div className="authentication-container">
      <SignIn/>
      <SignupForm/>
    </div>
  )
}

export default Authentication
