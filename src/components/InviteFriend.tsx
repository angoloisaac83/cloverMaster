import React, { useState, FormEvent } from 'react';

const Invite: React.FC = () => {

  return (
    <div className='w-full overflow-y-scroll flex gap-[10px] flex-col items-center justify-center p-[20px] h-[70vh]'>
      <h2 className='text-3xl'>Invite Freinds!</h2>
      <p>You and your freinds will recieve bonuses</p>
      <section className='w-full flex flex-col gap-[20px] items-center justify-center pt-[20px]'>
        <div className='w-[90%] text-[15px] bg-black p-[20px] rounded-md flex gap-[20px]'>
            <img src="" alt="" />
            <span>
                <b><p className='foont-[800]'>Invite a freind</p></b>
                <p><span className='text-yellow-500'>+25,000</span> for you and your freind</p>
            </span>
        </div>
        <div className='w-[90%] text-[15px] bg-black p-[20px] rounded-md flex gap-[20px]'>
            <img src="" alt="" />
            <span>
                <b><p className='foont-[800]'>Invite a freind</p></b>
                <p><span className='text-yellow-500'>+25,000</span> for you and your freind</p>
            </span>
        </div>
        <div className='w-[90%] rounded-md py-[10px] text-slate-100 bg-black pb-[10px] pl-[40px]'>
            <ul className='list-decimal w-full flex flex-col items-start justify-start gap-[10px]'>
                <li>
                    <img src="" alt="" />
                    <span>
                        Username: Angolo isaac
                        <br></br>
                        Level: 37
                    </span>
                </li>
            </ul>
        </div>
      </section>
      <span className='w-full h-fit p-[5px] flex items-center justify-center gap-[10px]'>
        <button className='bg-blue-700 w-[60%] rounded-md py-[10px] '>Invite a freind</button>
        <button className='bg-blue-700 p-[7px] flex items-center justify-center rounded-md'><span className="material-symbols-outlined">
content_copy
</span></button>
      </span>
    </div>
  );
};

export default Invite;
