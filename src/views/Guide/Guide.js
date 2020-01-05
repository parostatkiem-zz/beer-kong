import React from "react";
import { Container } from "reactstrap";
import SectionHeader from "components/SectionHeader/SectionHeader";

const Guide = () => {
  return (
    <Container className="my-3">
      <section className="mt-3">
        <SectionHeader
          title="Gracz"
          description="Graczem 
          jest każda osoba, która kliknęła w przycisk „ZALOGUJ SIĘ”,&nbsp;
           w prawym górnym rogu ekranu, oraz przy pomocy Konta Google
            zalogowała się do naszego serwisu. Serwis nie przechowuje żadnych danych
             gracza poza zdjęciem profilowym i nazwą co sprawia, że każda zmiana wprowadzona 
             w koncie Google (jak avatar, czy nazwa) powoduje zmianę danych gracza w naszym serwisie.&nbsp;
              Każdy Zalogowany gracz ma możliwość zakładania lig oraz drużyn.&nbsp;"
        />
        <SectionHeader
          title="Ligi"
          description="Główną funkcjonalnością aplikacji są ligi,&nbsp;
           które w swoim obasdgswoją unikatową nazwę oraz opis,&nbsp; 
             który powinien zawierać wprowadzenie dla nowych graczy oraz zbiór zasad.&nbsp;"
        />
        <SectionHeader
          title="Drużyny"
          description="Drużyny zakładają gracze,&nbsp;
           którzy wykazują chęć wzięcia udziału w meczach według zasad prowadzonych przez ligę.&nbsp;
            Każdy założyciel może dodawać kolejnych graczy do drużyny,&nbsp;
             spośród których jeden może zostać wybrany do rozegrania meczu rankingowego.&nbsp;
              W ten sposób gracze zbierają punkty na poczet swojej drużyny.&nbsp;"
        />
        <SectionHeader
          title="Mecze"
          description="Mecze są najważniejszym aspektem każdej ligi.&nbsp;
           Są one planowane i prowadzone przez założyciela ligi.&nbsp;
            Powinien on dopilnować, aby każdy mecz, który odbędzie się w rzeczywistości,&nbsp;
             został przeprowadzony zgodnie z zasadami ligi, a punkty przydzielone poprawnie i jednoznacznie.&nbsp;"
        />
      </section>
    </Container>
  );
};

export default Guide;
