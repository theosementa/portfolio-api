import { Controller, Get } from '@nestjs/common';
import { Experience, ExperienceData } from 'src/domain/models/Experience';

@Controller('experience')
export class ExperienceController {
  @Get()
  fetchExperiences(): Experience[] {
    return ExperienceData.allExperiences;
  }
}
