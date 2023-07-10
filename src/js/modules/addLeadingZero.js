export default function addLeadingZero(value) {
    value = value.toString();
    return value.padStart(2, "0");
};