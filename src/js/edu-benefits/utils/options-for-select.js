const countries = [
  { value: 'USA', label: 'United States' },
  { value: 'AFG', label: 'Afghanistan' },
  { value: 'ALB', label: 'Albania' },
  { value: 'DZA', label: 'Algeria' },
  { value: 'AND', label: 'Andorra' },
  { value: 'AGO', label: 'Angola' },
  { value: 'AIA', label: 'Anguilla' },
  { value: 'ATA', label: 'Antarctica' },
  { value: 'ATG', label: 'Antigua' },
  { value: 'ARG', label: 'Argentina' },
  { value: 'ARM', label: 'Armenia' },
  { value: 'ABW', label: 'Aruba' },
  { value: 'AUS', label: 'Australia' },
  { value: 'AUT', label: 'Austria' },
  { value: 'AZE', label: 'Azerbaijan' },
  { value: 'BHS', label: 'Bahamas' },
  { value: 'BHR', label: 'Bahrain' },
  { value: 'BGD', label: 'Bangladesh' },
  { value: 'BRB', label: 'Barbados' },
  { value: 'BLR', label: 'Belarus' },
  { value: 'BEL', label: 'Belgium' },
  { value: 'BLZ', label: 'Belize' },
  { value: 'BEN', label: 'Benin' },
  { value: 'BMU', label: 'Bermuda' },
  { value: 'BTN', label: 'Bhutan' },
  { value: 'BOL', label: 'Bolivia' },
  { value: 'BIH', label: 'Bosnia' },
  { value: 'BWA', label: 'Botswana' },
  { value: 'BVT', label: 'Bouvet Island' },
  { value: 'BRA', label: 'Brazil' },
  { value: 'IOT', label: 'British' },
  { value: 'BRN', label: 'Brunei Darussalam' },
  { value: 'BGR', label: 'Bulgaria' },
  { value: 'BFA', label: 'Burkina Faso' },
  { value: 'BDI', label: 'Burundi' },
  { value: 'KHM', label: 'Cambodia' },
  { value: 'CMR', label: 'Cameroon' },
  { value: 'CAN', label: 'Canada' },
  { value: 'CPV', label: 'Cape Verde' },
  { value: 'CYM', label: 'Cayman' },
  { value: 'CAF', label: 'Central African Republic' },
  { value: 'TCD', label: 'Chad' },
  { value: 'CHL', label: 'Chile' },
  { value: 'CHN', label: 'China' },
  { value: 'CXR', label: 'Christmas Island' },
  { value: 'CCK', label: 'Cocos Islands' },
  { value: 'COL', label: 'Colombia' },
  { value: 'COM', label: 'Comoros' },
  { value: 'COG', label: 'Congo' },
  { value: 'COD', label: 'Democratic Republic of the Congo' },
  { value: 'COK', label: 'Cook Islands' },
  { value: 'CRI', label: 'Costa Rica' },
  { value: 'CIV', label: 'Ivory Coast' },
  { value: 'HRV', label: 'Croatia' },
  { value: 'CUB', label: 'Cuba' },
  { value: 'CYP', label: 'Cyprus' },
  { value: 'CZE', label: 'Czech Republic' },
  { value: 'DNK', label: 'Denmark' },
  { value: 'DJI', label: 'Djibouti' },
  { value: 'DMA', label: 'Dominica' },
  { value: 'DOM', label: 'Dominican Republic' },
  { value: 'ECU', label: 'Ecuador' },
  { value: 'EGY', label: 'Egypt' },
  { value: 'SLV', label: 'El Salvador' },
  { value: 'GNQ', label: 'Equatorial Guinea' },
  { value: 'ERI', label: 'Eritrea' },
  { value: 'EST', label: 'Estonia' },
  { value: 'ETH', label: 'Ethiopia' },
  { value: 'FLK', label: 'Falkland Islands' },
  { value: 'FRO', label: 'Faroe Islands' },
  { value: 'FJI', label: 'Fiji' },
  { value: 'FIN', label: 'Finland' },
  { value: 'FRA', label: 'France' },
  { value: 'GUF', label: 'French Guiana' },
  { value: 'PYF', label: 'French Polynesia' },
  { value: 'ATF', label: 'French Southern Territories' },
  { value: 'GAB', label: 'Gabon' },
  { value: 'GMB', label: 'Gambia' },
  { value: 'GEO', label: 'Georgia' },
  { value: 'DEU', label: 'Germany' },
  { value: 'GHA', label: 'Ghana' },
  { value: 'GIB', label: 'Gibraltar' },
  { value: 'GRC', label: 'Greece' },
  { value: 'GRL', label: 'Greenland' },
  { value: 'GRD', label: 'Grenada' },
  { value: 'GLP', label: 'Guadeloupe' },
  { value: 'GTM', label: 'Guatemala' },
  { value: 'GIN', label: 'Guinea' },
  { value: 'GNB', label: 'Guinea-Bissau' },
  { value: 'GUY', label: 'Guyana' },
  { value: 'HTI', label: 'Haiti' },
  { value: 'HMD', label: 'Heard Island' },
  { value: 'HND', label: 'Honduras' },
  { value: 'HKG', label: 'Hong Kong' },
  { value: 'HUN', label: 'Hungary' },
  { value: 'ISL', label: 'Iceland' },
  { value: 'IND', label: 'India' },
  { value: 'IDN', label: 'Indonesia' },
  { value: 'IRN', label: 'Iran' },
  { value: 'IRQ', label: 'Iraq' },
  { value: 'IRL', label: 'Ireland' },
  { value: 'ISR', label: 'Israel' },
  { value: 'ITA', label: 'Italy' },
  { value: 'JAM', label: 'Jamaica' },
  { value: 'JPN', label: 'Japan' },
  { value: 'JOR', label: 'Jordan' },
  { value: 'KAZ', label: 'Kazakhstan' },
  { value: 'KEN', label: 'Kenya' },
  { value: 'KIR', label: 'Kiribati' },
  { value: 'PRK', label: 'North Korea' },
  { value: 'KOR', label: 'South Korea' },
  { value: 'KWT', label: 'Kuwait' },
  { value: 'KGZ', label: 'Kyrgyzstan' },
  { value: 'LAO', label: 'Laos' },
  { value: 'LVA', label: 'Latvia' },
  { value: 'LBN', label: 'Lebanon' },
  { value: 'LSO', label: 'Lesotho' },
  { value: 'LBR', label: 'Liberia' },
  { value: 'LBY', label: 'Libya' },
  { value: 'LIE', label: 'Liechtenstein' },
  { value: 'LTU', label: 'Lithuania' },
  { value: 'LUX', label: 'Luxembourg' },
  { value: 'MAC', label: 'Macao' },
  { value: 'MKD', label: 'Macedonia' },
  { value: 'MDG', label: 'Madagascar' },
  { value: 'MWI', label: 'Malawi' },
  { value: 'MYS', label: 'Malaysia' },
  { value: 'MDV', label: 'Maldives' },
  { value: 'MLI', label: 'Mali' },
  { value: 'MLT', label: 'Malta' },
  { value: 'MTQ', label: 'Martinique' },
  { value: 'MRT', label: 'Mauritania' },
  { value: 'MUS', label: 'Mauritius' },
  { value: 'MYT', label: 'Mayotte' },
  { value: 'MEX', label: 'Mexico' },
  { value: 'FSM', label: 'Micronesia' },
  { value: 'MDA', label: 'Moldova' },
  { value: 'MCO', label: 'Monaco' },
  { value: 'MNG', label: 'Mongolia' },
  { value: 'MSR', label: 'Montserrat' },
  { value: 'MAR', label: 'Morocco' },
  { value: 'MOZ', label: 'Mozambique' },
  { value: 'MMR', label: 'Myanmar' },
  { value: 'NAM', label: 'Namibia' },
  { value: 'NRU', label: 'Nauru' },
  { value: 'NPL', label: 'Nepal' },
  { value: 'ANT', label: 'Netherlands Antilles' },
  { value: 'NLD', label: 'Netherlands' },
  { value: 'NCL', label: 'New Caledonia' },
  { value: 'NZL', label: 'New Zealand' },
  { value: 'NIC', label: 'Nicaragua' },
  { value: 'NER', label: 'Niger' },
  { value: 'NGA', label: 'Nigeria' },
  { value: 'NIU', label: 'Niue' },
  { value: 'NFK', label: 'Norfolk' },
  { value: 'NOR', label: 'Norway' },
  { value: 'OMN', label: 'Oman' },
  { value: 'PAK', label: 'Pakistan' },
  { value: 'PAN', label: 'Panama' },
  { value: 'PNG', label: 'Papua New Guinea' },
  { value: 'PRY', label: 'Paraguay' },
  { value: 'PER', label: 'Peru' },
  { value: 'PHL', label: 'Philippines' },
  { value: 'PCN', label: 'Pitcairn' },
  { value: 'POL', label: 'Poland' },
  { value: 'PRT', label: 'Portugal' },
  { value: 'QAT', label: 'Qatar' },
  { value: 'REU', label: 'Reunion' },
  { value: 'ROU', label: 'Romania' },
  { value: 'RUS', label: 'Russia' },
  { value: 'RWA', label: 'Rwanda' },
  { value: 'SHN', label: 'Saint Helena' },
  { value: 'KNA', label: 'Saint Kitts and Nevis' },
  { value: 'LCA', label: 'Saint Lucia' },
  { value: 'SPM', label: 'Saint Pierre and Miquelon' },
  { value: 'VCT', label: 'Saint Vincent and the Grenadines' },
  { value: 'SMR', label: 'San Marino' },
  { value: 'STP', label: 'Sao Tome and Principe' },
  { value: 'SAU', label: 'Saudi Arabia' },
  { value: 'SEN', label: 'Senegal' },
  { value: 'SCG', label: 'Serbia' },
  { value: 'SYC', label: 'Seychelles' },
  { value: 'SLE', label: 'Sierra Leone' },
  { value: 'SGP', label: 'Singapore' },
  { value: 'SVK', label: 'Slovakia' },
  { value: 'SVN', label: 'Slovenia' },
  { value: 'SLB', label: 'Solomon Islands' },
  { value: 'SOM', label: 'Somalia' },
  { value: 'ZAF', label: 'South Africa' },
  { value: 'SGS', label: 'South Georgia and the South Sandwich Islands' },
  { value: 'ESP', label: 'Spain' },
  { value: 'LKA', label: 'Sri Lanka' },
  { value: 'SDN', label: 'Sudan' },
  { value: 'SUR', label: 'Suriname' },
  { value: 'SWZ', label: 'Swaziland' },
  { value: 'SWE', label: 'Sweden' },
  { value: 'CHE', label: 'Switzerland' },
  { value: 'SYR', label: 'Syrian Arab Republic' },
  { value: 'TWN', label: 'Taiwan' },
  { value: 'TJK', label: 'Tajikistan' },
  { value: 'TZA', label: 'Tanzania' },
  { value: 'THA', label: 'Thailand' },
  { value: 'TLS', label: 'Timor-Leste' },
  { value: 'TGO', label: 'Togo' },
  { value: 'TKL', label: 'Tokelau' },
  { value: 'TON', label: 'Tonga' },
  { value: 'TTO', label: 'Trinidad and Tobago' },
  { value: 'TUN', label: 'Tunisia' },
  { value: 'TUR', label: 'Turkey' },
  { value: 'TKM', label: 'Turkmenistan' },
  { value: 'TCA', label: 'Turks and Caicos Islands' },
  { value: 'TUV', label: 'Tuvalu' },
  { value: 'UGA', label: 'Uganda' },
  { value: 'UKR', label: 'Ukraine' },
  { value: 'ARE', label: 'United Arab Emirates' },
  { value: 'GBR', label: 'United Kingdom' },
  { value: 'URY', label: 'Uruguay' },
  { value: 'UZB', label: 'Uzbekistan' },
  { value: 'VUT', label: 'Vanuatu' },
  { value: 'VAT', label: 'Vatican' },
  { value: 'VEN', label: 'Venezuela' },
  { value: 'VNM', label: 'Vietnam' },
  { value: 'VGB', label: 'British Virgin Islands' },
  { value: 'WLF', label: 'Wallis and Futuna' },
  { value: 'ESH', label: 'Western Sahara' },
  { value: 'YEM', label: 'Yemen' },
  { value: 'ZMB', label: 'Zambia' },
  { value: 'ZWE', label: 'Zimbabwe' }
];

