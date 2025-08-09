import React from 'react'
import {lang} from "../utils/languageConstants";
import { useSelector } from 'react-redux';

export default function GptSearchBar() {

  const languageKey = useSelector(store=> store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center '>
     <form className='w-1/2grid grid-cols-12'>
        <input className ="p-4 m-4  col-span-9" type="text" placeholder={lang[languageKey].searchPlaceHolder}/>
     <button className='col-span-3 py-2 px-4 m-4 bg-red-500 rounded-lg' onClick={e=>e.preventDefault()}>{lang[languageKey].search}</button>
     </form>
    </div>
  )
}

