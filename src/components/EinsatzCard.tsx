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
        <Card sx={{
            display: "flex",
            flex: 1,
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 3,
            borderWidth: 0.5,
            borderColor: "lightgrey",
            borderStyle: "solid",
            minWidth: 0
        }}>
            <CardContent sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                padding: 2,
                flex: 1,
                minWidth: 0
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                    width: 80,
                    flex: 'none',
                }}>
                    <Label color={mapKeywordToTextColor(einsatz.KAT)} backgroundColor={mapKeywordToColorSchema(einsatz.KAT)}>
                        {mapKeyword(einsatz.KAT)}
                    </Label>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <NumbersIcon fontSize="small" />
                        <Typography variant="body1">{parseInt(einsatz.NR?.toString().split('-')[1]).toString()}</Typography>
                    </Box>
                    <Typography variant="body1">{dayjs(einsatz.VON).format("DD.MM.YY")}</Typography>
                </Box>

                <Divider orientation="vertical" flexItem />

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    gap: 2,
                    minWidth: 0,
                    width: '100%'
                }}>
                    <Typography
                        noWrap
                        variant="body1"
                        sx={{
                            width: '100%',
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }}
                    >
                        {einsatz.ART}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
                        <AccessTimeIcon fontSize="small" />
                        <Box>
                            <Typography variant="body1">
                                {dayjs(einsatz.VON, "YYYY-MM-DD HH:mm:ss").format("HH:mm")} Uhr
                            </Typography>
                            <Typography variant="body1" fontWeight="light">
                                ca. {formatDuration(einsatz.VON, einsatz.BIS)}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card >
    )
}