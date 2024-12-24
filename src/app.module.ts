import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExperienceModule } from './experience/experience.module';
import { ProjectModule } from './project/project.module';
import { SkillModule } from './skill/skill.module';
import { SocialMediaModule } from './social-media/social-media.module';
import { StudyModule } from './study/study.module';

@Module({
  imports: [
    ExperienceModule,
    StudyModule,
    SkillModule,
    SocialMediaModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
