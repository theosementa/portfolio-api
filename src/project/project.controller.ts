import { Controller, Get } from '@nestjs/common';
import { ProjectData } from 'src/domain/models/Project';

@Controller('project')
export class ProjectController {
  @Get()
  getProjects() {
    return ProjectData.projects;
  }
}
