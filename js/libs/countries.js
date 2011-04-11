/***********************************************************
 *
 *	File:			countries.js
 *	Author:		RMS
 *	Created:	April 2011
 *
 **********************************************************/

 //===============================================
 //  ISO country codes found here: http://www.iso.org/iso/english_country_names_and_code_elements
 //  reprinted and commented out below, for reference
 //===============================================

/*
 Country names  ISO 3166-1-alpha-2 code

 AFGHANISTAN  AF
 ALAND ISLANDS  AX
 ALBANIA  AL
 ALGERIA  DZ
 AMERICAN SAMOA   AS
 ANDORRA  AD
 ANGOLA   AO
 ANGUILLA   AI
 ANTARCTICA   AQ
 ANTIGUA AND BARBUDA  AG
 ARGENTINA  AR
 ARMENIA  AM
 ARUBA  AW
 AUSTRALIA  AU
 AUSTRIA  AT
 AZERBAIJAN   AZ

 BAHAMAS  BS
 BAHRAIN  BH
 BANGLADESH   BD
 BARBADOS   BB
 BELARUS  BY
 BELGIUM  BE
 BELIZE   BZ
 BENIN  BJ
 BERMUDA  BM
 BHUTAN   BT
 BOLIVIA, PLURINATIONAL STATE OF  BO
 BONAIRE, SAINT EUSTATIUS AND SABA  BQ
 BOSNIA AND HERZEGOVINA   BA
 BOTSWANA   BW
 BOUVET ISLAND  BV
 BRAZIL   BR
 BRITISH INDIAN OCEAN TERRITORY   IO
 BRUNEI DARUSSALAM  BN
 BULGARIA   BG
 BURKINA FASO   BF
 BURUNDI  BI

 CAMBODIA   KH
 CAMEROON   CM
 CANADA   CA
 CAPE VERDE   CV
 CAYMAN ISLANDS   KY
 CENTRAL AFRICAN REPUBLIC   CF
 CHAD   TD
 CHILE  CL
 CHINA  CN
 CHRISTMAS ISLAND   CX
 COCOS (KEELING) ISLANDS  CC
 COLOMBIA   CO
 COMOROS  KM
 CONGO  CG
 CONGO, THE DEMOCRATIC REPUBLIC OF THE  CD
 COOK ISLANDS   CK
 COSTA RICA   CR
 COTE D'IVOIRE  CI
 CROATIA  HR
 CUBA   CU
 CURACAO  CW
 CYPRUS   CY
 CZECH REPUBLIC   CZ

 DENMARK  DK
 DJIBOUTI   DJ
 DOMINICA   DM
 DOMINICAN REPUBLIC   DO

 ECUADOR  EC
 EGYPT  EG
 EL SALVADOR  SV
 EQUATORIAL GUINEA  GQ
 ERITREA  ER
 ESTONIA  EE
 ETHIOPIA   ET

 FALKLAND ISLANDS (MALVINAS)  FK
 FAROE ISLANDS  FO
 FIJI   FJ
 FINLAND  FI
 FRANCE   FR
 FRENCH GUIANA  GF
 FRENCH POLYNESIA   PF
 FRENCH SOUTHERN TERRITORIES  TF

 GABON  GA
 GAMBIA   GM
 GEORGIA  GE
 GERMANY  DE
 GHANA  GH
 GIBRALTAR  GI
 GREECE   GR
 GREENLAND  GL
 GRENADA  GD
 GUADELOUPE   GP
 GUAM   GU
 GUATEMALA  GT
 GUERNSEY   GG
 GUINEA   GN
 GUINEA-BISSAU  GW
 GUYANA   GY

 HAITI  HT
 HEARD ISLAND AND MCDONALD ISLANDS  HM
 HOLY SEE (VATICAN CITY STATE)  VA
 HONDURAS   HN
 HONG KONG  HK
 HUNGARY  HU

 ICELAND  IS
 INDIA  IN
 INDONESIA  ID
 IRAN, ISLAMIC REPUBLIC OF  IR
 IRAQ   IQ
 IRELAND  IE
 ISLE OF MAN  IM
 ISRAEL   IL
 ITALY  IT

 JAMAICA  JM
 JAPAN  JP
 JERSEY   JE
 JORDAN   JO

 KAZAKHSTAN   KZ
 KENYA  KE
 KIRIBATI   KI
 KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF   KP
 KOREA, REPUBLIC OF   KR
 (no ISO code for Kosovo; using XK)
 KUWAIT   KW
 KYRGYZSTAN   KG

 LAO PEOPLE'S DEMOCRATIC REPUBLIC   LA
 LATVIA   LV
 LEBANON  LB
 LESOTHO  LS
 LIBERIA  LR
 LIBYAN ARAB JAMAHIRIYA   LY
 LIECHTENSTEIN  LI
 LITHUANIA  LT
 LUXEMBOURG   LU

 MACAO  MO
 MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF   MK
 MADAGASCAR   MG
 MALAWI   MW
 MALAYSIA   MY
 MALDIVES   MV
 MALI   ML
 MALTA  MT
 MARSHALL ISLANDS   MH
 MARTINIQUE   MQ
 MAURITANIA   MR
 MAURITIUS  MU
 MAYOTTE  YT
 MEXICO   MX
 MICRONESIA, FEDERATED STATES OF  FM
 MOLDOVA, REPUBLIC OF   MD
 MONACO   MC
 MONGOLIA   MN
 MONTENEGRO   ME
 MONTSERRAT   MS
 MOROCCO  MA
 MOZAMBIQUE   MZ
 MYANMAR  MM

 NAMIBIA  NA
 NAURU  NR
 NEPAL  NP
 NETHERLANDS  NL
 NEW CALEDONIA  NC
 NEW ZEALAND  NZ
 NICARAGUA  NI
 NIGER  NE
 NIGERIA  NG
 NIUE   NU
 NORFOLK ISLAND   NF
 NORTHERN MARIANA ISLANDS   MP
 NORWAY   NO

 OMAN   OM

 PAKISTAN   PK
 PALAU  PW
 PALESTINIAN TERRITORY, OCCUPIED  PS
 PANAMA   PA
 PAPUA NEW GUINEA   PG
 PARAGUAY   PY
 PERU   PE
 PHILIPPINES  PH
 PITCAIRN   PN
 POLAND   PL
 PORTUGAL   PT
 PUERTO RICO  PR

 QATAR  QA

 REUNION  RE
 ROMANIA  RO
 RUSSIAN FEDERATION   RU
 RWANDA   RW

 SAINT BARTHELEMY   BL
 SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA   SH
 SAINT KITTS AND NEVIS  KN
 SAINT LUCIA  LC
 SAINT MARTIN (FRENCH PART)   MF
 SAINT PIERRE AND MIQUELON  PM
 SAINT VINCENT AND THE GRENADINES   VC
 SAMOA  WS
 SAN MARINO   SM
 SAO TOME AND PRINCIPE  ST
 SAUDI ARABIA   SA
 SENEGAL  SN
 SERBIA   RS
 SEYCHELLES   SC
 SIERRA LEONE   SL
 SINGAPORE  SG
 SINT MAARTEN (DUTCH PART)  SX
 SLOVAKIA   SK
 SLOVENIA   SI
 SOLOMON ISLANDS  SB
 SOMALIA  SO
 SOUTH AFRICA   ZA
 SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS   GS
 SPAIN  ES
 SRI LANKA  LK
 SUDAN  SD
 SURINAME   SR
 SVALBARD AND JAN MAYEN   SJ
 SWAZILAND  SZ
 SWEDEN   SE
 SWITZERLAND  CH
 SYRIAN ARAB REPUBLIC   SY

 TAIWAN, PROVINCE OF CHINA  TW
 TAJIKISTAN   TJ
 TANZANIA, UNITED REPUBLIC OF   TZ
 THAILAND   TH
 TIMOR-LESTE  TL
 TOGO   TG
 TOKELAU  TK
 TONGA  TO
 TRINIDAD AND TOBAGO  TT
 TUNISIA  TN
 TURKEY   TR
 TURKMENISTAN   TM
 TURKS AND CAICOS ISLANDS   TC
 TUVALU   TV

 UGANDA   UG
 UKRAINE  UA
 UNITED ARAB EMIRATES   AE
 UNITED KINGDOM   GB
 UNITED STATES  US
 UNITED STATES MINOR OUTLYING ISLANDS   UM
 URUGUAY  UY
 UZBEKISTAN   UZ

 VANUATU  VU
 VATICAN CITY STATE   see HOLY SEE
 VENEZUELA, BOLIVARIAN REPUBLIC OF  VE
 VIET NAM   VN
 VIRGIN ISLANDS, BRITISH  VG
 VIRGIN ISLANDS, U.S.   VI

 WALLIS AND FUTUNA  WF
 WESTERN SAHARA   EH

 YEMEN  YE

 ZAMBIA   ZM
 ZIMBABWE   ZW
  
*/


