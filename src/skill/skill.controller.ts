import { Controller, Get } from '@nestjs/common';
import { Skill, SkillData } from 'src/domain/models/Skill';

@Controller('skill')
export class SkillController {
  @Get()
  fetchMainSkills(): Skill[] {
    return SkillData.mainSkills;
  }

  @Get()
  fetchFrontEndSkills(): Skill[] {
    return SkillData.frontendSkills;
  }

  @Get()
  fetchBackEndSkills(): Skill[] {
    return SkillData.backendSkills;
  }

  @Get()
  fetchTools(): Skill[] {
    return SkillData.tools;
  }
}
