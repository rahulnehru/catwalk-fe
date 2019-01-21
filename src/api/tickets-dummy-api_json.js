const ticketsDummyResponseJson = [
  {
    ticket: 'DJ-12345',
    key: 1,
    team: 'Team 2',
    status: 'Ready for development',
    reporter: 'Christopher Sutton',
    assignee: 'Rahul Nehru',
    description: 'Bug fixes',
    featureState: 'On',
    deployable: false,
  },
  {
    ticket: 'DJ-12346',
    key: 2,
    team: 'Team 2',
    status: 'Amazing',
    reporter: 'Christopher Sutton',
    assignee: 'Rahul Nehru',
    description: 'Bug fixes',
    featureState: 'On',
    deployable: true,
  },
];

export default (length) => {
  const response = [];
  for (let i = 0; i < length && i < ticketsDummyResponseJson.length; i += 1) {
    response.push(ticketsDummyResponseJson[i]);
  }
  return response;
};
