import uuid from 'uuid';
export default {
    disable: false,
    loading: false,
    id: uuid.v1(),
    date: new Date().toLocaleDateString(),
    showHourly: false,
    showWeekly: true,
    search: {
        city: 'London',
        lat: '',
        lng: '',
        id: uuid.v1(),
        coorodinates: '',
        units: 'metric'
    },
    city: '',
    list: [],
    daily: []
};

