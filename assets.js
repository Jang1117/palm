const assets = [
    {
        position: { lat: -2.184, lng: 100.917 }, // 더미 좌표
        title: "Sodetan",
        millCompanyName: "INCASI RAYA",
        parentCompanyName: "INCASI RAYA",
        address: "Ds.Muara Sakai, Kec.Pancung Soal, Pesisir Selatan, West Sumatra",
        province: "SUMATERA BARAT",
        farmArea: "12,433 ha",
        FFBProduction: "243,148 ton/year",
        facilityCapacity: "120 ton/hour",
        cpoProduction: "46,626 ton/year",
        pkProduction: "10,341 ton/year",
        description: "SODETAN은 INCASI RAYA 그룹의 팜 오일 생산 시설로, 서부 수마트라 Pesisir Selatan 지역에서 운영됩니다. 농장면적: 6000 ha, FFB 생산: 30000 ton/year, 설비 용량: 40 ton/hour, CPO 생산: 15000 ton/year, PK 생산: 4000 ton/year."
    },
    {
        position: { lat: -2.331, lng: 100.995 }, // 더미 좌표
        title: "Silaut",
        millCompanyName: "SUMATERA JAYA AGRO LESTARI",
        parentCompanyName: "INCASI RAYA",
        address: "Ds.Silaut, Kec.Lunang Silaut, Pesisir Selatan, West Sumatra",
        province: "SUMATERA BARAT",
        farmArea: "10409 ha",
        ffbProduction: "218,486 ton/year",
        facilityCapacity: "120 ton/hour",
        cpoProduction: "44,846 ton/year",
        pkProduction: "8,925 ton/year",
        description: "SILAUT은 SUMATERA JAYA AGRO LESTARI 소속의 팜 오일 생산 시설로, INCASI RAYA 그룹의 일원입니다. 농장면적: 7000 ha, FFB 생산: 35000 ton/year, 설비 용량: 50 ton/hour, CPO 생산: 17000 ton/year, PK 생산: 4200 ton/year."
    },

    {
        position: { lat: -1.393, lng: 101.593 }, // 더미 좌표
        title: "Bina Pratama Sakato Jaya",
        millCompanyName: "BINA PRATAMA SAKATOJAYA",
        parentCompanyName: "INCASI RAYA",
        address: "Nagari Sei Jujuhan, Kec. Sangir Balai Janggo, Kab. Solok Selatan, Propinsi Sumatera Barat",
        province: "SUMATERA BARAT",
        farmArea: "4,095 ha",
        ffbProduction: "64,038 ton/year",
        facilityCapacity: "60 ton/hour",
        cpoProduction: "12,079 ton/year",
        pkProduction: "2,986 ton/year",
        description: "BINA PRATAMA SAKATOJAYA는 INCASI RAYA 그룹 소속의 팜 오일 생산 시설로, 서부 수마트라 지역에서 운영됩니다. 농장면적: 7500 ha, FFB 생산: 38000 ton/year, 설비 용량: 50 ton/hour, CPO 생산: 18000 ton/year, PK 생산: 4500 ton/year."
    },
    {
        position: { lat: -0.997, lng: 101.742 }, // 더미 좌표
        title: "Sumbar Andalas Kencana",
        millCompanyName: "SUMBAR ANDALAS KENCANA",
        parentCompanyName: "INCASI RAYA",
        address: "Muaro Timpeh, Dharmasraya, West Sumatra",
        province: "SUMATERA BARAT",
        farmArea: "6,344 ha",
        ffbProduction: "78,224 ton/year",
        facilityCapacity: "60 ton/hour",
        cpoProduction: "15,105 ton/year",
        pkProduction: "2,784 ton/year",
        description: "SUMBAR ANDALAS KENCANA는 서부 수마트라의 Dharmasraya 지역에 위치한 INCASI RAYA 소속 팜 오일 생산 시설입니다. 농장면적: 9000 ha, FFB 생산: 45000 ton/year, 설비 용량: 70 ton/hour, CPO 생산: 22000 ton/year, PK 생산: 5500 ton/year."
    },


    {
        position: { lat: -1.251, lng: 101.575 }, // 더미 좌표
        title: "Selago Makmur Plantation",
        millCompanyName: "SELAGO MAKMUR PLANTATION",
        parentCompanyName: "INCASI RAYA",
        address: "Sei Rumbai, Dharmasraya, West Sumatra",
        province: "SUMATERA BARAT",
        farmArea: "6,065 ha",
        ffbProduction: "58,829 ton/year",
        facilityCapacity: "80 ton/hour",
        cpoProduction: "11,701 ton/year",
        pkProduction: "3,140 ton/year",
        description: "SELAGO MAKMUR PLANTATION은 서부 수마트라 Dharmasraya 지역의 팜 오일 플랜테이션으로, INCASI RAYA 소속입니다. 농장면적: 8000 ha, FFB 생산: 40000 ton/year, 설비 용량: 60 ton/hour, CPO 생산: 19000 ton/year, PK 생산: 4800 ton/year."
    },
    {
        position: { lat: 0.362, lng: 99.634 }, // 더미 좌표
        title: "Pasamanan Marahma Sejahtera",
        millCompanyName: "PASAMANAN MARAHMA SEJAHTERA",
        parentCompanyName: "INCASI RAYA",
        address: "Sei Aur, U.Gading, Pasaman Barat, West Sumatra",
        province: "SUMATERA BARAT",
        farmArea: "4,025 ha",
        ffbProduction: "11,209 ton/year",
        facilityCapacity: "40 ton/hour",
        cpoProduction: "2,145 ton/year",
        pkProduction: "619 ton/year",
        description: "PASAMANAN MARAHMA SEJAHTERA는 서부 수마트라 Pasaman Barat 지역의 팜 오일 생산 시설로, INCASI RAYA 소속입니다. 농장면적: 6500 ha, FFB 생산: 32000 ton/year, 설비 용량: 45 ton/hour, CPO 생산: 16000 ton/year, PK 생산: 4100 ton/year."
    },
    {
        position: { lat: 0.333, lng: 99.383 }, // 더미 좌표
        title: "Bintara Tani Nusantara",
        millCompanyName: "BINTARA TANI NUSANTARA",
        parentCompanyName: "INCASI RAYA",
        address: "Ds.Jorong Kiawai Timur, Kec.Sungai Beremas, Pasaman Barat, West Sumatra",
        province: "SUMATERA BARAT",
        farmArea: "7,185 ha",
        ffbProduction: "172,870 ton/year",
        facilityCapacity: "100 ton/hour",
        cpoProduction: "37,769 ton/year",
        pkProduction: "8,315 ton/year",
        description: "BINTARA TANI NUSANTARA는 서부 수마트라 Pasaman Barat 지역의 팜 오일 생산 시설로, INCASI RAYA 소속입니다. 농장면적: 6000 ha, FFB 생산: 30000 ton/year, 설비 용량: 40 ton/hour, CPO 생산: 15000 ton/year, PK 생산: 4000 ton/year."
    },
    {
        position: { lat: -1.320, lng: 101.649 }, // 더미 좌표
        title: "Pangian",
        millCompanyName: "INCASI RAYA",
        parentCompanyName: "INCASI RAYA",
        address: "Sei Rumbai, Dharmasraya, West Sumatra",
        province: "SUMATERA BARAT",
        farmArea: "6,899 ha",
        ffbProduction: "(no data) ton/year",
        facilityCapacity: "50 ton/hour",
        cpoProduction: "(no data) ton/year",
        pkProduction: "(no data) ton/year",
        description: "PANGIAN은 INCASI RAYA 그룹의 팜 오일 생산 시설로, 서부 수마트라 Dharmasraya 지역에서 운영됩니다. 농장면적: 7000 ha, FFB 생산: 34000 ton/year, 설비 용량: 50 ton/hour, CPO 생산: 17000 ton/year, PK 생산: 4300 ton/year."
    }
];
