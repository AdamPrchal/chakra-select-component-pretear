import * as React from 'react';
import {
  ChakraProvider,
  extendTheme,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Parameters, StoryContext } from '@storybook/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { withPerformance } from 'storybook-addon-performance';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: "Direction",
    description: "Direction for layout",
    defaultValue: "LTR",
    toolbar: {
      icon: "globe",
      items: ["LTR", "RTL"],
    },
  },
}

const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const nextMode = useColorModeValue("dark", "light")

  return (
    <Flex position="absolute" top="1rem" right="1rem" justify="flex-end" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  )
}

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals
  const dir = direction.toLowerCase()

  React.useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])

  return (
    <ChakraProvider
      theme={extendTheme({
        direction: dir,
        // ...theme
      })}
    >
      <div dir={dir} id="story-wrapper">
        <ColorModeToggleBar />
        <StoryFn />
      </div>
    </ChakraProvider>
  )
}

export const parameters: Parameters = {
  controls: { expanded: true },
  viewport: { viewports: INITIAL_VIEWPORTS },
  options: {
    // @ts-ignore
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  }
}

export const decorators = [withChakra, withPerformance]
