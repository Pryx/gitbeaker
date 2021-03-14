import * as path from 'path';
import { chromium, Browser, Page } from "playwright";

let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await chromium.launch();
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(async () => {
  await page.close();
});

describe('Browser Import', () => {
  it('should import the Gitbeaker library though the global gitbeaker', async () => {
    await page.goto(`file://${path.resolve(__dirname, 'assets', 'test-import.html')}`);

    // Run import JS
    /* eslint-disable */
    const importObject = await page.evaluate(() => {
      // @ts-ignore
      const { Gitlab } = gitbeaker;
      const gl = new Gitlab();

      return gl;
    });
    /* eslint-enable */
    
    expect(Object.keys(importObject)).toIncludeAllMembers([
      'Groups',
      'GroupAccessRequests',
      'GroupBadges',
      'GroupCustomAttributes',
      'GroupIssueBoards',
      'GroupMembers',
      'GroupMilestones',
      'GroupProjects',
      'GroupRunners',
      'GroupVariables',
      'GroupLabels',
      'GroupDeployTokens',
      'Epics',
      'EpicIssues',
      'EpicNotes',
      'EpicDiscussions',
      'Users',
      'UserCustomAttributes',
      'UserEmails',
      'UserImpersonationTokens',
      'UserKeys',
      'UserGPGKeys',
      'Branches',
      'Commits',
      'CommitDiscussions',
      'ContainerRegistry',
      'Deployments',
      'DeployKeys',
      'Environments',
      'FreezePeriods',
      'Issues',
      'IssuesStatistics',
      'IssueNotes',
      'IssueDiscussions',
      'IssueAwardEmojis',
      'Jobs',
      'Labels',
      'MergeRequests',
      'MergeRequestApprovals',
      'MergeRequestAwardEmojis',
      'MergeRequestDiscussions',
      'MergeRequestNotes',
      'Packages',
      'Pipelines',
      'PipelineSchedules',
      'PipelineScheduleVariables',
      'Projects',
      'ProjectAccessRequests',
      'ProjectBadges',
      'ProjectCustomAttributes',
      'ProjectImportExport',
      'ProjectIssueBoards',
      'ProjectHooks',
      'ProjectMembers',
      'ProjectMilestones',
      'ProjectSnippets',
      'ProjectSnippetNotes',
      'ProjectSnippetDiscussions',
      'ProjectSnippetAwardEmojis',
      'ProtectedBranches',
      'ProtectedTags',
      'ProjectVariables',
      'ProjectDeployTokens',
      'PushRules',
      'Releases',
      'ReleaseLinks',
      'Repositories',
      'RepositoryFiles',
      'Runners',
      'Services',
      'Tags',
      'Todos',
      'Triggers',
      'VulnerabilityFindings',
      'ApplicationSettings',
      'BroadcastMessages',
      'Events',
      'FeatureFlags',
      'GeoNodes',
      'GitignoreTemplates',
      'GitLabCIYMLTemplates',
      'Keys',
      'License',
      'LicenceTemplates',
      'Lint',
      'Namespaces',
      'NotificationSettings',
      'Markdown',
      'PagesDomains',
      'Search',
      'SidekiqMetrics',
      'Snippets',
      'SystemHooks',
      'Version',
      'Wikis',
    ]);
  });
});
