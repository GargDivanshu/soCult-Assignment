import React , {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import UserInfo from './../components/UserInfo/UserInfo';
import Discover from './../components/Discover/Discover';
import {Photo, Video} from './../components/Feed';
import {BiPhotoAlbum} from 'react-icons/bi'
import {MdSlowMotionVideo} from 'react-icons/md'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [feed, setFeed] = useState("PHOTO")

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
      className="min-h-screen bg-white grid  p-8">
       
       <div className="gap-8 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
        <UserInfo
        // @ts-ignore
        className="mx-2 fixed"
        />
        <div className="h-min w-full">
          <div className="rounded-md grid grid-cols-2 shadow-md hover:shadow-lg py-1 text-sm font-semibold">
      <button
      className="flex "
      onClick={() => setFeed("PHOTO")}
      >
        <div className="mx-auto flex items-center text-center ">
        <BiPhotoAlbum
        fontSize={18}
        className="mx-auto"
        />
       <span className="mx-2">Photo</span>
       </div>
      </button>

      <button
      className="flex "
      onClick={() => setFeed("VIDEO")}
      >
        <div className="mx-auto flex items-center text-center ">
        <MdSlowMotionVideo
        fontSize={18}
        className="mx-auto"
        />
        <span className="mx-2">Video</span>
        </div>
      </button>
      </div>
       <div className="w-full">
      {
        (feed === "PHOTO") ? <Photo/> : <Video/>
      }
      </div>
          </div>
        <Discover
        // @ts-ignore
        className="mx-2"
        />
        
      </div>
      
      </main>
    </>
  )
}
