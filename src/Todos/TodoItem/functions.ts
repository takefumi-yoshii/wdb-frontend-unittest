export function getDateLabel(stringDate: string) {
  const d = new Date(stringDate);
  const yyyy = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  return `${yyyy}/${month + 1}/${date} ${hour}:${minutes}:${seconds}`;
}
