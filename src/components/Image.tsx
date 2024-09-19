import { Box, BoxProps, SxProps } from '@mui/material'
// @mui
import { Theme } from '@mui/material/styles'
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component'

// ----------------------------------------------------------------------

type IProps = BoxProps & LazyLoadImageProps

interface Props extends IProps {
  sx?: SxProps<Theme>
}

const Image: React.FC<Props> = ({ sx, ...other }) => {
  return (
    <Box
      component="span"
      sx={{
        lineHeight: 0,
        display: 'block',
        overflow: 'hidden',
        '& .wrapper': { width: 1, height: 1, backgroundSize: 'cover !important' },
        ...sx,
      }}>
      <Box
        component={LazyLoadImage}
        wrapperClassName="wrapper"
        sx={{ width: 1, height: 1, objectFit: 'cover' }}
        {...other}
      />
    </Box>
  )
}

export default Image
