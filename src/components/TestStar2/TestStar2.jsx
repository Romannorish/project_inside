import {useState} from "react"
import css from "./TestStar2.module.css"
import {MdOutlineStarBorder} from "react-icons/md"

export default function TestStar2({count = 5, hundleTotal}) {
  const [currItem, setCurrItem] = useState()
  const [hoveritem, setHoveritem] = useState()
  const stars = Array(count).fill(0)
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Star Rating 2</h1>
      <div className={css.starwrap}>
        {stars.map((star, index) => {
          const currentStyle = index <= currItem ? {color: "gold"} : {}
          const hovertStyle = index <= hoveritem ? {color: "gold"} : {}

          return (
            <MdOutlineStarBorder
              onClick={() => {
                setCurrItem(index)
                hundleTotal()
              }}
              className={css.star}
              key={index}
              style={{...currentStyle, ...hovertStyle}}
              onMouseMove={() => {
                setHoveritem(index)
              }}
              onMouseOut={() => {
                setHoveritem()
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
