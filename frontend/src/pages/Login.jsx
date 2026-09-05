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
    <div className='bg-gray-100 max-w-md mx-auto relative h-screen flex items-center justify-center'>
      <div className='overflow-hidden flex w-full flex-col items-center justify-center rounded-2xl py-8 space-y-2'>
        
        <Heading text="Welcome back"/>
        <span className='border-b w-full border-b-black/20'></span>        

        <InputBox label="Your email" type="email" placeholder="yourmail@email.com"/>
        <InputBox label="Your password" type="password" placeholder="Some@strongPassword1234"/>        
        <div className='w-full px-6'>
          <Button label="SignIn" onClick={click}/>
        </div>

        {/* Divider */}
        <div className="flex items-center w-full justify-center my-4">
           
          <span className='border-b w-full border-b-black/20'></span>
          <span className="px-2 text-sm text-neutral-500">or</span>
          <span className='border-b w-full border-b-black/20'></span>
          
        </div>
        <ButtonWarning text="Don't have an account?" button="Register" to="/register"/>
                
      </div>
    </div>
  )
}

export default Login


