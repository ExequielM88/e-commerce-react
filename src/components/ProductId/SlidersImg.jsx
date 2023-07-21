import { useState } from "react"
import "./styles/slidersImg.css"

const SlidersImg = ({product}) => {

  const [numberImg, setNumberImg] = useState(0)

  const objStyle = {
    transform: `translateX(calc(-${numberImg} / 3 * 100%))`
  }

  const handlePre = () => {
     if (numberImg -1 < 0) {
      setNumberImg(2)
     } else{
        setNumberImg(numberImg - 1)
      }
  }

  const handleNext = () => {
    if (numberImg + 1 > 2) {
      setNumberImg(0)
     } else{
        setNumberImg(numberImg + 1)
      }
  }
    
  return (
    <div className='slider'>
      <button onClick={handlePre} className="slider_arrowHead left">&lt;</button>
      <div style={objStyle} className="slider_interior">
        {
          product?.images.map((imgInfo) => (
            <div className="slider_img-container">
              <img className='slider_img'
               key={imgInfo.id}
               src={imgInfo.url} alt="" 
              />
            </div>
          ))
        }
      </div>
      <button onClick={handleNext} className="slider_arrowHead right">&gt;</button>
    </div>
  )
}

export default SlidersImg