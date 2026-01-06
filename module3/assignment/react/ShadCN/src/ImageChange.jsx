import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ImageChange() {
  const images = [
    "https://www.pngplay.com/image/511596",
    "https://wallpapers.com/png/thumbs-up-cat-meme-7avdmx4bbkkqcrj2.html",
    "https://www.pinterest.com/pin/angry-cat-meme-hd-png-download--498562621260052313/",
  ]

  const [index, setIndex] = useState(0)

  function nextImage() {
    setIndex((index + 1) % images.length)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Image Change</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 text-center">
        <img src={images[index]} />
        <Button onClick={nextImage}>Next</Button>
      </CardContent>
    </Card>
  )
}