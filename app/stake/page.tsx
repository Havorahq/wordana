'use client'

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import { useMyContext } from '../context/Context'
import getWeb3 from '../services/web3';
import { CONTRACT_ADDRESS } from '../smart-contract/constants';
import CONTRACT_ABI from '../smart-contract/wordanamain-abi.json';
import Web3 from 'web3'


const Stake = () => {
    const { data: address } = useMyContext();
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [contract, setContract] = useState<any | null>(null);
    const [token, setToken] = useState<string>("")
    // console.log('Address:', address)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setToken(value)
    }

    const callSmartContractFunction = async () => {
        try {
          if (web3 && contract) {
            console.log('Function:', contract.functions, 'Method:', contract.methods)
            const result = await contract.methods.createGameInstance(address, token).call();
            console.log('Smart contract function result:', result);
          }
        } catch (error) {
          console.error('Error calling smart contract function:', error);
        }
    };

    useEffect(() => {
        const initWeb3 = async () => {
            const web3Instance = await getWeb3();
            setWeb3(web3Instance);

            const contractInstance = new web3Instance.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
            setContract(contractInstance);
        }

        initWeb3();
    }, [])


    return (
        <div>
            <Header />
            <div className='flex flex-col h-screen items-center gap-3 m-32'>
                <div className='border border-borderGrey p-5 rounded-lg text-sm width'>
                    <p>Total Balance</p>
                    <p className='my-5'>WRD - 200</p>
                    <p className='text-gray-400'>$ 200</p>
                </div>

                <form className='py-5 width'>
                    <label className='block mb-2 text-sm text-gray-400'>Amount of WRD to stake</label>
                    <input 
                        className='width border border-borderGrey rounded-lg bg-grey p-2'
                        placeholder='10'
                        name='token'
                        value={token}
                        onChange={handleChange}
                    />
                    <p className='text-xs mt-1 text-gray-400'>You will have 190 remaining</p>
                </form>
                <div onClick={callSmartContractFunction}>
                    <Button title='Stake WRD' />
                </div>
            </div>
        </div>
    )
}

export default Stake;
  