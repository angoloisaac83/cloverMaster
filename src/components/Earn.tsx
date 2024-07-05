import React from 'react'
import {dollarCoin} from '../images'

export default function Earn(){

    return(
        <main className='pt-[30px] text-xl flex items-center justify-center flex-col gap-[30px] pt-[20px]'>
            <img src={dollarCoin} className='w-[130px]' alt="" />
                <section className="w-full font-700 text-lg h-fit flex flex-col items-center justify-center gap-[20px]">
                    <div className='w-[90%] h-fit gap-[20px] flex flex-col'>
                        <h1 className='text-2xl'>Daily Tasks</h1>
                        <div className='w-full h-fit flex bg-black rounded-md p-[10px]'>
                            <img src="" className='w-[20%]' alt="" />
                            <span className="flex items-center justify-between w-[80%]">
                            <ul>
                                <li>Daily Rewards</li>
                                <li className='text-[gold]'>+6,348,456</li>
                            </ul>
                            <span className="material-symbols-outlined">
chevron_right
</span>
                            </span>
                        </div>
                        <h1 className='text-2xl'>Clover Youtube</h1>
                        <div className='w-full h-fit flex bg-black rounded-md p-[10px]'>
                            <img src="" className='w-[20%]' alt="" />
                            <span className="flex items-center justify-between w-[80%]">
                            <ul>
                                <li>Daily Rewards</li>
                                <li className='text-[gold]'>+6,348,456</li>
                            </ul>
                            <span className="material-symbols-outlined">
chevron_right
</span>
                            </span>
                        </div>
                    </div>
                </section>
        </main>
    )
}