const maritalStatuses = [
  'Married',
  'Never Married',
  'Separated',
  'Widowed',
  'Divorced'
];

const branchesServed = [
  { value: 'air force', label: 'Air Force' },
  { value: 'army', label: 'Army' },
  { value: 'coast guard', label: 'Coast Guard' },
  { value: 'marine corps', label: 'Marine Corps' },
  { value: 'merchant seaman', label: 'Merchant Seaman' },
  { value: 'navy', label: 'Navy' },
  { value: 'noaa', label: 'Noaa' },
  { value: 'usphs', label: 'USPHS' },
  { value: 'f.commonwealth', label: 'Filipino Commonwealth Army' },
  { value: 'f.guerilla', label: 'Filipino Guerilla Forces' },
  { value: 'f.scouts new', label: 'Filipino New Scout' },
  { value: 'f.scouts old', label: 'Filipino Old Scout' },
  { value: 'other', label: 'Other' }
];

const dischargeTypes = [
  { value: 'honorable', label: 'Honorable' },
  { value: 'general', label: 'General' },
  { value: 'other', label: 'Other Than Honorable' },
  { value: 'bad-conduct', label: 'Bad Conduct' },
  { value: 'dishonorable', label: 'Dishonorable' },
  { value: 'undesirable', label: 'Undesirable' }
];

