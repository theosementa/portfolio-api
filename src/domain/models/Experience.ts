import { Presentable } from '../interface/Presentable';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Experience extends Presentable {}

export class ExperienceData {
  static neopixl: Experience = {
    title: 'experiences.neopixl.title',
    banner: '/assets/images/experiences/neopixl_banner.jpg',
    entity: 'Neopixl',
    startDate: 'experiences.neopixl.startDate',
    endDate: 'experiences.neopixl.endDate',
    location: 'Differdange, Luxembourg',
    description: 'experiences.neopixl.description',
    website: 'https://neopixl.lu/',
  };

  static efluid: Experience = {
    title: 'experiences.efluid.title',
    banner: '/assets/images/experiences/efluid_banner.jpg',
    entity: 'Efluid',
    startDate: 'experiences.efluid.startDate',
    endDate: 'experiences.efluid.endDate',
    location: 'Metz, France',
    description: 'experiences.efluid.description',
    website: 'https://www.efluid.com/',
  };

  static antares: Experience = {
    title: 'experiences.antares.title',
    banner: '/assets/images/experiences/antares_banner.jpg',
    entity: 'Antares',
    startDate: 'experiences.antares.startDate',
    endDate: 'experiences.antares.endDate',
    location: 'Metz, France',
    description: 'experiences.antares.description',
    website: 'https://www.antares.fr/',
  };

  static allExperiences: Experience[] = [
    this.neopixl,
    this.efluid,
    this.antares,
  ];
}
