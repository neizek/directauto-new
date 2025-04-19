<script setup lang="ts">
	import { carServicesOptions } from '~/lib/locations';
	import { offers } from '~/lib/offers';
	import { isEmail, isPhone, maxValue, minValue, required } from '~/lib/validators';
	// const errorsArray: boolean[] = ref([]);
	interface FormField {
		value: string | number;
		rules: ((value: string | number) => boolean | string)[];
	}

	interface Form {
		[key: string]: FormField;
	}

	const engineTypes = [
		{ label: 'Дизель', value: 'diesel' },
		{ label: 'Бензин', value: 'gasoline' },
		{ label: 'Бензин / газ', value: 'gas' },
		{ label: 'Гибрид', value: 'hybrid' },
		{ label: 'Электрический', value: 'electro' },
	];

	const formData: Ref<Form> = ref({
		name: {
			value: '',
			rules: [required],
		},
		email: {
			value: '',
			rules: [required, isEmail],
		},
		phone: {
			value: '',
			rules: [required, isPhone],
		},
		make: {
			value: '',
			rules: [required],
		},
		model: {
			value: '',
			rules: [required],
		},
		registrationNumber: {
			value: '',
			rules: [],
		},
		vin: {
			value: '',
			rules: [],
		},
		year: {
			value: '',
			rules: [
				required,
				(value: number) => minValue(value, 1980),
				(value: number) => maxValue(value, new Date().getFullYear()),
			],
		},
		engineType: {
			value: '',
			rules: [required],
		},
		engineVolume: {
			value: '',
			rules: [required],
		},
		serviceList: {
			value: [],
			rules: [required],
		},
		location: {
			value: '',
			rules: [required],
		},
		comments: {
			value: '',
			rules: [],
		},
	});
	const step = ref(1);

	const stepFields: Record<number, string[]> = {
		1: ['name', 'email', 'phone'],
		2: ['make', 'model', 'registrationNumber', 'vin', 'year', 'engineType', 'engineVolume'],
		3: ['serviceList', 'location', 'comments'],
	};

	const stepper: Ref<HTMLElement | null> = ref(null);

	function validateStep() {
		const currentFields = stepFields[step.value];
		let isValid = true;

		currentFields.forEach((fieldKey) => {
			const field = formData.value[fieldKey];
			const rules = field.rules || [];
			for (const rule of rules) {
				const result = rule(field.value);
				if (result !== true) {
					isValid = false;
					break;
				}
			}
		});

		return isValid;
	}

	function nextStep() {
		if (validateStep() && step.value < 4) {
			step.value++;
		}
	}

	function prevStep() {
		if (step.value > 1) step.value--;
	}

	function onSubmit() {
		if (step.value === 4) {
			console.log('Form submitted:', formData.value);
		}
	}
</script>

<template>
	<q-form @submit="onSubmit">
		<q-stepper
			ref="stepper"
			v-model="step"
			flat
			:contracted="!$q.screen.gt.md"
			alternative-labels
			active-color="accent"
			class="Stepper bg-transparent"
			animated>
			<q-step :name="1" title="Ваши данные" icon="settings" :done="step > 1">
				<div class="column q-gutter-y-md">
					<q-input
						v-model="formData.name.value"
						label="Имя"
						:rules="formData.name.rules"
						autofocus />
					<q-input
						v-model="formData.email.value"
						label="Email"
						type="email"
						:rules="formData.email.rules" />
					<q-input
						v-model="formData.phone.value"
						label="Телефон"
						type="tel"
						:rules="formData.phone.rules" />

					<q-btn
						icon="navigate_next"
						size="lg"
						color="accent"
						label="Continue"
						@click="nextStep" />
				</div>
			</q-step>

			<q-step :name="2" title="Автомобиль" icon="directions_car" :done="step > 2">
				<div class="column q-gutter-y-md">
					<q-input
						v-model="formData.make.value"
						label="Make"
						:rules="formData.make.rules" />
					<q-input
						v-model="formData.model.value"
						label="Model"
						:rules="formData.model.rules" />
					<q-input
						v-model="formData.registrationNumber.value"
						label="Registration Number"
						:rules="formData.registrationNumber.rules" />
					<q-input v-model="formData.vin.value" label="VIN" :rules="formData.vin.rules" />
					<q-input
						v-model="formData.year.value"
						label="Year"
						type="number"
						:rules="formData.year.rules" />
					<q-select
						v-model="formData.engineType.value"
						:options="engineTypes"
						label="Engine Type"
						:rules="formData.engineType.rules" />
					<q-input
						v-model="formData.engineVolume.value"
						label="Engine Volume"
						type="number"
						:rules="formData.engineVolume.rules" />
					<div class="row q-gutter-x-md">
						<q-btn label="Назад" outline @click="prevStep" />
						<q-btn color="primary" label="Continue" @click="nextStep" />
					</div>
				</div>
			</q-step>

			<q-step :name="3" title="Завершение" icon="assignment">
				<div class="column q-gutter-y-md">
					<q-select
						v-model="formData.serviceList.value"
						label="Service List"
						multiple
						:options="
							offers.map((offer, index) => ({ label: $t(offer.label), value: index }))
						"
						style="width: 100%"
						:rules="formData.serviceList.rules" />
					<q-select
						v-model="formData.location.value"
						label="Location"
						:options="carServicesOptions"
						:rules="formData.location.rules" />
					<q-input
						v-model="formData.comments.value"
						label="Comments"
						type="textarea"
						:rules="formData.comments.rules" />
					<div class="row q-gutter-x-md">
						<q-btn label="Назад" outline @click="prevStep" />
						<q-btn color="primary" label="Submit" @click="nextStep" />
					</div>
				</div>
			</q-step>
		</q-stepper>
	</q-form>
</template>

<style>
	.Stepper .q-stepper__step-inner {
		padding: 16px 0 0 0;
	}
</style>
