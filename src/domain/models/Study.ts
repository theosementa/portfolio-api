import { Presentable } from '../interface/Presentable';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Study extends Presentable {}

export class StudyData {
  static master: Study = {
    title: 'studies.master.title',
    banner: '/assets/images/studies/master_banner.jpg',
    entity: 'Metz Numeric School',
    startDate: 'studies.master.startDate',
    endDate: 'studies.master.endDate',
    location: 'Metz, France',
    description: 'studies.master.description',
    website: 'https://www.metz-numeric-school.fr/',
  };

  static bachelor: Study = {
    title: 'studies.bachelor.title',
    banner: '/assets/images/studies/bachelor_banner.jpg',
    entity: 'Metz Numeric School',
    startDate: 'studies.bachelor.startDate',
    endDate: 'studies.bachelor.endDate',
    location: 'Metz, France',
    description: 'studies.bachelor.description',
    website: 'https://www.metz-numeric-school.fr/',
  };

  static bts: Study = {
    title: 'studies.bts.title',
    banner: '/assets/images/studies/bts_banner.jpg',
    entity: 'UIMM Lorraine',
    startDate: 'studies.bts.startDate',
    endDate: 'studies.bts.endDate',
    location: 'Yutz, France',
    description: 'studies.bts.description',
    website: 'https://www.uimm.fr/',
  };

  static allStudies: Study[] = [this.master, this.bachelor, this.bts];
}
