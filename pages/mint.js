import Head from 'next/head'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
   return (
      <div>
         <Header />
         <main>
            <div className="text-white">
               THIS IS THE MINT PAGE
            </div>
         </main>
      </div>
   )
}