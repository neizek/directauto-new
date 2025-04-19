export function required(value: string | number | boolean) {
	return !!value || 'This field is required';
}

export function isEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email address';
}

export function isPhone(value: string) {
	return /^\+?[1-9]\d{1,14}$/.test(value) || 'Invalid phone number';
}

export function isVin(value: string) {
	return /\b[(A-H|J-N|P|R-Z|0-9)]{17}\b/.test(value) || 'Invalid VIN code';
}

export function minValue(value: number, number: number) {
	return value >= number || `Minimum ${number}`;
}

export function maxValue(value: number, number: number) {
	return value <= number || `Maximum ${number}`;
}
