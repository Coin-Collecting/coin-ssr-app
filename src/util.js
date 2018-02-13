export const abbreviateMint = mint => {
	switch (mint) {
    case 'Philadelphia':
      return "P";
    case 'Denver':
      return "D";
    case 'San Francisco':
      return "S";
		default:
			return mint;
	}
}

export const issueIds = [
	{
		slug: 'half-cent',
		name: 'Half Cent',
		issueIds: [1, 2, 3, 4, 5]
	}
];