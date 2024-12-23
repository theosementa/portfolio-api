import { Controller, Get } from '@nestjs/common';
import { SocialMedia, SocialMediaData } from 'src/domain/models/SocialMedia';

@Controller('social-media')
export class SocialMediaController {
  @Get()
  fetchSocialMedias(): SocialMedia[] {
    return SocialMediaData.allSocialMedias;
  }
}
