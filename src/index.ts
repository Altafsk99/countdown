  export interface CountdownResult {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  
  export const countDown = (targetDate: string): CountdownResult => {
    const parsedDate = new Date(targetDate);
  
    // Check if targetDate is a valid Date
    if (isNaN(parsedDate.getTime())) {
      throw new Error("Invalid targetDate format. Please provide a valid date-time string.");
    }
  
    const currentDate = new Date();
    const diffMilliseconds = parsedDate.getTime() - currentDate.getTime();
  
    if (diffMilliseconds <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  
    const remainingDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor(
      (diffMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const remainingMinutes = Math.floor(
      (diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
    const remainingSeconds = Math.floor(
      (diffMilliseconds % (1000 * 60)) / 1000
    );
  
    return {
      days: remainingDays,
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSeconds,
    };
  };
  