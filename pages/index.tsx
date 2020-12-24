import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { FiExternalLink, FiMenu } from 'react-icons/fi';

const MobileMenu = () => (
  <Menu>
    <MenuButton as={Button}>
      <FiMenu />
    </MenuButton>
    <MenuList>
      <MenuItem as="a" href="https://github.com/kirkeaton" target="_blank">
        <Icon as={IoLogoGithub} marginRight="0.5rem" />
        GitHub
      </MenuItem>
      <MenuItem
        as="a"
        href="https://www.linkedin.com/in/kirk-eaton/"
        target="_blank"
      >
        <Icon as={IoLogoLinkedin} marginRight="0.5rem" />
        LinkedIn
      </MenuItem>
      <MenuItem as="a" href="mailto:kirk.eaton@gmail.com" target="_blank">
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
      href="https://github.com/kirkeaton"
      leftIcon={<IoLogoGithub />}
      target="_blank"
    >
      GitHub
    </Button>

    <Button
      as="a"
      href="https://www.linkedin.com/in/kirk-eaton/"
      leftIcon={<IoLogoLinkedin />}
      target="_blank"
    >
      LinkedIn
    </Button>

    <Button
      as="a"
      href="mailto:kirk.eaton@gmail.com"
      leftIcon={<IoMdMail />}
      target="_blank"
    >
      Contact
    </Button>
  </ButtonGroup>
);

export interface BadgeProps {
  colorScheme?: string;
  value: string;
}

export interface GridBoxProps {
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
    <Box minW="md" maxW="6xl" mx="auto" pt={4} px={8}>
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

    <Box minWidth="md" maxW="6xl" mx="auto" px={8}>
      <Box className="about">
        <Heading py={4} size="lg">
          About Me
        </Heading>

        <Text fontWeight="light">
          Experienced{' '}
          <Text as="span" fontWeight="bold">
            Software Engineer
          </Text>{' '}
          with a demonstrated history of shipping efficient &amp; reliable
          software.
        </Text>
      </Box>

      <Box className="projects">
        <Heading py={4} size="lg">
          Projects &amp; Contributions
        </Heading>

        <SimpleGrid
          justifyContent="center"
          minChildWidth="20rem"
          spacing="1rem"
        >
          <GridBox
            title="Particle Setup"
            description="Library that sends commands to Particle devices."
            url="https://github.com/kirkeaton/particle_setup"
            isAuthor
          />

          <GridBox
            title="Read Pubspec"
            description="Library that reads a pubspec.yaml file."
            url="https://github.com/kirkeaton/read-pubspec"
            isAuthor
          />

          <GridBox
            title="Sudoku Image Solver"
            description="Program that processes and solves Sudoku puzzles."
            url="https://github.com/kirkeaton/sudoku-image-solver"
            isAuthor
          />

          <GridBox
            title="Mongoose History"
            description="Plugin that keeps a history of all changes of a document."
            url="https://github.com/nassor/mongoose-history"
          />

          <GridBox
            title="Flutter Circular Slider"
            description="Customizable circular slider for Flutter."
            url="https://github.com/davidanaya/flutter-circular-slider"
          />

          <GridBox
            title="FOAM Framework"
            description="Modeling tool and class based object system."
            url="https://github.com/foam-framework/foam2"
          />
        </SimpleGrid>
      </Box>
    </Box>

    <Center minWidth="md" maxW="6xl" mx="auto" py={4} px={8}>
      Copyright &#169; 2020 Kirk Eaton
    </Center>
  </>
);

export default Home;
