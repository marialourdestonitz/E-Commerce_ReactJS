  import SignupForm from "../../component/sign-up/SignupForm";
  import SignIn from "../../component/sign-in/SignIn";

  import{AuthenticationContainer} from "./Authentication.styles"


const Authentication = () => {
   

  return (
    <AuthenticationContainer>
      <SignIn/>
      <SignupForm/>
    </AuthenticationContainer>
  )
}

export default Authentication
