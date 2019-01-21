const dummyApiResponseJson = (length) => {
    let response = [];
    for (var i = 0; i < length && i < dummyResponseJson.length; i++) {
        response.push(dummyResponseJson[i])
    }
    return response;
};

const dummyResponseJson = [
    {
        key: 1,
        tag: "AUK.feature/DJ-21502.19.01.18.1441",
        deployable: true,
        components: [
            {
                key: 1,
                name: "FEATURE-DJ21502-2019.01.18.142515",
                component: "Customer",
                status: "green",
                deployable: true
            },
            {
                key: 88,
                name: "MASTER-2018.11.22.152430",
                component: "Payment",
                status: "green",
                deployable: true
            },
            {
                key: 89,
                name: "FEATURE-DJ21502-2019.01.18.120553",
                component: "Catalogue",
                status: "green",
                deployable: true
            },
            {
                key: 90,
                name: "MASTER-2018.08.20.093737",
                component: "Admin",
                status: "green",
                deployable: true
            },
            {
                key: 91,
                name: "MASTER-2019.01.08.154711",
                component: "Submission",
                status: "green",
                deployable: true
            }
        ]
    },
    {
        key: 2,
        tag: "AUK.master.19.01.16.1659",
        deployable: true,
        components: [
            {
                key: 83,
                name: "MASTER-2018.11.22.152430",
                component: "Payment",
                status: "green",
                deployable: true
            },
            {
                key: 84,
                name: "MASTER-2019.01.16.165057",
                component: "Catalogue",
                status: "green",
                deployable: true
            },
            {
                key: 85,
                name: "MASTER-2018.08.20.093737",
                component: "Admin",
                status: "green",
                deployable: true
            },
            {
                key: 86,
                name: "MASTER-2019.01.08.154711",
                component: "Submission",
                status: "green",
                deployable: true
            },
            {
                key: 87,
                name: "MASTER-2019.01.16.160703",
                component: "Customer",
                status: "green",
                deployable: true
            }
        ]
    },
    {
        key: 3,
        tag: "AUK.master.19.01.16.1701",
        deployable: true,
        components: [
            {
                key: 78,
                name: "MASTER-2018.11.22.152430",
                component: "Payment",
                status: "green",
                deployable: true
            },
            {
                key: 79,
                name: "MASTER-2019.01.16.165057",
                component: "Catalogue",
                status: "green",
                deployable: true
            },
            {
                key: 80,
                name: "MASTER-2018.08.20.093737",
                component: "Admin",
                status: "green",
                deployable: true
            },
            {
                key: 81,
                name: "MASTER-2019.01.08.154711",
                component: "Submission",
                status: "green",
                deployable: true
            },
            {
                key: 82,
                name: "MASTER-2019.01.16.164656",
                component: "Customer",
                status: "green",
                deployable: true
            }
        ]
    },
    {
        key: 4,
        tag: "AUK.master.19.01.16.1724",
        deployable: true,
        components: [
            {
                key: 73,
                name: "MASTER-2018.11.22.152430",
                component: "Payment",
                status: "green",
                deployable: true
            },
            {
                key: 74,
                name: "MASTER-2019.01.16.165057",
                component: "Catalogue",
                status: "green",
                deployable: true
            },
            {
                key: 75,
                name: "MASTER-2018.08.20.093737",
                component: "Admin",
                status: "green",
                deployable: true
            },
            {
                key: 76,
                name: "MASTER-2019.01.08.154711",
                component: "Submission",
                status: "green",
                deployable: true
            },
            {
                key: 77,
                name: "MASTER-2019.01.16.170857",
                component: "Customer",
                status: "green",
                deployable: true
            }
        ]
    },
    {
        key: 5,
        tag: "AUK.master.19.01.16.1907",
        deployable: true,
        components: [
            {
                key: 68,
                name: "MASTER-2018.11.22.152430",
                component: "Payment",
                status: "green",
                deployable: true
            },
            {
                key: 69,
                name: "MASTER-2019.01.16.185059",
                component: "Catalogue",
                status: "green",
                deployable: true
            },
            {
                key: 70,
                name: "MASTER-2018.08.20.093737",
                component: "Admin",
                status: "green",
                deployable: true
            },
            {
                key: 71,
                name: "MASTER-2019.01.08.154711",
                component: "Submission",
                status: "green",
                deployable: true
            },
            {
                key: 72,
                name: "MASTER-2019.01.16.185451",
                component: "Customer",
                status: "green",
                deployable: true
            }
        ]
    }
];

export { dummyApiResponseJson };