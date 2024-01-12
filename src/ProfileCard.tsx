import React from "react";
import "./ProfileCard.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

interface CardStyle {
  width?: string;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  backgroundPicture?: string;
  pictureUrl: string;
}

interface AppProps {
  name: string;
  description?: string,
  mediasUrl: string[];
  cardStyle: CardStyle;
}

interface ComponentDictionary {
  [key: string]: React.FC<object>;
}

const componentDictionary: ComponentDictionary = {
  facebook: FaFacebook,
  github: FaGithub,
  instagram: FaInstagram,
  x: FaTwitter,
  tiktok: FaTiktok,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
};

const findMediaString = (url: string): string => {
  if (url.includes("www")) {
    return url.split(".")[1].toLowerCase();
  }

  return url.split("//")[1].toLowerCase().split(".")[0];
};

const findMedia = (url: string): React.FC<object> => {
  return componentDictionary[findMediaString(url)] || IoIosContact;
};


function ProfileCard({ name, description, mediasUrl, cardStyle }: AppProps) {
  return (
    <div className="card" style={ (cardStyle && cardStyle.width) ? {width: cardStyle.width} : {}}>
      <img
        src={(cardStyle && cardStyle.backgroundPicture) ? cardStyle.backgroundPicture: "./background.jpg"}
        alt="fondocard"
        className="card-header"
      />
      <div className="card-body" style={(cardStyle && cardStyle.backgroundColor) ? {background: cardStyle.backgroundColor} : {}}>
        <div className="card-body-contentimg" style={(cardStyle && cardStyle.backgroundColor) ? {background: cardStyle.backgroundColor} : {}}>
          <img
            src={cardStyle && cardStyle.pictureUrl}
            alt="profile"
            className="card-body-contentimg-img"
            width="150"
          />
        </div>
        <h1 className="card-body-title" style={(cardStyle && cardStyle.titleColor) ? {color: cardStyle.titleColor} : {}}>
          {name}
        </h1>
        <p className="card-body-text" style={(cardStyle && cardStyle.descriptionColor) ? {color: cardStyle.descriptionColor} : {}}>{ description }</p>
      </div>
      <div className="card-footer" style={(cardStyle && cardStyle.backgroundColor) ? {background: cardStyle.backgroundColor} : {}}>
        {mediasUrl.map((mediaUrl: string, index: number) => (
          <a href={mediaUrl} key={index} target="_blank" className="card-footer-media" style={(cardStyle && cardStyle.titleColor) ? {color: cardStyle.titleColor, borderColor: cardStyle.titleColor, boxShadow: `0px 0px 15px ${cardStyle.titleColor}`} : {}}>
            {React.createElement(findMedia(mediaUrl), { key: index })}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
