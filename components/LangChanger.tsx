/* 'use client'
import { useRouter } from "next/router"
import Link from "next/link"

const LangChanger = () => {

  const {locale, locales, push} = useRouter()
  
  const hc = l => {
    push('/', undefined, {locale:l})
  }
  return (
    <div>
      <h2>{locale}</h2>
      <div>
        {locales.map(l => (<button key={l} onClick={hc(l)}>
          {l}
        </button>))}
        </div>
    </div>
  )
}

export default LangChanger */