function zeroPadStart(value: number) {
  return String(value).padStart(2, "0");
}

export function getDateLabel(value: string) {
  const d = new Date(value);
  const yyyy = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const day = `${yyyy}/${zeroPadStart(
    month + 1
  )}/${zeroPadStart(date)}`;
  const time = `${zeroPadStart(
    hour
  )}:${zeroPadStart(minutes)}:${zeroPadStart(
    seconds
  )}`;
  return `${day} ${time}`;
}
