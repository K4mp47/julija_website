import { FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export default function Contact() {
    return (
      <div className='p-8 lg:p-40 flex flex-col justify-start lg:justify-center'>
        <h1 className="uppercase text-[2rem] flex justify-start lg:justify-center text-[#AE2D29]" style={{ fontWeight: 300 }}>Contacts</h1>
        <p className="flex justify-start lg:justify-center">get in touch!</p>
        <div className="relative flex justify-start lg:justify-center mt-8">
          <FaInstagram className="text-[#AE2D29] text-2xl mr-2" />
          <span style={{ fontWeight: 400 }}>instagram@username</span>
        </div>
        
        <div className="relative flex justify-start lg:justify-center mt-4">
          <AiOutlineMail className="text-[#AE2D29] text-2xl mr-2" />
          <span style={{ fontWeight: 400 }}>email@username</span>
        </div>
      </div>
    );
  }