import { UserRole } from '@prisma/client';

export const rolePolicy = {
  evidenceTabs: {
    [UserRole.Guest]: [1],
    [UserRole.PublicUser]: [1],
    [UserRole.ProUser]: [1, 2, 3],
    [UserRole.VerifiedDoctor]: [1, 2, 3],
    [UserRole.ResearchContributor]: [1, 2, 3],
    [UserRole.PolicyContributor]: [1, 2, 3],
    [UserRole.SectionEditor]: [1, 2, 3],
    [UserRole.HeadEditor]: [1, 2, 3],
    [UserRole.ThinkTankFellow]: [1, 2, 3],
    [UserRole.Admin]: [1, 2, 3],
  },
};

export const contributorRoles = [UserRole.VerifiedDoctor, UserRole.ResearchContributor, UserRole.PolicyContributor];
export const sectionEditorRoles = [UserRole.SectionEditor, UserRole.HeadEditor, UserRole.Admin];
export const headEditorRoles = [UserRole.HeadEditor, UserRole.Admin];
