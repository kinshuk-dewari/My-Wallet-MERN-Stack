import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import ButtonWarning from '../components/ButtonWarning'

const Register = () => {

  const click = () => {
    console.log("hello")
  };
  
  return (
    <div className='bg-gray-50 relative dark:bg-black h-screen flex items-center justify-center'>
      <div className='dark:bg-neutral-900 overflow-hidden flex flex-col items-center justify-center rounded-2xl max-w-md py-8 space-y-2'>

        <Heading text="Signup" />
        <span className='border-b w-full border-b-black/20'></span>
        <Subheading text="enter your information, get started" />

        <Name />

        <InputBox label="Phone Number" placeholder="9876543210" />
        <InputBox label="Email" type="email" placeholder="yourmail@email.com" />
        <InputBox label="Password" type="password" placeholder="Some@strongPassword1234" />
        
        <div className='w-full px-6'>
          <Button label="Sign Up" onClick={click} />
        </div>

        <Divider />

        <ButtonWarning text="Already have an account?" button="Login" to="/login" />


      </div>
    </div>
  )
}

export default Register

function Divider() {
  return <div className="flex items-center w-full justify-center my-4">
    <span className='border-b w-full border-b-black/20'></span>
    <span className="px-2 text-sm text-neutral-500">or</span>
    <span className='border-b w-full border-b-black/20'></span>
  </div>
}

function Name() {
  return <div className="w-full flex items-center justify-between px-6 gap-2">
    <div>
      <label className="block text-sm font-medium text-neutral-700 ">
        First Name
      </label>
      <input
        type='text'
        placeholder='Kinshuk'
        className="w-full rounded-md border border-neutral-700 px-3 py-2  text-sm text-neutral-900  placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-neutral-700 ">
        Last Name
      </label>
      <input 
        type='text'
        placeholder='Dewari'
        className="w-full rounded-md border border-neutral-700 px-3 py-2  text-sm text-neutral-900  placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
}
