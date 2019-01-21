const ticketDummyApiResponseJson = (length) => {
    let response = [];
    for (var i = 0; i < length && i < ticketsDummyResponseJson.length; i++) {
        response.push(ticketsDummyResponseJson[i])
    }
    return response;
};

const ticketsDummyResponseJson = [
    {
        ticket: 'DJ-12345',
        key: 1,
        team: 'Team 2',
        status: 'Ready for development',
        reporter: 'Christopher Sutton',
        assignee: 'Rahul Nehru',
        description: 'Bug fixes',
        featureState: 'On'
    },
    {
        ticket: 'DJ-12346',
        key: 2,
        team: 'Team 2',
        status: 'Amazing',
        reporter: 'Christopher Sutton',
        assignee: 'Rahul Nehru',
        description: 'Bug fixes',
        featureState: 'On'
    }
];

export { ticketDummyApiResponseJson };