import dayjs from 'dayjs';
import { type  Dayjs } from 'dayjs';

export const getMonth = (month = dayjs().month()) => {
	const year = dayjs().year();
	const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
	console.log(firstDateOfMonth);
	let currentMonthCount = 0 - firstDateOfMonth.day();
	const daysMatrix = new Array(6).fill([]).map(()=>{
		return new Array(7).fill(null).map(()=>{
		currentMonthCount++;
			return dayjs(new Date(year, month, currentMonthCount));
		});
	})
	return daysMatrix;


}

export const isCurrentDay = (date: Dayjs) => {
    return dayjs(date).format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY");
  };

export  const isCurrentMonth = (date: Dayjs) => {
    return dayjs(date).format("MM-YYYY") === dayjs().format("MM-YYYY");
  };