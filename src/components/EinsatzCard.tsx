import React from "react"
import { Card, CardContent, Typography, Box, Stack, Divider } from "@mui/material"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import NumbersIcon from "@mui/icons-material/Numbers"
import { ApiEinsatzResponse } from "../@types"
import dayjs from "dayjs"
import { formatDuration, mapKeyword, mapKeywordToColorSchema, mapKeywordToTextColor } from "../utils"
import { useResponsive } from "../hooks"
import Label from "./Label"

type Props = {
    einsatz: ApiEinsatzResponse
}

export const EinsatzCard: React.FC<Props> = ({ einsatz }) => {
    const isMobile = useResponsive('down', 'md')

    return (
        <Card sx={{ display: "flex", width: isMobile ? "100%" : "50%", borderRadius: 3, overflow: "hidden", boxShadow: 3, borderWidth: 0.5, borderColor: "lightgrey", borderStyle: "solid" }}>
            <CardContent sx={{
                flex: 1, display: "flex", flexDirection: "row", gap: 2, alignItems: "flex-start", paddingTop: 2, paddingBottom: 2, paddingRight: 2, paddingLeft: 2
            }}>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: 80 }}>
                    <Label color={mapKeywordToTextColor(einsatz.KAT)} backgroundColor={mapKeywordToColorSchema(einsatz.KAT)}>
                        {mapKeyword(einsatz.KAT)}
                    </Label>
                    <Box display="flex" alignItems="center" gap={0.5}>
                        <NumbersIcon fontSize="small" />
                        <Typography variant="body1">{parseInt(einsatz.NR?.toString().split('-')[1]).toString()}</Typography>
                    </Box>
                    <Typography variant="body1">{dayjs(einsatz.VON).format("DD.MM.YY")}</Typography>
                </Box>

                <Divider orientation="vertical" flexItem sx={{ color: "black", backgroundColor: "black", opacity: 0.3 }} />

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Stack direction="column" spacing={0}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {einsatz.ART}
                        </Typography>
                    </Stack>

                    <Box display="flex" alignItems="flex-start" gap={1}>
                        <AccessTimeIcon fontSize="small" />
                        <Box>
                            <Typography variant="body1">{dayjs(einsatz.VON, 'YYYY-MM-DD HH:mm:ss').format('HH:mm')} Uhr</Typography>
                            <Typography variant="body1" fontWeight="light">ca. {formatDuration(einsatz.VON, einsatz.BIS)}</Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card >

    )
}