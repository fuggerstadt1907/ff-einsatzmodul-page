import { Stack } from "@mui/material"
import { ApiEinsatzResponse } from "../@types"
import KategorieCard from "./KategorieCard"
import KategorieSkeleton from "./KategorieSkeleton"
import { useResponsive } from "../hooks"
import { keywords } from "../@mocks"

type Props = {
    einsaetze: ApiEinsatzResponse[] | undefined
    selectedKeyword: string
    isLoading: boolean
    onPressCategory: (selectedCategory: string) => void
}
const KategorieCards = ({ einsaetze, selectedKeyword, isLoading, onPressCategory }: Props) => {
    const isMobile = useResponsive('down', 'md')
    const isTablet = useResponsive('between', undefined, 'sm', 'lg')

    if (isLoading && !isMobile) {
        return <KategorieSkeleton />
    }

    if (isMobile) {
        return null
    }

    if (isTablet) {
        return (
            <Stack direction='column' sx={{ m: 2 }} spacing={2}>
                < Stack direction={'row'} spacing={2}>
                    <div onClick={() => onPressCategory('Alle')}><KategorieCard isSelected={selectedKeyword === 'Alle'} title="Alle" count={einsaetze?.length ?? 0} /></div>
                    {keywords.slice(1, 4).map(keyword => (
                        <div key={keyword} onClick={() => onPressCategory(keyword)}><KategorieCard isSelected={selectedKeyword === keyword} title={keyword} count={einsaetze?.filter(e => e.KAT === keyword).length ?? 0} /></div>
                    ))}
                </Stack>
                < Stack direction={'row'} spacing={2}>
                    {keywords.slice(4, 7).map(keyword => (
                        <div key={keyword} onClick={() => onPressCategory(keyword)}><KategorieCard isSelected={selectedKeyword === keyword} title={keyword} count={einsaetze?.filter(e => e.KAT === keyword).length ?? 0} /></div>
                    ))}
                </Stack>
            </Stack>
        )
    }

    return (
        < Stack direction={'row'} sx={{ m: 2 }} spacing={2}>
            <div onClick={() => onPressCategory('Alle')}><KategorieCard isSelected={selectedKeyword === 'Alle'} title="Alle" count={einsaetze?.length ?? 0} /></div>
            {keywords.filter(keyword => keyword !== 'Alle').map(keyword => (
                <div key={keyword} onClick={() => onPressCategory(keyword)}><KategorieCard isSelected={selectedKeyword === keyword} title={keyword} count={einsaetze?.filter(e => e.KAT === keyword).length ?? 0} /></div>
            ))}
        </Stack >
    )
}

export default KategorieCards