import addLeadingZero from './addLeadingZero';

export default function render({ days, hours, minutes, seconds }) {
    refs.timerDays.textContent = addLeadingZero(days);
    refs.timerhours.textContent = addLeadingZero(hours);
    refs.timerminutes.textContent = addLeadingZero(minutes);
    refs.timerseconds.textContent = addLeadingZero(seconds);
};