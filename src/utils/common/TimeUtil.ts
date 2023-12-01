export const getTime = () => {
  const hours: number = new Date().getHours()
  let message: string = ''
  if (hours < 6) {
    message = 'Good Night'
  } else if (hours < 12) {
    message = 'Good Morning'
  } else if (hours < 18) {
    message = 'Good Afternoon'
  } else {
    message = 'Good Evening'
  }
  return message
}
