import Link from 'next/link';
import { ReplyIcon } from '@heroicons/react/solid';
import { Button, Group } from '@mantine/core';
import { BrandGithub, ThreeDCubeSphere } from 'tabler-icons-react';

import { Layout } from '../components/Layout';

const ButtonDemo = () => {
  return (
    <Layout title="Button">
      <Group position="center" direction="column">
        <Button
          classNames={{
            leftIcon: 'text-pink-500 h-6 w-6',
            rightIcon: 'text-orange-500 h-6 w-6',
          }}
          variant="light"
          color="teal"
          radius="lg"
          size="md"
          uppercase
          leftIcon={<BrandGithub />}
          rightIcon={<ThreeDCubeSphere />}
        >
          Detail
        </Button>
        <Button mt="md">Click</Button>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Group>
    </Layout>
  );
};

export default ButtonDemo;
