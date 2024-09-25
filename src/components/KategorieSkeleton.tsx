import { Skeleton, Stack } from "@mui/material"

const KategorieSkeleton = () => {
    return (
        <Stack direction={'row'} spacing={2} mx={2}>
            <Skeleton sx={{ height: 120, width: 150 }} animation="wave" />
            <Skeleton sx={{ height: 120, width: 150 }} animation="wave" />
            <Skeleton sx={{ height: 120, width: 150 }} animation="wave" />
            <Skeleton sx={{ height: 120, width: 150 }} animation="wave" />
            <Skeleton sx={{ height: 120, width: 150 }} animation="wave" />
            <Skeleton sx={{ height: 120, width: 150 }} animation="wave" />
        </Stack>
    )
}

export default KategorieSkeleton