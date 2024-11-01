import React from 'react'

function Title({title,des}) {
  return (
    <div className="flex flex-col gap-4 pb-20">
        <h3 className=" text-sm tracking-wide uppercase text-[#FF014B]">{title}</h3>
        <h1 className="text-5xl font-bold capitalize">{des}</h1>
    </div>
  )
}

export default Title
