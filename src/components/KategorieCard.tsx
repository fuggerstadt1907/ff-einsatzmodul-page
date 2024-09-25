import { Card, Typography } from "@mui/material"

type Props = {
    title: string
    count: number
    isSelected: boolean
}

const KategorieCard = ({ title, count, isSelected }: Props) => {
    return (
        <Card sx={{ width: 150, p: 1, boxShadow: isSelected ? 3 : 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderColor: isSelected ? 'black' : undefined, ":hover": { cursor: 'pointer' } }} variant="outlined">
            <Typography sx={{ fontSize: 16, fontWeight: isSelected ? 700 : 500 }} noWrap>{title}</Typography>
            <Typography sx={{ fontSize: 14, fontWeight: isSelected ? 600 : 400 }}>{count.toString()} Einsätze</Typography>
        </Card>
    )
}

export default KategorieCard