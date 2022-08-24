// Used to format date into YYYY MM DD format for API call,
// Takes is 2 args, Date object and how many days ago you want the API call to start
export const formatDate = (date: Date, daysAgo) => {
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split("T")[0];
};
