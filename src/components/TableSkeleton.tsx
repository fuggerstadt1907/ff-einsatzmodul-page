import { Box, Skeleton } from "@mui/material"

const TableSkeleton = () => {
    return (
        <Box sx={{ px: 2 }}>
            <Skeleton sx={{ height: 90 }} animation="wave" />
            <Skeleton sx={{ height: 50 }} animation="wave" />
            <Skeleton sx={{ height: 50 }} animation="wave" />
            <Skeleton sx={{ height: 50 }} animation="wave" />
            <Skeleton sx={{ height: 50 }} animation="wave" />
            <Skeleton sx={{ height: 50 }} animation="wave" />
            <Skeleton sx={{ height: 50 }} animation="wave" />
            <Skeleton sx={{ height: 50 }} animation="wave" />
            <Skeleton sx={{ height: 50 }} animation="wave" />
            <Skeleton sx={{ height: 50 }} animation="wave" />
            <Skeleton sx={{ height: 50 }} animation="wave" />
        </Box>
    )
}

export default TableSkeleton