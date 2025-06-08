import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import ButtonWarning from '../components/ButtonWarning'

const Login = () => {  
  const click = ()=>{
    console.log("hello")
  };
  return (
    <div className='bg-gray-50 relative dark:bg-black h-screen flex items-center justify-center'>
      <div className='dark:bg-neutral-900 overflow-hidden flex flex-col items-center justify-center rounded-2xl max-w-md py-8 space-y-2'>
        
        <Heading text="Signin"/>
        <span className='border-b w-full border-b-white/20'></span>
        
        <Subheading text="enter your credentials"/>
        

        <InputBox label="Email" type="email" placeholder="yourmail@email.com"/>
        <InputBox label="Password" type="password" placeholder="Some@strongPassword1234"/>        
        <Button label="SignIn" onClick={click}/>

        {/* Divider */}
        <div className="flex items-center w-full justify-center my-4">
           
          <span className='border-b w-full border-b-white/20'></span>
          <span className="px-2 text-sm text-neutral-500">or</span>
          <span className='border-b w-full border-b-white/20'></span>
          
        </div>
        <ButtonWarning text="Don't have an account?" button="Register" to="/register"/>
                
      </div>
    </div>
  )
}

export default Login


