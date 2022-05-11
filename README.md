


# Select
#### autoSelect
**Description**: If `true`, the first enabled menu item will receive focus and be selected when the menu opens.

**Type**: `boolean`

**Default**: `true`


#### closeOnBlur
**Description**: If `true`, the menu will close when you click outside the menu list.

**Type**: `boolean`

**Default**: `true`


#### closeOnSelect
**Description**: If `true`, the menu will close when a menu item is clicked.

**Type**: `boolean`

**Default**: `true`


#### colorScheme
**Description**: Color Schemes for `Menu` are not implemented in the default theme. You can [extend the theme](https://chakra-ui.com/docs/theming/customize-theme#customizing-component-styles) to implement them.

**Type**: `(string & {})`

#### defaultIsOpen
**Type**: `boolean`


#### direction
**Description**: If `rtl`, poper placement positions will be flipped i.e. 'top-right' will become 'top-left' and vice-verse.

**Type**: `"ltr" | "rtl"`


#### gutter
**Description**: The distance or margin between the reference and popper. It is used internally to create an `offset` modifier. NB: If you define `offset` prop, it'll override the gutter.

**Type**: `number`

**Default**: `8`


#### size
**Description**: The distance or margin between the reference and popper. It is used internally to create an `offset` modifier. NB: If you define `offset` prop, it'll override the gutter.

**Type**: `number`

**Default**: `8`


#### isOpen
**Type**: `boolean`


#### onClose
**Type**: `(() => void)`


#### onOpen
**Type**: `(() => void)`


#### placement
**Description**: The placement of the popper relative to its reference.

**Type**: `PlacementWithLogical`

**Default**: `"bottom"`


#### allowClear
**Description**: The option that allows user to clear the selected option.

**Type**: `boolean`


#### clearIcon
**Type**: `ReactNode`


# SelectList
#### rootProps
**Description**: Props for the root element that positions the menu.

**Type**: `PlacementWithLogical`

**Default**: `HTMLChakraProps<"div">`



# SelectItem
#### isDisabled
**Description**: If `true`, the menuitem will be disabled.

**Type**: `boolean`


#### isFocusable
**Description**: If `true` and the menuitem is disabled, it'll remain keyboard-focusable.

**Type**: `boolean`
