import 'moment/locale/id';
import moment from 'moment';


const Moment = (dateTime) => {
    const date = moment().subtract(17, 'hours').format();
    return moment(dateTime).startOf('day').from(date);
}
export default Moment