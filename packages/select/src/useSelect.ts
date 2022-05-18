import React, {createContext} from "react";
import { createDescendantContext } from '@chakra-ui/descendant';
import { usePopper, UsePopperProps } from "@chakra-ui/popper";
import { useDisclosure, UseDisclosureProps } from "@chakra-ui/hooks";

export interface SelectProviderProps extends Omit<UsePopperProps, "enabled">, UseDisclosureProps {
  autoSelect?: boolean,
  closeOnBlur?: boolean,
  closeOnSelect?: boolean,
  computePositionOnMount?: boolean
}

export const [
  SelectDescendantsProvider,
  useSelectDescendantsContext,
  useSelectDescendants,
  useSelectDescendant,
] = createDescendantContext<HTMLElement>()

export const SelectProvider = createContext<SelectProviderProps>({})

export const useMenu = (props: SelectProviderProps = {}) => {
  const {
    id,
    closeOnSelect = true,
    closeOnBlur = true,
    autoSelect = true,
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenProp,
    placement = "bottom-start",
    direction,
    computePositionOnMount = false,
    ...popperProps
  } = props

  const selectRef = React.useRef<HTMLDivElement>(null)

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure({
    isOpen: isOpenProp,
    defaultIsOpen,
    onClose: onCloseProp,
    onOpen: onOpenInternal,
  })
}
