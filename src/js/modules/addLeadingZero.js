export default function addLeadingZero(value) {
    value = value * (-1);
    value = value.toString();
    return value.padStart(2, "0");
};