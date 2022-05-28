export const bookingRows = [
    { id: 'B4587', guestID: 'G1350', roomID: 'R1546', duration: '3', dateBooked:"01-05-2022", status: 'Successful' },
    { id: 'B3545', guestID: 'G2848', roomID: 'R2351', duration: '4', dateBooked:"01-05-2022", status: 'Pending' },
    { id: 'B9864', guestID: 'G3388', roomID: 'R3020', duration: '30', dateBooked:"01-05-2022", status: 'Pending' },
    { id: 'B9874', guestID: 'G4358', roomID: 'R4523', duration: '365', dateBooked:"01-05-2022", status: 'Failed' },
    { id: 'B3240', guestID: 'G5028', roomID: 'R5052', duration: '48', dateBooked:"01-05-2022", status: 'Failed' },
    { id: 'B0051', guestID: 'G6639', roomID: 'R6069', duration: '5', dateBooked:"01-05-2022", status: 'Successful' },
    { id: 'B1115', guestID: 'G7242', roomID: 'R7354', duration: '70', dateBooked:"01-05-2022", status: 'Successful' },
    { id: 'B2228', guestID: 'G8961', roomID: 'R8534', duration: '8', dateBooked:"01-05-2022", status: 'Pending' },
    { id: 'B4435', guestID: 'G9246', roomID: 'R9354', duration: '10', dateBooked:"01-05-2022", status: 'Failed' },
    { id: 'B3545', guestID: 'G1001', roomID: 'R1035', duration: '1', dateBooked:"01-05-2022", status: 'Failed' },

  ];

  export const transactionRows = [
    { id: "T541815", bookingID: 'B4587', amount: 50, paymentMethod: 'cash', dateCompleted:"01-05-2022", status: 'Successful' },
    { id: "T541015", bookingID: 'B3545', amount: 50, paymentMethod: 'onilne', dateCompleted:"01-05-2022", status: 'Pending' },
    { id: "T581215", bookingID: 'B9864', amount: 50, paymentMethod: 'online', dateCompleted:"01-05-2022", status: 'Pending' },
    { id: "T541215", bookingID: 'B9874', amount: 50, paymentMethod: 'online', dateCompleted:"01-05-2022", status: 'Failed' },
    { id: "T546215", bookingID: 'B3240', amount: 50, paymentMethod: 'cash', dateCompleted:"01-05-2022", status: 'Failed' },
    { id: "T543215", bookingID: 'B0051', amount: 50, paymentMethod: 'online', dateCompleted:"01-05-2022", status: 'Successful' },
    { id: "T547215", bookingID: 'B1115', amount: 50, paymentMethod: 'cash', dateCompleted:"01-05-2022", status: 'Successful' },
    { id: "T586745", bookingID: 'B2228', amount: 50, paymentMethod: 'cash', dateCompleted:"01-05-2022", status: 'Pending' },
    { id: "T545215", bookingID: 'B4435', amount: 50, paymentMethod: 'online', dateCompleted:"01-05-2022", status: 'Failed' },
    { id: "T350484", bookingID: 'B3545', amount: 50, paymentMethod: 'online', dateCompleted:"01-05-2022", status: 'Failed' },

  ];



  export const guestRows = [
    { id:"G1350",name: 'Snow', roomID: 'R1546', checkIn:"01-05-2022", checkOut:"01-05-2022", status: 'Checked-In' },
    { id:"G2848", name: 'Lannister', roomID: 'R2351', checkIn:"01-05-2022", checkOut:"01-05-2022", status: 'Pending' },
    { id:"G3388", name: 'Lannister', roomID: 'R3020', checkIn:"01-05-2022", checkOut:"01-05-2022", status: 'Pending' },
    { id:"G4358", name: 'Stark', roomID: 'R4523', checkIn:"01-05-2022", checkOut:"01-05-2022", status: 'Checked-Out' },
    { id:"G5028", name: 'Targaryen', roomID: 'R5052', checkIn:"01-05-2022", checkOut:"01-05-2022", status: 'Checked-Out' },
    { id:"G6639", name: 'Melisandre', roomID: 'R6069', checkIn:"01-05-2022", checkOut:"01-05-2022", status: 'Checked-In' },
    { id:"G7242", name: 'Clifford', roomID: 'R7354', checkIn:"01-05-2022", checkOut:"01-05-2022", status: 'Checked-In' },
    { id:"G8961", name: 'Frances', roomID: 'R8534', checkIn:"01-05-2022", checkOut:"01-05-2022", status: 'Pending' },
    { id:"G9246", name: 'Roxie', roomID: 'R9354', checkIn:"01-05-2022", checkOut:"01-05-2022", status: 'Checked-Out' },
    { id:"G1001", name: 'Roxie', roomID: 'R1035', checkIn:"01-05-2022", checkOut:"01-05-2022", status: 'Checked-Out' },

  ];



  export const dboptionsChart = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    theme: {
      monochrome: {
        enabled: true,
        color: '#31316A',
      }
    },
    tooltip: {
      fillSeriesColor: false,
      onDatasetHover: {
        highlightDataSeries: false,
      },
      theme: 'light',
      style: {
        fontSize: '12px',
        fontFamily: 'Inter',
      },
    },
};

export const dbseriesAreaChart = [{
  name: 'Bookings',
  data: [120, 160, 200, 470, 420, 150, 470, 750, 650, 190, 140,100]
}];




export const AGoptionsChart = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  theme: {
    monochrome: {
      enabled: true,
      color: '#31316A',
    }
  },
  tooltip: {
    fillSeriesColor: false,
    onDatasetHover: {
      highlightDataSeries: false,
    },
    theme: 'light',
    style: {
      fontSize: '12px',
      fontFamily: 'Inter',
    },
  },
};

export const AGseriesAreaChart = [{
  name: 'Guests',
  data: [120, 160, 200, 470, 420, 150, 470, 750, 650, 190, 140,100]
}];




export const ARoptionsChart = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  theme: {
    monochrome: {
      enabled: true,
      color: '#31316A',
    }
  },
  tooltip: {
    fillSeriesColor: false,
    onDatasetHover: {
      highlightDataSeries: false,
    },
    theme: 'light',
    style: {
      fontSize: '12px',
      fontFamily: 'Inter',
    },
  },
};

export const ARseriesLineChart = [{
  name: 'Revenue',
  data: [120, 160, 200, 470, 420, 150, 470, 750, 650, 190, 140,100]
}];





export const ATWoptionsChart = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  theme: {
    monochrome: {
      enabled: true,
      color: '#31316A',
    }
  },
  tooltip: {
    fillSeriesColor: false,
    onDatasetHover: {
      highlightDataSeries: false,
    },
    theme: 'light',
    style: {
      fontSize: '12px',
      fontFamily: 'Inter',
    },
  },
};

export const ATWseriesBarChart = [{
  name: 'Bookings',
  data: [120, 160, 200, 470, 420, 150, 470, 750, 650, 190, 140,100]
}];