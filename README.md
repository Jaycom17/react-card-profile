# React ProfileCard

**ProfileCard** is a React component designed for creating interactive and customizable profile cards. Use this component to showcase information about an individual, including their name, description, social media links, and more.

## Key Features

- **Customization:** Highly customizable with options to adjust width, background color, title color, text color, and background image of the card.

- **Integrated Social Icons:** Includes predefined social media icons for platforms such as Facebook, Github, Instagram, Twitter, TikTok, LinkedIn, and Youtube.

- **Automatic Social Media Detection:** Automatically selects the correct icon for the provided social media links, making it easy to integrate new platforms.

## Installation

```bash
npm install react-profile-card
```
## Basic Usage

``` js
import React from 'react';
import ProfileCard from 'react-profile-card';

const MyProfile = () => {
  const myCardStyle = {
    width: '300px',
    backgroundColor: '#F0F0F0',
    titleColor: '#333333',
    descriptionColor: '#666666',
    backgroundPicture: 'https://example.com/background.jpg',
    pictureUrl: 'https://example.com/profile-picture.jpg',
  };

  const myMedias = ['https://facebook.com/myprofile', 'https://github.com/myprofile'];

  return <ProfileCard name="John Doe" description="Software Developer" mediasUrl={myMedias} cardStyle={myCardStyle} />;
};

export default MyProfile;

```

## Props

|Prop	|Type	|Description|
|name	|string	|The name of the individual being displayed.|
|description	|string	|(Optional) A brief description or role of the individual.|
|mediasUrl	|string[]	|An array of social media URLs associated with the individual.|
|cardStyle	|object	|(Optional) An object containing styles for customizing the appearance of the profile card.|

### cardStyle Object Properties

|Property	|Type	|Description|
|width	|string	|(Optional) Width of the profile card. Example: '300px'.|
|backgroundColor	|string	|(Optional) Background color of the card. Example: '#F0F0F0'.|
|titleColor	|string	|(Optional) Color of the title (name) text. Example: '#333333'.|
|descriptionColor	|string	|(Optional) Color of the description text. Example: '#666666'.|
|backgroundPicture	|string	|(Optional) URL of the background picture for the card. Example: 'https://example.com/background.jpg'.|
|pictureUrl	|string	|URL of the individual's profile picture. Example: 'https://example.com/profile-picture.jpg'.|

Customize and showcase your profiles attractively with ProfileCard!