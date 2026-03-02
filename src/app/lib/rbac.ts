export type Role =
  | 'Guest'
  | 'PublicUser'
  | 'ProUser'
  | 'VerifiedDoctor'
  | 'ResearchContributor'
  | 'PolicyContributor'
  | 'SectionEditor'
  | 'HeadEditor'
  | 'ThinkTankFellow'
  | 'Admin';

export const roleTabs: Record<Role, number[]> = {
  Guest: [1],
  PublicUser: [1],
  ProUser: [1, 2, 3],
  VerifiedDoctor: [1, 2, 3],
  ResearchContributor: [1, 2, 3],
  PolicyContributor: [1, 2, 3],
  SectionEditor: [1, 2, 3],
  HeadEditor: [1, 2, 3],
  ThinkTankFellow: [1, 2, 3],
  Admin: [1, 2, 3],
};

export const eligibleContributorRoles: Role[] = ['VerifiedDoctor', 'ResearchContributor', 'PolicyContributor'];
