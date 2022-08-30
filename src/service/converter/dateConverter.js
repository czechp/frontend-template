import dayjs from "dayjs";

const FULL_DATE_TIME_FORMAT = "HH:mm:ss DD.MM.YYYY";


function DateConverter() {
    this.toFullDateTime = (iso) => dayjs(iso).format(FULL_DATE_TIME_FORMAT);
}

export default DateConverter;