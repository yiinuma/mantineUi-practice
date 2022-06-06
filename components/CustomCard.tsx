import { FC } from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

type Props = {
  title: string;
  content: string;
  status: string;
  postUrl: string;
};

export const CustomCard: FC<Props> = ({ title, content, status, postUrl }) => {
  return (
    <Card shadow="md" className="h-[360px]">
      <Card.Section>
        <Image
          src={postUrl}
          height={160}
          alt="With default placeholder"
          withPlaceholder
        />
      </Card.Section>
      <Group position="apart" my="md">
        <Text weight={800}>{title}</Text>
        <Badge color="pink" radius="lg" variant="filled">
          {status}
        </Badge>
      </Group>
      <Text size="sm" className="min-h-32 line-clamp-4">
        {content}
      </Text>
      <Button mt="md" size="xs" variant="light" color="indigo" fullWidth>
        Subscribe
      </Button>
    </Card>
  );
};
