<script setup lang="ts">
	const formData = ref({
		name: '',
		email: '',
		phone: '',
		make: '',
		model: '',
		registrationNumber: '',
		vin: '',
		year: '',
		engineType: '',
		engineVolume: '',
		serviceList: '',
		location: '',
		comments: '',
	});
	const step = ref(1);
	const stepper: Ref<HTMLElement | null> = ref(null);

	function onSubmit() {
		if (step.value === 4) {
			// Submit the form data to the server or perform any other action
			console.log('Form submitted:', formData.value);
		}
	}
</script>

<template>
	<div class="q-pa-md">
		<q-form @submit="onSubmit">
			<q-stepper
				ref="stepper"
				v-model="step"
				flat
				alternative-labels
				class="bg-black fit"
				color="primary"
				animated>
				<q-step
					:name="1"
					title="Ваши данные"
					icon="settings"
					class="q-gutter-y-md"
					:done="step > 1">
					<q-input
						v-model="formData.name"
						label="Имя"
						:rules="[(val) => !!val || 'Имя обязательно']"
						autofocus
						:loading="step === 1" />
					<q-input
						v-model="formData.email"
						label="Email"
						type="email"
						:rules="[(val) => !!val || 'Email обязателен']" />
					<q-input
						v-model="formData.phone"
						label="Телефон"
						type="tel"
						:rules="[(val) => !!val || 'Телефон обязателен']" />
					<q-btn
						color="primary"
						label="Continue"
						class="q-mt-md"
						@click="$refs.stepper.next()" />
				</q-step>

				<q-step
					:name="2"
					title="Автомобиль"
					caption="Optional"
					icon="create_new_folder"
					:done="step > 2">
					<q-input
						v-model="formData.make"
						label="Make"
						:rules="[(val) => !!val || 'Make is required']" />
					<q-input
						v-model="formData.model"
						label="Model"
						:rules="[(val) => !!val || 'Model is required']" />
					<q-input
						v-model="formData.registrationNumber"
						label="Registration Number"
						:rules="[(val) => !!val || 'Registration Number is required']" />
					<q-input
						v-model="formData.vin"
						label="VIN"
						:rules="[(val) => !!val || 'VIN is required']" />
					<q-input
						v-model="formData.year"
						label="Year"
						type="number"
						:rules="[(val) => !!val || 'Year is required']" />
					<q-input
						v-model="formData.engineType"
						label="Engine Type"
						:rules="[(val) => !!val || 'Engine Type is required']" />
					<q-input
						v-model="formData.engineVolume"
						label="Engine Volume"
						type="number"
						:rules="[(val) => !!val || 'Engine Volume is required']" />
					<q-btn
						color="primary"
						label="Continue"
						class="q-mt-md"
						@click="$refs.stepper.next()" />
				</q-step>

				<q-step :name="3" title="Завершение" icon="assignment">
					<q-input
						v-model="formData.serviceList"
						label="Service List"
						:rules="[(val) => !!val || 'Service List is required']" />
					<q-input
						v-model="formData.location"
						label="Location"
						:rules="[(val) => !!val || 'Location is required']" />
					<q-input
						v-model="formData.comments"
						label="Comments"
						type="textarea"
						:rules="[(val) => !!val || 'Comments are required']" />
					<q-btn
						color="primary"
						label="Continue"
						class="q-mt-md"
						@click="$refs.stepper.next()" />
				</q-step>
			</q-stepper>
		</q-form>
	</div>
</template>
