import { gsap } from 'gsap/all';

export function pauseAnimations() {
	gsap.globalTimeline.pause();
}

export function resumeAnimations() {
	gsap.globalTimeline.resume();
}
