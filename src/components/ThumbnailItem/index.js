import './index.css'
import {Component} from 'react'

class ThumbnailItem extends Component {
  render() {
    const {item, onImage} = this.props
    const {id, thumbnailUrl, thumbnailAltText} = item
    const onImageClick = () => {
      onImage(id)
    }

    return (
      <li>
        <img
          className="image-element"
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onImageClick}
        />
      </li>
    )
  }
}

export default ThumbnailItem
