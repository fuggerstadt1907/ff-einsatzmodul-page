import React from "react"
import { Card, CardContent, Typography, Box } from "@mui/material"
import NumbersIcon from "@mui/icons-material/Numbers"
import { ApiEinsatzResponse } from "../@types"
import dayjs from "dayjs"
import { mapKeyword, mapKeywordToColorSchema, mapKeywordToTextColor } from "../utils"
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
            // flex: 1,
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: 3,
            borderWidth: 0.5,
            borderColor: "lightgrey",
            borderStyle: "solid",
            minWidth: 0,
        }}>
            <CardContent sx={{
                display: "flex",
                flexDirection: "column",
                padding: 1,
                "&: last-child": {
                    paddingBottom: 1
                }
            }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <NumbersIcon fontSize="small" />
                        <Typography variant="body1">{parseInt(einsatz.NR?.toString().split('-')[1]).toString()}</Typography>
                    </Box>
                    <Label color={mapKeywordToTextColor(einsatz.KAT)} backgroundColor={mapKeywordToColorSchema(einsatz.KAT)}>
                        {mapKeyword(einsatz.KAT)}
                    </Label>
                </Box>

                <Typography
                    variant="body1"
                    sx={{
                        width: '100%',
                        whiteSpace: "normal",
                        wordWrap: "break-word",
                        overflow: "visible",
                        my: 0.5
                    }}
                >
                    {einsatz.ART}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                    <Typography variant="body1">{dayjs(einsatz.VON).format("DD.MM.YYYY")}</Typography>
                    <Typography variant="body1"> - </Typography>
                    <Typography variant="body1">
                        {dayjs(einsatz.VON, "YYYY-MM-DD HH:mm:ss").format("HH:mm")} Uhr
                    </Typography>
                </Box>
            </CardContent>
        </Card >
    )
}