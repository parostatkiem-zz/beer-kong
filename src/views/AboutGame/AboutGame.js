import React from "react";
import { Container } from "reactstrap";
import SectionHeader from "components/SectionHeader/SectionHeader";

const AboutGame = () => {
    return (
        <Container className="my-3">
            <section>
                <SectionHeader
                title="Beer Pong"
                description="Jest to gra towarzyska, której pomysł przypłynął do nas z Ameryki. Jest znana, w wielu odsłonach, różniąc się jedynie niektórymi aspektami rozgrywki. Jednak główna zasada zostaje niezmienna, aby trafić do wszystkich kubeczków przeciwnika. Wszystkie kubeczki powinny być wcześniej zalane piwem w ilości, którą przewiduje regulamin. W Beer Pong nikt nie przegrywa, ponieważ nawet, jeśli jeden z graczy trafi do wszystkich kubeczków przeciwnika i pozornie wygra, tak naprawdę to ten drugi wypije więcej piwa, a przecież o to tutaj chodzi. "
                />
                <SectionHeader
                title="Zasady Ogólne"
                description="Jak wspomnieliśmy powyżej, jest jeden aspekt łączący wszystkie rozgrywki w Beer-Pong, omówmy sobie go zatem. W meczu biorą udział dwie osoby, lub dwie drużyny, które  stają na przeciwnych krańcach stołu i rozkładają przed sobą, kubeczki wypełnione piwem. Tura polega na wyrzuceniu piłeczki przed siebie tak, aby trafiła ona do kubeczka z piwem przeciwnika. Jeśli gracz trafi, przeciwnik musi wypić piwo, zdjąć kubeczek ze stołu, a tura przechodzi na przeciwnika, natomiast, jeśli chybi, gracz nie dostaje punktu, na stole nic się nie zmienia i zaczyna się tura przeciwnika."
                />
                <SectionHeader
                title="Wyspecyfikowanie Zasad"
                description="Opisane powyżej zasady to jedynie rdzeń rozgrywki, w zależności od kraju, ligi, a nawet miasta czy lokalnej społeczności, zasady ulegają lekkiej modyfikacji. W ten sposób możemy zmieniać praktycznie każdy aspekt gry zaczynając od sprecyzowania rozmiarów stołu, czy kubeczków, przez ilość piwa w kubeczku, aż po styl rzucania czy modyfikację samego rdzenie."
                />
                <SectionHeader
                title="Beer Kong"
                description="Zasad jest wiele, a ludzie poprzez odmienne podejście do gry, zamykają się w małych lokalnych grupkach. Beer-Kong jest aplikacją, która wychodzi naprzeciw takiemu zjawisku i pozwala organizować grę, monitorować oraz rankingować ją w jednym miejscu dla wszystkich możliwych wersji gry. Aby przeczytać o możliwościach aplikacji przejdź do zakładki „Przewodnik"
                />
            </section>
        </Container>
    )
}

export default AboutGame;
