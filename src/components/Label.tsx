import { BoxProps } from '@mui/material'
import { Theme, styled, useTheme } from '@mui/material/styles'

export type ColorSchema = 'brand' | 'thl' | 'fehlalarm' | 'rettungsdienst-sonstige'

const RootStyle = styled('span')(
  ({
    theme,
    ownerState,
  }: {
    theme: Theme
    ownerState: {
      color: string
      backgroundColor: ColorSchema
    }
  }) => {
    const getBackgroundColor = (color: ColorSchema) => {
      switch (color) {
        case 'brand':
          return '#FE2E2E'

        case 'fehlalarm':
          return '#FFBF00'

        case 'rettungsdienst-sonstige':
          return '#E0E0E0'

        case 'thl':
          return '#819FF7'
      }
    }

    return {
      height: 22,
      minWidth: 22,
      lineHeight: 0,
      borderRadius: 6,
      cursor: 'default',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 1),
      color: ownerState.color,
      fontSize: theme.typography.pxToRem(12),
      fontFamily: theme.typography.fontFamily,
      backgroundColor: getBackgroundColor(ownerState.backgroundColor),
      fontWeight: theme.typography.fontWeightBold,
    }
  },
)

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  color: string
  backgroundColor: ColorSchema
}

const Label: React.FC<Props> = ({ children, color, backgroundColor, sx }) => {
  const theme = useTheme()

  return (
    <RootStyle ownerState={{ color, backgroundColor }} sx={{ ...sx }} theme={theme}>
      {children}
    </RootStyle>
  )
}

export default Label
