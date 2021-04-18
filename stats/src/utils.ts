export const dateStringToDate = (dateString: string): Date => {
    //28/10/2018 date split
    const dateParts = dateString.split("/").map((value: string): number => {
        return parseInt(value);
    });
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    return new Date(day, month - 1, year);
};
