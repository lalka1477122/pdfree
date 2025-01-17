// 120
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FormatDate = (date) => {
    return new Intl.DateTimeFormat('ru-RU',
        {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }
    ).format(date).replace('.')
}