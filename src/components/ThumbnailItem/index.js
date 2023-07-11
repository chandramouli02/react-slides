import './index.css'
import {Component} from 'react'

class ThumbnailItem extends Component {
  render() {
    const {item, onImage, activeImageId} = this.props
    const {id, thumbnailUrl, thumbnailAltText} = item
    const onImageClick = () => {
      onImage(id)
    }

    const imageBlurBackground = id === activeImageId ? '' : 'blur-background'

    return (
      <li>
        <button className="button-img" type="button">
          <img
            className={`image-element ${imageBlurBackground}`}
            src={thumbnailUrl}
            alt={thumbnailAltText}
            onClick={onImageClick}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
