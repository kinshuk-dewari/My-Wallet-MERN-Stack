import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import ButtonWarning from '../components/ButtonWarning'

const Register = () => {
  const click = ()=>{
    console.log("hello")
  };
  return (
    <div className='bg-gray-50 relative dark:bg-black h-screen flex items-center justify-center'>
      <div className='dark:bg-neutral-900 overflow-hidden flex flex-col items-center justify-center rounded-2xl max-w-md py-8 space-y-2'>
        
        <Heading text="Signup"/>
        <span className='border-b w-full border-b-white/20'></span>
        <Subheading text="enter your information get started"/>
        <InputBox label="First Name" placeholder="Kinshuk"/>
        <InputBox label="Last Name" placeholder="Dewari"/>
        <InputBox label="Phone Number" placeholder="9876543210"/>
        <InputBox label="Email" type="email" placeholder="yourmail@email.com"/>
        <InputBox label="Password" type="password" placeholder="Some@strongPassword1234"/>
        <Button label="Sign Up" onClick={click}/>
                 {/* Divider */}
         <div className="flex items-center w-full justify-center my-4">
           
            <span className='border-b w-full border-b-white/20'></span>
            <span className="px-2 text-sm text-neutral-500">or</span>
            <span className='border-b w-full border-b-white/20'></span>
          
         </div>
        <ButtonWarning text="Already have an account?" button="Login" to="/login"/>
        
        
      </div>
    </div>
  )
}

export default Register

