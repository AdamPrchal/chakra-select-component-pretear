import { selectAnatomy as parts } from "@chakra-ui/anatomy"
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools"
import { mergeWith } from "@chakra-ui/utils"
import { mode } from "@chakra-ui/theme-tools"
import { theme as baseTheme } from '@chakra-ui/react';

const { Input } = baseTheme.components;

const baseStyleField: SystemStyleFunction = (props) => {
  return {
    Input,
    bg: mode("white", "gray.700")(props),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    "> option, > optgroup": {
      bg: mode("white", "gray.700")(props),
    },
  }
}

const baseStyleIcon: SystemStyleObject = {
  width: "1.5rem",
  height: "100%",
  insetEnd: "0.5rem",
  position: "relative",
  color: "currentColor",
  fontSize: "1.25rem",
  _disabled: {
    opacity: 0.5,
  },
}

const baseStyleList: SystemStyleFunction = (props) => {
  return {
    bg: mode("#fff", "gray.700")(props),
    boxShadow: mode("sm", "dark-lg")(props),
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
  }
}

const baseStyleItem: SystemStyleFunction = (props) => {
  return {
    bg: "pink",
    py: "0.4rem",
    px: "0.8rem",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
    },
    _active: {
      bg: mode("gray.200", "whiteAlpha.200")(props),
    },
    _expanded: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  }
}

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  field: baseStyleField(props),
  icon: baseStyleIcon,
  list: baseStyleList(props),
  item: baseStyleItem(props),
})

const iconSpacing = { paddingInlineEnd: "2rem" }

const sizes: Record<string, PartsStyleObject<typeof parts>> = mergeWith(
  {},
  Input.sizes,
  {
    lg: {
      field: iconSpacing,
    },
    md: {
      field: iconSpacing,
    },
    sm: {
      field: iconSpacing,
    },
    xs: {
      field: iconSpacing,
      icon: { insetEnd: "0.25rem" },
    },
  },
)

export default {
  parts: ['field', 'icon', 'list', 'item'],
  baseStyle,
  sizes,
  variants: Input.variants,
  defaultProps: Input.defaultProps,
}
