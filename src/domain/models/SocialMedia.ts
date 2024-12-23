export interface SocialMedia {
  logo: string;
  name: string;
  link: string;
}

export class SocialMediaData {
  static github: SocialMedia = {
    name: 'Github',
    logo: '/assets/images/social-media/github.svg',
    link: 'https://github.com/theosementa',
  };

  static linkedin: SocialMedia = {
    name: 'LinkedIn',
    logo: '/assets/images/social-media/linkedin.svg',
    link: 'https://www.linkedin.com/in/theosementa/',
  };

  static twitter: SocialMedia = {
    name: 'Twitter/X',
    logo: '/assets/images/social-media/x.svg',
    link: 'https://twitter.com/theosementa',
  };

  static discord: SocialMedia = {
    name: 'Discord',
    logo: '/assets/images/social-media/discord.svg',
    link: 'https://discord.com/users/535025719777034250',
  };

  static appStore: SocialMedia = {
    name: 'App Store',
    logo: '/assets/images/social-media/appstore.svg',
    link: 'https://apps.apple.com/fr/developer/theo-sementa/id1608409500',
  };

  static mail: SocialMedia = {
    name: 'Mail',
    logo: '/assets/images/social-media/gmail.svg',
    link: 'mailto:theosementa@gmail.com',
  };

  static allSocialMedias: SocialMedia[] = [
    SocialMediaData.github,
    SocialMediaData.linkedin,
    SocialMediaData.twitter,
    SocialMediaData.discord,
    SocialMediaData.appStore,
    SocialMediaData.mail,
  ];
}
