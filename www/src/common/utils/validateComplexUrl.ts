const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/

export const isValidComplexUrl = (url: string) => regex.test(url)
