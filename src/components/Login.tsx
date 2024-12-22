import Guitar from '../assets/loginEntryPointPost (2).webp'
import GoogleImg from '../assets/google_PNG19635.png'
import { LucidePhone } from 'lucide-react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../Firebase/setUp';

type popUpProp = {
    setLoginPop : any
}

const Login = (props:popUpProp) => {

    const googleAuth = async ( ) => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <>
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-96 sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">

        <h1 onClick={() => props?.setLoginPop(false)} className='font-semibold text-3xl cursor-pointer'>x</h1>

          <div className="sm:flex sm:items-start">
            
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
             
              <div className="mt-2">
                <img src={Guitar} alt="Login_guitar" className='w-20 h-20 ml-32' />
                <p className="text-base font-medium mt-5 cursor-pointer text-center">Help us become one of the safest places <br/>
                to buy and sell</p>
                <div className='flex border border-black p-2 rounded-md mt-12'>

              <LucidePhone className='w-6 h-6 '/>
              <h1 className='font-semibold ml-3 cursor-pointer'>continue with phone</h1>
                </div>
                <div className='flex border border-gray p-2 rounded-md mt-4 cursor-pointer' onClick={googleAuth}>

              <img src={GoogleImg} alt="google_icon" className='w-6 h-6' />
              <h1 className='font-semibold ml-12 cursor-pointer'>continue with Google</h1>
                </div>
                <h1 className='text-center mt-4 cursor-pointer'>OR</h1>
                <h1 className='text-center mt-4 underline cursor-pointer'>Login with Email</h1>
                <h1 className='text-center mt-28  cursor-pointer text-xs'>All your personal details are safe with us.</h1>
                <h1 className='text-center mt-4  cursor-pointer text-xs'>If you continue, you are accepting <span className='text-blue-600'> OLX Terms and Conditins and Privacy Policy  </span></h1>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Login;
