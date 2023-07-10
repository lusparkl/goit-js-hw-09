import flatpickr from "flatpickr";
import { Notify } from "notiflix";
import "flatpickr/dist/flatpickr.min.css";
import refs from './modules/refs';
import render from "./modules/render";
import convertMs from "./modules/convertMs";

let ms;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date();
        ms = currentDate - selectedDates[0];
        if (ms < 0) {
            refs.startBtn.removeAttribute('disabled');
        } else {
            Notify.failure('please set date in future');
        };
    },
};
const dataUrl = document.querySelector('#datetime-picker');
const dataPicker = flatpickr(dataUrl, options);

refs.startBtn.addEventListener('click', () => {
    refs.startBtn.setAttribute('disabled', '');
    const intervalId = setInterval(() => {
        ms += 1000;
        render(convertMs(ms));
    }, 1000)
})