//===============================================
//  coordinates for svg map
//===============================================

  var countryData = {};
  
  // South America
  countryData['co'] = {
    name: "Colombia",
    svg: ["m261.174988,291.174988l1,-1l1,0l0,-2l2,-2l1,0l0,-4l1,-1l2,0l1,-1l2,0l4,-4l1,1l-2,2l0,1l-3,3l0,3l2,2l0,4l1,1l4,0l2,2l6,0l0,1l-1,1l0,6l1,1l-1,1l0,1l2,2l0,2l-1,1l0,-3l-1,1l-5,0l0,2l1,0l0,1l-2,0l0,3l2,2l0,2l-1,1l0,6l-1,1l-2,-2l2,-2l-2,-2l-6,0l0,-2l-5,-5l-4,0l-2,-2l-1,0l-2,-2l0,-3l1,0l3,-3l0,-9l-1,-1l0,-2l0,-1z"],
    flag: "colombia.png",
    data: {}
  }
  countryData['pe'] = {
    name: "Peru",
    svg: ["m254.175003,325.174988l0,3l1.999985,0l0,1l2,0l0,-2l1,-1l0,-1l2,-2l1,0l5,-5l0,-2l-1,-1l0,-1l1,0l5,5l0,2l6,0l2,2l-2,2l2,2l-1,1l-4,0l-2,2l0,4l-3,3l2,2l0,4l2,0l0,2l3,0l2,-2l0,5l2,0l2,2l0,8l-1,1l0,4l1,1l0,2l-2,2l0,2l-1,1l-1,0l-2,-2l0,-2l-2,0l-4,-4l-2,0l-4,-4l0,-4l-3,-3l0,-2l-1,-1l0,-2l-2,-2l0,-3l-2,-2l0,-2l-4.999985,-5l1,-1l0,-1l-1,-1l0,-3l2,-2z"],
    flag: "peru.png",
    data: {}
  };
  countryData['ec'] = {
    name: "Ecuador",
    svg: ["m258.174988,310.174988l2,2l1,0l2,2l3,0l0,1l1,1l0,2l-5,5l-1,0l-2,2l0,1l-1,1l0,2l-2,0l0,-1l-2,0l0,-3l2,-2l0,-2l-1,0l-1,1l-1,-1l0,-4l1,0l0,-2l1,-1l0,-2l1,0l2,-2zm-31.999985,4l1,1l0,3l-1,-1l0,-3zm-1,2l1,-1l-1,0l0,1zm3,0l0,-1l-1,1l1,0zm1,1l0,-1l-1,1l1,0zm2,0l1,0l-1,-1l0,1zm-3,1l0,1l1,-1l-1,0z"],
    flag: "ecuador.png",
    data: {}
  };
  countryData['gy'] = {
    name: "Guyana",
    svg: ["m303.174988,297.174988l0,-2l2,-2l0,-1l-1,0l0,-1l2,-2l1,0l3,3l-1,1l0,2l1,-1l1,0l2,2l0,2l-1,1l-1,0l0,4l1,1l1,0l0,2l1,1l0,1l-1,0l-2,2l-1,0l-1,1l-1,0l-2,-2l0,-8l-1,0l0,-3l-1,0l-1,-1z"],
    flag: "guyana.png",
    data: {}
  };
  countryData['sr'] = {
    name: "Suriname",
    svg: ["m321.174988,297.174988l0,1l-1,1l0,3l1,1l0,1l-1,1l0,2l-4,0l0,1l-2,0l0,-1l-1,-1l0,-2l-1,0l-1,-1l0,-4l1,0l1,-1l0,-2l2,0l1,1l1,-1l3,0l1,1z"],
    flag: "suriname.png",
    data: {}
  };
  countryData['gf'] = {
    name: "French Guiana",
    svg: ["m320.174988,307.174988l0,-2l1,-1l0,-1l-1,-1l0,-3l1,-1l0,-1l1,0l1,1l1,0l2,2l0,1l1,1l-2,2l0,2l-2,2l-2,0l-1,-1z"],
    flag: "french_guiana.png",
    data: {}
  };
  countryData['bo'] = {
    name: "Bolivia",
    svg: ["m281.174988,348.174988l3,0l2,-2l2,0l2,-2l2,0l0,6l3,3l3,0l3,3l2,0l2,2l0,7l5,0l0,3l2,2l0,3l-1,1l0,2l-1,1l0,-2l-1,-1l-6,0l-3,3l0,4l-2,2l-2,0l-2,2l0,-2l-3,0l-1,-1l-3,3l-1,0l-1,-1l0,-5l-1,0l0,-5l-1,-1l0,-3l-2,-2l2,-2l0,-2l-1,-1l0,-4l1,-1l0,-8l-2,-2z"],
    flag: "bolivia.png",
    data: {}
  };
  countryData['py'] = {
    name: "Paraguay",
    svg: ["m311.174988,378.174988l0,5l4,0l2,2l0,4l3,0l0,5l-1,1l0,2l-3,3l-7,0l0,-1l1,-1l0,-2l2,-2l-3,-3l-2,0l-2,-2l-1,0l-6,-6l2,-2l0,-4l3,-3l6,0l1,1l0,2l1,1z"],
    flag: "paraguay.png",
    data: {}
  };
  countryData['br'] = {
    name: "Brazil",
    svg: ["m320.174988,394.174988l0,-5l-3,0l0,-4l-2,-2l-4,0l0,-5l-1,-1l1,-1l0,-2l1,-1l0,-3l-2,-2l0,-3l-5,0l0,-7l-2,-2l-2,0l-3,-3l-3,0l-3,-3l0,-6l-2,0l-2,2l-2,0l-2,2l-5,0l0,-5l-2,2l-3,0l0,-2l-2,0l0,-4l-2,-2l3,-3l0,-4l2,-2l4,0l2,-2l0,-6l1,-1l0,-2l-2,-2l0,-3l2,0l0,-1l-1,0l0,-2l5,0l1,-1l0,3l1,-1l0,1l1,1l3,0l2,-2l1,0l2,-2l0,-1l-2,0l0,-3l-1,-1l0,-2l1,1l2,0l1,1l1,0l0,-1l1,-1l3,0l1,-1l0,-2l1,0l0,3l1,0l0,8l2,2l1,0l1,-1l1,0l2,-2l3,0l0,-1l4,0l1,1l2,0l2,-2l0,-2l2,-2l0,-1l1,1l0,3l1,1l0,2l1,1l1,0l0,2l-4,4l0,1l-2,2l0,1l1,1l2,-2l1,1l0,1l1,1l1,-1l1,0l0,2l1,-1l0,-1l1,-1l1,1l0,-2l1,-1l4,0l1,1l1,0l1,1l0,1l1,-1l1,1l0,2l-1,1l0,1l1,0l3,-3l2,2l7,0l6,6l1,0l1,1l2,0l2,2l0,10l-2,2l0,1l-4,4l0,2l-2,3l-1,-1l-1,1l0,14l-2,2l0,4l-1,1l0,2l-2,2l0,3l-3,3l-2,0l-1,1l-1,-1l-2,0l-1,1l0,1l-1,1l-2,0l-5,5l-2,0l1,1l0,1l-1,1l0,8l-3,3l0,2l-1,1l0,1l-1,1l0,1l-1,1l-1,0l1,-1l0,-1l1,-1l0,-1l1,-1l-2,0l0,1l-1,1l0,1l-1,1l0,2l-1,1l0,2l-3,3l0,-3l1,-1l-1,0l0,-1l-5,-5l-1,1l0,-1l-2,-2l-2,0l0,-1l9,-9l0,-5l-1,0zm6,-75l2,-2l0,-1l-2,2l0,1zm3,-5l-1,1l1,0l0,-1zm2,0l1,-1l-1,0l0,1zm1,0l1,1l0,-1l-1,0zm-2,1l-1,1l0,1l1,1l0,2l1,-1l2,0l1,-1l0,-1l1,-1l0,-1l-2,0l-1,1l-1,-1l-1,0zm0,-2l-1,0l1,1l0,-1zm1,-1l-1,1l1,0l0,-1zm0,-5l-1,0l0,1l1,-1zm13,11l-1,0l1,1l0,-1zm16,37l1,0l-1,-1l0,1zm-14,32l0,-1l-1,0l1,1zm-3,1l-1,1l1,0l0,-1zm-8,9l1,-1l-1,0l0,1zm0,3l0,1l1,-1l-1,0z"],
    flag: "brazil.png",
    data: {}
  };
  countryData['uy'] = {
    name: "Uruguay",
    svg: ["m322.174988,421.174988l-1,1l0,1l-2,2l-1,-1l-4,0l-1,-1l-2,0l-1,-1l0,-3l1,-1l0,-8l1,-1l2,0l2,2l0,1l1,-1l5,5l0,1l1,0l-1,1l0,3z"],
    flag: "uruguay.png",
    data: {}
  };
  countryData['ar'] = {
    name: "Argentina",
    svg: ["m304.174988,485.174988l0,-1l0,-1l1,1l1,-1l1,0l0,1l-1,1l-1,1l-2,0l1,-1zm-1,-1l-1,1l1,0l0,-1zm3,2l1,1l1,-1l0,-1l1,0l1,0l1,-1l0,-1l-1,1l-1,-1l-1,0l0,1l-1,1l-1,1zm-24,0l1,0l1,1l0,-1l-1,-1l0,-1l-1,0l0,-3l1,-1l1,-1l0,-1l1,0l1,-1l0,-2l1,-1l2,-2l1,-1l0,-1l1,-1l0,-2l-2,0l-2,-2l-1,-1l0,-1l1,-1l1,-1l1,-1l2,0l0,-1l1,-1l0,-3l1,-1l1,-1l0,-1l-1,0l1,-1l1,0l1,1l1,0l0,-2l-1,-1l-1,0l0,1l-1,0l-1,-1l0,-5l1,1l1,1l3,0l1,0l1,-1l0,-1l-1,-1l1,-1l0,-2l0,-1l0,-1l1,0l1,1l2,0l1,-1l3,0l1,-1l2,0l1,-1l0,-2l2,-2l0,-2l-1,-1l-1,-1l1,-1l0,-1l-1,-1l-1,0l-1,-1l0,-5l1,-1l0,-8l1,-1l0,-1l9,-9l0,-5l-1,0l-1,1l0,2l-3,3l-7,0l0,-1l1,-1l0,-2l2,-2l-3,-3l-2,0l-2,-2l-1,0l-6,-6l-2,0l-2,2l0,-2l-3,0l-1,-1l-3,3l0,4l-1,0l-2,2l0,8l-2,2l0,2l-2,2l0,6l-1,1l0,4l1,1l0,6l-1,1l0,4l-2,2l0,5l1,1l0,1l-1,1l0,1l-1,1l0,3l0,6l-1,1l0,3l1,1l0,3l1,1l-1,1l-1,0l2,2l-1,1l0,4l-1,1l0,1l-1,1l0,4l-3,3l0,2l1,1l0,1l1,0l1,1l0,3l1,1l3,0l1,1l3,0zm3,3l0,2l1,1l2,2l1,1l2,0l1,1l-1,1l-4,0l-1,-1l-2,0l0,-8l1,1zm12,7l-1,1l-2,0l0,-1l3,0z"],
    flag: "argentina.png",
    data: {}
  };
  countryData['cl'] = {
    name: "Chile",
    svg: ["m287.174988,499.174988l0,1l-1,0l1,-1zm-15,-42l0,2l1,0l0,-1l-1,-1zm8,-86l1,-1l0,-2l2,2l0,3l1,1l0,5l1,0l0,5l1,1l1,0l0,4l-1,0l-1,1l-1,1l0,2l0,3l0,2l0,1l-1,1l-1,1l0,2l-1,1l-1,1l0,2l0,4l-1,1l0,1l0,3l1,1l0,2l0,4l-1,1l0,4l-1,1l-1,1l0,5l1,1l0,1l-1,1l0,1l-1,1l0,5l0,4l-1,1l0,3l1,1l0,3l1,1l-1,1l-1,0l1,1l1,1l-1,1l0,1l0,3l-1,1l0,1l-1,1l0,2l0,2l-2,2l-1,1l0,2l1,1l0,1l1,0l1,1l0,1l0,2l1,1l3,0l1,1l3,0l-1,1l-1,1l-1,0l-1,1l0,3l-1,1l-1,-1l-1,0l-1,-1l1,-1l1,0l1,-1l-2,0l-1,1l0,1l-1,0l0,-1l0,-1l1,-1l1,0l1,0l1,-1l-1,0l-2,0l-1,1l0,1l-1,1l-1,-1l1,-1l-2,0l0,-1l-1,-1l1,0l1,0l1,0l-1,-1l-1,-1l0,-1l-1,-1l-1,-1l0,-1l1,0l0,1l1,1l1,-1l0,-1l-1,1l0,-1l-1,-1l-1,0l1,-1l1,-1l-1,-1l0,-2l1,-1l-1,-1l0,-1l3,0l-1,-1l0,-1l-1,1l-1,0l0,-1l1,-1l-1,-1l-1,-1l-1,0l0,1l-1,0l0,-1l1,-1l0,-1l1,-1l1,0l0,-1l1,-1l1,0l-1,1l0,1l-1,1l1,0l0,1l0,1l1,-1l0,-2l0,-1l1,-1l0,-1l1,-1l0,-1l-1,-1l0,-1l1,-1l-1,-1l1,-1l0,-2l1,-1l0,-1l-1,0l1,-1l-1,-1l-1,1l-1,0l-1,-1l0,-3l1,-1l0,-1l1,-1l0,-3l-1,-1l0,-2l0,-2l1,-1l0,-1l1,-1l0,-3l1,-1l1,-1l0,-3l1,-1l0,-3l1,-1l0,-2l-1,-1l0,-2l0,-2l1,-1l0,-2l-1,-1l0,-1l1,-1l0,-3l1,-1l0,-2l0,-3l0,-1l1,-1l0,-4l0,-3l1,-1l0,-2l0,-2l0,-5l-1,-1l0,-4l1,0zm-10,80l-1,1l0,1l1,1l1,0l0,-1l-1,-1l1,-1l0,-2l-1,0l0,2zm0,4l0,1l1,0l-1,-1zm-2,-1l0,1l1,0l-1,-1zm-1,6l1,-1l-1,0l0,1zm-9,-39l0,-1l-1,0l1,1zm31,77l0,1l1,-1l-1,0zm-5,-10l-2,0l-1,-1l0,1l-1,0l-1,0l1,1l-1,1l0,1l3,0l-1,1l-1,0l0,2l1,0l1,1l-2,0l-1,-1l0,-1l0,-1l-1,0l0,1l0,1l1,1l-1,0l-2,0l-1,0l1,1l3,0l2,0l2,0l1,0l0,-8zm-7,9l1,1l1,0l0,-1l-2,0zm3,0l0,1l1,0l1,1l0,-1l1,0l1,1l1,0l-1,-1l0,-1l-4,0zm5,0l0,1l1,0l1,0l1,-1l-3,0zm-10,-4l0,1l1,0l1,1l1,-1l-1,-1l-2,0zm-1,-1l-1,-1l-1,0l-2,0l1,1l1,1l1,0l0,1l1,0l0,-2zm-3,-1l2,0l-1,-1l-1,0l-1,-1l-1,-1l-1,0l3,3zm-4,-6l1,1l1,0l-1,-1l0,-1l-1,0l0,1zm2,-1l-1,0l1,1l1,0l-1,-1zm-2,-1l0,1l1,-1l1,0l-1,-1l-1,1zm-1,-3l0,1l1,0l0,-1l-1,0zm0,-2l0,1l1,0l1,-1l-2,0zm3,-5l-1,0l0,1l-1,1l0,1l-1,1l1,0l1,-1l0,1l1,1l0,-2l0,-3zm-3,1l0,1l1,-1l0,-1l-1,1zm0,-2l0,1l1,-1l0,-1l-1,0l0,1zm2,-2l-1,0l0,2l1,1l1,-1l0,-1l-1,-1zm3,-10l-1,-1l0,-1l1,-1l-1,0l-1,0l-1,1l1,1l0,1l1,1l1,0l0,-1zm-1,-2l1,1l0,-1l-1,0zm-3,11l0,1l1,0l-1,-1z"],
    flag: "chile.png",
    data: {}
  };
  countryData['aw'] = {
    name: "Aruba",
    svg: ["m281.174988,275.174988l0,1l-1,0l1,-1zm1,2l1,0l-1,-1l0,1z"],
    flag: "aruba.png",
    data: {}
  };
  countryData['tt'] = {
    name: "Trinidad and Tobago",
    svg: ["m303.174988,281.174988l0,2l-2,0l2,-2zm1,-1l1,-1l-1,0l0,1z"],
    flag: "trinidad_tob.png",
    data: {}
  };
  countryData['ve'] = {
    name: "Venezuela",
    svg: ["m275.174988,280.174988l1,1l0,2l-1,1l0,1l1,1l1,0l1,-1l0,-2l-1,-1l0,-1l2,-2l4,0l1,1l0,1l1,1l5,0l2,2l2,0l2,-2l2,0l1,1l0,1l3,0l1,1l0,2l-1,1l1,1l1,-1l2,0l0,1l-2,2l0,1l1,0l0,1l-2,2l0,2l1,1l0,2l-1,1l-3,0l-1,1l0,1l-1,0l-1,-1l-2,0l-1,-1l0,2l1,1l0,3l2,0l0,1l-2,2l-1,0l-2,2l-3,0l-1,-1l0,-3l-2,-2l0,-1l1,-1l-1,-1l0,-6l1,-1l0,-1l-6,0l-2,-2l-4,0l-1,-1l0,-4l-2,-2l0,-3l3,-3zm5,-2l1,0l0,-1l-1,0l0,1zm5,-1l0,-1l-1,1l1,0zm7,3l0,1l1,0l-1,-1zm3,1l1,-1l-1,0l0,1zm9,6l0,-1l-1,1l1,0z"],
    flag: "venezuela.png",
    data: {}
  };

  // Central America & Caribbean
  countryData['gt'] = {
    name: "Guatemala",
    svg: ["m227.175003,259.174988l5,0l0,5l2,2l-2,2l0,2l-2,2l-1,-1l-3,0l-2,-2l0,-3l1,-1l3,0l0,-2l-2,-2l1,0l0,-2z"],
    flag: "guatemala.png",
    data: {}
  };
  countryData['sv'] = {
    name: "El Salvador",
    svg: ["m232.175003,270.174988l1,1l1,0l1,1l0,1l-1,1l-1,-1l-2,0l-1,-1l2,-2z"],
    flag: "el_salvador.png",
    data: {}
  };
  countryData['ni'] = {
    name: "Nicaragua",
    svg: ["m244.175003,281.174988l-1,-1l-3,0l-2,-2l0,-1l-2,-2l1,0l1,-1l0,-1l0,-1l2,0l2,-2l0,-1l3,0l1,-1l0,1l1,1l-1,1l0,4l-1,1l0,5l-1,0z"],
    flag: "nicaragua.png",
    data: {}
  };
  countryData['cr'] = {
    name: "Costa Rica",
    svg: ["m240.175003,283.174988l0,-1l1,0l-1,-1l0,-1l3,0l1,1l1,0l1,1l0,1l2,2l-1,1l0,2l-1,-1l0,1l-1,-1l1,-1l-1,-1l-2,0l0,-1l-1,-1l-1,0l1,1l0,1l-2,-2z"],
    flag: "costa_rica.png",
    data: {}
  };
  countryData['hn'] = {
    name: "Honduras",
    svg: ["m234.175003,266.174988l1,-1l1,1l3,0l1,-1l2,0l1,1l1,0l2,2l-1,1l-3,0l0,1l-2,2l-2,0l0,1l-1,1l-1,0l0,-1l-1,0l0,-1l-1,-1l-1,0l-1,-1l0,-2l2,-2zm4,-2l1,0l0,-1l-1,1zm3,-1l-1,0l0,1l1,-1z"],
    flag: "honduras.png",
    data: {}
  };
  countryData['bz'] = {
    name: "Belize",
    svg: ["m233.175003,259.174988l1,-1l0,5l-1,1l-1,0l0,-5l1,0zm3,2l0,-1l-1,1l1,0z"],
    flag: "belize.png",
    data: {}
  };
  countryData['pa'] = {
    name: "Panama",
    svg: ["m253.175003,291.174988l-1,-1l0,1l-2,-2l-2,0l-1,-1l0,-2l1,-1l1,1l0,1l1,0l1,1l1,0l1,-1l1,0l1.999985,-2l1,0l1,1l1,0l3,3l0,1l-1,1l0,1l-2,-2l0,-1l1,1l1,-1l-1,-1l-1,0l-1,-1l-2,0l-1.999985,2l0,1l1,1l-1,1l-1,0l0,-1zm-3,1l1,0l-1,-1l0,1zm7.999985,-4l-1,1l1,0l0,-1zm-8.999985,-3l1,1l0,-1l-1,0z"],
    flag: "panama.png",
    data: {}
  };
  countryData['cu'] = {
    name: "Cuba",
    svg: ["m247.175003,246.175003l1,0l0,1l1,1l-1,0l-1,0l0,-2zm-4,1l1,0l1,-1l1,-1l1,0l1,-1l2,0l0,1l0,1l2,0l2,0l1,1l0.999985,1l1,-1l1,0l1,1l0,2l1,0l2,0l0,1l-1,1l-1,1l4,0l1,-1l1,1l2,0l1,-1l1,0l-2,-2l-2,0l0,-1l-1,-1l-2,0l-1,-1l-3,-3l-1,0l0,1l-1,0l-1,-1l-0.999985,-1l-2,0l-1,-1l-3,0l-1,1l-1,0l-1,0l-1,1l-1,0l0,1l-1,1l-1,1l1,0z"],
    flag: "cuba.png",
    data: {}
  };
  countryData['jm'] = {
    name: "Jamaica",
    svg: ["m260.174988,257.174988l2,0l1,1l1,0l1,1l-2,0l-1,0l0,1l-1,-1l-1,0l-1,-1l1,-1z"],
    flag: "jamaica.png",
    data: {}
  };
  countryData['ky'] = {
    name: "Cayman Islands",
    svg: ["m254.175003,253.175003l1,0l0.999985,0l-0.999985,1l-1,0l0,-1zm-3,1l0,1l1,0l0,-1l-1,0z"],
    flag: null,
    data: {}
  };
  countryData['do'] = {
    name: "Dominican Republic",
    svg: ["m276.174988,253.175003l2,0l1,1l2,0l1,1l-1,0l1,0.999985l2,0l1,1l-1,1l-1,0l-1,-1l-1,0l-1,1l-2,0l-1,0l0,2l-1,-1l0,-1l-1,-1l1,-1l0,-2.999985z"],
    flag: "dominican_rep.png",
    data: {}
  };
  countryData['ht'] = {
    name: "Haiti",
    svg: ["m274.174988,257.174988l0,-1l-1,-1l0,-1l-1,0l-1,-1l1,0l2,0l2,0l0,3l-1,1l1,1l0,1l-1,-1l-2,0l-2,0l-1,0l-1,-1l1,0l4,0zm-1,0l0,-1l-1,0l1,1zm1,-3.999985l0,-1l-1,0l1,1z"],
    flag: "haiti.png",
    data: {}
  };
  countryData['pr'] = {
    name: "Puerto Rico",
    svg: ["m292.174988,257.174988l0,1l-1,1l-2,0l-2,0l0,-1l0,-1l5,0zm-6,2l0,-1l-1,0l1,1z"],
    flag: "puerto_rico.png",
    data: {}
  };
  countryData['bs'] = {
    name: "Bahamas",
    svg: ["m273.174988,248.175003l-1,0l0,-1l1,1zm-15,-17l0,1l1,0l1,-1l-2,0zm1,5l1,0l0,1l1,1l-1,1l1,0l0,2l-1,-1l-1,-1l0,-1l0,-2zm2,0l1,0l0,1l-1,-1zm2,-2l1,1l1,1l0,2l-1,-1l0,-1l-1,-1l0,-1zm-3,-4l1,0l1,1l0,1l0,2l-1,-1l0,-1l0,-1l-1,-1zm6,8l1,1l-1,1l0,-2zm0,3l-1,1l0,-1l1,0zm2.999023,-2l0,1l-1,0l1,-1zm1,5l-1,0l0,-1l1,1zm3,0l0,1l-1,0l1,-1zm-4.999023,-2l0,1l-1,-1l0,-1l1,1zm6,4l0,1l1,0l-1,-1zm2,1l0,-1l-1,0l1,1zm-5,3l0,1l1,-1l0,-1l-1,0l0,1z"],
    flag: "bahamas.png",
    data: {}
  }; // includes all northern Caribbean islands
  countryData['ag'] = {
    name: "Antigua and Barbuda",
    svg: ["m294.174988,260.174988l-1,0l0,-1l1,0l0,1zm-1,-2l1,0l1,-1l0,-1l-1,1l-1,0l0,1zm5,1l0,-1l-1,0l1,1zm1,3l0,-1l-1,0l1,1zm3,-2l0,-1l-1,0l1,1zm1,9l0,1l1,0l0,-1l-1,0zm0,2l0,1l1,0l0,-1l-1,0zm-1,2l0,1l1,0l0,-1l-1,0zm4,0l0,1l1,0l0,-1l-1,0zm-4,2l0,1l1,-1l-1,0zm-1,2l0,1l1,-1l-1,0zm1,-9l1,-1l-1,-1l0,2zm-1,-3l1,-1l-1,-1l0,2zm0.5,-4c-0.276001,0 -0.5,0.223999 -0.5,0.5s0.223999,0.5 0.5,0.5s0.5,-0.223999 0.5,-0.5s-0.223999,-0.5 -0.5,-0.5z"],
    flag: "antigua_bar.png",
    data: {}
  }; // includes all southern Caribbean islands
  countryData['mx'] = {
    name: "Mexico",
    svg: ["m177.175003,256.174988l-1,1l0,-1l1,0zm2,-17.999985l0,1l1,0l-1,-1zm-21,-15l0,1l-1,0l0,-1l1,0zm80,26l0,-1l1,0l-1,1zm-3,8.999985l0,1l1,0l-1,-1zm-74,-45.999985l4,0l1,-1l1,0l0,1l1,1l2,0l2,2l3,0l1,1l7,0l0,-2l4,0l5,5l0,2l2,2l1,0l1,1l1,-1l0,-2l3,0l2,2l0,1l2,2l0,1l1,1l0,2l1,1l0,1l1,0l1,1l2,0l1,1l0,1l-1,1l0,7l-1,1l0,1l1,1l0,2l1,1l0,1l2,2l0,2l1,1l0,0.999008l1,1l2,0l1,1l3,0l1,-1l2,0l1,1l1,-1l0,-1l2,-1.999008l0,-2l1,-1l0,-2l1,0l1,-1l6,0l0,2l-1,1l0,1l-1,1l0,3.999008l-1,-1l0,1l-2,2l-5,0l0,2l-1,0l2,2l0,2l-3,0l-1,1l0,3l-5,-5l-3,0l-2,2l-1,0l-1,-1l-2,0l-1,-1l-2,0l-2,-2l-1,0l-1,-1l-1,0l-3,-3l-3,0l-3,-2.999008l-1,0l-2,-2l0,-2l1,0l0,-4l-1,-1l0,-2l-5,-5l0,-1l-1,-1l0,-1l-1,0l-2,-2l0,-3l-2,0l0,-1l-2,-2l0,-1l-1,0l-2,-2l0,-1l-1,-1l0,-1l-1,-1l0,-1l-1,-1l0,-3l-1,0l-1,-1l-1,0l-1,-1l-1,0l0,3l1,1l0,2l2,2l0,1l2,2l0,2l2,2l0,1l2,2l0,2l1,1l0,1l1,1l0,2l1,0l2,2l-1,1l0,1l-1,-1l0,-1l-4,-4l0,-2l-1,-1l-2,-2l0,-2l-1,1l-1,-1l-1,0l-2,-2l3,0l0,-1l-1,0l0,-3l-2,-2l-1,0l-1,-1l0,-2l-1,-1l0,-2l-1,-1l0,-1l-1,-1l0,-1zm11,11l1,1l0,-1l-1,0zm-1,-1l-1,0l0,1l1,-1zm-6,4l-1,0l1,1l0,-1zm23,22l0,-2l-1,1l1,1zm23,0l1,-1l-1,0l0,1zm27,3l-1,1l1,0l0,-1z"],
    flag: "mexico.png",
    data: {}
  };

  // United States
  countryData['us'] = {
    name: "United States",
    svg: ["m252.175003,238.175003l-1,0l0,-1l1,1zm-126,-104l0,-1l-1,0l1,1zm-6,-9l1,0l0,1l-1,-1zm-53,0l0,1l-1,0l1,-1zm165,95l1,0l0,1l-1,1l0,-2zm-4.001007,-1l1,1l1,0l0,0l-1,-1l-1,0zm60.000992,-49l-1,0l-1,0l-1,1l-1,1l0,-1l-1,0l0,1l-1,1l-1,0l-1,1l-1,1l0,1l-1,1l0,1l0,1l1,1l1,0l-1,1l-1,0l-1,1l0,-1l-1,1l-2,0l-2,0l-1,1l-1,-1l0,2l0,1l0,3l-2,2l-1,-1l0,-1l0,-1l-1,1l0,1l1,1l0,1l0,1l0,1l0,1l-1,1l-1,1l0,-1l1,-1l-1,-1l0,-1l0,-1l0,-1l0,-1l-1,1l0,1l0,1l-1,0l1,1l0,1l0,1l0,1l-1,0l1,1l1,0l0,2l-1,1l1,0l1,1l-1,1l-1,0l0,1l-1,1l1,0l-1,1l-1,0l-1,1l-1,1l-1,0l-1,1l-1,1l0,1l-1,1l-1,0l-1,1l-1,1l0,1l-1,1l-1,1l0,2l1,1l0,2l0,2l1,1l0,3l1,1l1,1l0,2l0,3l-1,1l0,1l-1,1l-1,-1l0,-1l-1,-1l0,-1l-1,-1l-1,-1l0,-1l-1,-1l0,-1l1,-1l-1,0l0,-1l0,-1l0,-1l-1,-1l0,-1l-2,-2l-1,0l-1,1l-2,0l-1,-1l-1,-1l-2,0l-2,0l0,-1l-1,1l-2,0l-1,0l-1,1l-1,-1l-1,0l1,1l1,0l0,0l1,0l0,1l-1,0l2,2l0,1l-2,-2l-1,1l0,-1l-1,1l-1,0l-1,-1l-1,-1l-1,1l-1,0l-1,-1l-1,0l-2,0l-1,1l-1,1l-2,2l-1,0l-1,0l0,1l-1,1l-1,1l-1,1l0,2l1,1l0,1l0,1l-1,-1l-2,0l-1,-1l-1,0l0,-1l-1,-1l0,-2l-1,-1l0,-1l-2,-2l0,-1l-2,-2l-3,0l0,2l-1,1l-1,-1l-1,0l-2,-2l0,-2l-5,-5l-4,0l0,2l-7,0l-1,-1l-3,0l-2,-2l-2,0l-1,-1l0,-1l-1,0l-1,1l-4,0l-1,-1l0,-1l-2,-2l-1,-1l-1,0l-1,-1l-2,0l-1,-1l0,-1l-1,-1l0,-1l-2,-2l0,-1l0,-1l-1,-1l-1,-1l0,-1l1,0l0,-1l1,-1l-2,0l0,1l-1,-1l-2,-2l0,-3l-1,-1l-1,-1l0,-2l1,-1l0,-2l0,-1l-1,-1l0,-2l0,-2l1,-1l0,-2l0,-3l0,-4l1,0l1,0l-1,-1l-1,0l0,-1l1,-1l-1,0l0,-1l-1,-1l0,-1l-1,-1l0,-1l1,0l1,1l2,0l1,0l0,1l-1,1l0,1l1,-1l0,1l1,0l0,-1l0,-1l0,-1l0,-1l0,-1l0,-1l-1,-1l10,0l21,0l15,0l18,0l6,0l1,-1l0,2l1,0l1,1l3,0l1,1l2,0l1,1l1,-1l1,1l2,0l-1,1l-1,0l-1,1l-1,1l0,1l-1,1l2,0l1,-1l0,1l1,1l1,-1l1,0l1,-1l2,-2l1,0l0,1l-1,1l1,1l1,0l1,1l2,0l1,-1l1,0l1,1l1,0l0,-1l1,0l0,1l1,1l1,1l1,1l-1,0l-1,-1l-3,0l-2,0l-1,0l-1,1l-1,0l-2,2l0,1l-1,1l1,0l1,-1l1,-1l0,1l-1,1l0,1l0,1l-1,1l0,2l0,3l0,1l1,1l0,1l1,0l1,-1l1,-1l0,-2l0,-1l-1,-1l0,-2l1,-1l0,-2l1,-1l0,1l1,0l0,-1l0,-1l1,-1l1,-1l1,0l1,1l1,1l0,1l0,2l0,1l-1,1l1,0l1,-1l1,1l0,2l1,1l-1,1l-1,1l0,1l1,1l-1,0l-1,1l1,1l2,0l1,0l1,-1l1,0l1,-1l1,0l1,-1l2,-2l0,-1l0,-1l6,0l1,-1l0,-1l0,-1l-1,0l2,-2l1,-1l1,0l1,-1l8,0l1,-1l1,0l1,-1l0,-1l0,-1l1,-1l0,-1l1,-1l0,-1l1,-1l1,1l1,0l1,-1l1,1l0,5l1,1l0,2l1,1zm-234.999989,76l0,-1l-1,1l1,0zm3,1l1,0l1,1l-1,0l-1,-1zm3,1l1,0l-1,1l0,-1zm1,2l1,-1l1,1l-1,1l-1,-1zm2,2l1,0l2.000004,2l-1,1l-1.000004,0l-1,0.999985l0,-3.999985zm-3,-2m1,1l-1,0l0,-1m-8,-4l1,1l-1,0l0,-1zm75.000004,-120.000999l-1,0l-4,-4l0,-2l-6,-6l0,-1l-3,0l-1,1l0,1l-1,0l-1,1l-4,-4l0,-2l-2,0l-1,1l-2,0l0,-41l-3,0l-2,-2l-11,0l-1,-1l-2,0l-1,-1l-5,0l-1,1l-2,0l-2,-2l-4,0l-1,-1l-1,0l-1.000004,1l-2,0l0,-1l1,-1.000004l-1,-1l-1,0l-3,3.000004l-4,0l-1,1l1,0l0,1l-2,0l0,-1l-2,2l-3,0l-2,2l0,2l-2,2l-6,0l0,2l2,2l2,0l4,4l4,0l-1,1l1,1l3,0l0,1l-2,0l0,1l-7,0l0,-2l-3,0l-1,1l0,1l-4,0l-2,2l0,1l4,0l0,1l-1,0l3,3l2,0l1,-1l3,0l1,1l2,-2l2,0l1,1l-1,1l0,1l1,1l0,2l-4,0l-2,2l-2,0l-1,-1l-2,2l1,1l0,1l-2,0l-1,1l0,3l1,1l2,0l1,1l2,0l0,1l-3,0l-1,-1l0,2l2,2l3,0l1,-1l0,-2l2,0l-1,1l0,2l1,1l0,4l1,0l2,-2l1,0l3,3l1,0l0,-3l2,0l0,1l-1,0l0,1l2,0l2,-2l0,2l-2,2l0,2l-3,3l0,1l-2,0l-2,2l0,0.999992l-4,0l-3,3l-1,0l1,1l1,-1l1,0l2,-2l1,1l1,-1l1,0l1,-1l2,0l3,-2.999992l1,0l3,-3l1,0l3.000004,-3l1,0l2,-2l0,-1l-1,-1l0,-1l2,-2l1,0l0,-1l-1,-1l2,0l4,-4l2,0l1,-1l1,1l-1,1l1,1l-4,0l-1,1l0,1l-1,1l0,2l1,0l-1,1l0,1l1,0l2,-2l1,0l2,-2l1,1l1,0l0,-1l1,-1l-1,0l0,-2l2,-2l0,1l-1,1l3,0l1,-1l0,2l2,0l0,1l1,0l1,-1l0,1l1,1l6,0l1,1l1,-1l0,1l1,1l2,0l1,-1l1,0l-1,1l2,2l1,0l3,3l1,0l1,1l1,-1l-1,-1l0,-1l2,0l0,2l2,0l-1,-1l0,-2l1,0l0,2l2,2l1,0l0,1l1,0l0,3l1,0l3,3l0,1.999992l-1,1l1,0l2,-1.999992l0,0.999992l1,1l0,3l1,0l1,-1l0,-3l-2,-1.999992zm-97.000004,-28l-1,1l-1,0l-1,-1l-4,0l0,-1l2,0l1,-1l2,2l2,0zm-9,12l-1,0l-1,-1l1,0l1,1zm16,3.000999l-1,-1l-1,0l-1,-1l1,0l1,-1l1,0l1,1l0,1l-1,1zm-10,10l-1,0l1,-1l0,1zm23,-6l1,0l-1,1l0,-1zm-3,-34l0,1l-1,-1l1,0zm1,1l1,1l-1,0l0,-1zm-20,41l1,1l-1,0l0,-1zm18,8l1,-1l0,1l-1,0zm-3,-2l1,1l0,1l-2,0l-1,1l-1,-1l1,-1l1,0l1,-1zm-5,3l1,0l0,1l-1,-1zm-1,1l1,0l0,1l-1,-1zm-2,1l1,0l0,1l-1,1l-2,0l1,-1l1,0l0,-1zm-2,1l-3,3l0,-1l2,-2l1,0zm-6,3l1,-1l0,1l-1,0zm-2,0l1,0l-1,1l0,-1zm-4,1l1,0l-1,1l0,-1zm-3,2l1,-1l0,1l-1,0zm-1.999999,-1l0.999999,0l-0.999999,1l-1,0l1,-1zm-5,0l1,0l0,1l-1,-1zm-1,1l1,0l0,1l-1,0l0,-1zm-2,1l1,-1l0,1l-1,0zm-2,-1l1,0l0,1l-1,-1zm43.999999,-12l0,-1l1,0l0,1l-1,0zm2,0l1,0l-1,1l0,-1zm11,-3l1,0l-1,1l0,-1zm3.000004,-3l1,0l-1,1l0,-1zm4,-5l1,0l1,1l0,1l-1,0l-1,1l-1,0l0,1l-1,0l0,-1l-1,0l0,1l-1,-1l0,-1l1,-1l1,1l1,0l0,-1l1,-1zm0,4l1,-1l0,1l-1,0zm2,-6l1,0l0,1l-1,0l-1,1l-1,-1l1,-1l1,0z" + 
          "m0,-1l0,1l-1,-1l1,0zm11,-6l1,0l-1,1l0,-1zm1,0l-1,-1l1,0l0,1zm0,1l2,-2l0,1l-1,1l-1,0zm3,-2l1,0l-1,1l0,-1zm27,12l-1,-1l0,-1l1,-1l1,1l1,0l0,1l-1,0l-1,1zm3,-3l2,2l0,1l-1,1l-1,-1l0,-3zm-1,4l1,1l0,3l-1,-1l0,-2l-1,-1l-1,0l1,-1l1,0l0,1zm3,4l-1,0l0,-3l1,1l0,2zm1,-3l1,0l0,1l-1,1l0,-1l-1,-1l0,-1l1,1zm1,2l1,0l-1,1l0,-1zm2,2l-1,-1l1,-1l0,2zm-1,1l2,2l0,1l-1,1l0,-1l-2,-2l0,-1l-1,0l0,-2l1,1l1,0l0,1zm-2,1l-1,1l0,-1l1,0zm1,1l1,1l0,1l-2,-2l1,0zm4,0l1,1l-1,0l0,-1zm0,-2l1,0l0,1l-2,0l1,-1zm33,81l0,1l1,0l-1,-1zm-2,-1l0,1l-1,0l0,-1l1,0zm-1,-2l0,1l-1,0l-1,-1l2,0zm3,2l1,0l0,1l-1,-1zm112.999985,-25l1,-1l3,0l-1,1l-1,0l-1,1l-1,0l0,-1zm9,-3l0,1l-1,0l1,-1zm1,1l0,-1l1,0l0,1l-1,0z"],
    flag: "usa.png",
    data: {}
  };

  // South Pacific (all islands east of IDL)
  countryData['as'] = {
    name: "American Samoa",
    svg: ["m53.174999,302.174988l1,1l-1,0l0,-1zm5,6l0,1l1,0l0,-1l-1,0zm6.000004,19l1,-1l-1,0l0,1zm-2.000004,5l1,-1l-1,0l0,1zm-39,-4l1,0l-1,-1l0,1zm-3,0l0,1l1,-1l-1,0zm2,-5l1,-1l-1,0l0,1zm1,20l1,-1l-1,0l0,1zm-12.999999,13l1,-1l-1,0l0,1zm9.999999,1l0,-2l-1,1l1,1zm2,1l1,0l-1,-1l-1,0l1,1zm2,1l1,-1l-1,0l0,1zm-17.999999,0l0,-1l-1,0l1,1zm-5,5l1,-1l-1,0l0,1zm0,1l-1,-1l0,1l1,0zm0,1l0,1l1,0l0,-1l-1,0zm2,1l0,1l1,-1l-1,0zm0,2l0,1l1,-1l-1,0zm2,0l1,1l0,-1l-1,0zm-1,1l-1,1l1,0l0,-1zm-3,3l1,0l-1,-1l0,1zm3,1l1,0l-1,-1l0,1zm11.999999,-2l1,-1l-1,0l0,1zm10,1l1,1l0,-1l-1,0zm-12.999999,7l-1,-1l0,1l1,0zm1,0l-1,1l1,0l0,-1zm37.999999,1l1,-1l-1,0l0,1zm20.000004,-32l0,1l1,-1l-1,0zm1,18l1,-1l-1,0l0,1zm4,1l0,1l1,-1l-1,0zm2,2l0,-2l-1,1l1,1zm9,-6l0,1l1,-1l-1,0zm1,-1l1,1l0,-1l-1,0zm13,-22l0,1l1,-1l-1,0zm2,1l0,-1l-1,1l1,0zm-2,1l0,1l1,-1l-1,0zm2,1l1,1l0,-1l-1,0zm1,2l0,1l1,-1l-1,0zm-9,18l1,-1l-1,0l0,1zm-3,1l0,1l1,-1l-1,0zm7,4l1,1l0,-1l-1,0zm0,2l1,0l-1,-1l0,1zm11,0l0,1l1,-1l-1,0zm-5,8l1,-1l-1,0l0,1zm26,11l0,1l1,-1l-1,0zm-122.000003,66l1,0l-1,-1l-1,0l1,1zm0,2l1,-1l-1,0l0,1zm170.000003,-59l1,-1l-1,0l0,1z"],
    flag: "samoa.png",
    data: {}
  };

  // South Pacific (islands west of IDL)
  countryData['nc'] = {
    name: "New Caledonia",
    svg: ["m865.174988,373.174988l-1,1l0,-1l1,0zm10,4l0,1l5,5l1,0l1,1l0,-1l-5,-5l-1,0l-1,-1zm9,8l0,-1l-1,1l1,0zm-2,-7l0,1l1,1l0,-1l-1,-1zm2,3l1,0l0,-1l-1,1zm-4,-2l1,-1l-1,0l0,1z"],
    flag: "new_caledonia.png",
    data: {}
  };
  countryData['fj'] = {
    name: "Fiji",
    svg: ["m908.174988,366.174988l1,1l-1,0l0,-1zm5,4l1,0l0,-1l-1,1zm0,-2l1,0l0,-1l-1,1zm-12,13l0,1l1,0l0,-1l-1,0zm6,-29l0,1l1,0l0,-1l-1,0zm4,21l-1,1l1,0l0,-1zm1,-4l-1,-1l-1,0l-2,2l1,0l1,1l2,-2zm0,-2l1,-1l1,0l1,-1l0,-1l-1,1l-1,0l-1,1l0,1zm3,-1l-1,1l1,0l0,-1z"],
    flag: "fiji.png",
    data: {}
  };
  countryData['vu'] = {
    name: "Vanuatu",
    svg: ["m889.174988,377.174988l1,-1l0,1l-1,0zm-1,-3l0,1l1,0l-1,-1zm0,-2l-1,0l1,1l0,-1zm-3,-3l1,0l0,-1l-1,1zm0,-3l1,1l0,-1l-1,0zm1,-2l-1,0l0,1l1,-1zm-3,0l0,1l1,0l-1,-1zm2,-1l1,-1l-1,0l0,1zm-1,-1l1,-1l-1,0l0,1zm-2,-1l0,-1l-1,-1l0,3l1,1l1,-1l-1,-1zm1,-3l0,1l1,-1l-1,0zm0,-2l0,1l1,0l-1,-1zm-1.998962,-5l0.999023,-1l-0.999023,0l0,1zm-2.001038,-3l1.000977,-1l-1.000977,0l0,1z"],
    flag: "vanuatu.png",
    data: {}
  };
  countryData['sb'] = {
    name: "Solomon Islands",
    svg: ["m866.174988,351.174988l-2,-2l1,0l1,1l0,1zm2,-5l2,2l0,-0.998993l-1,-1.001007l-1,0zm-2,-2l-1,-1l-2,0l1,1l1,0l1,1l0,-1zm3,0l0,-1l-1,1l1,0zm-3,-4l0,1l1,1l0,1l1,1l0,-1l0,-2l-1,0l-1,-1zm-5,-2l2,2l1,0l-3,-3l0,1zm2,3l1,0l0,-1l-1,1zm2,1l1,1l0,-1l-1,0zm-3,0l0,1l1,-1l-1,0zm-2,-1l-1,0l1,1l0,-1zm-1,0l0,-2l-1,0l0,1l1,1zm-1,0l-1,-1l0,1l1,0zm-1,-2l1,-1l-1,0l0,1zm-1,-1l-1,0l1,1l0,-1zm0,-3l0,1l1,1l1,0l-1,-1l0,-1l-1,0z"],
    flag: "solomon_is.png",
    data: {}
  };
  countryData['pg'] = {
    name: "Papua New Guinea",
    svg: ["m849.174988,349.174988l1,0l-1,1l0,-1zm-1,0l-1,0l1,1l0,-1zm6,-13l-1,1l1,0l0,-1zm-1,-1l1,0l0,-1l-3,-3l0,1l1,1l0,1l1,1zm-3,-4l1,-1l-1,0l0,1zm-3,11l-1,0l0,1l1,-1zm-2,-19l1,1l0,-1l-1,0zm2,4l-2,-2l0,1l1,1l0,2l1,-1l0,-1zm-4,-4l-1,0l-1,-1l0,1l1,1l1,0l1,1l1,0l-2,-2zm-3,-1l-1,0l1,1l0,-1zm4,5l-1,0l0,3l-1,1l-2,0l-1,-1l0,1l-3.999023,0l0,1l0.999023,0l2.000977,2l1.999023,0l3,-3l1,0l0,-1l1,-1l0,-1l-1,-1zm-10,4l-1,0l1,1l0,-1zm5,-12l-1,-1l0,1l1,0zm-8,2l1,-1l-1,0l-1,1l1,0zm1,10l0,-1l-1,1l1,0zm-3,-3l-1,0l1,1l0,-1zm11,14l-1,0l1,1l0,-1zm1,2l0,-1l-1,1l1,0zm0,1l1,1l0,-1l-1,0zm1,-5l-1,0l1,1l0,-1zm-1,8l1,-1l-1,0l0,1zm-24,-5l4,0l1,-1l0,-1l-1,-1l-1,0l0,-1l2,0l1,-1l5,0l3,3l0,2l2,2l2,0l1,1l3,0l1,1l1,0l-2,-2l0,-1l-2,0l0,-2l-1,0l-2,-2l0,-1l-3,-3l0,-1l3,0l0,-1l-2,-2l-4,0l0,-2l-6,-6l-4,0l-2,-2l0,20l1,1zm5,-3l1,1l0,-1l-1,0z"],
    flag: null,
    data: {}
  };
  countryData['fm'] = {
    name: "Federated States of Micronesia",
    svg: ["m495.174988,201.175003l-1,0l1,-1l0,1z",
          "m488.174988,198.175003l0,-1l1,0l-1,1z",
          "m257.174988,444.174988",
          "m844.174988,292.174988l-1,0l0,-1l1,1zm0,0l0,-1l-1,0l1,1zm42,-1l0,1l1,0l-1,-1zm-4,-10l0,-1l-1,0l1,1zm10,11l0,1l1,0l0,-1l-1,0zm2,1l1,0l-1,-1l0,1zm-5,4l0,-1l-1,0l1,1zm8,7l0,1l1,0l-1,-1zm0,4l0,1l1,0l0,-1l-1,0zm0,2l0,1l1,-1l-1,0zm0,2l1,0l-1,-1l0,1zm4,4l0,1l1,0l0,-1l-1,0zm1,3l0,-1l-1,0l1,1zm-14,-2l1,0l0,-1l-1,1zm-5,-1l-1,-1l0,1l1,0zm-23,-22l0,-1l-1,1l1,0z",
          "m828.174988,258.174988l1,0l-1,1l0,-1zm0,-2l0,1l1,-1l-1,0zm0,7l0,1l1,0l-1,-1zm0,4l0,1l1,0l-1,-1zm0,2l0,-1l-1,0l1,1zm-2,2l1,0l0,-1l-1,1zm-6,-39.999985l-1,0l0,1l1,-1zm-11,53.999985l-1,1l1,0l0,-1zm-9,6l-1,1l1,0l0,-1zm26,-18l0,-1l-1,1l1,0z",
          "m482.174988,177.175003",
          "m296.174988,282.174988",
          "m554.174988,467.174988l-1,0l1,-1l0,1zm35,-3l0,1l1,0l-1,-1zm56,25l0,1l-1,-1l1,0zm-12,-12l0,-4l1,1l0,1l2,0l1,-1l0,1l-1,1l-1,0l1,1l-1,0l-1,-1l-1,1z",
          
          "M228.174 219.175L229.174 220.175 230.174 220.175 230.175 220.175 229.174 219.175z",
          "M361.175 493.175L363.175 493.175 364.174 494.175 366.175 494.175 368.175 496.175 367.175 497.175 366.175 496.175 365.175 496.175 364.175 495.175 363.174 494.175 362.175 494.175z",
          "M642.175 280.175L643.175 280.175 643.175 279.175z",
          "M644.175 301.175L645.175 301.175 645.175 302.175z",
          "M644.175 304.175L644.175 305.175 645.175 304.175z",
          "M704.175 351.175L704.175 352.175 705.175 352.175z",
          "M293.175 212.175L293.175 213.175 294.175 212.175z",
          "M598.175 328.175L599.175 328.175 599.175 329.175z",
          "M641.175 336.175L642.175 336.175 642.175 337.175z"],
    flag: "micronesia.png",
    data: {}
  }; // FSM; Marianas; lots of little islands

  // South, Southeast and Central Asia
  countryData['tw'] = {
    name: "Taiwan",
    svg: ["m765.174988,246.175003l-1,-1l-1,-1l0,-1l0,-1l0,-1l1,-1l0,-1l1,-1l0,-1l1,-1l1,0l1,1l-1,0l1,1l-1,1l0,1l0,1l0,1l-1,1l-1,1l0,2z"],
    flag: "taiwan.png",
    data: {}
  };
  countryData['jp'] = {
    name: "Japan",
    svg: ["m801.174988,205.175003l0,1l-1,0l1,-1zm-12,3l-1,1l-1,0l-1,1l1,0l1,0l0,1l-1,1l1,0l1,-1l0,-1l1,0l0,1l0,1l-1,1l0,1l0,1l-1,1l1,0l1,-1l1,0l-1,1l0,1l1,-1l1,-1l0,-2l0,-1l1,-1l0,-1l-1,-1l0,-1l-1,0l-1,-1l-1,1zm0,4l-1,1l0,-1l1,0zm-1,-1l-1,-1l1,0l0,1zm7,-4l0.944031,0l1.055969,0l1,-1l1,0l1,0l0,1l0,1l-1,1l-1,0l-1,0l-1,1l-1,1l-1,-1l1,0l-1,-1l1,-1l0,-1zm18,-2l-1,0l0,-1l1,1zm0,5l1,0l-1,1l0,-1zm-25,4l0,1l-1,0l1,-1zm5,-5l0,-1l1,1l-1,0zm1,-2l1,0l-1,1l0,-1m-3,11l0,1l-1,0l1,-1zm-1,1l-1,1l0,-1l1,0zm-3,6l1,0l-1,1l0,1l-1,-1l1,-1zm-1,2l0,1l-1,-1l1,0zm-2,4l-1,1l-1,1l0,-1l1,-1l1,-1l0,1zm-12,7l1,1l-1,0l0,-1zm2,0l0,1l-1,-1l1,0zm3,-1l-1,1l0,-1l1,0zm50,-63l0,1l1,0l-1,1l-1,0l-2,0l-1,1l-1,1l0,2l-1,-1l-1,0l-1,-1l-1,-1l-1,1l-1,0l-1,-1l-1,1l1,1l1,1l-1,1l-1,1l-1,-1l1,-1l0,-1l-1,-1l1,-1l1,-1l-1,-1l1,0l1,1l1,-1l0,-1l0,-1l1,-1l0,-1l0,-1l0,-1l0,-1l0,-1l1,1l1,1l1,1l1,1l1,1l1,0l1,1l1,0l0,-1l1,-1l0,1l0,2zm-11,-6l1,0l0,1l-1,-1zm0,0l0,-1l1,0l-1,1zm-3,11l-1,1l0,-1l1,0zm3,4l0,-2l1,1l0,1l0,1l1,1l0,1l1,1l0,2l-1,1l-1,1l0,1l-1,1l0,2l0,2l-1,1l0,1l0,1l1,1l-1,1l0,1l-1,1l-1,0l1,-1l0,-1l-1,-1l0,1l0,1l-1,0l-1,1l0,1l-1,-1l1,-1l-1,0l-1,1l0,1l0,0l-1,0l-1,0l-1,0l1,-1l-1,0l-1,-1l0,1l0,1l1,1l-1,0l-1,1l0,1l-1,1l-1,0l0,-1l-1,-1l0,-1l1,-1l-1,0l-1,-1l-1,1l-1,0l-1,1l-1,0l-1,0l-1,0l0,1l-1,1l0,-1l-1,0l-1,0l-1,0l1,-1l1,0l1,-1l1,-1l0,-1l1,-1l4,0l1,-1l2,0l-1,1l1,0l1,0l1,-1l0,-1l1,-1l0,-1l0,-1l0,-1l1,-1l1,0l-1,1l0,1l0,1l1,0l1,-1l1,-1l1,0l1,-1l1,-1l0,-1l1,-1l0,-1l0,-1l1,-1l0,-1l-1,-1l1,-1l0,-2l0,-1l1,-1l0,1l0,1l1,-1zm-7,10l1,-1l0,1l-1,1l0,-1zm-13,6l1,0l0,1l-1,-1zm-9,8l1,0l0,1l-1,-1zm-1,-2l1,-1l0,2l-1,0l0,-1zm0,1l1,0l-1,1l0,-1zm-1,5l1,0l-1,1l0,-1zm0,0l1,-1l0,1l-1,0zm10,-5l0,1l-1,0l1,-1z"],
    flag: "japan.png",
    data: {}
  };
  countryData['ph'] = {
    name: "Philippines",
    svg: ["m771.174988,292.174988l-1,0l0,-1l1,1zm-9,7l1,0l1,-1l-1,0l-1,1zm3,-3l0,-1l1,0l1,1l0,1l-1,0l-1,-1zm2,-2l1,0l1,1l-1,0l-1,-1zm1,-3l1,-1l1,-1l1,-1l1,0l0,1l1,0l1,-1l1,-1l1,0l1,0l0,-2l1,1l1,1l-1,1l1,0l0,1l0,1l1,1l0,1l-1,1l0,2l-1,-1l0,-1l0,-1l-1,0l-1,1l1,1l0,3l-1,-1l-1,0l-1,0l-1,-1l0,-2l0,-1l0,-1l-1,-1l0,2l-1,-1l-1,0l-1,0l0,1l-1,1l0,-2zm-2,-36.999985l1,0l0,1l-1,-1zm-1,1l1,0l0,0.999985l-1,-0.999985zm3,0l0,0.999985l-1,0l1,-0.999985zm4,19.999985l-1,-1l0,-1l-1,-1l-1,-1l0,1l1,1l0,1l-1,-1l-1,0l0,-1l-1,-1l-1,1l-1,0l-1,-1l1,-1l0,-2l-1,1l0,1l-1,-1l0,-3l-1,-1l0,-1l1,1l1,-1l0,-1l0,-6l1,0l1,0l1,1l1,0l1,-1l0,1l-1,1l0,1l1.004028,1.003998l0,1.996002l-1.002014,1.002014l-1,1l0,0.997986l-1.001038,1.001007l0.999023,0.998993l0,1l0,1l1,1l1,-1l1,1l1,1l0,-1l2,0l-1,1l0,1l1,1l1,1l-1,1l0,-1l-1,0zm1,-4l1,1l-1,1l0,-1l0,-1zm-6,2l1,0l0,1l-1,-1zm3,1l1,0l1,1l-1,0l-1,-1zm-3,-6l1,0l0,1l-1,-1zm2,8l1,0l-1,1l0,-1zm-1,0l0,1l-1,0l1,-1zm0,-1l1,0l-1,1l0,-1zm4,1l1,1l0,1l-1,-1l-1,1l0,-1l0,-1l1,0zm1,0l-1,0l0,-1l1,1zm-9,-3l1,0l1,0l1,1l0,1l0,1l-1,1l-1,-1l0,-1l0,-1l-1,-1zm4,-23.999985l0,1l-1,0l1,-1zm-1,2l1,0l0,1l-1,-1zm7,34.999985l1,0l0,1l-1,-1zm0,-3l1,1l-1,1l-1,0l0,-1l1,-1zm5,1l-1,0l0,-1l1,1zm-1,-2l0,1l-1,1l0,-2l1,0zm-4,-1l0,1l-1,0l1,-1zm-1,-1l-1,0l0,-1l1,1zm-2,0l-1,1l-1,0l-1,1l0,-3l0,-1l1,1l1,0l1,0l0,1zm-9,-4l1,1l1,0l0,1l-1,0l-1,-1l0,-1zm1,3l-1,1l0,-1l1,0zm-1,0l0,2l0,1l-1,1l-1,1l0,1l-1,1l-1,1l-1,1l-1,0l0,-1l1,-1l1,-1l1,-1l1,-1l0,-1l1,-1l0,-1l1,-1zm-6,11l0,1l-1,-1l0,-1l1,1zm1,-1l-1,0l0,-1l1,1zm16,-3l-1,1l0,-1l1,0zm-1,-5l0,1l-1,1l0,1l0,1l0,1l-1,0l-1,-1l0,-1l1,-1l0,-1l1,-1l1,0zm3,-2l1,1l0,1l0,2l0,1l-1,-1l0,-2l-1,-1l0,-1l1,0zm1,-3l1,1l0,2l0,1l-1,0l0,-1l-1,-1l-1,-1l0,-1l2,0zm-3,7l-1,1l-1,1l0,-1l1,-1l0,-1l1,-1l0,2zm-10,-2l0,1l-1,0l1,-1zm16,4l-1,0l0,-1l1,1zm-15,-13l-1,0l0,-1l1,1z"],
    flag: "philippines.png",
    data: {}
  };
  countryData['my'] = {
    name: "Malaysia",
    svg: ["m748.174988,300.174988l1,0l1,-1l0,1l0,1l-1,1l-1,-1l0,-1zm-26,5l0,1l1,0l-1,-1zm4,0l1,0l0,1l-1,-1zm2,-1l0,1l-1,0l1,-1zm6,2l0,-1l1,0l-1,1zm21,-14l1,0l0,1l-1,0l0,-1zm4,8l0,1l-1,0l-2,0l-3,0l-1,1l-1,1l0,1l0,1l-1,1l0,1l-1,1l0,1l0,1l-1,0l-1,0l-1,1l-1,-1l-2,0l-1,1l-2,0l-1,1l-3,-3l0,-1l1,0l1,1l1,0l1,1l0,-1l1,-1l0,-2l1,-1l3,0l1,-1l0,-1l1,-1l0,-1l1,-1l0,1l1,1l1,-1l0,-1l1,1l0,-2l1,-1l0,-1l1,-1l1,-1l0,-1l1,-1l1,0l0,1l1,1l0,1l1,0l0,1l1,0l1,1l1,0l-1,1l-1,0l-1,0l1,1zm-47,-5l-1,0l0,-1l1,1zm1,2l0,1l-1,0l1,-1zm10,13l-1,0l-1,0l-1,-1l-1,0l-3,-3l-1,-1l0,-1l-1,-1l0,-3l-1,-1l0,-3l-1,-1l0,-1l1,0l1,1l1,1l0,1l1,-1l1,0l1,-1l0,1l3,3l0,3l0,1l0,3l1,1l1,1l0,2z"],
    flag: "malaysia.png",
    data: {}
  };
  countryData['th'] = {
    name: "Thailand",
    svg: ["m713.174988,285.174988l-1,1l0,-1l1,0zm-1,0l0,-1l-1,0l1,1zm-4,4l1,0l1,1l0,1l1,1l0,1l1,1l1,0l2,2l0,1l1,-1l1,0l1,-1l-1,0l-1,-1l-1,-1l-1,0l-1,-1l0,-1l0,-2l-1,-1l0,-1l0,-1l-1,0l-1,-1l0,-2l1,-1l0,-2l1,-1l0,-4l0,-1l1,-1l1,0l0,1l0,1l1,1l2,0l1,1l1,0l0,-1l-1,-1l0,-3l1,-1l1,-1l3,0l2,0l1,-1l0,-3l-1,-1l-1,-1l0,-4l-2,-2l-2,0l-1,1l-1,0l-1,-1l-2,2l0,-3l0,-3l-1,0l-1,-1l0,-2l-2,0l-1,1l-1,1l-2,0l-1,1l0,3l0,2l1,1l1,1l0,2l1,1l0,1l-1,1l0,2l0,1l1,1l1,1l0,2l0,2l1,1l0,3l-1,1l-1,1l0,2l-1,1l0,3l-1,1l0,1l1,1l0,-1zm1,2l1,0l0,1l-1,-1z"],
    flag: "thailand.png",
    data: {}
  };
  countryData['la'] = {
    name: "Laos",
    svg: ["m726.174988,269.174988l0,-3l-2,-2l0,-4l-2,-2l-2,0l-1,1l-1,0l-1,-1l-2,2l0,-6l-1,0l-1,-1l0,-2l0,-1l1,-1l0,-1l1,0l1,1l0,-1l0,-2l0,-1l1,0l1,1l1,1l0,2l1,1l3,0l1,1l0,2l-1,1l-1,0l4,4l0,1l2,2l0,1l1,1l0,1l1,0l1,1l-1,1l1,1l0,3l-3,0l-1,1l-1,0l-1,-1l1,-1z"],
    flag: "laos.png",
    data: {}
  };
  countryData['kh'] = {
    name: "Cambodia",
    svg: ["m718.174988,278.174988l1,0l0,1l-1,-1zm4,4c0,1 0,1 0,1l1,0l-1,-1zm6,-12l-1,1l-1,0l-1,-1l-5,0l-2,2l0,3l1,1l0,1l1,1l0,3l1,-1l0,1l0,1l1,0l1,0l1,0l1,-1l3,0l-1,-1l0,-1l1,-1l1,0l2,-2l0,-6l-3,0z"],
    flag: "cambodia.png",
    data: {}
  };
  countryData['mm'] = {
    name: "Burma",
    svg: ["m708.174988,284.174988l-1,0l0,-1l1,1zm-1,-4l0,1l1,0l-1,-1zm1,-2l0,1l1,-1l-1,0zm-2,-2l1,1l0,-1l-1,0zm3,7l0,-2l2,-2l0,-3l-1,-1l0,-4l-2,-2l0,-3l1,-1l0,-1l-1,-1l0,-2l-2,-2l0,-5l1,-1l2,0l2,-2l2,0l0,-1l1,-1l0,-1l-1,0l-1,-1l0,-1l-1,0l-1,0l0,-1l1,-1l0,-1l-1,0l-1,-1l0,-2l0,-1l-1,0l-1,1l-1,0l0,-2l0,-1l1,-1l1,-1l0,-1l1,-1l0,-1l0,-3l-2,-2l0,-1l-1,-1l-1,1l0,1l-1,1l0,1l-1,1l-2,0l-1,1l0,2l-1,1l0,1l-1,1l0,2l0,1l-1,1l-1,0l-1,1l0,2l0,2l-1,1l-1,1l0,1l-1,0l0,2l1,1l1,1l0,1l1,-1l1,1l0,1l0,1l1,1l0,1l1,1l0,2l0,3l-1,1l0,1l2,0l1,1l1,-1l1,-1l1,0l1,-1l0,-1l0,-1l1,1l1,1l0,5l1,1l0,3l1,1l0,2l1,1l0,1l0,1l0,2l-1,1l0,3l1,-1zm0,-7l-1,-1l0,1l0,1l1,-1zm-13,-19l0,-1l-1,0l1,1z"],
    flag: "burma.png",
    data: {}
  };
  countryData['bd'] = {
    name: "Bangladesh",
    svg: ["m692.174988,248.175003l-1,-1l0,-2l0,-1l0,-1l0,-1l1,-1l1,0l0,6l0,1l-1,0zm-2,-6l0,-2l1,-1l1,-1l0,-1l0,-1l-5,0l-1,-1l0,-2l-2,0l-1,-1l-1,0l0,2l1,1l1,0l0,1l-1,0l-1,1l0,1l1,1l0,2l1,1l0,4l1,1l1,0l1,-1l1,0l0,-2l1,-1l0,1l1,0l1,-1l-1,-1zm-1,2l0,2l1,-1l0,-1l-1,0z"],
    flag: "bangladesh.png",
    data: {}
  };
  countryData['vn'] = {
    name: "Viet Nam",
    svg: ["m729.174988,287.174988l0,1l-1,0l1,-1zm-6,-5l1,1l1,0l0,1l-1,1l0,3l1,0l1,-1l2,-2l1,-1l0,-1l1,-1l2,0l2,-2l2,-2l0,-3l0,-4l-1,-1l0,-2l-2,-2l0,-2l-4,-4l-1,-1l0,-1l-1,-1l0,-3l0,-1l2,-2l0,-1l2,-2l0,-1l-1,0l-1,-1l0,-2l-1,-1l-2,0l-1,-1l-1,1l-1,1l-2,0l-1,0l-1,1l-1,-1l0,1l0,1l1,1l0,2l1,1l3,0l1,1l0,1l0,1l-1,1l-1,0l1,1l2,2l1,1l0,1l1,1l1,1l0,1l1,1l0,1l1,0l1,1l-1,1l1,1l0,1l0,1l0,2l0,1l0,1l0,3l-1,1l-1,1l-1,0l-1,1l0,1l1,1l-1,0l-2,0l-1,1l-1,0zm7,-31.999985l1,0l0,-1l-1,1z"],
    flag: "vietnam.png",
    data: {}
  };
  countryData['kr'] = {
    name: "South Korea",
    svg: ["m780.174988,209.175003l0,0l1,1l-2,0l0,-1l0,0l1,-1l0,1zm-1,-14l1,0l0,1l-1,1l-1,1l1,0l0,1l1,1l0,1l-1,1l0,1l0,1l-1,0l1,1l1,1l0,-1l1,0l0,1l1,-1l0,-1l1,0l1,0l1,-1l1,0l1,-1l0,-2l0,-2l-1,-1l0,-2l-1,-1l0,-1l-1,-1l-1,0l-1,1l-2,0l-1,1l0,1z"],
    flag: "south_korea.png",
    data: {}
  };
  countryData['kp'] = {
    name: "North Korea",
    svg: ["m774.174988,186.175003l1,0l1,-1l2,-2l1,-1l0,-1l1,-1l1,1l1,0l1,1l1,-1l0,-1l1,0l1,-1l1,-1l1,-1l0,-1l1,1l1,1l-1,1l-1,1l0,3l-1,1l-1,1l-1,1l-1,0l-1,1l-1,0l0,1l0,1l1,1l1,1l0,1l-1,0l-1,1l-2,0l-1,1l-1,0l-1,0l-1,0l-1,-1l0,-1l1,-1l0,-1l1,-1l-1,-1l-1,0l-1,-1l0,-1z"],
    flag: "north_korea.png",
    data: {}
  };
  countryData['cn'] = {
    name: "China",
    svg: ["m735.174988,254.175003l1,-1l2,0l1,-1l1,0l0,1l-1,1l0,1.999985l-1,1l-1,1l-2,0l-1,-1l0,-1.999985l1,-1zm0,-6l1,-1l1,1l0,4l1,0l1,-1l-1,-1l0,-1l1,-1l2,0l1,-1l2,0l1,-1l1,0l0,-3l1,1l0,1l1,1l2,-2l2,0l1,-1l1,0l4,-4l0,-1l1,0l2,-2l0,-1l1,-1l0,-1l1,-1l-1,-1l1,0l2,-2l0,-2l1,-1l1,0l0,-3l1,0l0,-1l-1,-1l0,-1l-1,-1l-1,1l-1,0l0,-1l1,0l2,-2l0,-1l-1,-1l-1,0l-1,-1l-1,0l1,-1l1,1l1,0l1,1l1,0l0,-1l-3,-3l0,-2l-2,-2l0,-1l-1,-1l-1,0l0,-2l1,-1l1,-1l0,-1l1,0l3,-3l1,0l1,1l0,-1l1,-1l-1,-1l-3,0l-1,-1l-1,1l-1,0l-1,1l-1,0l-1,-1l0,-2l-2,0l-1,-1l0,-2l1,-1l1,1l1,0l1,-1l0,-1l4,-4l3,0l1,1l-2,2l-1,0l0,2l1,0l-1,1l0,1l1,-1l1,0l2,-2l1,0l1,-1l2,0l0,-1l1,0l4,-4l0,-1l1,-1l1,1l1,0l1,1l1,-1l0,-1l1,0l3,-3l0,-1l2,2l0,-1l1,-1l0,-6l2,-2l1,0l1,1l2,-2l0,-1l1,-1l0,-3l2,-2l0,-3l-3,0l-2,2l-5,0l0,-4l-1,0l-2,-2l-2,0l0,-1l-3,0l0,-3l-1,-1l0,-2l-2,-2l0,-3l-2,-2l-2,0l-2,-2l-2,0l-1,1l-5,0l-2,2l0,1l2,0l0,2l-4,4l0,2l-3,3l-3,0l0,1l-1,1l-2,2l-1,1l0,1l1,1l4,0l1,-1l2,0l1,1l2,2l0,1l-1,1l-5,0l-1,1l-1,1l-2,2l-2,0l-2,2l-2,0l-4,0l-1,1l0,2l1,1l-2,2l-1,1l-2,2l-8,0l-2,2l-2,0l-3,0l-3,0l-2,-2l-1,-1l-3,0l-6,0l-4,0l-2,-2l0,-2l-2,-2l-1,0l-2,-2l-1,0l-5,0l-1,-1l0,-1l0,-2l0,-4l-1,-1l-1,-1l-1,-1l-2,0l-2,-2l0,-2l-2,0l-1,1l-1,1l-1,0l-1,1l0,3l-1,1l-1,1l-2,0l-1,-1l-2,0l0,2l-1,1l-1,1l0,1l1,1l0,1l-2,0l-4,0l-1,1l1,1l0,3l1,1l0,2l-1,1l0,2l-2,2l-2,0l-2,2l-2,0l-1,1l-1,1l-2,0l-2,0l-1,1l-1,1l-1,1l0,2l1,1l1,0l1,1l0,3l0,1l-1,1l2,0l1,1l1,1l0,1l2,2l3,0l0,1l2,2l0,4l1,1l0,2l-1,0l-1,0l0,1l1,1l0,2l1,1l2,0l2,2l3,0l2,2l1,0l1,1l1,1l2,2l1,1l2,0l1,1l2,0l3,0l2,0l1,-1l4,0l1,1l1,1l1,0l5,-5l3,0l1,-1l1,0l0,1l1,1l0,1l1,1l1,0l1,-1l1,1l0,1l2,2l0,4l-1,1l0,1l-2,2l0,3l1,0l1,-1l1,0l0,3l1,1l1,0l0,1l-1,1l0,1l2,0l0,1l1,1l2,0l1,1l0,-4l1,0l1,1l0,-2l1,1l1,-1l3,0l2,-2l1,1l2,0l1,1l0,2l1,1l1,0l0,1l1,0l1,-1l1,0l1,1l1,-1l1,1l0,1l0,3l1,0l1,-1l-1,-1l0,-1l1,-1l2,0l1,-1l2,0l1,-1l1,0l0,-1l0,-2l1,1l0,1l1,1l1,-1l1,-1l2,0l1,-1l1,0l1,-1l1,-1l1,-1l1,-1l0,-1l1,0l1,-1l1,-1l0,-1l1,-1l0,-1l1,-1l-1,-1l1,0l1,-1l1,-1l0,-2l1,-1l1,0l0,-2l0,-1l1,0l0,-1l-1,-1l0,-1l-1,-1l-1,1l-1,0l0,-1l1,0l1,-1l1,-1l0,-1l-1,-1l-1,0l-1,-1l-1,0l1,-1l1,1l1,0l1,1l1,0l0,-1l-3,-3l0,-2l-1,-1l-1,-1l0,-1l-1,-1l-1,0"],
    flag: "china.png",
    data: {}
  };
  countryData['mn'] = {
    name: "Mongolia",
    svg: ["m759.174988,158.175003l3,3l0,1l-1,1l-5,0l-4,4l-2,0l-2,2l-6,0l-1,1l0,2l1,1l-5,5l-8,0l-2,2l-8,0l-3,-3l-13,0l-2,-2l0,-2l-2,-2l-1,0l-2,-2l-6,0l-1,-1l0,-7l-3,-3l-2,0l-2,-2l0,-3l2,0l3,-3l2,0l2,-2l7,0l0,2l1,1l7,0l2,-2l-1,-1l0,-3l2,-2l3,0l2,2l3,0l1,1l0,3l1,1l4,0l1,-1l5,0l2,2l1,0l0,1l1,1l4,0l1,1l2,0l1,-1l3,0l3,-3l3,0l1,1l3,0l1,1l0,1l-4,4l0,1l1,1l4,0l1,-1l2,0z"],
    flag: "mongolia.png",
    data: {}
  };
  countryData['bt'] = {
    name: "Bhutan",
    svg: ["m685.174988,226.175003l4,0l2,2l0,1l1,1l0,1l-7,0l-2,-2l1,-1l0,-1l1,-1z"],
    flag: "bhutan.png",
    data: {}
  };
  countryData['np'] = {
    name: "Nepal",
    svg: ["m666.174988,219.175003l2,2l1,0l5,5l2,0l1,1l5,0l0,6l-3,0l-2,-2l-3,0l-2,-2l-3,0l-2,-2l-3,0l-2,-2l0,-3l1,-1l0,-2l3,0z"],
    flag: "nepal.png",
    data: {}
  };
  countryData['lk'] = {
    name: "Sri Lanka",
    svg: ["m661.174988,284.174988l1,0l0,1l-1,-1zm0,1l1,1l-1,1l0,2l-1,1l0,4l1,1l1,1l2,0l1,-1l1,-1l0,-4l-1,-1l0,-2l-1,-1l-1,-1l-1,0l-1,-1l0,1z"],
    flag: "sri_lanka.png",
    data: {}
  };
  countryData['in'] = {
    name: "India",
    svg: ["m684.174988,227.175003l0,1l-1,1l1,1l1,1l5,0l2,0l0,-1l-1,-1l0,-1l1,0l1,-1l1,-1l1,-1l1,-1l1,-1l2,0l1,0l1,-1l1,0l0,1l1,1l0,1l1,1l1,0l0,1l-1,1l0,1l-1,1l-2,0l-1,1l0,2l-1,1l0,1l-1,1l0,3l-1,1l-1,0l-1,1l0,4l-2,2l0,-6l-1,0l-1,1l0,1l-1,-1l0,-2l2,-2l0,-2l-5,0l-1,-1l0,-2l-2,0l-1,-1l-1,0l0,-5l2,0zm-29,61.999985l1,0l1,-1l0,-1l1,-1l1,0l0,-1l0,-1l1,-1l1,0l0,-3l0,-3l1,-1l0,-5l0,-3l-1,-1l1,-1l1,0l1,-1l1,-1l2,0l1,-1l0,-2l4,-4l1,-1l2,-2l0,-1l2,0l2,-2l0,-2l2,-2l0,-1l1,1l3,0l-1,-1l0,-4l-1,-1l0,-2l-1,-1l0,-1l1,-1l1,0l0,-1l-1,0l-1,-1l0,-1l-3,0l-2,-2l-3,0l-2,-2l-3,0l-2,-2l-3,0l-2,-2l0,-3l1,-1l0,-2l-2,-2l-2,0l-1,-1l0,-2l-1,-1l0,-1l2,0l0,-2l-1,-1l0,-4l-2,-2l0,-1l-1,0l-1,1l-2,2l-3,0l-2,0l-1,1l0,1l0,1l0,2l1,1l1,1l1,0l0,1l-1,1l-1,1l0,3l-1,1l-1,1l-1,1l0,2l-1,1l-1,0l-1,1l0,2l-2,0l-1,1l-1,-1l-1,0l-1,1l0,2l0,1l1,1l0,2l2,2l0,2l-1,1l-3,0l-1,0l-1,1l-1,0l0,1l1,1l1,1l1,0l1,0l2,0l-1,1l-1,1l-1,0l-1,0l2,2l2,2l1,1l2,0l1,-1l0,-2l0,-1l1,0l1,1l0,2l0,3l0,3l0,5l1,1l0,3l2,2l0,3l1,1l0,3l1,1l1,1l0,2l1,1l0,2l2,2l0,5l2,2l1,0zm40,-16l0,2l-1,1l0,1l0,2l-1,1l0,-2l0,-1l0,-1l1,-1l0,-1l0,-2l1,1zm-3,9l1,0l0,-1l-1,1zm2,5l0,-1l-1,0l1,1zm0,-10l0,1l1,0l-1,-1zm0,12l1,0l-1,-1l0,1zm1,1l1,0l-1,-1l0,1zm1,2l0,1l1,1l0,-1l-1,-1z"],
    flag: "india.png",
    data: {}
  };
  countryData['pk'] = {
    name: "Pakistan",
    svg: ["m615.174988,233.175003l2,-2l1,0l0,-1l1,-1l-2,0l0,-3l-4,-4l0,-1l2,0l1,1l5,0l1,-1l3,0l1,-1l0,-3l1,-1l2,0l1,-1l3,0l1,-1l0,-4l2,0l1,-1l-1,-1l0,-1l2,0l0,-1l1,-1l1,-1l0,-3l-1,-1l2,-2l2,0l1,-1l3,0l2,0l2,2l0,1l2,2l2,0l-3,3l-5,0l-1,1l0,4l2,2l1,0l0,1l-2,2l0,3l-3,3l0,2l-1,1l-1,0l-1,1l0,2l-2,0l-1,1l-1,-1l-1,0l-1,1l0,3l1,1l0,2l2,2l0,2l-1,1l-4,0l-1,1l-1,0l-2,0l0,-2l-1,-1l0,-1l-1,-1l-3,0l-1,1l-1,0l-1,-1l-1,1l-2,0l-1,0l-1,0l-1,0l0,-3z"],
    flag: "pakistan.png",
    data: {}
  };
  countryData['af'] = {
    name: "Afghanistan",
    svg: ["m648.174988,195.175003l0,1l-1,1l-3,0l-1,1l-2,0l-2,2l1,1l0,3l-2,2l0,1l-2,0l0,1l1,1l-1,1l-2,0l0,4l-1,1l-3,0l-1,1l-2,0l-1,1l0,3l-1,1l-3,0l-1,1l-5,0l-1,-1l-2,0l0,-1l2,-2l0,-2l-1,0l-2,-2l0,-4l1,-1l-1,-1l0,-2l1,-1l0,-2l1,-1l2,0l1,1l1,-1l0,-2l3,0l1,-1l0,-2l1,-1l1,0l1,-1l2,0l1,1l2,0l1,1l1,0l1,-1l1,0l1,-1l1,0l1,-1l0,-1l1,-1l1,0l0,2l1,1l0,2l1,0l1,0l1,-1l1,-1l1,0l1,1l1,0l1,-1z"],
    flag: "afghanistan.png",
    data: {}
  };
  countryData['kz'] = {
    name: "Kazakhstan",
    svg: ["m586.174988,169.175003l-1,1l0,-1l1,0zm2,2l-1,0l-1,-1l0,1l0,1l1,0l1,1l0,1l1,1l0,1l1,1l1,0l1,1l-1,1l0,2l1,-1l0,-1l1,-1l2,0l4,4l1,0l0,-12l1,-1l2,-2l4,0l1,1l1,1l1,0l2,2l1,0l1,1l0,1l1,1l7,0l2,0l1,1l0,1l1,1l0,3l1,1l1,1l1,1l2,0l1,1l0,-1l1,-1l1,-1l1,-1l1,0l1,-1l1,0l1,-1l0,-1l1,0l3,0l1,1l1,-1l0,-1l1,-1l1,0l1,1l1,1l1,0l1,-1l4,0l1,1l2,0l2,0l1,1l1,1l0,-2l1,-1l0,-2l-1,-1l0,-3l-1,-1l1,-1l6,0l0,-1l-1,-1l0,-1l2,-2l0,-2l2,0l1,1l2,0l2,-2l0,-3l1,-1l1,0l2,-2l-2,-2l-3,0l-1,-1l0,-1l-2,0l0,-2l-1,-1l-2,0l-1,1l-3,0l-1,-1l0,-1l-2,0l0,1l-1,1l0,-2l-2,-2l0,-2l-7,-7l1,0l0,-1l-2,0l-3,3l-2,0l-1,1l-1,-1l1,-1l0,-1l-2,0l-1,1l0,-1l-3,0l0,-3l-1,-1l-2,0l-1,-1l-3,0l-3,3l-4,0l-1,1l-2,0l-1,1l-7,0l0,3l1,1l0,1l-2,0l0,2l-1,0l-1,1l0,1l1,1l2,0l0,3l-4,0l-1,1l-2,-2l-6,0l-1,1l-2,0l-1,-1l0,2l-1,-1l0,-1l-2,-2l-3,0l-1,-1l-1,1l-1,-1l-2,0l-4,4l0,3l-1,0l-2,-2l-2,2l0,7l1,1l2,0l2,2l0,1l-1,1l1,1l1,0l1,0l1,-1l1,-1l1,0l1,-1l1,0l1,1l1,0l2,0l0,1l0,2l-1,1l0,1l1,1l-4,0l-1,1l0,1l1,1l-1,0z"],
    flag: "kazakhstan.png",
    data: {}
  };
  countryData['tm'] = {
    name: "Turkmenistan",
    svg: ["m595.174988,196.175003l0,-6l-1,-1l-1,0l0,-1l1,0l0,-1l-1,-1l-1,1l0,-3l1,-1l1,1l2,0l1,-1l-1,-1l-1,-1l0,-1l-1,-1l-1,0l0,1l-1,1l0,1l-1,-1l1,-1l0,-1l1,-1l2,0l2,2l2,2l2,0l2,0l0,-2l1,-1l1,0l1,-1l0,-1l1,0l1,1l1,0l2,2l0,2l1,1l3,0l1,1l0,2l1,1l2,2l1,1l2,0l3,3l2,0l0,2l-2,0l-1,1l-1,0l-1,1l0,2l-1,1l-3,0l0,2l-1,1l-1,-1l-2,0l-1,-1l0,-3l-2,0l-3,-3l-2,0l0,-1l-2,0l-1,-1l-4,0l-3,3l-1,0zm-2,-5l0,-1l-1,0l1,1z"],
    flag: "turkmenistan.png",
    data: {}
  };
  countryData['uz'] = {
    name: "Uzbekistan",
    svg: ["m603.174988,182.175003l-3,0l0,-12l3,-3l4,0l2,2l1,0l2,2l1,0l1,1l0,1l1,1l9,0l1,1l0,1l1,1l0,3l3,3l2,0l1,1l0,-1l3,-3l1,0l1,-1l1,0l1,0l-1,1l-1,0l-1,1l1,1l1,0l1,1l1,-1l1,0l1,1l1,1l-1,1l-1,0l-1,1l-1,0l-1,0l-1,-1l1,-1l-1,-1l-1,1l-1,0l-1,0l0,1l-1,1l0,1l-1,1l-1,0l-1,0l-1,1l1,1l1,0l0,2l1,1l-1,1l-1,1l0,1l-2,0l-1,-1l0,-2l-2,0l-3,-3l-2,0l-4,-4l0,-2l-1,-1l-3,0l-1,-1l0,-2l-2,-2l-1,0l-1,-1l-1,0l0,1l-1,1l-1,0l-1,1l0,2z"],
    flag: "uzbekistan.png",
    data: {}
  };
  countryData['tj'] = {
    name: "Tajikistan",
    svg: ["m638.174988,187.175003l-1,0l-1,-1l-1,0l-1,1l0,1l4,0l1,0l1,1l1,0l3,0l1,-1l0,2l1,1l1,0l1,1l0,3l-1,1l-1,0l-1,-1l-1,0l-2,2l-2,0l0,-2l-1,-1l0,-2l-1,0l-1,1l0,1l-1,1l-1,0l-1,1l-1,0l-1,1l-1,0l-1,-1l0,-1l2,-2l-1,-1l0,-2l-1,0l-1,-1l1,-1l2,0l1,-1l0,-1l1,-1l0,-1l2,0l1,-1l1,1l-1,1l1,1l0,1z"],
    flag: "tajikistan.png",
    data: {}
  };
  countryData['kg'] = {
    name: "Kyrgyzstan",
    svg: ["m634.174988,187.175003l1,-1l1,0l1,1l1,0l0,-1l2,0l1,-1l1,0l1,-1l-2,-2l-1,0l-1,1l-1,-1l-1,0l-1,-1l1,-1l1,0l1,-1l-1,0l1,-1l0,-1l4,0l1,1l1,-1l0,-1l1,-1l1,0l2,2l1,0l1,-1l4,0l1,1l4,0l2,2l-2,2l-2,0l-2,2l-2,0l-2,2l-4,0l-4,4l-4,0l-1,-1l-5,0l0,-1z"],
    flag: "kyrgyzstan.png",
    data: {}
  };
  countryData['id'] = {
    name: "Indonesia",
    svg: ["m723.174988,311.174988l1,-1l0,1l0,1l-1,-1zm-1,1l1,0l0,-1l-1,1zm55,30l2,0l2,-2l-1,0l-1,1l-3,0l-1,1l0,2l2,-2zm-77,-46l0,1l1,0l-1,-1zm53,28l1,1l0,1l-1,1l0,-1l0,-2zm21,19l-1,0l-1,1l0,1l0,1l1,0l2,-2l0,-2l-1,1zm-3,2l1,1l-1,0l0,-1zm-70,-48l1,1l1,0l1,0l1,0l1,1l1,1l0,1l1,1l1,1l3,3l1,1l1,1l0,-1l1,1l0,1l1,1l1,0l0,1l1,1l2,0l-1,1l0,0l0,1l1,-1l1,0l1,1l-1,1l0,1l0,1l1,0l1,1l0,1l1,1l0,1l-1,1l0,1l1,-1l1,0l1,0l1,1l0,9l-1,0l-1,0l-1,-1l0,1l-1,-1l-2,-2l-1,-1l-2,-2l-2,-2l0,-1l-2,-2l0,-1l0,-3l-1,-1l-1,-1l-1,-1l-1,0l0,-2l-1,-1l0,-2l-1,-1l-1,0l-1,-1l0,-2l-1,-1l-1,0l-1,-1l0,-1l-1,-1l-1,-1l-1,-1l0,-1l0,-1l1,0zm15,12l1,-1l-1,0l0,1zm2,1l0,-1l-1,0l1,1zm-1,0l1,1l0,-1l-1,0zm1,-1l0,1l1,0l-1,-1zm1,3l0,-1l-1,0l1,1zm0,-2l0,1l1,1l0,-1l-1,-1zm1,2l0,1l1,-1l-1,0zm0,0l1,-1l-1,0l0,1zm2,-1l-1,1l1,0l0,-1zm1,4l0,1l0,1l1,-1l-1,-1zm1,-1l0,-1l-1,1l1,0zm0.004028,1l0.996033,0l-1,-1l-1,0l1.003967,1zm-3.004028,1l1,-1l-1,0l0,1zm8,7l0,-1l-1,0l0,-2l-1,-1l0,1l-1,-1l-1,1l0,1l1,0l1,0l0,1.013l1,0.993011l1,0.993988l0,-1zm0,0l0,1l1,-1l-1,0zm1,0l1,1l0,-1l-1,0zm2,-1m1,1l-1,-1l-1,1l0,1l1,0l1,1l0,-2zm2,-4l-1,0l0,1l1,-1zm-2,-16l0,-1l0,-1l-1,1l1,1zm-7,43l0,1l1,0l0,-1l-1,0zm-9,-16l0,1l1,0l-1,-1zm8,4l0,1l1,0l-1,-1zm19,-2l0,1l1,-1l-1,0zm5,5l0,-1l-1,0l1,1zm-4,-2l0,1l2,0l1,-1l-3,0zm-4,0l-1,-1l-1,0l0,1l-4,0l-1,-1l-2,0l-1,-1l-1,0l-3,0l0,1l-1,0l1,1l1,1l0,1l3,0l1,1l2,0l2,0l1,1l2,0l1,1l1,0l2,0l2,0l2,0l1,1l0,-3l-3,0l-1,-1l-1,-1l0,-1l-2,0zm27,-4l0,-1l-1,0l1,1zm-4,1l0,2l1,-1l0,-1l-1,0zm8,1l1,0l0,-1l-1,1zm0,-3l0,1l1,0l-1,-1zm-2,-3l1,0l0,-1l-1,0l0,1zm-1,2l0,2l1,-1l0,-1l-1,0zm0,3l1,0l1,-1l0,-1l0,-2l-1,0l0,2l-1,1l0,1zm1,-4l0,-1l-1,-1l0,-1l0,-1l-1,-1l0,-1l-1,-1l-1,-1l1,0l1,-1l1,-1l1,-1l1,0l1,-1l-1,0l-1,0l-1,1l-1,0l-1,0l-1,1l-1,0l-1,0l0,-1l-1,-1l0,-2l1,-1l6,0l4,0l1,-1l0,-1l1,-1l0,-1l-1,0l-1,1l-1,1l-1,0l-1,0l-1,1l-1,-1l-2,0l-1,-1l-1,1l-1,0l-1,1l0,1l-1,1l0,2l-1,1l0,4l-1,1l0,1l0,2l1,0l1,1l0,3l-1,1l0,1l1,1l1,0l1,-1l0,-7l0,-1l1,-1l1,1l0,1l-1,1l2,2l0,2l1,0l0,-1l2,0zm-3,-13l0,1l1,0l-1,-1zm3,3l0,1l1,-1l-1,0zm1,1l1,0l0,-1l-1,1zm2,2l0,-1l-1,0l1,1zm-2,0l0,-1c0,0 0,0 -1,0l1,1zm16,-6l0,-1l-1,0l1,1zm-11,-10l0,1l1,0l-1,-1zm15,0l0,1l1,-1l-1,0zm-34,0l0,-1l-1,0l1,1zm0,-4l0,1l1,0l-1,-1zm-21,8l-1,1l0,1l-1,1l1,1l0,2l1,1l0,1l1,1l0,1l1,1l0,3l1,1l2,0l1,-1l0,1l0,1l1,0l1,0l1,-1l1,0l1,1l1,0l1,0l0,1l0,1l1,0l1,-1l1,0l1,-1l0,-2l1,-1l0,-1l0,-2l1,-1l2,-2l0,-3l1,-1l2,0l0,-1l-1,-1l-2,-2l1,-1l-1,-1l0,-1l-1,-1l0,-1l1,0l0,-2l-4,0l-2,2l0,2l-1,1l0,1l-1,1l0,2l-2,0l-1,1l-1,-1l-2,0l-1,1l-2,0l-1,1l-3,-3zm-22,16l0,-1l-1,-1l-1,0l1,1l1,1zm-2,-3l0,1l1,0l-1,-1zm-1,-2l0,1l1,0l-1,-1zm-1,-2l-1,-1l0,1l0,1l1,1l0,-2zm-3,-2l1,0l1,-1l-1,-1l0,1l-1,1zm0,-3l0,-1l0,-1l-1,-1l-1,-1l0,1l0,1l1,1l1,1zm-4,-6l-1,-1l-1,-1l0,1l1,1l1,0zm2,0l0,1l1,0l-1,-1zm103,12l-2,2l-1,0l-3,3l0,1l-1,0l-1,-1l0,-2l-1,0l0,-4l-1,-1l-1,0l-1,-1l-2,0l-1,1l-1,0l-1,1l1,1l2,0l0,2l4,0l0,1l-2,0l-1,1l-2,0l1,1l1,0l1,1l0,2l1,-1l0,-2l1,0l0,1l1,1l1,0l2,2l2,0l2,2l3,0l0,3l2,2l0,5l1,-1l2,0l0,1l2,2l0,-20l-3,0l-2,-2l-2,0l-1,-1zm-6,0l1,1l2,0l-1,-1l-2,0zm2,-2l-1,-1l-1,0l2,2l0,-1zm-3,0l-1,0l1,1l0,-1zm-1,14l-1,1l0,1l1,1l0,-3zm-1,5l1,-1l-1,-1l0,2zm11,1l-2,2l1,1l2,-2l-1,-1zm1,4l0,-1l-1,0l1,1zm-14,-10l-1,1l1,0l0,-1zm-2,1l-1,0l1,1l0,-1zm-3,4l-1,1l0,1l1,1l0,-1l1,-1l-1,-1zm-2,3l1,1l0,-1l-1,0zm-3,-1l0,1l1,-1l-1,0zm-3,-2l0,1l1,-1l-1,0zm0,3l-1,0l0,1l1,-1zm5,-19l-1,0l0,1l1,-1zm-5,4l1,1l1,-1l1,1l1,-1l2,2l0,-1l-2,-2l-4,0l-1,1l1,0zm0,1l-1,1l1,0l0,-1zm8,-10l-1,-1l-1,0l1,1l1,0zm-3,0l1,0l-1,-1l0,1zm1,2l0,1l1,-1l-1,0zm-8,2l0,1l1,0l1,-1l-2,0zm-2,5l-1,0l-1,1l1,1l1,0l1,-1l-1,-1zm0,-9l0,1l1,-1l-1,0zm1,1l1,1l0,-2l-1,1zm3,0l0,-1l-1,-1l1,-1l1,0l-1,-1l1,-1l0,-1l-1,0l-1,1l0,1l-1,-1l1,-1l0,-2l-1,1l0,5l1,1l0,2l1,-1zm0,-8l1,-1l0,-1l-1,1l0,1zm-6,12l-1,1l1,0l0,-1zm-4,0l1,1l1,-1l-1,0l0,-1l-1,1zm6,-19l0,1l1,-1l-1,0zm-3,2l-1,1l1,0l0,-1zm-7,45l1,-1l-1,0l0,1zm-2,-1l0,-1l-1,1l1,0zm11,-8l1,-1l-2,0l1,1zm-4,0l-1,1l1,0l1,-1l-1,0zm-2,1l0,1l1,-1l-1,0zm-1,-1l-1,1l0,1l1,-1l0,-1zm-2,1l1,-1l-1,0l0,1zm0,1l0,-1l-1,1l-1,-1l-1,1l-1,-1l-3,0l-1,1l3,0l1,1l1,0l1,-1l2,0zm-8,2l-1,0l-1,1l2,0l2,2l1,-1l-2,-2l-1,0zm-1,-2l1,-1l-1,0l0,1zm20,-3l1,0l0,-1l-1,1zm-17,-1l1,-1l-1,0l0,1zm-4,4l0,-1l-2,0l0,-1l-1,1l1,1l-1,0l-1,-1l-1,1l0,1l3,0l1,-1l1,0zm-7,-1l0,1l1,1l0,-2l-1,0zm-2,1l1,-1l-1,-1l-1,1l-1,0l1,1l1,0zm0,-6l0,1l1,-1l-1,0z"],
    flag: "indonesia.png",
    data: {}
  };

  // Russian Federation
  countryData['ru'] = {
    name: "Russian Federation",
    svg: ["m660.174988,55.174999l0,1l-1,0l-1,0l0,-1l1,-1l1,1zm252,9.000004l1,0l1,1l3,0l1,-1l3,0l0,-1.000004l-1,-1l-1,0l-1,-1l-3,0l-1,1l-1,1l-1,0l0,1.000004zm-28,4l0,1l1,1l1,0l1,1l1,-1l0,-1l-1,0l-1,-1l-1,0l-1,0zm-54,-26.000004l-1,1l0,1l1,0l1,1l2,0l1,1l5,0l1,-1l1,0l0,-1l-1,0l-1,0l-4,0l0,-1.012001l-4,0l0,-0.987999l-1,0zm5,-5l2,0l0,-1l-1,0l-1,1zm12,2l-1,1l1,0l0,-1zm-39,1l-1,1l0,1l0,1l-1,0l0,1l1,1l1,0l1,1l1,0l1,1l1,0l0,-1l1,-1l1,1l1,0l1,-1l2,0l1,0l1,1l1,-1l-1,-1l-1,-1l0,-1l1,0l1,0l-1,1l1,1l1,1l3,0l1,-1l0,-1l1,-1l-2,0l-1,-1l-1,0l-2,0l-1,0l-1,-1l-1,-1l-1,0l-1,1l0,1l0,1l-1,0l-1,-1l-1,-1l-1,0l-1,-1l-1,0l-1,1l-1,0zm13,11l-1,-1l-3,0l-1,1l-1,1l-1,0l-1,0l0,1l3,0l1,0l2,0l1,1l1,0l1,-1l0,-1l-1,-1zm-7,-2l0,1l1,0l1,0l0,-1l-2,0zm-12,-6l1,0l1,-1l-1,-1l-1,1l0,1zm0,6l1,1l1,1l0,-1l-2,-2l0,1zm64,15.000004l-1,1l1,0l0,-1zm-125,-16.000004l1,1l3,0l1,-1l-1,0l-1,-1l-1,0l-1,1l-1,0zm65,83.000004l-1,1l1,0l0,-1zm3,0l-1,0l-1,0l0,1l-1,1l1,0l1,0l1,-1l0,-1zm11,4l0,1l0,1l0,1l-1,-1l-1,1l0,1l0,1l0,1l0,1l0,2l1,1l0,1l0,1l0,2l0,1l0,1l0,3l-1,1l0,1l1,1l0,1l0,1l0,1l0,1l0,1l-1.000977,1l0,2.000992l0.998962,0.999008l0,-2.001007l1.002014,-1.000992l1.002991,0l0.997009,0.996994l0,1.005997l1,0l0,-1l-1,-1l-1,-1l0,-1l0,-1l-1,-1l0,-2l1,-1l0,-1l0,-1l1,-1l1,0l2,2l0,1l1,0l0,-1l-1,-1l-1,-1l0,-1l0,-1l0,-1l-1,-1l0,-1l0,-2l-1,-1l0,-2l-1,-1l1,-1l0,-3l-1,-1l0,-1l0,-1l-1,-1l0,0.999008zm-120,-100.000004l3,0l1,-1l-2,0l-1,0l-1,1zm-14,-1l0,-1l-1,1l1,0zm-21,9l1,1l1,0l0,-1l0,-1l-1,1l-1,0zm3,6l1,1l1,0l1,0l0,-1l-3,0zm0,0l-1,0l1,1l0,-1zm4,-2l1,1l1,0l-1,-1l-1,0zm-19,-25l-1,-1l-1,0l0,1l1,0l1,1l2,0l0,-1l-2,0zm6,-6.999999l-1,0.999999l4,0l1,-0.999999l-4,0zm31,-1l1,-1l-4,0l-1,1l4,0zm0,6.998l1.002014,0l0.997986,0.997999l0.996033,0l1.003967,-1.004l1.007996,0l0.992004,-0.992001l-4,0l-1,-1l-1,1l-1,0l1,0.998001zm1,-2.998001l1,1l1,0l1,0l1,0l1,0l1,0l5,0l1,0l1,0l1,-1l-1,-1l0,-1l3,0l-1,-0.999999l-2,0l-2,-2l-2,0l-1,1l-2,0l-1,0l-1,1l-1,0l-1,0.999999l1,0l1,0l-1,1l-1,0l-1,0l-1,1zm7,2l-1,1l-1,1l-1,0l-1,1l3,0l1,1l1,1l2,0l2,0l1,1l6,0l1,-1l1,0l-1,-1l-1,0l-1,-1l2,0l0,-1l1,-1l-1,-1l-3,0l-1,1l-1,0l0,-1l1,-1l-8,0l-1,1zm14,2l1,0l0,-1l-1,1zm6,2l-1,0l-1,-1l0,1l-1,0l0,1l-1,0l1,1l-1,0l-1,0l0,1l-1,1l-1,1l-1,1l1,0l1,0l1,0l1,-1l5,0l3,0l1,0l1,-1l1,0l0,-1.984999l-1,0l-1.007996,-1.007l-0.992004,0l0,-1.007l-1,0l-1,1l-1,0l-1,1l0,-1l1,-1l1,-1l-2,0l0,0.998999zm9,5l1,0l1,-1l-1,0l-1,1zm5,1l-1,-1l-2,0l-1,1l4,0zm-1,4l0,-1l-1,1l1,0zm12,3l1,0l0,-1l-2,0l1,1zm-136,30.000004l0,1l1,1l1,0l1,1l1,0l0,-1l-1,-1l-1,-1l-1,-1l-1,1zm-16,-4.000004l1,0l0,1.000004l1,0l0,-1.000004l-1,-1l-1,0l0,1zm-2,-2l1,1l1,0l2,0l1,1l1,0l1,1.000004l-1,0l-1,1l3,0l1,1l2,0l1,0l1,0l2,0l0,-1l-1,-1l-1,0l-1,-1.000004l-1,-1l-1,-1l0,-1.016998l0,-0.983002l0,-2l1,-1l1,-1l0,-1l-1,0l-1,-1l-2,0l-1,0l-1,0l-1,1l-1,0l1,1l-1.000977,0l-0.999023,0l-1,1l1,0l0,1.012001l0,0.987999l-1,1l-1,0l-1,0l0,2zm6,-9l1,1l1,0l4,0l2,0l1,-1l0,-1l-1,-1l1,0l1,1l0,-1l1,-1l1,0l0,-1l1,-1l2,0l1,-1l1,-1l1,-1l1,-1l1,0l1,0l1,0l1,-1l1,0l1,0l1,-1l1,0l2,0l1,0l1,-1l2,0l1,-1l1,0l1,0l1,-1l1,-1l0,-1l-1,-1l-2,0l-1,1l-2,0l-1,1l-1,0l-1,1l-1,0l-1,0l-1,0l-1,0l-1,1l-5,0l-1,0l-1,1l-2,0l-1,0l-1,1l-2,0l-2,2l-2,0l-1,1l-1,0l0,1l1,0l0,1l-4,4l-1,0l-1,1l0,1zm43,0l-2,0l0,2l2,0l1,0l1,0l0,-1l-1,-1l-1,0zm8,2l0,1l1,0l1,0l1,-1l-3,0zm5,-2l-1,0l-1,1l2,0l0,-1zm0,1l2,0l-1,-1l-1,0l0,1zm2,5l1.036987,0l0.963013,0l1,-1l1,0l-1,-1l-1,0l-2,2zm-70,13.000004l-1,0l-1,1l0,2l3,0l1,-1l1,-1l-1,0l-1,-1l-1,0zm253,-35.000004l-1,1l1,0l1,0l0,-1l-1,0zm10,4l1,0l0,-1l-1,1zm0,-1l0,1l1,-1l-1,0zm-72,11l0,1l1,-1l-1,0zm-11,5l0,-1l-1,0l1,1zm-57,-18l0,-1l-1,0l1,1zm-2,1l0,1l1,-1l-1,0zm-2,0l-2,0l0,1l3,0l-1,-1z" + 
          "m166,32.000004l-1,1l0,2l1,0l0,-2l1,-1l-1,0zm-287,110l-2,-2l0,-2l-1,-1l0,-3l-1,-1l0,-2l3,-3l1,0l2,-2l-1,0l-1,-1l1,-1l0,-1l-2,-2l-2,0l-1,-1l0,-7l2,-2l2,2l1,0l0,-3l4,-4l2,0l1,1l1,-1l1,1l3,0l2,2l0,1l1,1l0,-2l1,1l2,0l1,-1l6,0l2,2l1,-1l4,0l0,-3l-2,0l-1,-1l0,-1l1,-1l1,0l0,-2l2,0l0,-1l-1,-1l0,-3l7,0l1,-1l2,0l1,-1l4,0l3,-3l3,0l1,1l2,0l1,1l0,3l3,0l0,1l1,-1l2,0l0,1l-1,1l1,1l1,-1l2,0l3,-3l2,0l0,1l-1,0l7,7l0,2l2,2l0,2l1,-1l0,-1l2,0l0,1l1,1l3,0l1,-1l2,0l1,1l0,2l2,0l0,1l1,1l3,0l2,2l2,0l0,-1l2,0l3,-3l2,0l2,-2l7,0l0,2l1,1l7,0l2,-2l-1,-1l0,-3l2,-2l3,0l2,2l3,0l1,1l0,3l1,1l4,0l1,-1l5,0l2,2l1,0l0,1l1,1l4,0l1,1l2,0l1,-1l3,0l3,-3l3,0l1,1l3,0l1,1l3,0l3,-3l0,-2l4,-4l0,-2l-2,0l0,-1l2,-2l5,0l1,-1l2,0l2,2l2,0l2,2l0,3l2,2l0,2l1,1l0,3l3,0l0,1l2,0l2,2l1,0l0,4l5,0l2,-2l3,0l0,3l-2,2l0,3l-1,1l0,1l-2,2l-1,-1l-1,0l-2,2l0,6l-1,1l0,1l3,-3l1,0l0,1l2,0l1,1l2,-2l1,0l3,-3l0,-1l4,-4l0,-2l3,-3l0,-1l3,-3l0,-2l2,-2l0,-8l2,-2l0,-2l-1,-1l1,-1l-1,-1l1,0l0,-1l-3,-3l-3,0l-1,1l0,2l-1,-1l0,-1l-1,1l-1,0l1,-1l-1,-1l0,1l-1,1l-1,-1l0,-3l-4,0l0,-1l2,-2l2,0l4,-4l0,-1l3,-3l1,0l2,-2l0,-1l2,-2l1,0l3,-3l7,0l1,1l1,-1l2,0l1,1l1,-1l1,1l1,-1l0,-1l1,1l0,-1l3,0l1,1l1,-1l1,1l1,0l1,1l-2,0l-1,1l4,0l1,-1l5,0l0,-1l-2,0l-1,-1l7,-7l0,-1l1,0l1,-1l7,0l0,2l-1,1l0,1l1,-1l0,2l2,-2l1,0l3,-3l1,1l0,-3l1,-1l4,0l1,1l-2,0l-1,1l0,2l-1,1l1,1l-1,0l0,1l-1,1l-2,0l-11,11l-2,0l0,1l-1,0l0,1l-3,3l0,3l-1,1l0,2l1,1l0,4l1,1l0,4l1,1l0,4l1,1l1,-1l0,-1l3,-3l0,-2l-1,-1l2,0l1,-1l1,1l0,-4l2,-2l2,0l0,1l2,-2l-1,-1l0,-3l2,-2l1,0l-1,1l1,1l1,-1l0,-2l-2,0l0,-2l2,-2l-1,-1l-1,0l-1,1l-1,-1l0,-2l4,-4l0,-2l1,-1l1,0l0,1l1,-1l1,1l3,-3l1,1l-1,1l0,1l2,-2l1,0l1,-1l4,0l2,2l0,1l1,-1l0,-1l1,-1l1,0l1,-1l1,0l4,-4l3,0l2,-2l2,0l1,-1l1,0l-1,-1l2,0l0,1l2,0l1,1l1,0l1,-1l0,-1l-1,-1l0,-1l-1,-1l-1,0l1,-1l-1,-1l0,-1l-2,0l-1,-1l0,-1l-1,1l-1,-1l-5,0l1,-1l4,0l1,1l1,-1l-1,-1l1,0l2,2l3,0l3,-3l0,-1l-1,-1l0,-1l1,-1l2,0l1,1l-1,1l1,1l5,0l1,1l0,1l2,2l2,0l1,1l1,0l1,-1l0,2l1,-1l1,0l-2,-2l2,0l-1,-1l1,-1l-1,-1l1,-1l0,1l3,0l-1,-1l1,0l1,1l2,-2l0,-1l-2,0l0,-1l-1,0l-2,-2l-1,0l-1,1l-1,-1l-2,0l1,1l-1,1l0,1l-1,0l-2,-2l1,-1l0,-1l-1,0l-1,-1l1,-1l-1,-1l-3,0l-2,-2l-3,0l-4,-4l-2,0l-1,-1l-3,0l-2,-2l-7,0l-1,1l-1,-1l-3,0l-1,-1l-2,0l0,2l2,2l0,1l-1,1l-3,0l-2,-2l-2,0l0,-1l-1,-1l-1,0l-1,1l-6,0l-1,-1l-4,0l-2,2l0,2l-1,1l-2,0l1,-1l0,-1l-1,-1l0,-2l-2,0l0,-2l1,-1l-3,-3l-8,0l-1,1l-1,-1l-1,1l-7,0l-1,-1l1,-1.000004l-1,-1l-1,0l-1,1l-2,0l1,-1l-1,0l-1,-1l-2,0l0,-1l2,0l1,-1l-1,-1l-6,0l-3,3l-3,0l0,-1l2,0l0,-2l1,1l1,-1l-3,0l-1,1l-1,0l-1,-1l1,-1l4,0l-1,-1l-10,0l-1,-1l-2,0l2,2l-4,0l-1,1l2,0l0,1l-1,1l0,1l1,1l-3,0l-1,-1l-1,0l0,2l-1,1.000004l-2,-2.000004l-2,0l-1,-1l-1,0l-2,2l-2,0l-3,-3l-1,1l0,2l-2,2.000004l-2,0l-2,-2.000004l-1,0l-2,-2l1,-1l-2,0l-2,-2l1,-1l1,1l1,0l1,1l1,-1l-1,-1l-2,0l0,-1l2,0l0,-1l-1,0l0,-1l-1,-1l-1,0l-1,-1l-2,0l0,1l-1,0l-1,-1l-1,1l-2,-2l-3,0l-1,1l2,2l-1,1l-11,0l-2,-2l0,-1l-6,0l-1,-1l-2,0l-1,1l-2,0l0,2l-1,1l1,1l-1,1l-1,-1l0,-2l1,0l0,-1l-1,-1l1,-1l-1,-1l-1,1l-3,0l0,-1l-3,0l-1,1l3,0l-1,1l-1,0l-1,1l-4,0l-1,1l-3,0l-2,2l-2,0l3,-3l2,0l2,-2l2,0l2,-2l1,0l2,-2l2,0l2,-2l2,0l2,-2l-1,0l-2,-2l2,0l1,1l0,-2l-1,-1l-1,1l-1,0l0,-2l-2,0l-1,-1l-8,0l-1,1l-3,0l-1,-1l1,0l2,-2l-8,0l0,-1l2,0l1,-1l1,0l-1,-1l-3,0l0,-1l-1,1l-3,0l-2,2l-1,0l-2,2l1,1l1,0l0,1l-6,0l2,2l0,1l-0.998962,0l0,-1l-1.001038,-1l-1.998962,0l-1,1l-2,0l-1,1l-3,0l1,-1l-7,0l0.998962,1l-1,1l-6.998962,0l-1.001038,1l-2.998962,0l-1,1l-4,0l1,1l0,1l-1,1l-1,-1l-1,0l2,2l1,0l0,1l-1,0l-1,-1l0,1l2,2l-1,1l-1,0l-1,1l1,1l-1,1l-1,-1l0,-2l1,-1l1,0l0,-1l-2,0l-1,1l-3,0l-1.001038,1l-7.998962,0l-1,1l2,2l0,2l1,1l2,0l0,1l0.998962,0l3,3l-1,0l0,2.000004l1,1l0,2l-1,1l-2,0l0,-1l1,-1l0,-2l-1,0l0,1l-1,1l0,-3.000004l2,-2l-1,-1l-1,1l-2,0l-2,-2l-2,0l-1,-1l-4,0l-1,1l2,0l0,1l-3,0l-1,-1l-1,1l0,1l1,1l3,0l2,2.000004l1,0l-1,1l-1,0l-2,-2.000004l-5,0l-1,-1l1,-1l-1,-1l1,-1l0,-3l-1,-1l0,3l-2,2l-2,0l-1,1l0,2l3,3.000004l-2,2l0,3l1,1l8,0l2,2l0,3l-1,1l1,1l2,0l-1,1l-2,0l-1,-1l0,-4l-2,-2l-1,1l-3,0l-1,1l0,1l1,1l0,2l-5,5l-1,0l0,1l-7,0l-2,-2l5,0l-1,1l1,0l1,-1l0,-1l1,0l4,-4l0,-2l1,-1l-3,-3l0,-9.000004l-1,-1l0,-1l2,-2l0,-3l-2,0l-1,-1l-5,0l-2,2l0,2l-4,4c0,0 " + 
          "-1,0 -1,0l0,2.000004l1,0l0,3l-1,1l0,1l2,0l4,4l-2,2l-2,0l-3,-3l-3,0c0,0 -2,-2 -2,-2l-3,0l-1,-1l-5,0l-1,1l0,1l1,1l0,1l-2,0l-1,1l0,1l-1,0l-1,-1l0,-2l-0.998962,0l-2,2l-6,0l-2,2l-4.001038,0l2,-2l0,-2l-0.998962,0l-2.001038,2l0,1l-2,0l0,-1l-1,0l-1.998962,1.999001l-2.001038,0l-2,2l-2.998962,0l0,2.000999l-2.001038,2l-4,0l-2,-2l0,-1l2,-2l2,0l0,-1l-2,-2l-5,0l0,1l1,1l0,2l-1,1l0,1l2,2l0,1l-1,1l0,2l-2,-2l-3,0l-1,1l-1,0l-1,1l-1,0l-2,2l0,1l2,2l-1,1l-1,0l-1,-1l-3,0l-2,-2l-1,0l-1,1l2,2l2,0l0,2l-1,1l-3,0l-3,-3l-2,0l0,-6l-2,-2l-1,0l-3,-3l0,-1l2,0l2,2l2,0l2,2l4,0l1,1l3,0l1,-1l3,0l3,-3l0,-1l-1,-1l0,-1l-2,-2l-3,0l-2,-2l-2,0l-2,-2l-2,0l-1,-1l-4,0l-1,1l-1,0l0,-1l1,-1l-3,0l0,-1l2,0l-1,-1l-1,0l-1,1l-2,0l0,1l-2,0l-2,2l-2,0l0,4l2,0l1,1l0,2l-2,2l0,2l3,3l0,1l-1,0l0,4l2,2l0,1l-1,1l0,1l3,3l-9,9l2,0l0,1l1,1l2,0l1,1l-3,0l-1,1l-2,0l0,2l-1,1l0,6l1,1l0,3l2,2l2,0l0,1l1,-1l1,0l2,2l0,4l4,4l-1,1l-1,0l-1,-1l-1,1l1,1l0,3l2,0l1,-1l3,0l2,2l-1,0l0,2l2,0l1,1l0,2l2,0l1,1l1,-1l1,0l2,2l1,-1l2,2l2,0l0,2l-1,0l0,5l-2,0l-2,2l3,0l0,1l-1,1l-3,0l2,2l-1,1l-1,0l0,2l-2,0l2,2l1,0l5,5l1,-1l1,1l4,0l2,2l5,0l5,5l2,0l1,-1l0,-1zm-15,-96l1,-1l-1,0l0,1zm-17,7l0,-1l-1,0l1,1zm68,-76.000003l1,0.999999l4,0l1,0l1,-0.999999l0,-1l-1,0l-1,-1l-1,1l-1,1l-3,0zm2,-5l-3,0l-1,1l2,0l1,1l1,0l1,-1l-1,-1zm-8,4l-1,1l3,0l1,-1l-3,0zm-6,-3l1,0l1,0l1,0l1,-1l-3,0l-1,1zm3,2l1,-1l-1,0l-1,1l1,0zm-3,0l1,0l1,-1l-2,0l-3,0l-1,1l-2,0l1,1l4,0l1,-1zm-1,2l1,0l1,0.999999l1,0l1,-0.999999l-1,-1l-2,0l-1,0l-1,0l1,1zm-4,1.999999l2,0l1,-1l1,0l-1,-0.999999l-2,0l-1,-1l-1,0l-1,0l-1,0l-1,1l-1,0l1,0.999999l1,0l2,0l1,1zm-4,1l1,-1l-1.018982,0l-0.981018,0l1,1zm2,0l-1,1l1,0l1,-1l-1,0zm12,0l1,-1l1,0l1,1l1,-1l1,0l1,-1l0,-0.999999l-3,0l-1,0.999999l-2,0l-1,0l-1,1l1,0l1,1zm-1,1l-1,1l1,0l1,0l0,-1l-1,0zm-15,-1l-1,0l-1,0l-1,1l1,0l2,0l1,0l0,-1l-1,0zm-6,-2l-1,-0.999999l-3,0l-1,0.999999l0,1l-1,0l-1,0l-1,0l-1,0l-1,1l-1,0l-1,0l1,1l1,0l1,-1l1,1.002001l-1,1.002001l1.005005,0l0.994995,-0.996l1,-0.009001l1,0.009001l-1,-1.009001l2,0l1,-1l3,0l1,-1l-1,0l0,0.000999zm-1,-1.999999l0.005005,-0.995l-1.005005,1.007999l1,-0.013zm-5,1.999999l-1,-0.999999l-1,0l-1,0l-1,0l-1,0.999999l-2,0l-1,0l-1,0l-1,1l1,0l1,0l1,0l1,1l1,-1l1,0l1,-1l1,0l1,1l1,-1zm2,3l1,1l1,-1l-1,0l-1,0zm4,1l0,1l1,-1l-1,-1l-1,0l-1,1l2,0zm12,-2l0,1l-1,1l1,0l2,0l1,0l0,-1l0,-1l-3,0zm3,-1l1,1l0,1l2,0l1,-1l1,0l-1,-1l-4,0zm271,99.000004l-1,1l0,1l1,-1l1,-1l1,0l0,-1l-1,0l-1,1zm5,15l1,1l1,1l0,-1l-1,-1l0,-1l-1,0l0,1zm6,3l0,-1l-1,-1l-1,0l2,2zm11,5l1,1l1,0l1,0l-1,-1l-2,0zm12,5m-9,-3l-1,1l1,0l0,-1zm10.006042,3l0,-1.005997l-1.006042,1.005997l1.006042,0zm1.993958,-1l1,1l0,-1l-1,0zm3,0l0,1l1,-1l-1,0zm-2,1l0,1l1,1l1,0l-2,-2zm-58,3l-1,0l0,1l1,-1zm0,1l-1,1l-1,0l0,1l1,1l0,-1l1,0l1,-1l-1,-1zm2,-1l-1,0l0,1l1,-1zm-4,5l-1,0l0,1l1,-1zm-2,4l0,-1l-1,0l1,1zm-3,3l0,-1l-1,0l1,1zm-2,2l-1,0l-1,1l1,1l0,-1l1,-1zm-7,5l-1,1l1,0l1,-1l1,-1l1,0l-1,-1l-2,2zm-3,1l-1,1l-1,1l-1,0l-1,1l0,1l1,-1l1,0l1,-1l1,-1l1,0l0,-1l-1,0zm-7,7l0,-1l1,-1l1,-1l-1,0l-1,1l-1,1l1,1zm2,-1l1,1l0,-1l-1,0zm-1,1l1,0l0,-1l-1,1zm0,1l0,-1l-1,0l1,1zm69,-34l0,1l1,0l0,-1l-1,0z",
          "m512.174988,131.175003l3,0l1,1l0,2l-8,0l1,-1l0,-1l3,0l0,-1z"],
    flag: "russia.png",
    data: {}
  };

  // Greenland
  countryData['gl'] = {
    name: "Greenland",
    svg: ["m280.174988,32.174999l-1,-1l-5,0l-1,-1l0,-2l1,-1l4,0l1,-1l3,0l1,-1l4,0l4,0l1,-1l0,-2l1,-1l1,-1l-6,0l-1,-1l0,-1l1,-1l3,0l2,-1.999999l1,-1l2,0l5,0l1,-1l0,-2l2,-2l2,0l1,1l1,1l3,0l1,1l2,0l-1,-1l-1,-1l-3,0l-1,-1l0,-1l3,0l6,0l-1,-1l5,0l1,1l0,3l2,-2l-1,-1l1,0l3,0l2,2l2,0l1,-1l-1,0l-1,-1l-1,-1l6,0l1,1l2,0l2,2l4,0l1,1l0,-3l1,-1l-1,-1l-1,-1l-1,0l-2,0l-1,-1l3,0l1,-1l9,0l1,-1l4,0l2,2l1,0l1,-1l-1,0l-1,-1l1,-1l9,0l1,-1l10,0l1,1l8,0l1,1l-12,0l-1,1l7,0l10,0l1,1l1,1l6,0l0,1l-1,1l-1,0l-1,1l-3,0l-13,0l-1,1l11,0l2,2l1,0l1,-1l1,-1l6,0l0,1l0,1l-1,1l-1,1l-1,0l-1,1l-1,1l2,0l1,-1l1,0l1,-1l1,-1l1,0l3,0l5,0l2,-2l6,0l1,1l4,0l1,1l0,1l-2,0l-1,1l-3,0l-2,1.999999l-3,0l-1,1l0,1l-1,1l-8,0l-1,1l1,1l1,1l0,1l1,0l0,1l-1,1l-1,1l-2,0l-1,1l-1,1l0,2l-1,1l2,0l3,0l1,1l-3,0l1,1l1,1l4,0l0,1l-1,1l-3,0l-3,0l-1,1l-1,0l-1,-1l-1,1l1,0l2,2l3,0l1,1l1,1l0,3l-4,0l0,1l0,1l1,-1l1,0l1,1l1,1l0,2l-3,0l-3,0l-1,-1l-1,1l1,1l4,0l0,2l-1,0l-1,1l-4,0l-1,-1l-1,0l-1,-1l-1,1l-2,0l-1,1l5,0l1,1l2,0l1,1l0,3l-3,0l-3,-3l-1,0l0,1l1,1l2,2l1,0l1,1l2,0l0,1l-1,1l2,0l0,5.000004l-2,0l-2,0l-1,-1l0,-1l-2,-2.000004l-1,-1l-2,0l0,1l-1,1.000004l-5,0l0,1l-1,1l-1,0l1,1l4,0l-1,1l2,0l1,-1l1,0l2,0l1,1l2,0l3,0l-1,1l-1,1l-2,0l-1,1l-1,1l-2,2l-2,0l-1,1l-4,0l-1,1l-3,0l-1,1l-4,0l-1,-1l0,2l-1,1l-1,0l-1,1l0,2l-1,1l-2,2l-2,0l-1,1l-1,1l-2,0l-1,1l-2,0l1,-1l0,-1l1,-1l-1,0l-1,1l0,1l-1,1l-2,0l0,1l-1,1l-1,0l-1,1l1,1l0,1l-1,1l0,3l-4,4l0,5l-1,1l0,2l-1,1l0,2l-1,1l-2,0l-1,-1l-1,0l-1,-1l0,-1l-1,0l-1,-1l-1,0l-3,0l-2,-2l-1,0l-2,-2l0,-1l0,-1l-2,-2l-1,-1l0,-2l-1,-1l-1,-1l0,-2l-1,0l0,-1l-1,-1l0,-3l-1,0l-1,-1l0,-2l-1,0l0,-2l1,-1l-1,0l-1,-1l0,-1l2,-2l-2,0l2,-2l5,0l-1,-1l-4,0l0,-2l2,0l1,1l3,0l-1,-1l0,-2l1,-1l1,-1l0,-1l-3,0l-1,-1l-2,0l-1,-1l-2,0l-1,-1l0,-1l5,0l1,1l1,0l1,1l1,0l-1,-1l0,-2l-1,-1.000004l-1,0l-2,0l-1,-1l2,0l1,-1l-3,0l0,-1l-1,0l0,1l-1,1l-5,0l0,-2l1,-1l0,-1l0,-1l1,0l1,-1l0,-1l-2,0l0,-1l1,-1l-2,0l-1,-1l1,-1l0,-1l-1,-1l-1,0l0,-1l1,-1l-2,0l-2,-2l-1,-1l-1,-1l1,-1l-1,-1l-2,0l-1,-1l-3,0l-1,-1l-4,0l-9,0l-1,1l-4,0l-1,-1l-1,-1l0,-1l-1,-1l-3,0l-1,-1l1,-1l5,0l1,-1l5,0l1,-1l-10,0zm-7,2l3,0l1,-1l-3,0l-1,1zm70,-28.000999l-2,0l-3,0l0,1l1,0l1,1l2,0l1,1l1,0l0,-2l-1,-1zm70,15l1,-1l-3,0l-1,1l3,0zm-4,7.000999l0,2l1,0l0,-2l-1,0zm3,3l0,1l1,0l0,-1l-1,0zm-2,8l1,1l0,-3l-1,0l0,2zm0,4l0,2l4,0l-1,-1l-1,-1l-2,0zm-89,20l0,1.000004l1,0l0,-1.000004l-1,0zm5,2.000004l1,0l-1,-1l-1,0l1,1zm-7,2l0,1l0,1l0,1l1,1l1,0l1,1l1,0l1,-1l2,0l0,-1l-1,-1l-1,0l-1,-1l-1,0l-1,-1l-2,0zm9,2l0,2l1,-1l0,-1l-1,0zm35,19l1,0l0,-1l-1,1zm25,-23l-1,1l1,0l3,0l1,1l0,-1l1,0l1,-1l0,-1l-1,0l-1,0l-3,0l-1,0l0,1zm20,-57.000003l0,1l1,1l2,0l-1,-1l-1,-1l-1,0z"],
    flag: "greenland.png",
    data: {}
  };

  // Canada
  countryData['ca'] = {
    name: "Canada",
    svg: ["m278.174988,162.175003l1,0l1,-1l0,-1l1,-1l1,-1l1,-1l1,-1l1,0l1,-1l1,0l1,-1l2,0l1,-1l2,0l1,1l1,1l0,1l-1,1l-1,1l-2,0l-1,-1l-1,1l1,0l1,1l1,0l1,0l1,0l-1,1l0,1l-1,1l1,0l0,1l1,1l0,1l2,0l0,1l1,0l1,0l1,1l1,-1l1,0l1,1l0,1l-1,1l-1,0l-1,1l-2,0l-1,1l-1,0l-2,2l-1,1l-1,0l-1,-1l0,-2l1,-1l1,-1l1,-1l1,0l1,1l1,-1l1,-1l-1,0l-1,1l-1,-1l0,-1l-1,1l-1,0l-1,1l-1,0l-1,1l-2,0l0,-2l-1,-1l0,-5l-1,-1l-1,1l-1,0l-1,-1l-1,1l0,1l-1,1l0,1l-1,1l0,2l-1,1l-1,0l-1,1l-8,0l1,-1l1,0l4,-4l1,0l2,-2l1,0zm-49.999985,-90l1,0l0,-1l-1,1zm-14,-1l1,0l0,1l1,-1l-1,-1l-1,0l0,1zm-3,-1l-1,-1l-1,0l-1,1l1,1l-1,0l-1,1l-1,0l-1,1l1,1l1,0l1,0l2,0l1,1l2,0l1,0l1,0l1,-1l-1,0l-1,-1l-1,-1l-1,-1l-1,-1zm-9,-5l0,1l1,0l-1,-1zm0,8l0,1l1,0l0,-1l-1,0zm1,-1l0,1l1,0l0,-1l-1,0zm-5,2l0,1l1,0l1,-1l-2,0zm-6,2l1,0l0,-1l-2,0l1,1zm-12,1l0,1l1,-1l-1,0zm2,1l0,-1l-1,1l1,0zm2,1l-1,1l1,0l0,-1zm67,61l1,0l1,0l-1,-1l-2,0l1,1zm4.999985,4l1,-1l-1,0l0,1zm-0.999985,-5l0,-1l-1,0l1,1zm1.999985,-13l-1,1l-1,1l1,0l1,0l0,-1l1,0l0,-1l-1,0zm-1.999985,0l-1,1l1,0l0.999985,-1l-0.999985,0zm0,-2l0,1l0.999985,-1l-0.999985,0zm1.999985,1l0,-1l-1,1l1,0zm-1,-3l-1,-1l0,1l1,0zm0,-17l0,-1l0,-1l1,0l-1,-1l-1,0l-1,1l0,1l1,1l1,0zm-10.999985,-4l0,1l1,1l1,0l1,-1l1,-1l1,-1l0,-1l-1,0l-1,1l-1,0l-1,0l-1,1zm13.999008,-4l0,1l1,1l1,0l0,-1l-1,-1l-1,0zm3,-1l0,1l1,1l1,0l0,-1l-1,-1l-1,0zm-2,-1l0,1l1,-1l-1,0zm9,6l1,0l-1,-1l-1,0l1,1zm25.000977,-3l0,-1l1,-1l-1,-1l-1,0l-1,-1l1,-1l-1,-1l-1,-1l-1,1l-1,-1l-1,-1l0,-1l-1,-1l-1,0l-1,-1l0,-1l1,1l1,0l0,-1l-1,-1l1,0l0,-1l1,0l2,2l1,0l1,1l0,1l2,2l0,-1l1,1l1,1l1,-1l0,-1l1,-1l1,0l1,-1l1,-1l-1,-1l2,0l-1,-1l1,0l0,-1l-1,-1l-1,0l-1,1l-1,-1l-1,1l0,-1l1,-1l-1,-1l-1,1l-1,0l0,-1l1,0l-1,-1l-1,0l-1,-1l0,-1l-1,1l-2,0l0,-1l0,-1l-1,1l-1,0l0,-1l-1,-1l-1,0l-2,0l-1,-1l3,0l0,-1l-1,0l-1,0l-1,0l1,-1l2,0l3,0l-1,-1l-3,0l-1,0l-2,0l1,-1l2,0l1,0l1,0l0,-2l-1,-1l-1,0l0,1l-1,1l-1,0l0,-1l-1,0l-1,0l-1,0l1,-1l1,0l1,0l1,0l0,-1l-1,-1l-1,0l-1,0l-1,0l-1,0l-1,1l0,1l-1,1l0,-1l0,-1l-1,1l-1,0l1,-1l1,0l1,-1l1,-1l-1,0l-1,0l-1,1l-1,0l-1,0l1,-1l1,0l1,-1.000004l0,-1l-1,0l-1,-1l-2,0l-1,1l-2,0l1,-1l-1,0l-1,0l-1,1l0,-1l1,-1l1,0l-1,-1l-1,0l-1,1l-1,0l1,-1l1,-1l-1,-1l-2,0l-1,-1l-2,0l-2,0l-1,1l1,1l1,0l-1,1l-1,-1l-1,0l0,1l-1,-1l-1,0l-1,-1l0,1l-1,1l-1,0l0,0l0,-1l0,-1l0,0l1,-1l-1,-1l-1,-1l0,-1l0,-1l-1,-1l-2,0l-3,0l-1,1l-1,0l-1,1l-1,0l-1,1l1,0l1,1l0,1l-1,-1l-1,0l-1,0l0,1l1,1l2,0l0,1l1,1l-1,0l-1,-1l-1,1l-1,0l0,1l1,1l2,0l0,3.000004l-1,-1.000004l-1,0l1,-1l-1,0l-1,-1l-1,-1l0,-1l0,-1l-1,-1l0,-2l1,-1l1,-1l1,-1l1,-1l-1,0l-3,0l-2,0l-2,0l-1,1l0,1l-1,1l-1,1l0,1l-1,1l0,2l-1,1l0,1l1,1l2,0l1,1l2,0l1,1.000004l-5,0l0,1l1,1l1,1l1,0l1,1l1,-1l1,0l1,-1l1,1l0,1l1,0l3,0l4,0l1,1l2,0l1,0l1,1l1,-1l-1,0l-1,-1l1,0l2,0l1,1l1,0l2,0l0,-1l-1,-1l0,-1l1,1l1,0l1,0l1,1l0,1l1,0l1,0l-1,1l1,0l1,0l0,1l1,0l1,1l0,1l-1,0l-1,0l-1,0l0,1l1,1l1,-1l1,0l1,-1l1,0l0,1l1,1l1,0l0,-1l1,1l0,1l1,0l0,1l1,1l1,1l0,2l-1,1l-1,1l-1,1l-1,1l-1,0l0,1l1,1l1,1l-1,0l-1,1l-1,0l-2,0l1,1l0,1l-1,0l0,-1l-1,0l-1,-1l-1,0l-1,0l-1,1l-1,1l-1,0l0,1l1,1l1,0l1,1l1,0l2,0l1,-1l2,0l0,-1l1,-1l0,1l1,1l2,0l0,1l1,1l1,1l1,0l1,1l-1,1l1,1l1,0l1,0l1,1l2,0l1,1l1,1l1,0l1,1l2,0l1,0l1,1l1,0l0,-2l-1,-1l-1,-1l-1,0l-1,-1l-3,-3l1,0l1,1l1,0l1,1l1,0l1,1l1,0l2,2l1,-1l0,-3l1,1zm-38,-25l0,1l1,0l1,-1l1,-1l-1,0l-1,1l-1,0zm2,-3l0,1l1,0l1,-1l-1,-1l0,1l-1,0zm4,1l0,1l1,0l0,-1l-1,0zm-8.999985,-1l1,1l1,0l0.999985,-1l-0.999985,0l-1,-1l-1,1zm14.999985,5l-1,0l0,1l1,0l0,-1zm0,2l0,1l1,1l2,0l1,-1l-1,-1l-3,0zm-11,-1l0,1l1,0l0,-1l-1,0zm7,0l-2,2l0,3l4,0l1,-1l0,-3l-1,-1l-2,0zm-25.999985,0l-1,1l0,1l1,0l1,-1l0,-1l-1,0zm-2,-8l1,1l1,0l0,-1l-2,0zm-20,-9.000004l3,0l1,-1l0,-1l0,-1l1,-1l4,0l2,-2l1,-1l0,-2l-3,0l-2,0l-1,-1l-4,0l-3,3l0,3l1,1l0,3zm0,-11l0,-1l-1,0l1,1zm-3,-3l1,1l2,0l1,1l3,0l1,-1l0,-1l-1,-1l-1,-1l-1,-1l-2,0l-1,1l-1,0l-1,1l0,1zm4,-5l0,1l1,0l0,-1l-1,0zm-7,7l0,1l1,-1l-1,0zm2,-5l0,1l1,0l1,-1l-2,0zm-2,1l1,0l0,-1l-1,-1l0,-1l1,-1l-1,-1l-1,-1l-2,0l-1,1l-1,-1l-2,0l-1,1l1,0l0,1l1,1l-1,0l-1,-1l-1,-1l-1,0l-1,0l0,1l1,1l0,1l-1,0l-1,1l0,1l1,-1l1,0l1,0l2,0l1,0l-1,1l-1,0l1,1l0,1l6,0l1,-1l0,-1z" + 
          "m-12,-3l0,-1l-1,-1l-1,1l-3,0l1,1l2,0l0,1l2,0l1,-1l-1,0zm-3,-3l-1,0l-2,0l1,1l2,0l1,0l-1,-1zm5,0l2,0l1,-1l-1,0l-1,0l-1,1zm-8,6l0,2l2,0l0,-2l-2,0zm-3,-12l0,1l1,1l1,1l2,0l0,-1l-2,0l0,-1l-1,-1l-1,0zm9,0l0,1l1,0l1,0l1,-1l-3,0zm8,-1l-1,-1l-1,-1l0,-1l0,-1l-2,0l-1,0l-1,-1l-2,0l-1,1l0,-2l-1,-1l-6,0l0,2l2,0l-1,1l1,0l1,-1l1,0l-1,1l1,0l0,1l-3,0l0,1l1,1l2,0l1,0l1,-1l1,0l1,1l3,0l1,1l1,1l2,0l1,0l0,-1zm-9,-1l-1,0l-1,1l1,0l1,-1zm7,-10l0,1l0,1l2,0l1,1l0,-2l-1,-1l-2,0zm4,7l1,1l0,1l1,1l1,0l-1,1l1,1l2,0l1,-1l3,0l-1,-1l1,-1l-1,-1l-4,0l-1,-1l-3,0zm6,6l1,1l5,0l1,-1l-1,-1l-5,0l-1,0l0,1zm12,0l0,1l1,0l1,1l2,0l0,-1l-1,-1l-3,0zm2,4l0,1l1,1l1,0l0,-1l0,-1l-2,0zm-15,-1l-1,0l1,1l-1,0l0,1l1,0l1,1l1,0l1,1l5,0l1,-1l2,2l0,2l-1,1l0,1l1,1l1,1l1,1l1,0l1,0l3,0l1,-1l2,0l-1,1l1,1l5,0l1,-1l3,0l2,0l1,0l1,-1l1,1l1,1l1,0l1,-1l2,0l1,0l1,-1l0.999985,0l0,-1l-0.999985,0l0.999985,-1l0,-1l-1.999985,0l0,-1l-2,0l-1,-1l-6,0l-1,1l-3,0l-1,0l-1,1l-2,0l-1,-1l-3,0l-2,0l0,-1l-1,-1l-1,0l-1,0l-1,-1l4,0l-1,-1l-2,0l-1,-1l-5,0l-1,-1l-1,0l-1,-1l-3,0l-3,0zm18,1l0,2l2,0l3,0l2,0l1,-1l0,1l5,0l0,-1l1,1l4,0l0,-1l1,1l2,0l1,1l2.999985,0l1,-1l1,0l2,-2l0,-1l-1,0l-1,1l-1,-1l-1,-1l-4.999985,0l-1,0l1,-1l2,0l5.999985,0l1,-1l0,-2l5,0l1,-1l1,0l-1,-1l-1,0l1,-1l1,0l1,0l1,-1l-1,0l-1,0l-1,0l-1,-1l-2,0l-2,0l-2,0l1,-1l3,0l2,0l1,1l3,0l-1,-1l-2,0l-1,-1l4,0l1,-1l2,0l-1,-1l-2,0l1,-1l2,0l1,1l1,1l2,0l1,-1l2,-2l0,-1l1,0l1,0l1,0l1,-1l1,-1l1,0l1,-0.999999l1,-1l2,0l1,0l1,0l2,-2l-3,0l-1,1l-5,0l1,-1l3,0l1,-1l4,0l1,-1l1,-1l5,0l1,-1l1,0l-2,-2l-4,0l-1,-1l-5,0l-1,0l-1,1l-4,0l1,-1l2,0l1,0l1,-1l-5,0l-3,0l-1,-1l-3,0l0,1l-1,0l-1,-1l-3,0l0,1l1,1l-2,0l-1,-1l-7,0l1,1l2,0l1,1l-2,0l-2,0l-2,-2l-5.999985,0l-1,0l1,1l0.999985,1l-1.999985,0l-1,-1l-1,0l0,1l-1,0l-1,1l-1,0l1,1l-1,0l-1,1l-2,-2l-5,0l-1,1l-2,0l1,1l2,0l1,1l-3,0l-1,-1l-6,0l-1,1l-5,0l-1,1l3,0l2,0l-1,1l1,0l1,0l-1,1l0,1l4,0l4,0l1,-1l3,0l-1,1l-2,0l-1,1l-7,0l1,0.999999l2,0l1,1l1,0l1,-1l1,0l1,-0.999999l2,0l1,-1l1,0l-1,1l-1,0.999999l-2,0l-1,1l3,0l4,0l1,-1l2,0l0,1l2,0l1,0l1,-1l1,0l1,0l1.999985,-1.999999l1,0l1,0l1,-1l1,0l-1,1l0,1l3,0l-1,0.999999l-3,0l-2,0l-0.999985,1l-2,0l-1,1l-4,0l1,1l1,1l1,1l2,0l1,1l-3,0l-1,-1l-1,0l-2,-2l-3,0l-1,-1l-5,0l0,1l1,1l0,1l1,0l1,0l1,1l2,2l0,1l2,0l2,0l1,1l-2,0l-3,0l-1,0l-4,0l-1,0l-1,1l-1,1l0,1l2,0l1,0l1,-1l0,1l1,0l1,0l1,-1l0,1l1,0l-1,1l-1,0l-1,1l0,1l1,0l1,1l2,0l2,-2l1,-1l0,1l-2,2l-1,1l-2,0l-1,-1l-2,0l-2,-2l-3,0l-1,1l1,1l2,0l1,1l-2,0l-2,0l-1,1l-1,1l-1,0zm-3,-19l-1,-1l-1,-0.999999l-1,-1l-1,-1l-1,0l-1,-1l-2,0l-1,0l0,1l1,0l1,1l-2,0l-2,0l-1,1l0,0.999999l1,0l1,0l1,1l-2,0l-1,0l-1,-1l-1,0l0,1l1,1l-1,0l-1,0l1,1l2,0l2,0l-1,1l-3,0l-1,-1l-1,0l0,1l1,1l1,1l2,0l-1,1l1,1l1,-1l2,0l1,0l3,0l2,0l1,0l-1,1l-2,0l-1,0l-1,1l-2,0l1,1l1,0l0,1l1,0l2,0l-1,1l1,1l4,0l0,-1l1,1l1,0l-1,-1l0,-1l2,2l2,0l0,-2l1,1l0,-1l0,-2l1,0l0,1l0,1l1,-1l1,-1l2,0l1,-1l1,0l0,-1l-1,-1l-2,0l-2,0l1,-1l0,-1l-1,-1l-1,0l0,-1l-2,0l0,1l-1,0l-1,-1l0,-1l-3,0zm25,36l0,0l1,1l1,1l0.999985,1l1,0l1,-1l2,0l4,0l0,-1l-1,-1l-1,-1l-2,0l-3,0l-1,-1l-1.999985,0l-1,0l0,2zm39.999985,49.000004l1,0l1,-1l-1,0l-1,1zm-51.999985,-15l-1,1l-1,1l0,5l-1,1l-1,1l0,1l1,0l1,-1l1,0l1,1l0,2l1,-1l1,0l1,-1l2,-2l1,-1l0,1l1,0l1,1l1,1l1,0l2,0l1,-1l-1,-1l-3,0l1,-1l-2,-2l-1,-1l-1,0l-1,-1l-2,0l-1,-1l-1,1l0,-1l0,-1l-1,-1zm0,0l1,1l1,0l0,-1l-1,-1l-1,0l0,1zm3,0l1,1l2,0l-1,-1l-1,0l-1,-1l0,1zm50.999985,65l1,0l2,2l3,0l0,-1l-1,0l-2,-2l-1,0l-1,0l-1,0l-1,0l1,1zm21,-7.001007l-1,1l-1,0l-2,2l0,3l-1,1l-1,1l1,1l-1,0l-2,2l2,0l-1,1l-1,0l-1,1l0,2l3,0l4,0l1,-1l0,0l1,0l0,1l1,0l1,-1l1,0l-1,1l-2,2l2,0l2,-2l0,-1l1,0l0,1l0,1l-1,1l1,0l1,-1l0,2l1,0l1,-1l0,-3l-1,1l0,-2l-1,1l-1,-1l1,-1l1,0l0,-1l-1,0l-1,-1l1,-1l0,-1l-2,0l-1,0l-1,0l-1,0l-1,-1l1,-1l-1,-1l-1,1l-1,1l0,-2l1,-1l1,-1l0,-1l1,-1l0,-1l-1,0zm5,7l0,-1l-1,1l1,0zm-7,9l0,1l1,1l0,-1l-1,-1zm-14,0l1,0l1,-1l0,-1l-1,1l-1,1zm-4,0.001007l-1,1l-1,1l1,0l0,1l1,0l0,-1l0,-2z" + 
          "m3,3l-1,0l-1,-1l-1,0l0,1l1,1l1,0l1,0l1,-1l-1,0zm6,0l0,1l-1,1l-1,0l1,-1l0,-1l1,-1l0,-1l-1,0l-1,1l0,1l-1,1l0,1l0,1l3,0l1,-1l0,-1l-1,-1zm-170.999985,-14l3,3l1,1l2,0l0,1l1,1l2,0l1,1l1,-1l-1,-1l-1,-1l-1,-1l-2,-2l-1,-1l-1,0l-1,-1l-1,0l-1,0l-1,-1l-1,0l-1,0l2,2zm-4,-11l0,1l1,1l0,1l1,-1l0,-1l-2,-2l0,1zm-2,0l0,-1l-1,-1l-1,0l2,2zm-8,-2l1,1l0,1l1,0l1,-1l0,-2l1,-1l-2,0l-1,0l-1,0l0,2zm5,6l0,-1l-1,-1l0,-1l0,-1l-1,-1l-1,1l0,1l1,1l2,2zm25,-96.000004l-2,0l-1,1l-6,0l1,1l0,1l1,1l-1,1l0,2l-2,2l0,1l-1,1l-1,1l1,1l3,0l2,2l1,1l3,0l1,-1l3,0l0,-3l1,-1l1,-1l1,0l2,-2l2,0l2,-2l3,0l1,-1l-1,-1l-1,0l-2,-2l-4,0l-3,0l-1,-1l-2,0l-1,-1zm37,6l-4,0l0,4l1,1l1,1l0,2l-1,0l-1,-1l-1,-1l0,-3l-1,-1l-4,0l1,1l-1,1l-3,0l1,-1l0,-1l-4,0l-2,2l-1,0l-1,-1l1,-1l1,-1l-1,-1l-1,0l-1,0l-1,1l-2,0l-1,0l-1,1l-1,0l-1,1l-1,1l-1,0l1,1l-1,1l-1,0l0,2l3,0l-1,1l3,0l2,0l-1,1l-4,0l-1,1.000004l2,2l10,0l3,0l1,1l-6,0l-4,0l-1,1l-2,0l0,1l2,2l1,1l5,0l1.5,1.5l0.5,0.5l0,1l6,0l4,0l1,-1l1,-1l3,0l2,-2l1,0l1,1l1,1l2,0l1,1l4,0l1,-1l1,0l1,-1l-1,0l0,-1l-1,0l-1,1l-1,0l0,-2l1,0l1,0l1,-1l0,1l1,0l2,0l0,-2l-1,-1l-3,0l-1,-1l-2,0l-2,-2l0,-3.000004l-2,-2l0,-2l-4,-4zm26,3l-1,0l-1,-1l0,-1l-2,0l1,-1l1,0l1,-1l0,-2l-10,0l-1,1l-1,1l0,1l2,0l1,1l0,2l-2,0l0,-1l-1,-1l-3,0l0,1l3,3l2,0l1,1l2,2l1,1l2,0l1,-1l3,0l1,-1l0,-2l0,-2zm0,-2l-1,0l0,1l1,0l0,-1zm-23,-14l-2,0l-1,1l-2,0l-1,-1l-1,-1l0,-1l0,-2l-1,0l-1,1l-2,0l0,1l1,1l0,1l-1,0l1,1l1,1l-5,0l-1,-1l-1,0l-1,-1l-1,-1l-3,0l-1,-1l-4,0l-1,1l-1,1l-1,1l0,1l-1,1l0,1l2,0l1,1l2,0l2,0l1,-1l0,-1l1,1l0,1l-1,1l0,1l1,1l6,0l1,-1l1,-1l3,0l1,-1l8,0l0,-2l1,-1l0,-1l0,-1zm-20,-3l1,-1l-4,0l-1,1l4,0zm-3,-6l1,1l2,-2l-2,0l-1,0l-1,1l1,0zm4,-1l-1,1l1,1l0,1l6,0l1,-1l0,-1l1,-1l-8,0zm0,-2l-1,1l10,0l1,-1l0,-1l-2,0l-1,-1l-2,0l-1,1l-3,0l-1,1zm-14,15l2,-2l0,-1l-1,0l-1,1l-2,0l-1,1l0,1l3,0zm-10,-5l-1,1l0,1l4,0l1,0l1,-1l0,1l0,1l1,0l1,-1l0,-1l1,0l2,0l0,-1l0,-1l1,-1l1,0l-1,1l0,2l3,0l0,-2l2,0l1,-1l0,-1l0,-1l1,-1l-1,-1l-3,0l-1,1l-5,0l-3,3l-2,2l-3,0zm3,3l0,1l1,-1l-1,0zm37,10l0,1l3,3l1,0l2,-2l0,-2l-6,0zm14.998993,21.000004l0,-1l-1,0l1,1zm53.001007,40.999001l0,-1l-1,0l1,1zm-109,43.000999l0,-1l-1,0l1,1zm-14,-11l1,0l0,-1l-1,1zm-6,-9l1,0l0,-1l-1,1zm130.999985,-97.000004l0,1l-1,1l1,0l1,-1l0,-1l-1,0zm-9.999985,46.000004l0,1l1,-1l-1,0zm36.999985,24l0,2l2,0l0,-2l-2,0zm9,-3l1,0l0,-1l-1,0l-1,0l1,1zm-1,-3l0,1l1,1l0,-2l-1,0zm-13,-1l0,-1l-1,-1l-1,0l2,2zm37,46l1,0l0,-1l-1,1zm1,-4l1,-1l-1,0l0,1zm1,9l1,-1l-1,0l0,1zm-68.999985,14l1,1l0,-1l-1,-1l-1,0l-1,0l-1,0l1,1l0,0l2,0zm-118,-31l-1,1l1,0l0,-1zm0,0l-1,1l1,0l0,-1zm118,31l1,1l0,-1l-1,-1l-1,0l-1,0l-1,0l1,1l0,0l2,0zm2,12l-1,0l-1,1l1,0l1,-1zm-120,-43l-1,1l1,0l0,-1z" + 
          "m183.999985,0.998993l-1,0l-1,0l0,1l-1,-1l1,-1l-1,-1l-1,0l-1,0l-1,1l-1,1l-1,0l-1,1l-1,0l0,-1l1,-1l1,0l1,0l1,-1l1,-1l2,0l0,-1l-1,-1l-1,0l0,1l-1,-1l-1,0l0,-1l-1,1l-1,0l1,-1l-1,0l-1,0l-1,0l1,-1l0,-1l-1,-1l-1,0l-1,0l0,-0.999992l-1,-1l-1,0l1,-1l1,0l0,-1l-1,-1l0,-1l-1,0l1,-1l-1,-1l-1,-1l-1,0l1,-1l-1,0l0,-1l-1,-1l0,-1l-1,-1l0,-1l-1,-1l-1,-1l0,-1l-1,1l0,1l-1,1l0,1l0,1l-1,1l-1,1l-1,0l-1,1l-1,0l-1,0l-1,1l-1,0l1,-1l0,-1l-1,-1l-1,0l-1,0l-1,1l-2,0l1,-1l1,0l1,-1l-1,-1l0,-2l-1,0l1,-1l0,-2l1,-1l0,-1l-1,1l-1,0l-1,0l-1,-1l-1,0l-1,-1l0,-1l-1,0l-1,-1l0,-1l-1,0l-2,-2l-1,1l-1,0l-1,1l-1,-1l-1,0l-2,0l-1,-1l-1,0l-1,0l-1,1l0,1l0,1l1,1l0,2l-1,0l-1,1l-1,1l1,0l1,-1l1,1l0,2l1,1l-1,1l0,1l-1,1l-1,1l0,1l3,3l1,1l0,6.999992l-1,1l-2,2l-1,1l-2,0l-1,0l0,2l1,1l0,1l0,3l1,1l1,1l-1,1l0,2l0,2l-1,-1l-1,0l-1,1l-1,0l-1,-1l0,-1l-2,-2l-2,-2l0,-6l0,-2l-1,-1l-2,0l-4,0l-1,-1l0,-1l-2,0l-1,-1l-2,0l-1,-0.999992l-2,-2l-1,-1l-2,0l-1,-1l-3,0l-1,0l-1,1l-1,0l0,-2l0,-2l-1,-1l0,-1l-1,-1l-2,0l-1,-1l-1,-1l0,-3l0,-2l1,-1l0,-1l1,-1l1,-1l0,-1l1,-1l1,-1l0,-1l1,-1l1,0l-1,-1l1,0l1,0l2,0l1,-1l0,-1l-1,0l-1,0l-1,-1l-1,0l-1,-1l-2,0l-1,-1l1,0l2,0l1,1l1,0l1,1l2,0l1,-1l1,-1l-1,-1l1,0l1,1l2,0l1,-1l1,-1l1,-1l1,-1l0,-1l-1,0l-3,0l-1,-1l-1,-1l-1,0l-1,-1l2,0l1,1l1,0l1,1l1,0l2,0l2,-2l1,-1l-1,-1l-1,-1l1,0l2,0l1,1l1,0l1,0l1,1l0,-1l-1,-1l-1,-1l-1,-1l1,0l1,1l1,1l1,1l1,-1l1,0l1,-1l1,0l1,-1l1,-1l0,-1l-1,-1l-1,-1l0,-1l-1,0l0,-1l1,0l1,-1l1,-1l-2,0l1,-1l1,0l-1,-1l-2,0l0,-1l-1,-1l-3,0l-3,0l-1,-1l0,3l1,1l0,1l-1,1l-1,1l0,1l-1,1l-1,1l0,1l-1,1l-1,0l0,-1l-1,-1l-1,-1l0,-1l1,-1l0,-1l-1,-1l-1,-1l-1,-1l-1,0l-1,1l0,2l-1,1l-1,-1l0,-1l0,-1l-1,-1l1,-1l-1,0l-1,-1l-1,1l-1,-1l-1,0l1,-1l0,-1l1,0l1,0l-1,-1l-1,-1l-1,0l-1,-1l0,-1l0,-1.000004l-2,-2l-1,-1l-3,0l-1,1l1,1l-1,1l-1,-1l-1,1l0,1.000004l0,1l1,1l-1,1l0,1l1,1l1,1l1,0l1,0l1,0l1,1l1,0l-1,1l0,1l-1,1l1,0l1,0l0,1l-1,1l-1,1l-1,0l-1,0l0,1l-1,1l1,1l0,2l-1,-1l-1,0l-1,-1l1,-1l0,-2l-1,0l-1,0l-1,-1l-1,-1l-1,1l-1,0l0,1l1,1l1,0l1,0l0,1l-1,0l-1,0l-1,-1l-1,1l-1,0l-1,-1l-3,0l-1,1l-4,0l-1,-1l-1,-1l-2,0l-1,0l-1,-1l-1,-1l0,-1l-2,0l-2,0l-1,1l-2,0l-1,1l1,1l2,0l1,-1l1,0l1,-1l1,0l0,1l-1,0l-1,1l-1,0l-1,1l-1,1l1,1l0,1l1,1l-2,0l1,1l0,1l-1,-1l-1,-1l1,-1l-1,0l-1,-1l-1,-1l-1,0l-1,-1l-3,0l-1,1l-3,0l-6,0l-1,-1l1,-1l1,-1l2,0l-2,-2l-8,0l-2,-2l-3,0l-1,-1l-2,0l-1,-1l-1,-1l-2,0l-1,1l-1,1l-1,0l-2,0l1,-1l-1,-1l0,-1l-1,0l0,1l-1,1l0,1l-2,0l-1,-1l-1,-1l0,-1l-2,-2l-1,0l0,2l-2,2l-1,0l1,-1l-2,0l-1,1l-1,1l-1,0l-1,1l-2,0l-1,1l-1,1l-1,0l0,-1l2,-2l2,0l1,-1l1,0l1,-1l1,0l1,-1l-3,0l-1,1l-1,0l-1,1l-2,0l-1,1l-1,1l-1,0l0,-1l-1,-1l0,1l-2,0l-1,1l-1,1l1,0l1,1l-1,1l-1,-1l-4,0l-1,-1l-2,-2l-2,0l-1,-1l-3,0l0,41l2,0l1,-1l2,0l0,2l4,4l1,-1l1,0l0,-1l1,-1l3,0l0,1l6,6l0,2l4,4l1,0l2,1.999992l0,3l-1,1l0,2l1,1l-1,1l1,1l1,1l1,-1l1,-1l0,1l-1,0l0,1l1,0l1,1l0,1l1,0l-1,1l1,0l-1,1l0,1l1,0l0,1l1,0l1,0l1,1l-1,0l-1,0l0,1l0,1l1,1l1,-1l1,0l0,1l1,1l1,0l1,0l1,1l1,1l1,0l0,1l1,1l1,-1l0,1l1,1l66,0l4,0l1,-1l0,2l1,0l1,1l3,0l1,1l2,0l1,1l1,-1l1,1l3,0l0,-1l1,-1l2,-2l2,0l1,1l1,0l1,1l0,1l1,1l1,0l1,0l0,1l1,1l0,1l-1,1l1,1l1,0l0,1l1,1l1,0l1,0l2,0l1,1l2,0l1,1l0,1l1,1l1,1l0,1l-1,1l-1,-1l-1,0l0,-1l-1,-1l-1,0l1,1l0,2l-1,1l0,2l0,1l-1,1l-2,2l0,1l1,1l1,-1l1,0l1,-1l2,0l1,-1l2,0l1,-1l0,-1l-1,1l-1,-1l1,-1l1,-1l1,0l4,0l1,-1l0,0l3,-3l1,0l1,-1l1,-1l1,0l2,-2l2,-2l1,0l3,-3l1,-1l1,-1l1,-1l0,-1l1,-1l2,-2l1,0l1,-1l1,0l0,-1l1,-1l1,-1l1,0l1,-1l1,1l5,0l1,-1l1,1l2,0l4,0l1,-1l2,-2l1,-1l1,0l1,-1l2,0l1,0l1,-1l1,-1l0,-1l0,-1l-1,0l1,-1l0,-1l0,-1l-1,-1zm-10,36l1,0l1,-1l-1,0l-1,1z"],
    flag: "canada.png",
    data: {}
  };

  // Europe
  countryData['fi'] = {
    name: "Finland",
    svg: ["m534.174988,80.175003l-2,2l0,2l3,3l0,1l-1,0l0,4l2,2l0,1l-1,1l0,1l3,3l-9,9l-1,1l-2,0l-2,0l-1,1l-2,0l-1,1l-2,0l-1,0l-1,-1l0,0l-1,1l0,-1l0,-1l-1,0l-1,-1l-1,0l0,-2l1,-1l0,-1l-1,-1l0,-1l0,-2l0,-1l1,-1l0,-1l1,0l3,-3l1,0l1,-1l1,-1l1,-1l1,-1l0,-2l-1,-1l-1,-1l-1,0l0,-1l-1,-1l0,-1l1,-1l0,-1l-1,-1l0,-3l-2,-2l-2,0l-3,-3l1,-1l1,0l2,2l2,0l1,1l1,-1l1,1l2,0l2,-2l0,-3l1,-1l2,0l1,-1l1,0l2,2l1,0l0,1l-1,1l0,5l2,0l1,1l0,2zm-26,30l0,1l1,0l0,-1l-1,0zm3,1l-1,0l0,1l1,-1zm-4,-1l0,1l1,0l-1,-1zm6,2l0,-1l-1,0l1,1zm-1,-3l0,1l1,0l-1,-1zm1,0l-1,0l1,1l0,-1zm0,1l1,1l0,-1l-1,0zm0,2l1,-1l-1,0l0,1zm0,0l0,-1l-1,0l1,1zm-3,-1l0,1l1,-1l-1,0zm-1,-1l0,1l1,0l-1,-1zm-1,1l1,0l0,-1l-1,0l0,1zm1,1l0,-1l-1,0l1,1zm8,1l0,-1l-1,0l1,1zm-3,-2l1,0l0,-1l-1,0l0,1zm7,-21l-1,1l1,0l0,-1zm-9,9l0,-1l-1,0l1,1z"],
    flag: "finland.png",
    data: {}
  };
  countryData['es'] = {
    name: "Spain",
    svg: ["m462.174988,190.175003l-1,1l0,-1l1,0zm2,-2l1,1l1,0l1,-1l-1,-1l-1,0l-1,1zm4,-1l1,0l-1,-1l0,1zm-28,-13l-1,-1l-1,0l-1,1l0,1l-1,0l-1,0l-1,1l1,0l0,1l1,1l0,1l1,0l1,1l3,0l1,1l0,1l-1,1l0,2l-1,1l0,2l-1,0l1,1l0,4l-1,1l0,2l2,0l1,1l0,2l1,1l1,0l1,-1l1,-1l1,0l4,0l2,0l1,-1l0,-2l1,-1l1,-1l0,0l1,-1l1,-1l0,-1l-1,-1l0,-1l1,-1l1,-1l1,-1l0,-2l1,-1l1,0l2,0l1,-1l1,-1l0,-2l-3,0l-1,-1l-4,0l-1,-1l-2,0l-1,-1l-2,0l-1,-1l-2,0l-1,1l-1,0l-1,-1l-6,0zm-28,49.998993l0,1l1,-1l-1,0zm0,4l0,-1l1,0l-1,1zm2,-2l1,0l-1,1l0,-1zm2,-1l1,1l0,1l-1,-1l0,-1zm2,2l1,-1l0,2l-1,-1zm4,-1l0,-1l1,0l0,1l-1,0zm-1,0l1,1l-1,0l0,-1zm2,-2l0,-1l1,0l-1,1z"],
    flag: "spain.png",
    data: {}
  };
  countryData['lv'] = {
    name: "Latvia",
    svg: ["m512.174988,124.175003l1,-1l0,-1l1,-1l2,0l1,1l0,1l1,1l1,0l1,-1l0,-1l0,-2l3,0l1,1l1,0l1,1l2,0l1,1l0,3l1,1l-1,0l-1,1l-1,1l-2,0l-2,-2l-1,0l-1,-1l-8,0l-1,1l0,-3z"],
    flag: "latvia.png",
    data: {}
  };
  countryData['nl'] = {
    name: "Netherlands",
    svg: ["m469.174988,145.175003l-1,-1l1,-1l0,-2l1,-1l1,0l1,-1l1,-1l2,0l1,0l0,1l0,2l-1,0l1,1l-1,1l-1,1l-1,0l1,1l0,1l-1,1l0,1l-1,-1l0,-1l-1,-1l-2,0z"],
    flag: "netherlands.png",
    data: {}
  };
  countryData['ch'] = {
    name: "Switzerland",
    svg: ["m476.174988,166.175003l-1,-1l0,-1l-1,0l-1,1l0,-1l1,-1l1,-1l0,-1l1,-0.999008l1,0l1,-1l2,0l1,1l1,0l0,1l1,1l2,0l1,0l-1,1l-2,0l1,1l-3,0l0,2l-1,-1l0,-1l-1,0l0,1l-1,0l-1,1l-1,0l0,-0.000992z"],
    flag: "switzerland.png",
    data: {}
  };
  countryData['lu'] = {
    name: "Luxembourg",
    svg: ["m473.174988,153.175003l0,-3l1,0l0,1l1,1l0,1l-2,0z"],
    flag: "luxembourg.png",
    data: {}
  };
  countryData['ie'] = {
    name: "Ireland",
    svg: ["m433.174988,141.175003l1,-1l0,-1l0,-1l-1,0l-1,-1l1,0l1,-1l-2,0l0,-1l1,-1l2,0l1,1l0,-1l1,-1l-1,0l1,-1l0,-1l1,0l1,1l-1,1l0,2l1,0l1,-1l1,1l2,0l-1,1l0,1l1,1l0,2l-1,1l0,1l-1,1l-2,0l-1,1l-1,0l-1,1l-3,0l-1,-1l0,-1l-1,-1l2,0l1,-1l-1,0zm7,-10l-1,-1l0,1l0,1l1,-1z"],
    flag: "ireland.png",
    data: {}
  };
  countryData['se'] = {
    name: "Sweden",
    svg: ["m512.174988,74.175003l1,1l1,1l1,0l1,0l1,1l1,1l0,1l0,1l0,1l1,1l0,1l-1,1l0,1l1,1l0,1l-4,0l-1,1l0,1l-1,1l-1,1l0,1l1,1l-3,3l-1,1l-1,0l-1,1l-1,1l-1,1l-2,0l1,1l-1,0l-1,1l0,1l0,2l0,3l0,1l1,0l1,1l1,0l0,1l1,1l-1,1l-1,1l-1,0l-1,0l-1,-1l-1,0l-1,1l2,0l1,1l1,0l1,0l1,-1l0,1l-1,1l-1,0l-1,1l-1,0l-1,0l1,1l0,1l-1,1l0,1l0,1l0,1l0,1l-1,1l0,1l-1,1l-3,0l-1,1l0,2l-3,0l0,-2l-1,-1l1,-1l0,-1l-1,-1l-1,-1l-1,-1l0,-2l-1,-1l-1,-1l0,-2l1,0l1,0l0,-2l0,-1l1,-1l1,-1l0,-2l-1,-1l0,-1l1,0l1,-1l-1,-1l-1,-1l0,-2l0,-2l0,-3l1,-1l1,-1l1,0l2,0l0,-2l-1,-1l1,-1l1,-1l0,-4l1,0l1,-1l1,-1l1,-1l1,-1l0,-1l-1,-1l2,-2l1,-1l1,1l1,-1l0,-1l1,-1l1,0l1,1l1,0l1,0l0,-1l0,-1l1,-1l1,0m-7,51l1,-1l-1,0l0,1zm0,-3l0,2l2,0l0,-1l0,-1l1,-1l-1,0l-1,0l-1,1zm-4,6l1,-1l0,-1l0,-1l-1,0l0,3zm1,-5l0,1l1,-1l-1,0z"],
    flag: "sweden.png",
    data: {}
  };
  countryData['lt'] = {
    name: "Lithuania",
    svg: ["m512.174988,127.175003l1,-1l8,0l1,1l1,0l2,2l0,1l1,1l-1,0l-1,1l-1,1l0,1l1,1l-1,0l-1,0l-1,1l-3,0l-1,-1l-1,-1l0,-2l-1,-1l-3,0l0,-2l0,-2z"],
    flag: "lithuania.png",
    data: {}
  };
  countryData['by'] = {
    name: "Belarus",
    svg: ["m521.174988,136.175003l1,-1l2,0l-1,-1l0,-1l1,-1l1,-1l1,0l-1,-1l0,-1l2,0l2,-2l1,0l1,1l2,0l0,1l1,-1l1,0l2,2l0,4l4,4l-1,1l-1,0l-1,-1l-1,1l1,1l0,3l-2,0l0,3l-1,-1l-2,0l-1,-1l-1,1l-3,0l-1,-1l-7,0l-1,1l-1,0l0,-1l0,-2l-1,0l1,-1l1,0l0,-2l-1,-1l0,-2l3,0z"],
    flag: "belarus.png",
    data: {}
  };
  countryData['cz'] = {
    name: "Czech Republic",
    svg: ["m497.174988,148.175003l2,0l0,1l1,1l1,0l1,-1l1,0l0,1l1,1l1,0l1,1l-1,1l-1,1l-1,1l-1,0l-1,1l-1,-1l-2,0l-1,-1l-1,1l-1,1l-1,0l-1,-1l-1,-1l-1,0l-1,-1l0,-1l0,-1l-1,-1l1,-1l1,0l1,0l1,-1l1,-1l1,0l1,0l1,1z"],
    flag: "czech.png",
    data: {}
  };
  countryData['at'] = {
    name: "Austria",
    svg: ["m494.174988,156.175003l1,0l2,-2l1,1l2,0l1,1l0,3l-1,1l0,1l-1,1l-1,1l-1,0l-1,1l-2,0l-1,-1l-3,0l-1,-1l-6,0l-1,-1l0,-1l1,0l1,1l1,-1l1,0l1,0l1,0l1,-1l1,0l1,1l0,-1l0,-1l0,-1l1,0l0,-1l1,-1l1,1z"],
    flag: "austria.png",
    data: {}
  };
  countryData['sk'] = {
    name: "Slovakia",
    svg: ["m501.174988,156.175003l1,-1l1,0l3,-3l1,1l0,-1l2,2l0,-1l5,0l1,1l0,3l-1,0l-1,-1l-2,0l-1,1l-1,0l-1,1l-1,0l-1,1l-3,0l-1,-1l-1,0l0,-2z"],
    flag: "slovakia.png",
    data: {}
  };
  countryData['hu'] = {
    name: "Hungary",
    svg: ["m500.174988,161.175003l0,-1l1,-1l0,-1l1,0l1,1l3,0l1,-1l1,0l1,-1l1,0l1,-1l2,0l1,1l1,0l1,1l-1,1l-1,1l-1,1l0,2l-1,1l-1,1l-2,0l-2,0l-1,0l-1,1l-2,0l-1,-1l-1,-1l-1,-1l-1,-1l1,-1z"],
    flag: "hungary.png",
    data: {}
  };
  countryData['si'] = {
    name: "Slovenia",
    svg: ["m492.174988,166.175003l0,-2l1,-1l1,1l2,0l1,-1l1,0l1,-1l1,1l-1,1l-1,1l0,1l-1,1l-1,0l-1,-1l-1,1l-1,0l-1,-1z"],
    flag: "slovenia.png",
    data: {}
  };
  countryData['ba'] = {
    name: "Bosnia and Herzegovina",
    svg: ["m503.174988,176.175003l-3,-3l0,-1l-2,-2l0,-2l1,1l1,-1l3,0l1,1l2,0l1,0l0,1l-1,1l1,1l1,0l-1,1l1,1l-1,0l-1,1l-1,1l0,1l-1,0l-1,-1z"],
    flag: "bos_herz.png",
    data: {}
  };
  countryData['hr'] = {
    name: "Croatia",
    svg: ["m506.174988,165.175003l0,1l0,1l1,1l-1,1l-1,0l-1,0l-1,-1l-2,0l-1,0l-1,1l-1,-1l0,1l0,1l1,1l1,1l0,1l2,2l2,2l-1,0l-1,-1l0,0l-1,-1l-1,0l0,-1l-2,0l-1,-1l0,-1l-1,-1l0,-2l-1,-1l0,0l-1,0l0,2l-1,-1l0,-2l1,0l1,-1l1,1l1,0l1,-1l0,-1l2,-2l3,3l2,0l1,-1zm-12,5l1,0l0,-1l-1,1z"],
    flag: "croatia.png",
    data: {}
  };
  countryData['fr'] = {
    name: "France",
    svg: ["m454.174988,174.175003l1,-1l0,-2l0,-2l0,-2l1,1l0,-1l-2,-2l1,0l0,-1l-1,0l-1,-1l0,-2l0,0l-1,0l-1,-1l-1,-1l-2,0l-1,0l0,-1l0,-1l-1,-1l1,-1l1,1l1,-1l1,0l1,1l1,0l2,0l0,-2l0,-1l-1,-1l1,0l1,0l0,1l2,0l1,0l0,-1l1,-1l2,0l1,-1l0,-1l0,-1l1,-1l1,0l1,0l0,1l1,0l1,1l2,0l0,2l1,0l0,-1l2,2l1,1l2,0l1,1l3,0l0,1l-1,1l0,3.000992l-1,1l-1,0l-0.998993,0.999008l0,1l-2,2l0,1l1,-1l0.998993,0l0,1l1,1l-1,0l1,1l0,1l-1,0l0,1l1,1l-1,1l1,1l1,0l0,1l-1,1l-2,2l-1,0l-1,-1l-2,0l-1,-1l-1,0l-1,1l-1,1l0,2l-3,0l-1,-1l-2,0l-1,0l-1,0l-1,-1l-2,0l-1,-1l0,-1zm27,7l1,1l0,-1l0,-1l0,-1l1,-1l-1,-1l0,-1l-1,1l-1,1l0,1l0,1l0,1l1,0z"],
    flag: "france.png",
    data: {}
  };
  countryData['gb'] = {
    name: "United Kingdom",
    svg: ["m444.174988,133.175003l-1,-1l0,-1l-3,0l-1,1l-1,1l0,1l0,1l1,0l1,-1l1,1l2,0l1,-1l0,-1z",
          "m447.174988,134.175003l1,0l-1,1l-1,0l1,-1zm5,18l-1,1l0,-1l1,0zm0,1l0,1l1,0l-1,-1zm-8,-3l1,0l1,-1l1,0l1,1l1,0l1,-1l0,-1l1,0l1,1l1,0l1,-1l3,0l2,0l1,-1l1,0l1,-1l0,-1l-1,0l-1,0l1,-1l0,-1l1,-1l0,-2l-1,-1l-1,1l-1,0l-1,0l1,-1l0,-1l-1,-1l0,-1l-1,-1l0,-1l-1,-1l-1,0l-1,-1l0,-1l0,-2l-1,-1l-1,0l-1,0l-1,0l-1,-1l1,0l1,-1l1,-1l1,-1l0,-1l1,-1l0,-1l-1,0l-3,0l-1,0l-1,1l-1,-1l1,0l0,-1l1,-1l1,-1l0,-1l-3,0l-1,1l-1,0l-1,1l0,1l-1,1l1,1l0,1l-2,2l2,0l0,1l0,1l0,2l-1,1l1,0l1,-1l0,-1l0,-1l1,1l0,1l0,1l-1,1l0,1l1,1l1,-1l1,0l1,0l1,0l-1,1l0,1l1,1l1,0l-1,1l0,2l-2,0l-1,1l-1,1l1,0l1,0l0,1l-1,1l-1,1l-1,0l-1,1l1,0l2,0l1,1l1,0l1,0l1,-1l1,0l-1,1l-1,1l-2,0l-1,1l-1,1l-1,1l-1,1zm-2,-31l-1,1l0,1l-1,-1l0,-1l1,-1l1,0l0,1zm-3,2l1,0l-1,1l-1,0l1,-1zm12,-6l-1,0l1,-1l1,0l-1,1zm-1,1l-1,0l1,-1l0,1zm1,0l0,1l-1,0l1,-1zm-8,7l-1,-1l-1,0l0,-1l1,0l1,1l0,1zm-3,0l-1,0l0,-1l1,1zm15,-15l1,0l0,1l-1,-1zm0,1l0,3l-1,-1l0,-2l1,0zm-13,14l0,1l-1,0l1,-1zm0,2l1,0l0,1l0,1l-1,0l0,-1l0,-1zm0,3l1,1l-1,0l0,-1zm4,10l1,0l0,1l-1,-1z"],
    flag: "uk.png",
    data: {}
  };
  countryData['ee'] = {
    name: "Estonia",
    svg: ["m520.174988,120.175003l0,-1l-1,0l-1,-1l0,-2l1,-1l1,-1l2,0l1,-1l1,0l1,1l4,0l0,1l-1,1l0,6l-1,0l-1,0l-1,-1l-1,0l-1,-1l-2,0l-1,0zm-4,-4l-1,0l0,1l1,0l0,-1zm-1,3l1,0l1,-1l-1,-1l-1,1l-2,0l1,1l0,1l1,-1zm2,-1l1,-1l-1,0l0,1z"],
    flag: "estonia.png",
    data: {}
  };
  countryData['be'] = {
    name: "Belgium",
    svg: ["m465.174988,147.175003l0,-1l1,0l1,-1l1,-1l1,1l2,0l1,1l0,1l1,1l1,1l0,1l-1,0l0,3l-3,-3l0,1l-1,0l0,-2l-2,0l-1,-1l-1,0l0,-1z"],
    flag: "belgium.png",
    data: {}
  };
  countryData['pl'] = {
    name: "Poland",
    svg: ["m496.174988,145.175003l-1,-1l0,-3l-1,-1l0,-1l1,-1l-1,-1l0,-1l1,0l1,-1l3,0l3,-3l3,0l0,1l1,1l10,0l2,2l0,2l1,1l0,2l-1,0l-1,1l1,0l0,4l1,1l0,2l-1,1l-2,2l0,2l-1,0l-1,-1l-1,0l-2,0l-2,0l0,1l-2,-2l0,1l-1,-1l-1,-1l-1,0l-1,-1l0,-1l-1,0l-1,1l-1,0l-1,-1l0,-1l-2,0l-1,-1l0,-2z"],
    flag: "poland.png",
    data: {}
  };
  countryData['ua'] = {
    name: "Ukraine",
    svg: ["m515.174988,157.175003l0,-3l1,0l0,-2l3,-3l0,-2l-1,-1l0,-1l1,0l1,-1l7,0l1,1l3,0l1,-1l1,1l2,0l1,1l0,-3l4,0l1,-1l3,0l2,2l-1,0l0,2l2,0l1,1l0,2l2,0l1,1l1,-1l1,0l2,2l1,-1l2,2l2,0l0,2l-1,0l0,5l-2,0l-2,2l-1,1l-2,0l-1,1l-2,0l-1,1l-1,1l0,2l3,0l1,1l-1,1l-2,0l-1,0l-1,1l-1,1l-2,0l0,-1l0,-1l0,-1l-2,0l0,-1l1,-1l2,0l-1,-1l-3,0l-1,0l-1,-1l1,0l1,-1l-1,0l-1,0l-1,0l-1,1l-2,2l-1,1l-1,1l-1,0l-1,0l0,-1l1,-1l0,-1l1,-1l1,0l1,0l0,-1l-1,-1l0,-1l-1,-1l0,-1l-1,-1l-1,-1l-1,0l-3,0l-1,1l-2,0l-1,1l-1,0l-1,-1l-1,0l-3,0l-1,-1z"],
    flag: "ukraine.png",
    data: {}
  };
  countryData['dk'] = {
    name: "Denmark",
    svg: ["m484.174988,128.175003l1,0l0,1l-1,-1zm-44,-25l1,1l0,-1l0,-1l-1,0l0,1zm0,0l0,1l-1,-1l1,0zm1,-1l1,0l0,1l-1,-1zm-1,3l1,0l0,1l-1,-1zm56,26l0,1l-1,-1l0,-1l1,1zm-14,0l0,-1l1,-1l1,-1l0,-1l1,0l1,-1l-1,0l-1,-1l0,-1l1,-1l0,-1l-1,0l1,-1l-1,0l-1,1l-1,1l-1,0l-1,0l-1,1l0,1l1,0l1,-1l0,1l-1,1l-1,0l0,1l0,2l1,1l0,1l0,1l3,0l-1,-1zm3,-1l0,1l-1,0l-1,-1l1,-1l1,0l0,1zm1,-1l1,-1l1,1l0,-1l1,-1l1,1l0,1l-1,1l0,3l-1,-1l0,-1l-1,0l-1,-1l0,-1zm2,4l-1,0l-1,-1l1,0l1,1zm1,-2l1,0l0,1l-1,-1zm-3,-9l0,1l1,-1l-1,0z"],
    flag: "denmark.png",
    data: {}
  };
  countryData['me'] = {
    name: "Montenegro",
    svg: ["m507.174988,174.175003l0,1l1,0l1,1l1,1l-1,0l0,1l-1,0l0,-1l-1,1l0,1l0,1l-3,-3l3,-3z"],
    flag: "montenegro.png",
    data: {}
  };
  countryData['rs'] = {
    name: "Serbia",
    svg: ["m510.174988,166.175003l1,1l1,1l0,1l1,1l1,1l1,-1l0,1l1,1l-1,1l0,1l1,1l0,1l-1,1l0,1l-1,0l-1,1l0,-2l-1,-1l-1,-1l-1,1l0,1l-2,-2l-1,0l0,-1l1,0l-1,-1l1,-1l-1,0l-1,-1l1,-1l0,-1l-1,0l1,-1l-1,-1l0,-2l4,0l0,1z"],
    flag: "serbia.png",
    data: {}
  };
  countryData['ro'] = {
    name: "Romania",
    svg: ["m515.174988,171.175003l0,-1l-1,1l-2,-2l0,-1l-2,-2l0,-1l1,0l2,-2l0,-2l3,-3l4,0l1,1l1,0l1,-1l2,0l1,-1l1,1l0,1l1,1l0,1l1,1l0,2l0,1c0,0 0,1 0,1l1,1l0,1l2,0l1,-1l0,1l0,1l-1,1l0,-1l-1,1l0,3l-1,0l-2,0l-1,-1l-1,0l-1,0l-1,1l-1,1l-1,0l-1,-1l-3,0l-2,0l0,-1l-1,-1z"],
    flag: "romania.png",
    data: {}
  };
  countryData['md'] = {
    name: "Republic of Moldova",
    svg: ["m526.174988,157.175003l4,0l2,2l0,1l1,1l0,1l1,1l0,1l-2,0l-1,1l0,1l-1,1l-1,-1l0,-4l-1,-1l0,-1l-1,-1l0,-1l-1,-1z"],
    flag: "moldova.png",
    data: {}
  };
  countryData['bg'] = {
    name: "Bulgaria",
    svg: ["m531.174988,173.175003l0,1l-1,1l-1,0l0,1l0,1l-1,1l1,1l0,1l-1,0l-1,-1l-1,1l-1,0l-1,1l0,1l-1,0l-2,0l-1,-1l-1,0l-1,1l-2,0l0,-1l0,-1l-1,-1l0,-2l1,-1l0,-1l-1,-1l0,-1l1,-1l0,1l5,0l1,1l1,0l2,-2l2,0l1,1l3,0z"],
    flag: "bulgaria.png",
    data: {}
  };
  countryData['al'] = {
    name: "Albania",
    svg: ["m507.174988,178.175003l1,-1l0,1l1,0l1,1l0,2l0,1l1,1l0,2l-1,1l0,1l-1,1l0,-1l-1,-1l-1,-1l0,-3l1,-1l-1,-1l0,-2z"],
    flag: "albania.png",
    data: {}
  };
  countryData['xk'] = {
    name: "Kosovo",
    svg: ["m509.174988,178.175003l0,-1l1,0l0,-1l1,-1l2,2l0,2l-1,0l-1,0l0,1l-1,0l0,-1l-1,-1z"],
    flag: "kosovo.png",
    data: {}
  };
  countryData['mk'] = {
    name: "Macedonia",
    svg: ["m511.174988,183.175003l-1,-1l0,-2l1,0l0,-1l2,0l1,-1l1,0l0,1l1,1l0,2l-1,0l-1,1l-1,0l-1,1l-1,0l0,-1z"],
    flag: "macedonia.png",
    data: {}
  };
  countryData['gr'] = {
    name: "Greece",
    svg: ["m530.174988,199.175003l0,1l-1,0l0,-1l1,0zm-12,3l0,1l2,0l1,1l1,0l2,0l1,-1l-1,0l-1,-1l-1,0l-3,0l-1,0zm9,1l1,-1l-1,-1l0,2zm-11,-12l1,0l1,1l1,0l1,1l0,-1l-1,-1l-1,0l-1,-1l-1,0l0,-1l1,0l0,-1l-1,-1l-1,-1l0,-1l1,0l1,1l1,1l1,0l-1,-1l0,0l1,0l1,0l-1,-1l-1,-1l1,0l1,-1l1,1l1,-1l1,1l1,0l1,-1l0,-1l1,-1l-1,0l0,-1l-1,1l0,1l-3,0l-1,-1l-1,0l-1,1l-3,0l-1,1l-1,0l-1,1l-1,0l0,1l-1,1l0,1l-1,1l1,1l1,1l1,0l-1,1l1,1l3,0l1,1l1,0l-1,1l-1,-1l-1,0l-1,0l-1,0l0,1l0,1l1,1l0,1l1,1l0,-1l1,1l0,1l1,-1l1,1l0,-1l-1,-1l0,-1l-1,-1l1,0l1,1l1,0l0,-1l-1,0l0,-1l1,0l1,1l0,-1l-1,-1l-2,-2zm0,8l0,1l1,-1l-1,0zm-5,-4l0,-1l-1,0l1,1zm7,-6l0,1l1,0l-1,-1zm2,1l0,1l1,-1l-1,0zm-10,2l0,1l1,0l-1,-1zm10,3l0,-1l-1,1l1,0zm0,1l0,1l1,-1l-1,0zm2,1l1,0l0,-1l-1,1zm1,1l1,0l1,-1l-1,0l-1,1zm-1,-1l0,1l1,0l-1,-1zm0,2l1,0l0,-1l-1,1zm3,-1l0,1l1,-1l-1,0zm-1,-3l1,0l0,-1l-1,1zm-2,0l0,1l1,-1l-1,0zm-1,-9l1,1l1,0l-1,-1l-1,0zm3,1l0,-1l-1,0l1,1zm-2,-2l1,0l0,-1l-1,1zm2,8l1,-1l-1,-1l0,2zm1,-3l0,-1l-1,1l1,0zm-5,8.998993l1,-1l-1,0l0,1zm-12,-12l0,1l1,0l-1,-1zm13,11l0,-1l-1,0l1,1zm0,-2.998993l0,1l1,-1l-1,0zm5,1l0,1l1,0l-1,-1zm-16,-4l1,-1l-1,0l0,1zm11,-7l0,-1l-1,0l1,1zm0,8l0,1l1,1l0,-1l-1,-1zm5,5l1,0l0,-1l-1,1z"],
    flag: "greece.png",
    data: {}
  };
  countryData['is'] = {
    name: "Iceland",
    svg: ["m407.174988,97.175003l-1,-1l-1,0l-1,-1l-1,1l-2,0l-1,-1l0,-1l1,1l1,0l0,-1l0,-1l-1,-1l-2,0l-1,0l-1,-1l2,0l1,0l2,0l1,-1l-1,0l-1,0l1,-1l1,0l-1,-1l-1,1l-1,-1l-1,0l-1,1l-1,0l-1,-1l1,0l0,-1l1,0l0,-1l1,0l1,1l1,0l0,-1l-1,0l0,-1l-1,0l1,-1l1,0l1,1l1,0l1,1l0,1l-1,1l1,1l1,-1l1,0l1,-1l-1,-1l1,0l1,1l1,-1l1,0l1,0l1,1l0,-1l1,0l1,0l1,0l1,0l0,-1l0,-1l1,0l1,1l1,0l2,0l-1,1l0,1l1,0l1,1l1,1l0,1l0,1l-1,1l-2,2l-2,0l-1,1l-1,0l-1,1l-1,0l-2,2l-2,0l-1,-1l-2,0z"],
    flag: "iceland.png",
    data: {}
  };
  countryData['no'] = {
    name: "Norway",
    svg: ["m486.174988,115.175003l-1,-1l0,-1l-1,1l0,1l-1,0l-1,1l-4,4l-3,0l-3,-3l0,-1l1,0l1,0l-1,-1l1,-1l-1,0l-1,1l-1,0l0,-1l1,-1l-1,0l0,-1l1,0l1,-1l-1,0l-1,-1l1,-1l-1,0l0,-1l3,0l1,-1l1,1l1,-1l0,-1l-1,1l-1,-1l-1,1l-1,0l-1,0l-1,0l0,-1l1,0l-1,-1l-1,0l1,-1l1,0l-1,-1l1,-1l1,0l1,-1l1,0l2,0l1,0l1,-1l-3,0l-1,0l1,-1l2,0l1,0l1,1l0,-1l-1,-1l1,0l0,-1l1,0l0,1l1,-1l1,0l1,1l1,-1l1,0l1,-1l0,-1l0,-1l-1,1l0,1l-1,0l-1,1l-1,-1l0,-1l1,-1l1,-1l1,0l1,-1l1,0l-1,-1l1,0l1,-1l1,1l1,-1l0,-1l-1,1l-1,-1l1,-1l1,-1l0,-1l2,0l1,-1l-1,0l-2,0l1,-1l1,-1l-1,0l1,-1l1,0l1,0l1,0l1,-1l-3,0l1,-1l1,0l1,0l1,0l-1,-1l-1,0l-1,0l1,-1l2,0l-1,-1l1,0l1,1l1,-1l-1,0l1,-1l2,0l1,-1l-2,0l1,-1l1,-1l1,-1l0,-1l1,0l0,1l1,0l0,-1l1,-1l1,-1l0,1l1,-1l1,0l-1,1l0,1l0,1l1,-1l0,-1l1,-1l2,0l1,0l-1,-1l-1,-1l1,0l1,1l1,-1l1,0l0,1l1,1l0,-1l1,-1l1,0l1,-1l0,-1l0,-1l1,0l1,1l1,0l-1,1l0,1l-1,1l1,0l1,-1l1,-1l0,-1l1,-1l1,0l0,1l-1,1l0,1l1,0l1,-1l1,-1l0,-1l1,0l1,0l-1,1l0,1l0,1l1,0l0,-1l1,-1l1,0l1,0l1,0l1,1l1,0l1,1l-1,1l-1,0l-4,0l1,1l1,0l1,1l1,-1l1,1l1,0l0,1l-2,0l-2,2l-2,0l0,-1l1,-1l0,-1l-1,0l-2,-2l-1,0l-1,1l-2,0l-1,1l0,3l-2,2l-2,0l-1,-1l-1,1l-1,-1l-2,0l-2,-2l-1,0l-1,1l-1,0l-1,1l0,2l-2,0l-1,-1l-1,0l-1,1l0,1l-1,1l-1,-1l-3,3l1,1l0,1l-4,4l-1,0l0,4l-2,2l1,1l0,2l-3,0l-2,2l0,7l2,2l-1,1l-1,0l0,1l1,1l0,2l-2,2l0,3l-1,0l0,-1l-1,0zm2,-28l0,1l1,0l-1,-1zm2,-2l-1,1l1,0l0,-1zm1,-8l-1,1l1,0l0,-1zm1,2l2,-2l-1,-1l-1,1l0,2zm3,-3l0,1l1,-1l1,0l1,0l1,-1l1,-1l-1,0l-1,1l0,-2l1,-1l-1,0l-1,1l-1,0l-1,1l0,1l1,0l-1,1zm9,-5l-2,0l-1,1l0,1l1,0l0,-1l1,0l1,-1zm10,-6l0,1l1,0l1,0l1,-1l-1,0l-2,0zm-4,2l0,1l1,0l0,-1l-1,0zm-2,0l0,1l1,0l-1,-1zm-2,1l-1,1l-1,0l0,1l1,0l1,0l1,-1l1,0l-1,-1l0,-1l-1,1zm17,-5.000004l0,1.000004l1,0l-1,-1.000004zm-4,3.000004l0,-1l-1,0l1,1zm-2,1l1,-1l-1,0l0,1zm-32,25l1,0l1,-1l-2,0l0,1zm-6,5l1,-1l-1,0l0,1zm-1,0l0,1l1,0l-1,-1zm-8,11l1,-1l-1,0l0,1zm1,2l-1,0l1,1l0,-1zm67,-91.000004l1,1l1,0l2,0l1,-1l0,-1l-1,1l-4,0zm-26.996002,2.003l-1.003998,1.003l-2,0l1,1.007l7.013977,0l-1.013977,1.014l5,0l1.026978,-1.027l1.973022,0l2,-2l1,0l1,-1l0,-1l-2,0l-1,0l-1,0l-1,-1l-1,0l-1,1l0,-1l-1,0l-1,1l-1,0l0,-2l-1,0l-1,1l0,1l0,1l-1,-1l-1,0l-1,-1l0,0l-1,0l-1,-1l-2,0l0,1l1,0l-1,1l-1,-1l0,1l-1,0l-3,0l1,1l1,0l-1,1l7.003998,0.003zm-6.003998,-2.003l1,-1l-1,0l-1,0l1,1zm20,7l1,1l1,0l-1,-1l-1,0zm3,-1l1,1l5,0l-1,-1l-5,0zm-17,4l1,1l1,0l0,1l-1,1l-1,1l3,0l1,-1l1,0l0,1l-1,1l1,0l1,-1l1,0l1,-1l1,0l1,-1l-3,0l-1,-1l0,-1l-2,0l-1,-1l0,-1l-3,0l-1,1l1,1zm1,-3l-1,-1l-1,-1l-1,0l-1,1l0,-1l-1,0l-1,0l0,-1l-1,-1l-1,0l-1,1l0,-1l0,-1l-1,-1l-1,0l-1,0l-1,0l-1,1l1,1l0,2l1,1l-1,0l-1,-1l-1,-1l-1,-1l0,-1l-1,0l-1,1l0,1l-1,0l-1,-1l-2,0l1,-1l2,0l-1,-1l-2,0l-1,1l-1,0l-1,0l-1,1l0,-1l-1,0l0,1l1,1l0,1l1,0l1,-1l1,0l-1,1l1,1l1,0l-1,1l-1,-1l-1,0l1,1l3,3l3,0l1,-1l0,-1l1,-1l0,1l1,0l0,1l1,0l1,-1l1,0l1,0l-1,1l-1,0l-1,1l-1,0l0,0l-1,0l-1,1l-1,0l-1,0l0,1l1,0l2,0l1,0l1,0l1,0l0,0l-1,1l-2,0l-2,0l0,1l1,1l1,1l1,0l1,1l1,1l2,0l0,-1l1,-1l0,0l0,-1l1,-1l1,0l1,-1l0,-2l1,0l0,-1l2,-2l2,0l1,0l1,-1zm-6,22l1,0l0,-1l-1,0l0,1zm-21,-21.000999l1,0l2,2l1,0l-1,-1l-1,-1l-1,-1l-1,0l0,1zm-49,36.000999l-1,1.000004l0,1l1,0l1,-1l1,0l0,-1.000004l-2,0z"],
    flag: "norway.png",
    data: {}
  };
  countryData['pt'] = {
    name: "Portugal",
    svg: ["m436.174988,179.175003l1,0l1,1l2,0l1,0l1,1l0,1l-1,1l0,1l0,1l0,0l-1,1l0,2l-1,0l1,1l0,2l0,1l0,1l-1,1l0,2l-1,1l-3,0l0,-1l1,-1l0,-2l-1,0l0,-1l-1,-1l0,-2l1,-1l0,-2l1,-1l0,-4l-1,-1l1,-1zm-22,32l1,1l1,0l-1,-1l-1,0zm-20,-14l1,0l0,-1l-1,1zm0,-3l-1,1l-1,-1l2,0zm-5,-3l1,0l-1,1l0,-1zm-2,0l1,0l-1,1l0,-1zm-1,1l-1,0l0,-1l1,1zm-8,-3l0,-1l1,0l-1,1z"],
    flag: "portugal.png",
    data: {}
  };
  countryData['it'] = {
    name: "Italy",
    svg: ["m484.174988,177.175003l-1,-1l1,0l0,1zm9,6l0,1l1,0l-1,-1zm-13,0l-1,0l0,2l1,1l0,2l-1,1l0,1l1,1l1,-1l1,-1l1,0l0,-2l-1,-1l1,-1l0,-1l-1,-1l-1,-1l-1,1zm-3,-17l1,-1l1,0l0,-1l1,0l0,1l1,1l0,-2l3,0l-1,-1l2,0l1,-1l2,0l1,0l1,1l2,0l1,0l-1,1l0,1l0,1l-1,1l-1,0l-1,1l1,1l-1,1l0,1l4,4l0,2l3,3l3,0l0,1l-1,1l2,0l1,1l1,0l3,3l0,1l-1,-1l-1,0l-1,-1l-1,0l-1,1l0,2l1,0l1,1l0,1l-1,0l-1,1l0,1l-2,2l0,-2l1,-1l0,-3l-1,-1l-1,0l-1,-1l0,-1l-3,-3l-2,0l-2,-2l-4,-4l0,-1l-1,-1l0,-2l-2,0l-1,-1l-1,0l-2,2l-1,0l0,-1l-1,0l-1,-1l1,-1l-1,-1l0,-1l1,0l0,-1l-1,-1l1,0l1,0zm20,27l1,-1l0,1l-1,1l-1,1l1,1l0,1l-1,1l-1,-1l-1,0l-1,-1l-1,0l-1,-1l-1,0l0,-1l0,-1l1,0l1,0l1,0l1,1l1,-1l1,0l1,0zm-8,4l-1,0l0,1l1,-1z"],
    flag: "italy.png",
    data: {}
  };
  countryData['de'] = {
    name: "Germany",
    svg: ["m487.174988,134.175003l-1,0l0,-1l1,1zm7,13l2,0l0,-2l-1,-1l0,-1l0,-2l-1,-1l0,-1l1,-1l-1,-1l0,-1l-1,0l0,-1l-1,0l-1,-1l-1,0l-1,0l-1,1l-1,1l-1,0l0,-2l-1,0l-1,0l-1,-1l0,-1l-3,0l1,1l0,1l-1,0l1,1l0,1l-1,1l-1,0l-1,0l-2,0l0,1l0,3l-1,0l1,1l-2,2l-1,0l1,1l0,1l-1,1l0,1l1,1l0,2l1,1l0,1l1,1l3,0l0,1l-1,1l0,3.000992l2,0l1,1l2,0l1,1l1,-1l3,0l1,-1l1,0l1,1l0,-3l1,0l0,-1l1,-1l-1,-1l-1,0l-1,-1l0,-2l-1,-1l1,-1l2,0l1,-1l1,-1.000992m-2,-14l1,1l-1,0l0,-1z"],
    flag: "germany.png",
    data: {}
  };

  // Africa
  countryData['ma'] = {
    name: "Morocco",
    svg: ["m443.174988,201.175003l2,0l2,2l6,0l0,6l2,2l0,2l-4,0l-8,8l-3,0l-4,4l0,5l-5,0l-4,4l0,2l-5,5l0,5l-2,2l-5,0l0,-3l2,-2l0,-3l3,-3l0,-3l4,-4l0,-2l1,-1l2,0l6,-6l0,-7l10,-10l0,-3z"],
    flag: "morocco.png",
    data: {}
  };
  countryData['eh'] = {
    name: "Western Sahara",
    svg: ["m436.174988,230.175003l0,3.002991l-7,0l-0.997986,0.999008l0,6.998001l-3.001007,3.000992l-0.001007,3.999008l-1,1l-8,0l-1,-1l5,0l2,-1.972l0,-5.028l5,-5l0.014008,-2l3.992981,-3.992996l4.993011,0"],
    flag: "west_sahara.png",
    data: {}
  };
  countryData['gm'] = {
    name: "The Gambia",
    svg: ["m416.174988,272.174988l5,0l1,1l1,0l-1,1l-1,-1l-2,0l-1,1l-2,0l1,-1l-1,-1z"],
    flag: "gambia.png",
    data: {}
  };
  countryData['sn'] = {
    name: "Senegal",
    svg: ["m414.174988,269.174988l2,-2l0,-2l2,-2l4,0l1,1l0,1l4,4l0,2l1,1l0,2l1,1l0,1l-4,0l-1,-1l-5,0l-1,1l-2,0l-1,-1l1,-1l2,0l1,-1l2,0l1,1l1,-1l-1,0l-1,-1l-5,0l0,-1l-2,-2z"],
    flag: "senegal.png",
    data: {}
  };
  countryData['gn'] = {
    name: "Guinea",
    svg: ["m429.174988,277.174988l4,0l1,-1l1,0l1,1l0,2l1,1l0,2l1,1l-1,1l0,1l1,1l0,3l-1,1l0,1l-1,0l-1,1l-1,-1l0,-2l-1,-1l-2,0l0,-2l-2,-2l-3,0l0,1l-1,1l-5,-5l0,-1l2,-2l1,0l0,-3l1,0l1,1l4,0l0,1z"],
    flag: "guinea.png",
    data: {}
  };
  countryData['lr'] = {
    name: "Liberia",
    svg: ["m434.174988,291.174988l1,1l1,-1l1,0l0,4l1,0l1,1l0,5l-1,0l-3,-3l-1,0l-5,-5l2,-2l0,-1l1,-1l0,-1l1,0l1,1l0,2z"],
    flag: "liberia.png",
    data: {}
  };
  countryData['ci'] = {
    name: "Cote D'Ivoire",
    svg: ["m438.174988,283.174988l3,0l0,-1l1,0l0,1l1,0l1,-1l3,3l1,-1l2,0l1,1l0,7l-1,1l0,3l1,1l0,2l-1,-1l-6,0l-1,1l-1,0l-2,2l-1,0l0,-5l-1,-1l-1,0l0,-5l1,-1l0,-3l-1,-1l0,-1l1,-1z"],
    flag: "ivory_coast.png",
    data: {}
  };
  countryData['gh'] = {
    name: "Ghana",
    svg: ["m451.174988,281.174988l5,0l1,-1l1,0l0,2l1,1l0,5l1,0l0,6l1,1l-2,2l-2,0l-2,2l-2,0l0,1l-1,-1l-1,0l0,-2l-1,-1l0,-3l1,-1l0,-11z"],
    flag: "ghana.png",
    data: {}
  };
  countryData['bf'] = {
    name: "Burkina Faso",
    svg: ["m444.174988,282.174988l0,-2l1,-1l0,-2l1,0l1,-1l0,-2l1,-1l1,1l1,-1l0,-1l1,0l2,-2l2,0l0,-1l1,-1l2,0l1,1l0,3l3,3l1,0l1,1l-1,1l1,1l-1,1l-2,0l-1,1l-3,0l-1,1l-5,0l0,4l-1,-1l-2,0l-1,1l-3,-3z"],
    flag: "burkina_faso.png",
    data: {}
  };
  countryData['tg'] = {
    name: "Togo",
    svg: ["m460.174988,294.174988l0,-6l-1,0l0,-5l-1,-1l0,-2l2,0c0,0 0,2 0,2.001007s1,0.998993 1,0.998993l0,2l1,1l0,9l-1,0l-1,-1z"],
    flag: "togo.png",
    data: {}
  };
  countryData['bj'] = {
    name: "Benin",
    svg: ["m464.174988,276.174988l1,0l2,2l0,2l1,1l0,1l-1,1l0,1l-2,2l0,9l-3,0l0,-9l-1,-1l0,-2l-1,-0.998993l0,-2.001007l1,-1l2,0l1,-1l-1,-1l1,-1z"],
    flag: "benin.png",
    data: {}
  };
  countryData['ml'] = {
    name: "Mali",
    svg: ["m444.174988,255.175003l-2,-2l0,-16l2,0l4,0l13,13l1,1l1,0l2,2l1,0l0,2l3,0l0,9.999008l-2,2l-5,0l-1,1l-5,0l-1,1l0,1l-2,0l-2,2l-1,0l0,1l-1,1l-1,-1l-1,1l0,2l-1,1l-1,0l0,2l-1,1l0,2l-1,1l-1,0l0,-1l-1,0l0,1l-3,0l-1,-1l0,-2l-1,-1l0,-2l-1,-1l-1,0l-1,1l-4,0l0,-2l-1,-1l0,-2l-1,-1l0,-2l1,-1l0,-2l2,2l1,-1l3,0l1,-1l9,0l0,-10.999008z"],
    flag: "mali.png",
    data: {}
  };
  countryData['cv'] = {
    name: "Cape Verde",
    svg: ["m395.174988,261.174988l0,1l-1,0l0,-1l1,0zm0,2l-1,0l0,1l1,-1zm2,1l0,-1l-1,0l1,1zm2,-1l1,0l0,-1l-1,1zm1,1l0,1l1,0l-1,-1zm-1,3l0,1l1,-1l-1,0zm-1,1l0,-1l-1,0l1,1zm-2,0l-1,0l1,1l0,-1z"],
    flag: "cape_verde.png",
    data: {}
  };
  countryData['gw'] = {
    name: "Guinea-Bissau",
    svg: ["m419.174988,280.174988l0,-1l-3,-3l2,0l1,-1l4,0l0,3l-1,0l-2,2l0,1l-1,-1zm-2,1l0,-1l-1,0l1,1zm0,-2l1,0l-1,-1l0,1z"],
    flag: "guinea_bissau.png",
    data: {}
  };
  countryData['sl'] = {
    name: "Sierra Leone",
    svg: ["m428.174988,292.174988l-1,0l0,-1l-2,-2l0,-3l1,-1l0,-1l3,0l2,2l0,2l1,0l0,1l-1,1l0,1l-2,2l-1,-1zm-2,0l0,-1l-1,0l1,1z"],
    flag: "sierra_leone.png",
    data: {}
  };
  countryData['mr'] = {
    name: "Mauritania",
    svg: ["m436.174988,229.175003l8,8l-2,0l0,16l2,2l0,10.999985l-9,0l-1,1l-3,0l-1,1l-2,-2l0,2l-1,1l-4,-4l0,-1l-1,-1l-4,0l-2,2l0,-3l1,-1l0,-5l-1,-0.998993l0,-1l1,-1l0,-2l-2,-2l0,-1l1,1l8,0l1,-1l0,-4l3,-3l0,-7l1,-1l7,0l0,-4.000992zm-21,25l1,-1l-1,0l0,1z"],
    flag: "mauritania.png",
    data: {}
  };
  countryData['ne'] = {
    name: "Niger",
    svg: ["m469.174988,255.175995l3,0l6,-6.001007l2,0l8,-8l1,1l2,0l2,2l1,0l1,-1l1,0l0,4l2,2l0,14l-6,6l0,3l-2,2l-1,0l-1,-1l-4,0l-2,2l-2,0l-2,-2l-1,1l-2,0l-2,-2l-4,0l-1,1l0,2l-1,1l0,2l-2,-1.998993l-1,0l-1,-1l-1,0l-3,-3l0,-3.001007l-1,-0.998993l3,0l1,-1l5,0l2,-2l0,-10z"],
    flag: "niger.png",
    data: {}
  };
  countryData['td'] = {
    name: "Chad",
    svg: ["m496.174988,243.175003l1,0l1,-1l2,0l19,12l0,11.999985l-3,0l0,3l-1,0l0,2l-1,1l0,3l1,1l0,3l1,1l0,1l-2,0l-3,3l0,1l-2,2l-3,0l1,1l-2,2l-3,0l-1,1l-1,-1l-1,1l-2,0l0,-3l-3,-3l0,-1l3,0l0,-2l-1,-1l0,-5l-4,-4l0,-3l6,-6l0,-13.999985l-2,-2l0,-4z"],
    flag: "chad.png",
    data: {}
  };
  countryData['ng'] = {
    name: "Nigeria",
    svg: ["m465.174988,286.174988l2,-2l0,-1l1,-1l0,-1l-1,-1l0,-4l1,-1l0,-2l1,-1l4,0l2,2l2,0l1,-1l2,2l2,0l2,-2l4,0l1,1l1,0l2,-2l2,2l0,2l1,1l0,2l-3,3l0,3l-1,0l0,2l-3,3l0,3l-2,2l0,-1l-1,-1l-1,0l-4,4l0,2l-1,0l0,1l-3,0l-1,1l-1,0l-2,-2l0,-2l-1,0l-2,-2l-4,0l0,-9z"],
    flag: "nigeria.png",
    data: {}
  };
  countryData['st'] = {
    name: "Sao Tome and Principe",
    svg: ["m477.174988,310.174988l1,-1l0,1l-1,0zm-1,3l-1,1l1,0l1,-1l-1,0z"],
    flag: "sao_tome_principe.png",
    data: {}
  };
  countryData['cm'] = {
    name: "Cameroon",
    svg: ["m494.174988,274.174988l0,2l1,1l0,2l-3,3l0,3l-1,0l0,2l-3,3l0,3l-2,2l0,-1l-1,-1l-1,0l-4,4l0,3l2,2l1,0l0,5l9,0l0,1l4,0l1,1l2,0l0,-4l-3,-3l0,-2l-1,-1l0,-6l2,-2l0,-3l-3,-3l0,-1l3,0l0,-2l-1,-1l0,-5l-2,-2z"],
    flag: "cameroon.png",
    data: {}
  };
  countryData['gq'] = {
    name: "Equatorial Guinea",
    svg: ["m481.174988,303.174988l0,1l-1,1l-1,0l1,-1l0,-1l1,0zm6,8l0,-4l-4,0l0,3l-1,1l5,0z"],
    flag: "equatorial_guinea.png",
    data: {}
  };
  countryData['ga'] = {
    name: "Gabon",
    svg: ["m486.174988,326.174988l-3,-3l0,-2l-1,-1l0,-2l-1,0l-1,-1l2,-2l0,-1l1,0l-1,-1l0,-2l5,0l0,-4l5,0l0,3l3,0l0,3l-2,2l2,0l0,5l-2,2l0,-1l-5,0l0,4l-1,1l-1,0z"],
    flag: "gabon.png",
    data: {}
  };
  countryData['cf'] = {
    name: "Central African Republic",
    svg: ["m499.174988,305.174988l-3,-3l0,-2l-1,-1l0,-6l2,-2l2,0l1,-1l1,1l1,-1l3,0l2,-2l-1,-1l3,0l2,-2l0,-1l3,-3l2,0l2,2l0,4l2,2l1,0l1,1l0,1l3,3l0,1l2,2l0,2l-3,0l-1,-1l-1,1l-2,0l-1,1l-3,0l-1,1l-4,0l-2,-2l-2,0l-2,2l0,2l-5,0l0,3l-1,1l0,-2z"],
    flag: "central_african.png",
    data: {}
  };
  countryData['cg'] = {
    name: "Congo",
    svg: ["m487.174988,326.174988l1,-1l0,-4l5,0l0,1l2,-2l0,-5l-2,0l2,-2l0,-3l-3,0l0,-2l4,0l1,1l2,0l0,-2l1,-1l0,-3l5,0l0,3l-1,1l0,3l-1,1l0,5l-2,2l0,1l-2,2l0,4l-4,4l0,-1l-2,0l-1,1l-1,-1l-1,0l-1,1l-1,0l0,-1l-2,-2l1,0z"],
    flag: "congo.png",
    data: {}
  };
  countryData['ao'] = {
    name: "Angola",
    svg: ["m489.174988,332.174988l0,-2l-1,-1l1,0l1,-1l1,0l0,1l-1,1l0,2l-1,0z",
          "m491.174988,332.174988l9,0l0,4l3,3l4,0l0,-3l3,0l0,1l4,0l0,11l5,0l0,6l-5,0l0,12l3,3l-11,0l-1,-1l-12,0l-1,-1l-4,0l0,-5l2,-2l0,-5l3,-3l0,-5l-1,-1l0,-3l-1,-1l1,-1l0,-3l-2,-2l0,-3l1,-1z"],
    flag: "angola.png",
    data: {}
  };
  countryData['cd'] = {
    name: "Dem. Republic of the Congo",
    svg: ["m490.174988,333.174988l-1,-1l1,0l0,-2l1,-1l0,-1l1,1l1,-1l2,0l0,1l4,-4l0,-4l2,-2l0,-1l2,-2l0,-5l1,-1l0,-3l1,-1l0,-5l2,-2l2,0l2,2l4,0l1,-1l3,0l1,-1l2,0l1,-1l1,1l3,0l2,2l3,0l1,-1l3,3l0,4l1,1l0,1l-3,3l0,3l-1,1l0,3l-2,2l0,1l1,1l0,7l1,1l0,3l2,2l0,2l1,1l-1,1l-4,0l0,2l-1,1l1,1l0,4l-1,1l0,1l2,2l2,0l0,4l-2,0l-1,-1l0,-1l-4,-4l-1,1l-2,0l-2,-2l-2,0l-1,-1l-5,0l0,-11l-4,0l0,-1l-3,0l0,3l-4,0l-3,-3l0,-4l-9,0l-1,1z"],
    flag: "congo_dr.png",
    data: {}
  };
  countryData['na'] = {
    name: "Namibia",
    svg: ["m488.174988,371.174988l0,-4l4,0l1,1l12,0l1,1l11,0l1,-1l3,0l1,1l-1,1l-2,0l-1,1l-1,-1l-6,0l0,13l-2,0l0,20l-2,2l-3,0l-3,-3l0,1l-1,1l-3,-3l0,-3l-1,-1l0,-6l-1,-1l0,-7l-3,-3l0,-3l-2,-2l0,-2l-2,-2z"],
    flag: "namibia.png",
    data: {}
  };
  countryData['dz'] = {
    name: "Algeria",
    svg: ["m453.174988,203.175003l2,0l2,-2l1,0l3,-3l4,0l1,-1l4,0l1,1l2,0l1,-1l6,0l-1,1l0,7l-2,2l0,2l4,4l0,4l1,1l0,2l0,1l1,1l0,10l-1,0l0,3l3,3l1,0l2,2l0,1l-8,8l-2,0l-6,6l-6,0l0,-1.999008l-1,0l-2,-2l-1,0l-14,-14l-4,0l-8,-8l0,-4l4,-4l3,0l8,-8l4,0l0,-2l-2,-2l0,-6.000992z"],
    flag: "algeria.png",
    data: {}
  };
  countryData['tn'] = {
    name: "Tunisia",
    svg: ["m487.174988,204.175003l0,1l-1,0l1,-1zm-3,14l0,-3l3,-3l0,-2l-2,-2l-2,0l0,-2l1,-1l1,0l1,-1l0,-2l-2,-2l2,-2l0,-1l-1,1l-1,0l0,-2l-3,0l-2,2l0,7l-2,2l0,2l4,4l0,4l1,1l0,2l2,-2zm2,-11l0,1l-1,-1l1,0z"],
    flag: "tunisia.png",
    data: {}
  };
  countryData['ly'] = {
    name: "Libya",
    svg: ["m500.174988,242.175003l-2,0l-1,1l-2,0l-1,1l-1,0l-2,-2l-2,0l-1,-1l0,-1l-2,-2l-1,0l-3,-3l0,-3l1,0l0,-10l-1,-1l0,-1l2,-2l0,-3l3,-3l0,-2l1,0l1,1l4,0l1,1l3,0l0,2l3,3l3,0l2,2l2,0l2,-2l0,-3l3,-3l4,0l1,1l0,1l1,0l1,1l2,0l1,1l-1,1l0,4l1,1l0,25l0,6.000992l-3,0l0,1.999008l-19,-12z"],
    flag: "libya.png",
    data: {}
  };
  countryData['eg'] = {
    name: "Egypt",
    svg: ["m522.174988,246.175003l0,-25l-1,-1l0,-4l1,-1l5,0l2,2l2,0l1,1l3,-3l3,0l2,2l5,0l1,1l0,6l-1,1l0,2l-3,-3l0,-1l-1,-1l0,-2l-1,1l0,3l3,3l0,1l1,1l0,3l2,2l0,2l2,2l0,5l3,3l-13,0l0,-1l-1,1l-15,0z"],
    flag: "egypt.png",
    data: {}
  };
  countryData['sd'] = {
    name: "Sudan",
    svg: ["m554.174988,261.174988l-2,0l0,3l-1,1l0,10l-2,0l-2,2l0,4l-2,0l0,7l-2,0l-1,1l0,2l2,0l2,2l0,3l2,2l-5,5l-7,0l-3,-3l-1,1l-3,0l-2,-2l0,-2l-2,-2l0,-1l-3,-3l0,-1l-1,-1l-1,0l-2,-2l0,-4l-2,-2l0,-1l-1,-1l0,-3l-1,-1l0,-3l1,-1l0,-2l1,0l0,-3l3,0l0,-13.998993l3,0l0,-6.001007l15,0l1,-1l0,1l13,0l0,1l2,2l0,7l3,3l-2,2z"],
    flag: "sudan.png",
    data: {}
  };
  countryData['er'] = {
    name: "Eritrea",
    svg: ["m557.174988,260.174988l0,3l1,1l0,3l2,0l2,2l1,1l0,1l4,4l-1,1l-6,-6l-4,0l-1,-1l-1,1l-3,0l0,-5l1,-1l0,-3l2,0l2,-2l1,1zm2,6l1,0l-1,-1l0,1zm2,1l0,-1l-1,1l1,0z"],
    flag: "eritrea.png",
    data: {}
  };
  countryData['et'] = {
    name: "Ethiopia",
    svg: ["m546.174988,296.174988l0,-3l-2,-2l-2,0l0,-2l1,-1l2,0l0,-7l2,0l0,-4l2,-2l2,0l0,-5l3,0l1,-1l1,1l4,0l6,6l-2,2l0,2l3,0l0,3l1,1l0,2l2,0l3,3l3,0l1,1l3,0l-3,3l0,1l-5,5l-3,0l-2,2l-2,0l-1,1l-2,0l0,-1l-1,0l-3,3l-3,0l-3,-3l-2,0l-1,-1l0,-2l-1,0l-2,-2z"],
    flag: "ethiopia.png",
    data: {}
  };
  countryData['ug'] = {
    name: "Uganda",
    svg: ["m533.174988,316.174988l1,-1l0,-3l3,-3l0,-1l-1,-1l0,-4l7,0l2,-2l0,3l2,2l0,4l-3,3l0,4l-8,0l-2,2l-1,0l0,-3z"],
    flag: "uganda.png",
    data: {}
  };
  countryData['rw'] = {
    name: "Rwanda",
    svg: ["m531.174988,322.174988l0,-1l2,-2l1,0l1,-1l1,1l0,3l-2,0l0,1l-2,0l-1,-1z"],
    flag: "rwanda.png",
    data: {}
  };
  countryData['bi'] = {
    name: "Burundi",
    svg: ["m532.174988,323.174988l2,0l0,-1l1,0l0,1l1,0l0,2l-1,1l0,1l-1,1l-2,0l0,-5z"],
    flag: "burundi.png",
    data: {}
  };
  countryData['ke'] = {
    name: "Kenya",
    svg: ["m564.174988,302.174988l-1,1l0,1l-1,1l0,12l2,2l-1,1l-1,0l0,2l-2,0l0,2l-1,1l0,2l-1,1l-1,0l-3,-3l0,-1l-10,-7l0,-4l3,-3l0,-4l-2,-2l0,-3l3,-3l1,0l0,2l1,1l2,0l3,3l3,0l3,-3l1,0l0,1l2,0z"],
    flag: "kenya.png",
    data: {}
  };
  countryData['mw'] = {
    name: "Malawi",
    svg: ["m546.174988,350.174988l0,1l-1,1l0,2l2,2l0,1l2,2l0,5l-1,0l0,3l-1,0l0,-1l-2,-2l0,-2l1,-1l0,-2l-3,0l-1,-1l0,-1l-1,-1l1,-1l0,-2l1,0l0,-8l-1,-1l3,0l1,1l0,4l1,1l-1,0z"],
    flag: "malawi.png",
    data: {}
  };
  countryData['zm'] = {
    name: "Zambia",
    svg: ["m521.174988,368.174988l-3,0l-1,1l-3,-3l0,-12l5,0l0,-6l1,1l2,0l2,2l2,0l1,-1l4,4l0,1l1,1l2,0l0,-4l-2,0l-2,-2l0,-1l1,-1l0,-4l-1,-1l1,-1l0,-2l4,0l1,-1l3,3l1,0l3,3l0,8l-1,0l0,2l-1,1l1,1l0,1l-2,0l-1,1l-2,0l-2,2l0,2l-3,0l-1,1l0,1l-5,5l-2,0l-1,-1l-1,0l-1,-1z"],
    flag: "zambia.png",
    data: {}
  };
  countryData['zw'] = {
    name: "Zimbabwe",
    svg: ["m535.174988,364.174988l3,0l1,1l2,0l1,1l0,6l-1,1l0,2l1,1l-2,2l0,3l-2,2l-5,0l-1,-1l-2,0l-1,-1l0,-2l-5,-5l0,-2l-2,-2l0,-1l1,0l1,1l2,0l5,-5l0,-1l1,-1l3,0l0,1z"],
    flag: "zimbabwe.png",
    data: {}
  };
  countryData['bw'] = {
    name: "Botswana",
    svg: ["m509.174988,383.174988l2,0l0,-13l6,0l1,1l1,-1l2,0l1,-1l0,1l2,2l0,2l5,5l0,2l1,1l2,0l1,1l-1,1l-2,0l-3,3l0,2l-2,2l-1,0l-1,1l0,2l-1,1l-2,0l-2,-2l-2,0l0,2l-3,3l-2,0l0,-4l-2,-2l0,-9z"],
    flag: "botswana.png",
    data: {}
  };
  countryData['za'] = {
    name: "South Africa",
    svg: ["m539.174988,398.174988l0,2l-1,0l-2,-2l0,-2l1,-1l2,0l0,-6l-1,-1l0,-5l-5,0l-1,1l-2,0l-3,3l0,2l-2,2l-1,0l-1,1l0,2l-1,1l-2,0l-2,-2l-2,0l0,2l-3,3l-2,0l0,-4l-2,-2l0,11l-2,2l-3,0l-3,-3l0,1l-1,1l1,1l0,2l1,1l0,3l3,3l0,2l-1,1l0,2l1,1l0,2l1,0l2,2l1,0l1,-1l3,0l1,-1l3,0l1,-1l1,1l2,0l1,-1l1,1l0,-1l1,-1l1,1l1,-1l1,0l8,-8l0,-2l2,-2l0,-1l3,-3l0,-1l1,-1l0,-4l-2,0z"],
    flag: "south_africa.png",
    data: {}
  };
  countryData['sz'] = {
    name: "Swaziland",
    svg: ["m539.174988,395.174988l0,3l0,2l-1,0l-2,-2l0,-2l1,-1l2,0z"],
    flag: "swaziland.png",
    data: {}
  };
  countryData['mz'] = {
    name: "Mozambique",
    svg: ["m539.174988,398.174988l0,-9l-1,-1l0,-5l2,-2l0,-3l2,-2l-1,-1l0,-2l1,-1l0,-6l-1,-1l-2,0l-1,-1l-3,0l0,-3l2,-2l2,0l1,-1l2,0l1,1l3,0l0,2l-1,1l0,2l2,2l0,1l1,0l0,-3l1,0l0,-5l-2,-2l0,-1l-2,-2l0,-2l1,-1l0,-1l8,0l0,-1l3,0l1,-1l1,0l2,-2l0,13l1,0l-1,1l0,2l-1,1l0,1l-3,3l-2,0l-8,8l-1,0l0,3l1,1l0,2l1,1l0,7l-3,3l-2,0l-2,2l0,4l-2,0z"],
    flag: "mozambique.png",
    data: {}
  };
  countryData['tz'] = {
    name: "Tanzania",
    svg: ["m535.174988,336.174988l-2,-2l0,-3l-1,-1l0,-2l2,0l1,-1l0,-1l1,-1l0,-2l-1,0l0,-1l1,0l0,-3l-1,-1l1,-1l8,0l10,7l0,1l3,3l1,0l-1,1l0,5l1,1l0,7l1,1l0,2l1,1l1,0l-2,2l-1,0l-1,1l-3,0l0,1l-7,0l-1,-1l0,-4l-1,-1l-3,0l-2,-2l-1,0l-4,-4l0,-2zm25,3l-1,-1l0,1l1,0zm-1,-6l-1,-1l0,1l1,1l0,-1zm0,-2l0,-1l-1,1l1,0z"],
    flag: "tanzania.png",
    data: {}
  };
  countryData['km'] = {
    name: "Comoros",
    svg: ["m568.174988,349.174988l1,1l0,1l-1,-1l0,-1zm1,3l0,1l1,-1l-1,0zm3,0l-1,-1l0,1l1,0zm0,1l0,1l1,-1l-1,0z"],
    flag: "comoros.png",
    data: {}
  };
  countryData['mu'] = {
    name: "Mauritius",
    svg: ["m598.174988,379.174988l1,1l1,0l-1,-1l-1,0zm7,-2l0,-1l-1,1l0,1l1,-1z"],
    flag: "mauritius.png",
    data: {}
  };
  countryData['mg'] = {
    name: "Madagascar",
    svg: ["m580.174988,355.174988l1,0l0,-1l-1,1zm-9,10l0,2l-1,1l0,3l1,1l0,5l-1,1l0,2l-2,2l0,3l1,1l0,4l3,3l0,1l1,0l1,-1l1,0l1,-1l1,0l1,-1l0,-2l1,-1l0,-3l1,-1l0,-3l1,-1l0,-3l1,-1l0,-3l2,-2l0,-5l1,0l0,-2l-1,-1l0,-1l1,0l1,1l0,-3l-1,-1l0,-5l-2,-2l-1,1l0,2l-2,2l0,3l-2,0l0,2l-1,-1l-1,1l0,1l-2,0l-1,1l-1,0l-1,1z"],
    flag: "madagascar.png",
    data: {}
  };
  countryData['dj'] = {
    name: "Djibouti",
    svg: ["m567.174988,275.174988l1,1l0,1l-2,2l2,0l-1,1l-3,0l0,-2l3,-3z"],
    flag: "djibouti.png",
    data: {}
  };
  countryData['so'] = {
    name: "Somalia",
    svg: ["m582.174988,280.174988l1,0l1,-1l2,0l1,-1l1,0l0,4l-1,1l0,3l-1,1l0,1l-2,2l0,3l-2,2l0,3l-3,3l0,2l-4,4l-1,0l-5,5l-4,4l0,2l-1,1l-2,-2l0,-12l1,-1l0,-1l2,-2l2,0l2,-2l3,0l5,-5l0,-1l3,-3l-3,0l-1,-1l-3,0l-3,-3l-2,0l0,-2l-1,-1l0,-3l1,-1l3,3l2,0l1,-1l3,0l1,-1l4,0zm7,3l0,-1l-1,1l1,0z"],
    flag: "somalia.png",
    data: {}
  };
  countryData['ls'] = {
    name: "Lesotho",
    svg: ["m531.174988,404.174988l2,2l0,1l-2,2l-1,0l0,1l-2,0l-1,-1l0,-2l3,-3l1,0z"],
    flag: "lesotho.png",
    data: {}
  };

  // Middle East
  countryData['ye'] = {
    name: "Yemen",
    svg: ["m594.174988,276.174988l1,1l1,-1l0,-1l-1,1l-1,0zm-26,-6l-1,-1l0,-5l1,-1l0,-2l1,-1l0,1l7,0l1,1l2,0l0,-2l3,-3l2,0l1,-1l5,0l0,1l1,1l0,2l1,1l0,1l1,1l-1,0l-1,1l0,1l-2,2l-2,0l-2,2l-2,0l-3,3l-3,0l-1,1l-3,0l-2,2l-2,0l-1,-1l0,-4zm-1,1l-1,0l1,1l0,-1z"],
    flag: "yemen.png",
    data: {}
  };
  countryData['om'] = {
    name: "Oman",
    svg: ["m590.174988,256.174988l1,-1l2,0l2,-2l3,0l0,-4l1,-1l0,-3l-1,-1l0,-2l1,-1l0,-1l1,0l0,-3l1,0l1,1l0,1l2,2l3,0l1,1l0,1l1,1l1,0l0,1l-1,1l0,2l-3,3l0,-1l-1,1l0,5l-2,0l-1,1l0,1l-1,1l-2,0l-1,1l0,2l-1,0l-1,-1l-2,2l-1,0l-1,-1l0,-1l-1,-1l0,-2l-1,-1l0,-1zm18,-3.999985l0,-1l-1,1l1,0z"],
    flag: "oman.png",
    data: {}
  };
  countryData['ae'] = {
    name: "United Arab Emirates",
    svg: ["m592.174988,238.175003l0,1l-1,0l1,-1zm8,-5l1,1l0,-2l-1,1zm-11,6l1,1l1,0l1,-1l4,0l1,-1l0,-1l3,-3l0,-1l1,1l0,3l-1,0l0,3l-1,0l0,1l-1,1l0,2l-6,0l-3,-3l0,-2zm4,-1.001007l1,0l0,-1l-1,1z"],
    flag: "uae.png",
    data: {}
  };
  countryData['sa'] = {
    name: "Saudi Arabia",
    svg: ["m565.174988,263.174988l-1,-1l1,0l0,1zm23,-26.000992l1,0l0,-3l-1,-1l0,1l-1,1l0,1l1,1zm-1,-4l-1,0l0,1l1,-1zm-8,-7.998993l0,-1l-1,-1l-6,0l-7,-7l-2,0l-3,-3l-2,0l-2,2l-4,0l0,1l1,1l1,0l0,3l-1,0l-3,3l-3,0l0,2l-1,1l4,4l0,2l2,2l0,1l1,1l0,2l3,3l0,1l1,1l0,4l1,1l0,2l4,4l0,1l1,0.999985l0,2l3,3l0,1l1,1l0,1l1,-1l0,-2l1,-1l0,1l7,0l1,1l2,0l0,-2l3,-3l2,0l1,-1l5,0l1,-0.999985l2,0l2,-2l3,0l0,-4l1,-1l0,-3l-1,-1l-6,0l-3,-3l0,-2l-3,-3l0,-1l-1,-1l0,-3l-3,-3l0,-2l-1,-1l-2,0z"],
    flag: "saudi_arabia.png",
    data: {}
  };
  countryData['kw'] = {
    name: "Kuwait",
    svg: ["m580.174988,221.175003l-1,1l1,0l0,2l1,1l-2,0l0,-1l-1,-1l-1,0l0,-2l1,-1l2,0l0,1zm1,0l0,1l1,0l-1,-1z"],
    flag: "kuwait.png",
    data: {}
  };
  countryData['jo'] = {
    name: "Jordan",
    svg: ["m547.174988,223.175003l0,-4l1,-1l0,-5l1,-1l1,0l1,1l3,-3l1,0l1,-1l1,0l0,3l1,1l-2,2l-4,0l0,1l1,1l1,0l0,3l-1,0l-3,3l-3,0z"],
    flag: "jordan.png",
    data: {}
  };
  countryData['il'] = {
    name: "Israel",
    svg: ["m546.174988,218.175003l-1,-1l0,-1l1,-1l0,-3l1,-1l0,-1l1,0l1,-1l0,3l-2,0l0,4l1,0l0,2l-1,1l0,2l-1,1l0,-4z"],
    flag: "israel.png",
    data: {}
  };
  countryData['ps'] = {
    name: "Occupied Palestinian Territory",
    svg: ["m548.174988,216.175003l-1,0l0,-4l2,0l-1,1l0,3z"],
    flag: "palestinian.png",
    data: {}
  };
  countryData['lb'] = {
    name: "Lebanon",
    svg: ["m551.174988,206.175003l0,1l-1,0l0,1l-2,2l-1,0l1,-1l0,-2l2,-2l1,1z"],
    flag: "lebanon.png",
    data: {}
  };
  countryData['sy'] = {
    name: "Syria",
    svg: ["m556.174988,209.175003l-1,1l-1,0l-3,3l-1,-1l-1,0l0,-3l1,-1l0,-1l1,0l0,-1l-1,-1l0,-1l-1,-1l0,-2l2,-2l0,-1l3,0l1,-1l1,1l4,0l2,-2l3,0l0,1l-2,2l0,6l-2,2l-2,0l-2,2l-1,0z"],
    flag: "syria.png",
    data: {}
  };
  countryData['iq'] = {
    name: "Iraq",
    svg: ["m581.174988,220.175003l-3,0l-1,1l0,2l-5,0l-7,-7l-2,0l-3,-3l-2,0l-1,-1l0,-3l2,-2l2,0l2,-2l0,-6l3,-3l4,0l1,1l1,0l0,2l2,2l1,0l0,2l-1,1l0,4l5,5l0,1l0,3l1,0l0,2l1,0l0,1z"],
    flag: "iraq.png",
    data: {}
  };
  countryData['cy'] = {
    name: "Cyprus",
    svg: ["m541.174988,203.175003l2,0l1,1l-1,0l-1,1l-1,0l-1,-1l1,-1zm3,-1l-2,0l-1,1l2,0l1,1l1,-1l-1,-1z"],
    flag: "cyprus.png",
    data: {}
  };
  countryData['ir'] = {
    name: "Iran",
    svg: ["m600.174988,230.175003l1,0l-1,1l-1,0l1,-1zm0,2l0,-1l-1,1l1,0zm-28,-35l0,-2l-1,0l-1,-1l0,-5l1,-1l1,0l2,2l1,0l2,0l2,-2l1,0l1,1l0,3l1,0l0,2l1,1l2,0l3,3l5,0l1,-1l1,1l0,-2l1,0l3,-3l4,0l1,1l2,0l0,1l2,0l3,3l2,0l0,3l1,1l-1,1l0,2l-1,1l0,2l1,1l-1,1l0,4l2,2l1,0l0,2l-2,2l0,2l4,4l0,1l0,2l2,0l-1,1l0,1l-1,0l-2,2l0,3l-2,0l-1,-1l-4,0l-1,-1l-3,0l-1,-1l0,-3l-1,-1l-1,0l-2,2l-1,0l-1,1l-1,-1l-1,0l-2,-2l-1,0l-2,-2l-1,0l-1,-1l0,-2l-1,-1l0,-1l-2,-2l-1,0l-1,-1l-1,0l-1,1l0,-1l-1,0l0,-2l-1,0l0,-4l-5,-5l0,-4l1,-1l0,-2l-1,0l-2,-2l0,-2z"],
    flag: "iran.png",
    data: {}
  };
  countryData['am'] = {
    name: "Armenia",
    svg: ["m575.174988,190.175003l0,-1l-1,-1l-1,0l-2,-2l-1,0l-1,0l0,-3l1,-1l2,0l2,2l0,2l2,2l0,2l-1,0z"],
    flag: "armenia.png",
    data: {}
  };
  countryData['az'] = {
    name: "Azerbaijan",
    svg: ["m575.174988,190.175003l-1,0l-2,-2l0,-1l1,1l1,0l1,1l0,1z",
          "m581.174988,192.175003l0,-3l-1,-1l-1,0l-2,2l-1,0l0,-2l-2,-2l0,-2l-2,-2l2,0l1,1l1,0l0,-1l-1,-1l1,-1l2,2l2,0l1,-1l0,-1l2,2l0,1l2,2l-2,2l0,2l-1,1l0,2l-1,0z"],
    flag: "azerbaijan.png",
    data: {}
  };
  countryData['ge'] = {
    name: "Georgia",
    svg: ["m564.174988,178.175003l-2,-2l-1,0l-1,-1l1,-1l1,1l4,0l2,2l5,0l3,3l-1,1l1,1l0,1l-1,0l-1,-1l-4,0l-1,1l-2,-2l-3,0l0,-3z"],
    flag: "georgia.png",
    data: {}
  };
  countryData['tr'] = {
    name: "Turkey",
    svg: ["m567.174988,181.175003l2,2l0,3l2,0l1,1l0,1l-1,0l-1,1l0,5l1,1l1,0l0,2l-1,0l-1,-1l-4,0l-1,1l0,-1l-3,0l-2,2l-4,0l-1,-1l-1,1l-3,0l0,1l-2,2l0,-2l1,-1l0,-1l-1,1l-1,0l-2,0l-2,2l-3,0l-1,-1l-1,0l-1,-1l-1,-1l-1,0l0,2l-1,0l-1,1l-1,0l-1,-1l0,-1l-4,0l1,-1l-2,0l1,-1l-1,-1l-1,0l0,-1l1,0l-1,-1l-1,0l0,-2l1,1l0,-1l0,-1l0,-1l0,-1l-2,0l2,-2l1,-1l2,0l2,0l1,-1l1,0l-1,-1l0,-1l1,0l2,0l1,1l1,0l2,-2l1,0l1,-1l6,0l1,1l1,0l1,1l2,0l1,1l1,0l2,0l3,0l3,0l1,-1l1,-1l3,0zm-39,-1l-1,-1l-1,1l-1,0l0,1l1,0l-1,1l0,1l-1,1l2,0l-1,1l0,1l2,-2l1,0l1,-1l2,0l1,0l0,-1l-1,0l-2,-2l-1,0z"],
    flag: "turkey.png",
    data: {}
  };

  // Oceania
  countryData['au'] = {
    name: "Australia",
    svg: ["m748.174988,383.174988l1,1l0,-2l2,0l4,-4l3,0l2,-2l3,0l5,-5l0,-3l2,-2l2,2l0,-3l3,0l0,-4l3,-3l2.5,0l0,-1.5l2.5,2.5l0,3l1,0l0,-1l3,0l1,-1l-1,-1l0,-3l4,-4l4,0l0,-1l-1,-1l1,-1l2,2l2,0l1,1l4,0l1,-1l1,1l-1,1l0,2l-2,0l0,3l-1,0l0,2l3,3l1,0l6,6l2,0l3,-3l0,-2l1,-1l0,-11l1,-1l0,-3l1,-1l1,1l0,3l1,0l0,3l1,1l0,4l1,0l1,-1l2,2l0,5l2,2l0,3l1,1l0,2l1,1l2,0l3,3l0,2l2,2l0,3l3,0l0,3l3,3l0,1l3,3l0,6l1,1l0,4l-1,1l0,8l-4,4l0,2l-2,2l0,3l-2,2l0,6l-1,1l-3,0l-3,3l-2,0l-1,1l-2,-2l-1,1l0,-1l1,-1l-2,0l0,1l-2,2l-1,0l-2,-2l-4,0l-3,-3l0,-3l-2,-2l1,-1l0,-1l-1,0l-1,1l0,-4l-1,-1l-1,0l0,3l-1,1l-1,-1l1,-1l0,-3l2,-2l0,-1l-1,0l-4,4l0,2l-1,1l-1,0l0,-3l-3,-3l0,-2l-2,-2l-3,0l-1,-1l-8,0l-2,2l-6,0l-2,2l-1,0l-3,3l-9,0l0,2l-2,0l-2,2l-5,0l-3,-3l0,-1l2,-2l0,-6l-2,-2l0,-7l-2,-2l0,-3l-2,-2l1,0l1,-1l0,-2l-2,-2l0,-3l1,-1l0,-5l1,0zm58,45l2,0l0,-1l-3,0l1,1zm-59,-32l0,-1l-1,0l1,1zm-2,-1l0,-1l-1,1l1,0zm6,-16l1,-1l-1,0l0,1zm97,20l1,-1l-1,0l0,1zm-36,-34l0,1l1,-1l-1,0zm0,2l1,1l0,-1l-1,0zm-21,-16l1,-1l0,-1l-3,0l2,2zm-2,0l1,0l-1,-1l0,1zm17,-2l0,-1l-1,1l1,0zm-1,8l0,1l1,0l-1,-1zm15,-11l-1,0l0,1l1,-1zm-44,13l0,-1l-1,1l1,0zm18,-10l1,-1l-1,0l0,1zm10,8l1,-1l-1,0l0,1zm2,5l1,1l0,-1l-1,0zm18,79l0,1l-1,0l1,-1zm10,0l-1,1l1,1l0,-2zm1,2l-1,1l1,0l0,-1zm-9,5l2,2l0,1l-1,-1l0,2l1,0l0,1l1,1l2,0l1,-1l0,-1l1,0l0,1l1,0l0,-3l1,-1l0,-4l-2,0l-1,1l-3,0l-1,-1l-2,0l0,3zm6,6l-1,1l1,0l0,-1zm3,-3l-1,1l1,0l0,-1z"],
    flag: "australia.png",
    data: {}
  };
  countryData['nz'] = {
    name: "New Zealand",
    svg: ["m861.174988,496.174988l1,-1l0,1l-1,0zm18.992004,-15l0,-1l-0.992004,1l0.992004,0zm7.015991,7l0.992004,-1l0,1l-0.992004,0zm-3.007996,-22l1,0l0,1l-1,1l0,-2zm-3,-3l0,-1l2,-2l0,-1l3,-3l2,0l5,-5l0,-2l1,-1l1,0l0,-2l2,-2l0,2l1,1l1,-1l2,0l-1,1l1,1l-1,1l0,1l-4,4l1,1l0,1l-1,-1l-1,0l0,1l-3,3l0,3l-3,3l-4,0l-1,-1l-2,0l-1,-1zm19,-19l0,1l-1,0l1,-1zm2,-7l0,-6l2,2l0,-2l1,0l0,2l2,2l2,0l1,-1l1,0l0,3l-1,1l0,1l-2,0l-1,1l1,1l0,1l-2,2l0,1l-2,2l0,1l-1,-1l-1,0l0,-2l1,-1l0,-1l-3,-3l0,-1l2,-2zm2,-8l0,1l-1,-1l1,0zm-6,-5l3,3l0,1l1,1l0,2l-1,0l0,-2l-1,0l0,-1l-2,-2l0,-1l-1,-1l1,0z"],
    flag: "new_zealand.png",
    data: {}
  };



//===============================================
//  data for svg map
//===============================================

/*
  var countryData = {};
  
  countryData['us'] = { name:"United States", gdp:"1.4 Trillion", exposure:"4.4 Billion", population:"329 Million", lifeexp:"80-82", landmass:"4,355,320 sq. mi." };
*/
  
  
  
  
  
  
  
  
  
