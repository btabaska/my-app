export const formatDate = (date: Date, daysAgo) => {
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split("T")[0];
};
