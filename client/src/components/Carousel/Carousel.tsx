import { Link } from 'react-router-dom'
import './carousel.css'
import { useState } from 'react'
import { ArrowButtons } from '../ArrowButtons/ArrowButtons'
interface image {
  title_front: string,
  title_middle: string,
  title_end: string,
  info: string,
  button_title: string,
  button_link: string,
}

interface Image {
  id: string,
  image: string,
}

type ImagesType = Image[]

interface Props {
  images: ImagesType,
  advertisement: image
}


export const Carousel: React.FC<Props> = ({ advertisement, images }) => {

  const [currentImage, changeCurrentImage] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  return (
    <section className='relative w-full overflow-x-auto shadow-lg -shadow--color-grey m-auto lg:my-8 lg:w-11/12 lg:rounded-xl'>
      <div className='overflow-hidden m-auto '>
        <section className='flex transition-transform duration-500 ease-in-out' style={{ transform: `translateX(${translateValue}%)` }}>
          {images.map((image) => {
            return (
              <img
                src={image.image}
                alt={image.id}
                className='min-w-full h-screen max-h-screen object-cover md:h-[32rem]'
              />
            )
          })}
        </section>
      </div>
      <section className='absolute top-2/3 grid gap-12 w-full md:top-auto md:bottom-4 md:left-16 md:w-96 md:h-44 md:rounded-xl md:gap-0 md:-bg--color-very-light-grey md:bg-opacity-60'>
        <section className=' w-full p-5 -bg--color-very-light-grey bg-opacity-60 md:bg-opacity-0'>
          <h1 className="font-bold text-2xl">{advertisement.title_front}<span className="-text--color-light-grey-violet -bg--color-black rounded-md px-2 mx-2">{advertisement.title_middle}</span> {advertisement.title_end}</h1>
          <p className="font-semibold text-sm">{advertisement.info}</p>
        </section>
        <Link to={advertisement.button_link} className="text-center -bg--color-black -text--color-light-grey-violet font-bold p-4 rounded-full w-11/12 max-w-lg m-auto mb-4 duration-150 hover:opacity-85">{advertisement.button_title}</Link>
      </section>
      <ArrowButtons currentImage={currentImage} changeCurrentImage={changeCurrentImage} setTranslateValue={setTranslateValue} carousel={true} />
    </section>
  )
}