export const Data = [
	{
		status: 'active',
		name: 'NIKE Sneaker Campaign Summer II',
		timeRemaining: 3,
		instagram: true,
		snapchat: true,
		watch: true,
		img: 'nike.png',
		influencersCount: 9,
		instaStats: {
			reach: '12 567',
			likes: '1 789',
			comments: '876',
		},
		snapchatStats: {
			opens: '10 782',
			screens: '789',
			completion: '67',
		},
	},
	{
		status: 'active',
		name: '#DOYOUYOGA Campaign',
		timeRemaining: 8,
		instagram: true,
		snapchat: false,
		watch: false,
		img: 'yoga.png',
		influencersCount: 11,
		instaStats: {
			reach: '34 567',
			likes: '5 789',
			comments: '234',
		},
	},
];

export const ToDoData = [
	{
		name: 'Ellaria Dorne',
		type: 'content',
		activity: 'uploaded instagram content for proof to your campaign ',
		campaign: 'Nike Sneaker Campaign II',
		date: '02.07.1016',
		text: "Who sasy you can't be elegant in sneakers?! :) ",
		hashTags:
			'#nike #sneakers #morningoutfit #liveyourlife #fashion #dailyfashion #fashionista',
		img: 'content1.png',
	},
	{
		name: 'Amy Champeon',
		type: 'person',
		activity: ' just applied to your open campaign',
		campaign: 'Tennis clothing for men',
		insta: '34 567',
		snapchat: '3 567',
		img: 'dp.png',
	},
	{
		name: 'Mike Jones',
		type: 'content',
		activity: 'published content to instagram for campign',
		campaign: '#DOUYOUYOGA',
		date: '02.07.1016',
		text: ' My new yoga pants from Nike has arrived, I adore it!',
		hashTags:
			' #nike #yoga #sun  #namaste #liveyourlife #fashion #dailyfashion #sport #sporty #nature',
		img: 'content2.png',
	},
];

export const Influencers = [
	{
		name: 'Mildred Estrada',
		rate: 25,
		img: 'dp1.png',
	},
	{
		name: 'Charlotte Morris',
		rate: 20,
		img: 'dp2.png',
	},
	{
		name: 'Sadie Brooks',
		rate: 18,
		img: 'dp3.png',
	},
	{
		name: 'Mary Nichols',
		rate: 18,
		img: 'dp4.png',
	},
	{
		name: 'Teresa Austin',
		rate: 17,
		img: 'dp5.png',
	},
];

export const ChartData = {
	weekly: [
		{
			id: 'stats',
			color: 'hsl(340, 100%, 48%)',
			posts: '123',
			likes: '5 789',
			snaps: '34 567',
			opens: '5 789',
			data: [
				{
					x: 'MON',
					y: 0,
				},
				{
					x: 'TUE',
					y: 25,
				},
				{
					x: 'WED',
					y: 15,
				},
				{
					x: 'THU',
					y: 60,
				},
				{
					x: 'FRI',
					y: 25,
				},
				{
					x: 'SAT',
					y: 100,
				},
				{
					x: 'SUN',
					y: 50,
				},
			],
		},
	],
	monthly: [
		{
			id: 'stats',
			color: 'hsl(340, 100%, 48%)',
			posts: '1 123',
			likes: '55 789',
			snaps: '64 567',
			opens: '15 789',
			data: [
				{
					x: 'JAN',
					y: 0,
				},
				{
					x: 'FEB',
					y: 45,
				},
				{
					x: 'MAR',
					y: 65,
				},
				{
					x: 'APR',
					y: 60,
				},
				{
					x: 'MAY',
					y: 100,
				},
			],
		},
	],
};
