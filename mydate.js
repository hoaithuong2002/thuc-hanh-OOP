class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay() {
        return this.day;
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    setDay(day) {
        this.day = day;
    }

    setMonth(month) {
        this.month = month;
    }

    setYear(year) {
        this.year = year;
    }
    setDate(day,month,year){
        this.setDay(day.toString());
        this.setMonth(month.toString());
        this.setYear(year.toString());
    }
    toString(){
        return this.day + "/" + this.month + "/" + this.year;
    }

}
