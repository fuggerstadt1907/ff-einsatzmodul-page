import { Card, Typography } from "@mui/material"

type Props = {
    title: string
    count: number
}

const KategorieCard = ({ title, count }: Props) => {
    return (
        <Card sx={{ width: 150, p: 1.5, boxShadow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', ":hover": { cursor: 'pointer' } }} variant="outlined">
            <Typography sx={{ fontSize: 16, fontWeight: 500 }} noWrap>{title}</Typography>
            <Typography sx={{ fontSize: 14 }}>{count.toString()} Einsätze</Typography>
        </Card>
    )
}

export default KategorieCard