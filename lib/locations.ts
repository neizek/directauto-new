export interface CarService {
	id: number;
	address: string;
	phone?: string;
	coordinates: [number, number];
}

export const carServicesList: CarService[] = [
	{
		id: 0,
		address: 'Brīvības iela 250A, Rīga',
		phone: ' (+371) 20441133 ',
		coordinates: [24.1731289, 56.9748427],
	},
	{
		id: 1,
		address: 'Tvaika iela 3, Rīga',
		phone: '(+371) 67391995 ',
		coordinates: [24.1159287, 56.9975224],
	},
];

export const carServicesOptions = carServicesList.map((location) => ({
	label: location.address,
	value: location.id,
}));