const states = {
  CAN: [
    { label: 'Alberta', value: 'AB' },
    { label: 'British Columbia', value: 'BC' },
    { label: 'Manitoba', value: 'MB' },
    { label: 'New Brunswick', value: 'NB' },
    { label: 'Newfoundland', value: 'NF' },
    { label: 'Northwest Territories', value: 'NT' },
    { label: 'Nova Scotia', value: 'NV' },
    { label: 'Nunavut Province', value: 'NU' },
    { label: 'Ontario', value: 'ON' },
    { label: 'Prince Edward Island', value: 'PE' },
    { label: 'Quebec', value: 'QC' },
    { label: 'Saskatchewan', value: 'SK' },
    { label: 'Yukon Territory', value: 'YT' }
  ],
  MEX: [
    { label: 'Aguascalientes', value: 'aguascalientes' },
    { label: 'Baja California Norte', value: 'baja-california-norte' },
    { label: 'Baja California Sur', value: 'baja-california-sur' },
    { label: 'Campeche', value: 'campeche' },
    { label: 'Chiapas', value: 'chiapas' },
    { label: 'Chihuahua', value: 'chihuahua' },
    { label: 'Coahuila', value: 'coahuila' },
    { label: 'Colima', value: 'colima' },
    { label: 'Distrito Federal', value: 'distrito-federal' },
    { label: 'Durango', value: 'durango' },
    { label: 'Guanajuato', value: 'guanajuato' },
    { label: 'Guerrero', value: 'guerrero' },
    { label: 'Hidalgo', value: 'hidalgo' },
    { label: 'Jalisco', value: 'jalisco' },
    { label: 'México', value: 'mexico' },
    { label: 'Michoacán', value: 'michoacan' },
    { label: 'Morelos', value: 'morelos' },
    { label: 'Nayarit', value: 'nayarit' },
    { label: 'Nuevo León', value: 'nuevo-leon' },
    { label: 'Oaxaca', value: 'oaxaca' },
    { label: 'Puebla', value: 'puebla' },
    { label: 'Querétaro', value: 'queretaro' },
    { label: 'Quintana Roo', value: 'quintana-roo' },
    { label: 'San Luis Potosí', value: 'san-luis-potosi' },
    { label: 'Sinaloa', value: 'sinaloa' },
    { label: 'Sonora', value: 'sonora' },
    { label: 'Tabasco', value: 'tabasco' },
    { label: 'Tamaulipas', value: 'tamaulipas' },
    { label: 'Tlaxcala', value: 'tlaxcala' },
    { label: 'Veracruz', value: 'veracruz' },
    { label: 'Yucatán', value: 'yucatan' },
    { label: 'Zacatecas', value: 'zacatecas' }
  ],
  USA: [
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'American Samoa', value: 'AS' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'Armed Forces Americas (AA)', value: 'AA' },
    { label: 'Armed Forces Europe (AE)', value: 'AE' },
    { label: 'Armed Forces Pacific (AP)', value: 'AP' },
    { label: 'California', value: 'CA' },
    { label: 'Colorado', value: 'CO' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'District Of Columbia', value: 'DC' },
    { label: 'Federated States Of Micronesia', value: 'FM' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Guam', value: 'GU' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
    { label: 'Indiana', value: 'IN' },
    { label: 'Iowa', value: 'IA' },
    { label: 'Kansas', value: 'KS' },
    { label: 'Kentucky', value: 'KY' },
    { label: 'Louisiana', value: 'LA' },
    { label: 'Maine', value: 'ME' },
    { label: 'Marshall Islands', value: 'MH' },
    { label: 'Maryland', value: 'MD' },
    { label: 'Massachusetts', value: 'MA' },
    { label: 'Michigan', value: 'MI' },
    { label: 'Minnesota', value: 'MN' },
    { label: 'Mississippi', value: 'MS' },
    { label: 'Missouri', value: 'MO' },
    { label: 'Montana', value: 'MT' },
    { label: 'Nebraska', value: 'NE' },
    { label: 'Nevada', value: 'NV' },
    { label: 'New Hampshire', value: 'NH' },
    { label: 'New Jersey', value: 'NJ' },
    { label: 'New Mexico', value: 'NM' },
    { label: 'New York', value: 'NY' },
    { label: 'North Carolina', value: 'NC' },
    { label: 'North Dakota', value: 'ND' },
    { label: 'Northern Mariana Islands', value: 'MP' },
    { label: 'Ohio', value: 'OH' },
    { label: 'Oklahoma', value: 'OK' },
    { label: 'Oregon', value: 'OR' },
    { label: 'Palau', value: 'PW' },
    { label: 'Pennsylvania', value: 'PA' },
    { label: 'Puerto Rico', value: 'PR' },
    { label: 'Rhode Island', value: 'RI' },
    { label: 'South Carolina', value: 'SC' },
    { label: 'South Dakota', value: 'SD' },
    { label: 'Tennessee', value: 'TN' },
    { label: 'Texas', value: 'TX' },
    { label: 'Utah', value: 'UT' },
    { label: 'Vermont', value: 'VT' },
    { label: 'Virgin Islands', value: 'VI' },
    { label: 'Virginia', value: 'VA' },
    { label: 'Washington', value: 'WA' },
    { label: 'West Virginia', value: 'WV' },
    { label: 'Wisconsin', value: 'WI' },
    { label: 'Wyoming', value: 'WY' }
  ]
};

