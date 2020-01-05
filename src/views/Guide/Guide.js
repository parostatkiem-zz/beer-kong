import React from "react";
import { Container } from "reactstrap";
import SectionHeader from "components/SectionHeader/SectionHeader";

const Guide = () => {
    return (
        <Container className="my-3">
            <section className="mt-3">
                <SectionHeader
                title="Użytkownik"
                description="Użytkownikiem jest każda osoba, która kliknęła w przycisk „ZALOGUJ SIĘ”, w prawym górnym rogu ekranu, oraz przy pomocy Konta Google zalogowała się do naszego serwisu. Serwis nie przechowuje żadnych danych użytkownika poza zdjęciem profilowym i nazwą co sprawia, że każda zmiana wprowadzona w koncie Google (jak avatar, czy nazwa) powoduje zmianę danych użytkownika w naszym serwisie. Każdy Zalogowany Uytkownik ma możliwość zakładania lig oraz drużyn"
                />
                <SectionHeader
                title="Ligi"
                description="Główną funkcjonalnością aplikacji są ligi, które w swoim obrębie gromadzą użytkowników i zakładane przez nich drużyny. Kada liga posiada swoją unikatową nazwę, oraz opis, który powinien zawierać wprowadzenie dla nowych graczy oraz zbiór zasad."
                />
                <SectionHeader
                title="Drużyny"
                description="Drużyny zakładają użytkownicy, którzy wykazują chęć wzięcia udziału w meczach według zasad prowadzonych przez ligę. Każdy założyciel może dodawać kolejnych użytkowników do drużyny, spośród których jeden może zostać wybrany do rozegrania meczu rankingowego. W ten sposób użytkownicy zbierają punkty na poczet swojej drużyny."
                />
                <SectionHeader
                title="Mecze"
                description="Mecze są najważniejszym aspektem każdej ligi. Są one planowane i wypełniane przez założyciela ligi, który powinien dopilnować, aby każdy mecz, który odbędzie się w rzeczywistości, został przeprowadzony zgodnie z zasadami ligi, a punkty przydzielone poprawnie i jednoznacznie."
                />
            </section>
        </Container>
    )
}

export default Guide;
