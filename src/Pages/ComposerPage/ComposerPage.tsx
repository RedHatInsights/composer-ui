import { Content, PageSection } from '@patternfly/react-core';
import PageHeader from '@redhat-cloud-services/frontend-components/PageHeader/PageHeader';

const ComposerPage = () => {
  return (
    <>
      <PageHeader>
        <Content component="h1">Workspaces</Content>
      </PageHeader>
      <PageSection>
        <Content component="p">Hello, subscription composer!</Content>
      </PageSection>
    </>
  );
};

export default ComposerPage;
