import { Stack } from "@mui/material"
import { ApiEinsatzResponse } from "../@types"
import KategorieCard from "./KategorieCard"
import KategorieSkeleton from "./KategorieSkeleton"
import { useResponsive } from "../hooks"

type Props = {
    einsaetze: ApiEinsatzResponse[] | undefined
    isLoading: boolean
    onPressCategory: (selectedCategory: string) => void
}
const KategorieCards = ({ einsaetze, isLoading, onPressCategory }: Props) => {
    const isMobile = useResponsive('down', 'md')
    const isTablet = useResponsive('between', undefined, 'sm', 'lg')

    if (isLoading) {
        return <KategorieSkeleton />
    }

    if (isMobile) {
        return null
    }

    if (isTablet) {
        return (
            <Stack direction='column' sx={{ m: 2 }} spacing={2}>
                < Stack direction={'row'} spacing={2}>
                    <div onClick={() => onPressCategory('alle')}><KategorieCard title="Alle" count={einsaetze?.length ?? 0} /></div>
                    <div onClick={() => onPressCategory('ABC')}><KategorieCard title="ABC" count={einsaetze?.filter(e => e.KAT === 'ABC').length ?? 0} /></div>
                    <div onClick={() => onPressCategory('Brand')}><KategorieCard title="Brand" count={einsaetze?.filter(e => e.KAT === 'Brand').length ?? 0} /></div>
                    <div onClick={() => onPressCategory('Fehlalarm')}><KategorieCard title="Fehlalarm" count={einsaetze?.filter(e => e.KAT === 'Fehlalarm').length ?? 0} /></div>
                </Stack>
                < Stack direction={'row'} spacing={2}>
                    <div onClick={() => onPressCategory('Hilfeleistung')}><KategorieCard title="Hilfeleistung" count={einsaetze?.filter(e => e.KAT === 'Hilfeleistung').length ?? 0} /></div>
                    <div onClick={() => onPressCategory('Rettungsdienst')}><KategorieCard title="Rettungsdienst" count={einsaetze?.filter(e => e.KAT === 'Rettungsdienst').length ?? 0} /></div>
                    <div onClick={() => onPressCategory('Sicherheitsdienst')}><KategorieCard title="Sicherheitsdienst" count={einsaetze?.filter(e => e.KAT === 'Sicherheitsdienst').length ?? 0} /></div>
                </Stack>
            </Stack>
        )
    }

    return (
        < Stack direction={'row'} sx={{ m: 2 }} spacing={2}>
            <div onClick={() => onPressCategory('alle')}><KategorieCard title="Alle" count={einsaetze?.length ?? 0} /></div>
            <div onClick={() => onPressCategory('ABC')}><KategorieCard title="ABC" count={einsaetze?.filter(e => e.KAT === 'ABC').length ?? 0} /></div>
            <div onClick={() => onPressCategory('Brand')}><KategorieCard title="Brand" count={einsaetze?.filter(e => e.KAT === 'Brand').length ?? 0} /></div>
            <div onClick={() => onPressCategory('Fehlalarm')}><KategorieCard title="Fehlalarm" count={einsaetze?.filter(e => e.KAT === 'Fehlalarm').length ?? 0} /></div>
            <div onClick={() => onPressCategory('Hilfeleistung')}><KategorieCard title="Hilfeleistung" count={einsaetze?.filter(e => e.KAT === 'Hilfeleistung').length ?? 0} /></div>
            <div onClick={() => onPressCategory('Rettungsdienst')}><KategorieCard title="Rettungsdienst" count={einsaetze?.filter(e => e.KAT === 'Rettungsdienst').length ?? 0} /></div>
            <div onClick={() => onPressCategory('Sicherheitsdienst')}><KategorieCard title="Sicherheitsdienst" count={einsaetze?.filter(e => e.KAT === 'Sicherheitsdienst').length ?? 0} /></div>
        </Stack >
    )
}

export default KategorieCards