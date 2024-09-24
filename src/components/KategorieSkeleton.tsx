import { Skeleton, Stack } from "@mui/material"

const KategorieSkeleton = () => {
    return (
        <Stack direction={'row'}>
            <Skeleton sx={{ height: 120, width: 100, mx: 2 }} animation="wave" />
            <Skeleton sx={{ height: 120, width: 100, mx: 2 }} animation="wave" />
            <Skeleton sx={{ height: 120, width: 100, mx: 2 }} animation="wave" />
            <Skeleton sx={{ height: 120, width: 100, mx: 2 }} animation="wave" />
            <Skeleton sx={{ height: 120, width: 100, mx: 2 }} animation="wave" />
            <Skeleton sx={{ height: 120, width: 100, mx: 2 }} animation="wave" />
        </Stack>
    )
}

export default KategorieSkeleton