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
                flexDirection: "column",
                gap: 2,
                paddingTop: 2,
                paddingBottom: 2,
                paddingRight: 0.9,
                paddingLeft: 0.9,
                flex: 1,
                minWidth: 0
            }}>


                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    flex: 1
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                        flex: 1
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <NumbersIcon fontSize="small" />
                            <Typography variant="body1">{parseInt(einsatz.NR?.toString().split('-')[1]).toString()}</Typography>
                        </Box>
                        <Typography variant="body1">{dayjs(einsatz.VON).format("DD.MM.YY")}</Typography>
                    </Box>

                    <Divider orientation="vertical" flexItem />

                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: "flex-end", gap: 0.5, flex: 1 }}>
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
                <Box>
                    <Label color={mapKeywordToTextColor(einsatz.KAT)} backgroundColor={mapKeywordToColorSchema(einsatz.KAT)}>
                        {mapKeyword(einsatz.KAT)}
                    </Label>

                    <Typography
                        variant="body1"
                        sx={{
                            width: '100%',
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                            overflow: "visible",
                            mt: 0.5
                        }}
                    >
                        {einsatz.ART}
                    </Typography>
                </Box>
            </CardContent>
        </Card >
    )
}