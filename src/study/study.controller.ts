import { Controller, Get } from '@nestjs/common';
import { Study, StudyData } from 'src/domain/models/Study';

@Controller('study')
export class StudyController {
  @Get()
  fetchStudies(): Study[] {
    return StudyData.allStudies;
  }
}