const suffixes = [
  'Jr.',
  'Sr.',
  'II',
  'III',
  'IV'
];

const genders = [
  { label: 'Female', value: 'F' },
  { label: 'Male', value: 'M' }
];

const months = [
  { label: 'Jan', value: 1 },
  { label: 'Feb', value: 2 },
  { label: 'Mar', value: 3 },
  { label: 'Apr', value: 4 },
  { label: 'May', value: 5 },
  { label: 'Jun', value: 6 },
  { label: 'Jul', value: 7 },
  { label: 'Aug', value: 8 },
  { label: 'Sep', value: 9 },
  { label: 'Oct', value: 10 },
  { label: 'Nov', value: 11 },
  { label: 'Dec', value: 12 }
];

const twentyNineDays = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'];
const thirtyDays = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
const thirtyOneDays = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

const days = {
  1: thirtyOneDays,
  2: twentyNineDays,
  3: thirtyOneDays,
  4: thirtyDays,
  5: thirtyOneDays,
  6: thirtyDays,
  7: thirtyOneDays,
  8: thirtyOneDays,
  9: thirtyDays,
  10: thirtyOneDays,
  11: thirtyDays,
  12: thirtyOneDays
};

const yesNo = [
  { label: 'Yes', value: 'Y' },
  { label: 'No', value: 'N' }
];

