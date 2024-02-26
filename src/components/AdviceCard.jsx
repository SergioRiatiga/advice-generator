import axios from 'axios'
import {useEffect, useState} from 'react'

const AdviceCard = () => {
  const [advice, setAdvice] = useState()
  const [click, setClick] = useState(0)

  useEffect(() => {
    const url = 'https://api.adviceslip.com/advice'
    axios
      .get(url)
      .then((res) => setAdvice(res.data.slip))
      .catch((err) => console.log(err))
  }, [click])

  const handleClick = () => {
    setClick(click + 1)
  }

  return (
    <article className='text-white bg-slate-700 w-full mx-4 rounded-xl px-8 pt-12 max-w-lg'>
      <section className='flex flex-col justify-center items-center'>
        <h2 className='text-center pb-8 text-green-400 text-lg'>
          ADVICE #{advice?.id}
        </h2>
        <p className='pb-8 text-3xl font-semibold text-center'>
          "{advice?.advice}"
        </p>
        <img
          className='pb-20 md:hidden'
          src='../../img/pattern-divider-mobile.svg'
          alt=''
        />
        <img
          className='hidden md:block pb-20'
          src='../../img/pattern-divider-desktop.svg'
          alt=''
        />
      </section>
      <button
        onClick={handleClick}
        className='duration-200 active:scale-95 bg-green-300 flex justify-center items-center w-14 h-14 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2  hover:shadow-green-400/70 hover:shadow-[0px_0px_20px_10px_rgba(14,30,37,0.12)]'
      >
        <img src='../../img/icon-dice.svg' alt='dice' />
      </button>
    </article>
  )
}

export default AdviceCard
