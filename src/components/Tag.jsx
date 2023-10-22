import './tag.css'
const Tag = ({tagName}) => {
  // console.log("props",props)
  return (
    <div style={{
      display:"flex",

    }}>
        <button className="tag">
          {tagName}
           </button>
       
    </div>
  )
}

export default Tag