const yesNoNA = yesNo.concat([{
  label: 'Does not apply', value: 'N/A'
}]);

const serviceBranches = [
  { label: 'Air Force', value: 'Air Force' },
  { label: 'Army', value: 'Army' },
  { label: 'Coast Guard', value: 'Coast Guard' },
  { label: 'Marine Corps', value: 'Marine Corps' },
  { label: 'Navy', value: 'Navy' }
];

const employmentPeriodTiming = [
  { label: 'Before military service', value: 'before' },
  { label: 'After military service', value: 'after' }
];

const schoolTypes = [
  { label: 'College, university, or other educational program, including online courses', value: 'college' },
  { label: 'Vocational flight training', value: 'flightTraining' },
  { label: 'National test reimbursement (for example, SAT or CLEP)', value: 'testReimbursement' },
  { label: 'Licensing or certification test reimbursement (for example, MCSE, CCNA, EMT, or NCLEX)', value: 'licensingReimbursement' },
  { label: 'Apprenticeship or on-the-job training', value: 'apprenticeship' },
  { label: 'Correspondence', value: 'correspondence' },
  { label: 'Tuition assistance top-up (Post 9/11 GI Bill and MGIB-AD only)', value: 'tuitionTopUp' }
];

const contactOptions = [
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'Mail', value: 'mail' }
];

