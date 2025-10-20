export const generateDayWiseTimeSeries = (baseval: number, count: number, yrange: { min: number; max: number }) => {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = baseval;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([x, y]);
      baseval += 86400000; // Increment by one day
      i++;
    }
    return series;
  };
  