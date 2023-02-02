import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { FiExternalLink, FiMenu } from 'react-icons/fi';

const MobileMenu = () => (
  <Menu>
    <MenuButton as={Button}>
      <FiMenu />
    </MenuButton>
    <MenuList>
      <MenuItem
        as="a"
        hidden={!process.env.NEXT_PUBLIC_GITHUB_URL}
        href={process.env.NEXT_PUBLIC_GITHUB_URL}
        target="_blank"
      >
        <Icon as={IoLogoGithub} marginRight="0.5rem" />
        GitHub
      </MenuItem>
      <MenuItem
        as="a"
        hidden={!process.env.NEXT_PUBLIC_LINKEDIN_URL}
        href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
        target="_blank"
      >
        <Icon as={IoLogoLinkedin} marginRight="0.5rem" />
        LinkedIn
      </MenuItem>
      <MenuItem
        as="a"
        hidden={!process.env.NEXT_PUBLIC_CONTACT_URL}
        href={process.env.NEXT_PUBLIC_CONTACT_URL}
        target="_blank"
      >
        <Icon as={IoMdMail} marginRight="0.5rem" />
        Contact
      </MenuItem>
    </MenuList>
  </Menu>
);

const DesktopMenu = () => (
  <ButtonGroup isAttached>
    <Button
      as="a"
      hidden={!process.env.NEXT_PUBLIC_GITHUB_URL}
      href={process.env.NEXT_PUBLIC_GITHUB_URL}
      leftIcon={<IoLogoGithub />}
      target="_blank"
    >
      GitHub
    </Button>

    <Button
      as="a"
      hidden={!process.env.NEXT_PUBLIC_LINKEDIN_URL}
      href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
      leftIcon={<IoLogoLinkedin />}
      target="_blank"
    >
      LinkedIn
    </Button>

    <Button
      as="a"
      hidden={!process.env.NEXT_PUBLIC_CONTACT_URL}
      href={process.env.NEXT_PUBLIC_CONTACT_URL}
      leftIcon={<IoMdMail />}
      target="_blank"
    >
      Contact
    </Button>
  </ButtonGroup>
);

interface GridBoxProps {
  description: string;
  isAuthor?: boolean;
  title: string;
  url: string;
}

const GridBox = (props: GridBoxProps) => (
  <Box
    as="a"
    href={props.url}
    target="_blank"
    borderWidth="1px"
    borderRadius="lg"
    padding="4"
  >
    <Stack alignItems="center" isInline justifyContent="space-between">
      <Stack direction="row">
        <Text as="h4" fontWeight="semibold">
          {props.title}
        </Text>
        {props.isAuthor ? (
          <Badge colorScheme="green" pt={1}>
            Author
          </Badge>
        ) : undefined}
      </Stack>
      <Box>
        <Icon as={FiExternalLink} />
      </Box>
    </Stack>
    <Box fontSize="11pt">{props.description}</Box>
  </Box>
);

const Home = () => (
  <>
    <Head>
      <title>{process.env.NEXT_PUBLIC_META_TITLE}</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content={process.env.NEXT_PUBLIC_META_DESCRIPTION}
      />
      <meta name="robots" content={process.env.NEXT_PUBLIC_META_ROBOTS} />
      <meta name="viewport" content={process.env.NEXT_PUBLIC_META_VIEWPORT} />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_META_URL} />

      {/* Open Graph */}
      <meta
        name="og:description"
        content={process.env.NEXT_PUBLIC_META_DESCRIPTION}
      />
      <meta name="og:title" content={process.env.NEXT_PUBLIC_META_TITLE} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={process.env.NEXT_PUBLIC_META_URL} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={process.env.NEXT_PUBLIC_META_TITLE} />
      <meta
        name="twitter:description"
        content={process.env.NEXT_PUBLIC_META_DESCRIPTION}
      />
    </Head>

    <Box maxW="6xl" mx="auto" pt={4} px={8}>
      <Stack alignItems="center" isInline justifyContent="space-between">
        <Heading>Kirk Eaton</Heading>

        <Box display={['block', 'block', 'none', 'none']}>
          <MobileMenu />
        </Box>

        <Box display={['none', 'none', 'block', 'block']}>
          <DesktopMenu />
        </Box>
      </Stack>
    </Box>

    <Box maxW="6xl" mx="auto" px={8}>
      <Box className="about">
        <Heading pt={4} size="lg">
          About Me
        </Heading>

        <Text fontWeight="light" pt={4}>
          Experienced{' '}
          <Text as="span" fontWeight="bold">
            Software Engineer
          </Text>{' '}
          with a demonstrated history of shipping efficient &amp; reliable
          software.
        </Text>

        <Text fontWeight="semi-bold" pt={4}>
          My work experience can be found in my{' '}
          <Link href="/resume.pdf" fontWeight="bold" target="_blank">
            resume
          </Link>
        </Text>
      </Box>

      <Box className="projects">
        <Heading pt={4} size="lg">
          Projects
        </Heading>

        <SimpleGrid
          justifyContent="center"
          minChildWidth="20rem"
          spacing="1rem"
          pt={4}
        >
          <GridBox
            title="@piste-icons/react"
            description="React components for ski trail difficulty symbols."
            url="https://github.com/kirkeaton/piste-icons-react"
            isAuthor
          />

          <GridBox
            title="@piste-icons/svg"
            description="SVGs for ski trail difficulty symbols."
            url="https://github.com/kirkeaton/piste-icons-svg"
            isAuthor
          />

          <GridBox
            title="skiz-parser"
            description="Library that parses .skiz files exported from Ski Tracks."
            url="https://github.com/kirkeaton/skiz-parser"
            isAuthor
          />

          <GridBox
            title="read-pubspec"
            description="Library that reads a pubspec.yaml file."
            url="https://github.com/kirkeaton/read-pubspec"
            isAuthor
          />

          <GridBox
            title="particle_setup"
            description="Library that sends commands to Particle devices."
            url="https://github.com/kirkeaton/particle_setup"
            isAuthor
          />
        </SimpleGrid>
      </Box>
    </Box>

    <Center maxW="6xl" mx="auto" pt={4} px={8}>
      Copyright &#169; 2021 Kirk Eaton
    </Center>
  </>
);

export default Home;
