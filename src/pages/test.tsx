import { Accordion, Breadcrumbs, Flex } from '@aws-amplify/ui-react';
import AuthorCreateForm from '../../ui-components/AuthorCreateForm';
import useClient from '@/hooks/useClient';

export default function TestPage() {
  const { client } = useClient();

  client.models.Author.list().then((results) => {
    console.log(results);
  });

  return (
    <Flex direction="column">
      <Breadcrumbs
        items={[
          {
            href: '/',
            label: 'Home',
          },
        ]}
      />

      {/* A contact form */}

      <Accordion.Container>
        <Accordion.Item value="item1">
          <Accordion.Trigger>Item 1</Accordion.Trigger>
          <Accordion.Content>
            <AuthorCreateForm />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Container>
    </Flex>
  );
}
