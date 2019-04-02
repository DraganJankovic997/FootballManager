insert into nacionalnost(id, naziv, skracenica)
values(nextval('nacionalnost_seq'), 'Srpsko', 'SRB');
insert into nacionalnost(id, naziv, skracenica)
values(nextval('nacionalnost_seq'), 'Crnogorsko', 'CG');
insert into nacionalnost(id, naziv, skracenica)
values(nextval('nacionalnost_seq'), 'Hrvatsko', 'HRV');
insert into nacionalnost(id, naziv, skracenica)
values(nextval('nacionalnost_seq'), 'Bosansko', 'BH');
insert into nacionalnost(id, naziv, skracenica)
values(nextval('nacionalnost_seq'), 'Madjarsko', 'HUN');

insert into liga(id, naziv, oznaka)
values(nextval('liga_seq'), 'Superliga Srbije', 'SLS');
insert into liga(id, naziv, oznaka)
values(nextval('liga_seq'), 'Prva liga Srbije', 'PLS');
insert into liga(id, naziv, oznaka)
values(nextval('liga_seq'), 'Druga liga Srbije', 'DLS');

insert into tim(id, naziv, osnovan, sediste, liga)
values(nextval('tim_seq'), 'Partizan', 
to_date('04.10.1945.', 'dd.mm.yyyy.'), 'Beograd', 1);
insert into tim(id, naziv, osnovan, sediste, liga)
values(nextval('tim_seq'), 'Crvena Zvezda', 
to_date('04.03.1945.', 'dd.mm.yyyy.'), 'Beograd', 1);
insert into tim(id, naziv, osnovan, sediste, liga)
values(nextval('tim_seq'), 'Vojvodina', 
to_date('04.03.1918.', 'dd.mm.yyyy.'), 'Novi Sad', 1);
insert into tim(id, naziv, osnovan, sediste, liga)
values(nextval('tim_seq'), 'Novi Sad', 
to_date('15.12.1960.', 'dd.mm.yyyy.'), 'Novi Sad', 3);
insert into tim(id, naziv, osnovan, sediste, liga)
values(nextval('tim_seq'), 'Radnicki Kragujevac', 
to_date('12.06.1930.', 'dd.mm.yyyy.'), 'Kragujevac', 2);
insert into tim(id, naziv, osnovan, sediste, liga)
values(nextval('tim_seq'), 'Sloboda', 
to_date('03.07.1952.', 'dd.mm.yyyy.'), 'Smederevo', 3);
insert into tim(id, naziv, osnovan, sediste, liga)
values(nextval('tim_seq'), 'Zemun', 
to_date('13.12.1967.', 'dd.mm.yyyy.'), 'Zemun', 2);
insert into tim(id, naziv, osnovan, sediste, liga)
values(nextval('tim_seq'), 'Dinamo', 
to_date('20.01.1975.', 'dd.mm.yyyy.'), 'Vranje', 1);

insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Dragan', 'Mance', '312314123', 
to_date('20.12.1977.', 'dd.mm.yyyy.'), 1, 1);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Nikola', 'Zigic', '312414231', 
to_date('11.03.1980.', 'dd.mm.yyyy.'), 1, 2);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Marko', 'Pantelic', '312341231', 
to_date('12.05.1977.', 'dd.mm.yyyy.'), 1, 2);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Srdjan', 'Radonjic', '412543532', 
to_date('13.07.1977.', 'dd.mm.yyyy.'), 1, 1);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Nikola', 'Tesla', '785785785', 
to_date('14.08.1977.', 'dd.mm.yyyy.'), 2, 5);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Djordje', 'Petrovic', '786725272', 
to_date('15.10.1977.', 'dd.mm.yyyy.'), 3, 4);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Nemanja', 'Mandic', '278924522', 
to_date('16.11.1977.', 'dd.mm.yyyy.'), 4, 7);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Sasa', 'Ilic', '874254633', 
to_date('17.01.1977.', 'dd.mm.yyyy.'), 1, 1);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Pera', 'Djokic', '824524538', 
to_date('18.02.1977.', 'dd.mm.yyyy.'), 1, 1);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Pera', 'Antic', '453873453', 
to_date('19.03.1977.', 'dd.mm.yyyy.'), 4, 2);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Marko', 'Peric', '453894533', 
to_date('20.04.1977.', 'dd.mm.yyyy.'), 5, 4);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Andrija', 'Radman', '487324354', 
to_date('22.12.1977.', 'dd.mm.yyyy.'), 1, 6);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Milan', 'Mance', '786453453', 
to_date('25.11.1977.', 'dd.mm.yyyy.'), 3, 1);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Petar', 'Djokic', '786782782', 
to_date('30.04.1977.', 'dd.mm.yyyy.'), 2, 1);
insert into igrac(id, ime, prezime, broj_reg, datum_rodjenja, nacionalnost, tim)
values(nextval('igrac_seq'), 'Nemanja', 'Antonic', '954378335', 
to_date('27.09.1977.', 'dd.mm.yyyy.'), 1, 3);


