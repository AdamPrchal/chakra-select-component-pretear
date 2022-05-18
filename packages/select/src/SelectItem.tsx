import React from "react";
import {chakra, forwardRef, HTMLChakraProps, SystemStyleObject, useStyles} from "@chakra-ui/system";
import {cx} from "@chakra-ui/utils";

type IsDisabledProps = "disabled" | "aria-disabled"

export interface MenuItemProps extends Omit<HTMLChakraProps<"button">, IsDisabledProps> {}

export const SelectItem = forwardRef<MenuItemProps, "button">((props, ref) => {
  const {
    children,
    ...rest
  } = props;

  const styles = useStyles();
  // const menuitemProps = useMenuItem(rest, ref) as HTMLAttributes

  const buttonStyles: SystemStyleObject = React.useMemo(
    () => ({
      textDecoration: "none",
      color: "inherit",
      userSelect: "none",
      display: "flex",
      width: "100%",
      alignItems: "center",
      textAlign: "start",
      flex: "0 0 auto",
      outline: 0,
      ...styles.item,
    }),
    [styles.item],
  )

  return (
    <chakra.button
      __css={buttonStyles}
      className={cx("chakra-menu__menuitem", '')}
      {...rest}
    >
      {children}
    </chakra.button>
  )
})
