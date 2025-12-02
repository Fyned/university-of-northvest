export type DegreeLevel = 'Bachelor' | 'Master' | 'Doctorate';

export interface Programme {
  id: string;
  title: string;
  level: DegreeLevel;
  description: string;
  duration: string;
  faculty?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: string;
  image?: string;
}