<script setup lang="ts">
	const { scrollToAnchor } = useAnchorScroll();
	const route = useRoute();

	onMounted(() => {
		if (route.hash) {
			const targetId = route.hash.substring(1);
			setTimeout(() => {
				scrollToAnchor(targetId);
			}, 200);
		}
	});
</script>

<template>
	<q-page>
		<BlocksMainBlock />
		<BlocksSecondBlock />
		<BlocksOffersBlock />
		<BlocksPaintingBlock />
		<BlocksContactsBlock />
		<BlocksAboutUsBlock />
	</q-page>
</template>
