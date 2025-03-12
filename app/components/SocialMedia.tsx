"use client";
import { InstagramEmbed } from "react-social-media-embed";

export default function SocialMedia() {
  return (
    <div style={{ display: "flex-col", justifyContent: "center" }}>
      <InstagramEmbed
        url="https://www.instagram.com/p/CUbHfhpswxt/"
        width={328}
        captioned
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/CUbHfhpswxt/"
        width={328}
        captioned
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/CUbHfhpswxt/"
        width={328}
        captioned
      />
    </div>
  );
}
