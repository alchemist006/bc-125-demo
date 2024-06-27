import React from 'react'
interface ImagePropsInterface {
  src: string
  alt?: string
  height?: string
  width?: string
  onClick?: () => void
}

const Image = ({ src, alt, height, width, onClick, ...imageProps }: ImagePropsInterface) => {
  return (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      onClick={onClick}
      data-testid="image-component"
      {...imageProps}
    />
  )
}
export default Image
