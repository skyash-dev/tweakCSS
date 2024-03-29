import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function Layout({ data }:any) {
  const onChange = useCallback((evt:any) => {
    console.log(evt.target.value);
  }, []);
  console.log(data);
  return (
    <div className="layout text-black">
      <div className='colorPrimary bg-white py-2 px-4 my-6'>colorPrimary</div>
      <div className='colorSecondary bg-white py-2 px-4 my-6'>colorSecondary</div>
      <div className='textColor bg-white py-2 px-4 my-6'>textColor</div>
      <div className='borderColor bg-white py-2 px-4 my-6'>borderColor</div>
      <div className='errorColor bg-white py-2 px-4 my-6'>errorColor</div>
      <div className='warningColor bg-white py-2 px-4 my-6'>warningColor</div>
    </div>
  );
}

export default Layout;