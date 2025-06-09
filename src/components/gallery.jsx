import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/gallery/OJH02432_수정.webp";
import GalleryPhoto2 from "../assets/gallery/OJH02766_수정.webp";
import GalleryPhoto3 from "../assets/gallery/OJH02786_수정_하늘.webp";
import GalleryPhoto4 from "../assets/gallery/OJH02854_수정.webp";
import GalleryPhoto5 from "../assets/gallery/OJH02874_수정.webp";
import GalleryPhoto6 from "../assets/gallery/OJH02917_수정_하늘.webp";
import GalleryPhoto7 from "../assets/gallery/OJH03041.webp";
import GalleryPhoto8 from "../assets/gallery/OJH03143.webp";
import GalleryPhoto9 from "../assets/gallery/OJH03171.webp";
import GalleryPhoto10 from "../assets/gallery/OJH03257_수정.webp";
import GalleryPhoto11 from "../assets/gallery/OJH03351_수정.webp";
import GalleryPhoto12 from "../assets/gallery/OJH03409_수정.webp";
import GalleryPhoto13 from "../assets/gallery/OJH03428_수정.webp";
import GalleryPhoto14 from "../assets/gallery/OJH03464_수정.webp";
import GalleryPhoto15 from "../assets/gallery/OJH03597_수정.webp";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
  {
    original: GalleryPhoto8,
    thumbnail: GalleryPhoto8,
  },
  {
    original: GalleryPhoto9,
    thumbnail: GalleryPhoto9,
  },
  {
    original: GalleryPhoto10,
    thumbnail: GalleryPhoto10,
  },
  {
    original: GalleryPhoto11,
    thumbnail: GalleryPhoto11,
  },
  {
    original: GalleryPhoto12,
    thumbnail: GalleryPhoto12,
  },
  {
    original: GalleryPhoto13,
    thumbnail: GalleryPhoto13,
  },
  {
    original: GalleryPhoto14,
    thumbnail: GalleryPhoto14,
  },
  {
    original: GalleryPhoto15,
    thumbnail: GalleryPhoto15,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>PHOTO</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={true}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
