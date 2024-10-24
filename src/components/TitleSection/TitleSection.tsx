import React from 'react'

type TitleSectionProps = {
    title: string;
    subtitle: string;
    description: string;
    className: string
}

export const TitleSection = ({title, subtitle, description, className}: TitleSectionProps) => {
  return (
    <div className={className}>
        <span className='text-sm uppercase text-primary'>{title}</span>
        <h2 className='text-3xl'>{subtitle}</h2>
        <p>{description}</p>
    </div>
  )
}
