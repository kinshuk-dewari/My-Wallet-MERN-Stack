import InputBoxSearch from '../components/InputBoxSearch';

const users=[
  { id: 1, firstName: 'John', lastName: 'Don',amount: 69,send:true },
  { id: 2, firstName: 'Russia', lastName: 'Mae',amount: 5000,send:false },
  { id: 3, firstName: 'Vijay', lastName: 'Malaya',amount: 420,send:true },
  { id: 4, firstName: 'Rey', lastName: 'Mysterio',amount: 369,send:false },
];

const Transactions = () => {
  return (
     <div className="flex flex-col items-center justify-center px-4 py-6 overflow-y-auto">    
          <div className='w-full flex justify-start pt-4 px-6'>                          
            <span className='text-xl text-wrap pb-6 md:text-2xl bg-gradient-to-r overflow-hidden from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold'>
              Payment History
            </span>
          </div>
          <div className='w-full'>
            <InputBoxSearch placeholder='Search you payments'/>
            <div className='px-6 space-y-2 mt-2'>
            {
              users.map((user) => (
                <div key={user.id} className='border-b border-neutral-700 flex items-center justify-between py-2'>
                  <div className='flex items-center justify-center'>
                    <div className="rounded-full h-10 w-10 bg-neutral-800 flex justify-center mt-1 mr-2">
                      <div className="flex flex-col justify-center h-full text-base text-white font-bold">
                        {user.firstName[0]}
                      </div>
                    </div>
                    <div className='text-white capitalize font-semibold'>{user.firstName} {user.lastName}</div>
                  </div>
                  <div className='text-gray-400 font-bold'>
                    {
                      user.send ? 
                      <span className='flex items-center justify-center'>
                        <span>-</span>
                        <span className='mx-1'>₹</span> 
                        <span>{user.amount}</span>                         
                      </span> :
                      <span className='flex items-center text-green-500 justify-center'>
                        <span className='mb-1' >+</span>
                        <span className='mx-1'>₹</span> 
                        <span>{user.amount}</span>                         
                      </span>                  
                    }
                  </div>
                </div>

              ))
            }
            </div>
            
          </div>
                   
    </div>
  )
}

export default Transactions