const accountTypes = [
  { label: 'Checking', value: 'checking' },
  { label: 'Savings', value: 'savings' }
];

const relinquishableBenefits = [
  { label: 'I don\'t have anything to give up', value: 'unknown' },
  { label: 'Montgomery GI Bill (MGIB-AD, Chapter 30)', value: 'chapter30' },
  { label: 'Montgomery GI Bill Selected Reserve (MGIB-SR, Chapter 1606)', value: 'chapter1606' },
  { label: 'Reserve Educational Assistance Program (REAP or Chapter 1607)', value: 'chapter1607' }
];

const hoursTypes = [
  { label: 'Semester', value: 'semester' },
  { label: 'Quarter', value: 'quarter' },
  { label: 'Clock', value: 'clock' }
];

const claimTypes = [
  { label: 'Montgomery GI Bill (MGIB-AD, Chapter 30)', value: 'chapter30' },
  { label: 'Post-Vietnam Era Veterans’ Educational Assistance Program (VEAP or Chapter 32)', value: 'chapter32' },
  { label: 'Post-9/11 GI Bill (Chapter 33)', value: 'chapter33' },
  { label: 'Survivors’ and Dependents’ Educational Assistance Program (Chapter 35)', value: 'chapter35' },
  { label: 'Montgomery GI Bill Selected Reserve (MGIB-SR, Chapter 1606)', value: 'chapter1606' },
  { label: 'Reserve Educational Assistance Program (REAP or Chapter 1607)', value: 'chapter1607' },
  { label: 'National Call to Service', value: 'nationalService' },
  { label: 'Use of Transferred Benefits', value: 'transferredBenefits' },
  { label: 'Vocational Rehabilitation and Employment (VR&E)', value: 'vocationalRehab' },
];

const binaryGenders = [
  { label: 'Female', value: 'F' },
  { label: 'Male', value: 'M' }
];

const ownBenefitsOptions = [
  { label: 'My own benefits', value: 'ownBenefits' },
  { label: 'My spouse or parent', value: 'spouseOrParent' }
];

const tourBenefits = [
  { label: 'Montgomery GI Bill – Active Duty (Chapter 30)', value: 'chapter30' },
  { label: 'Montgomery GI Bill – Selected Reserve (MGIB-SR or chapter 1606)', value: 'chapter1606' },
  { label: 'Post-Vietnam Era Veterans’ Educational Assistance Program (VEAP or Chapter 32)', value: 'chapter32' }
];

module.exports = {
  countries,
  maritalStatuses,
  branchesServed,
  dischargeTypes,
  states,
  suffixes,
  genders,
  months,
  days,
  yesNo,
  yesNoNA,
  serviceBranches,
  schoolTypes,
  employmentPeriodTiming,
  contactOptions,
  accountTypes,
  relinquishableBenefits,
  hoursTypes,
  claimTypes,
  binaryGenders,
  ownBenefitsOptions,
  tourBenefits
};
