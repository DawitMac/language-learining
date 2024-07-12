export const menu = [
    {
        name : "About" , 
        url : "/about"
    },
    {
        name : "Why OLMS?" , 
        url : "/about"
    },
    {
        name : "Pricing" , 
        url : "/pricing"
    },
    {
        name : "Our Teachers" , 
        url : "/about"
    },
    {
        name : "FAQs" , 
        url : "/about"
    },
    {
        name : "Contact" , 
        url : "/contact"
    }
]

export const teachers = [
    {
        name : "Teacher Mark",
        img : '/teacher6.jfif',
        age : "29"
    },
    {
        name : "Teacher Henok",
        img : '/teacher2.jfif',
        age : "28"
    },
    {
        name : "Teacher Gerine",
        img : '/teacher3.jfif',
        age : "35"
    },
    {
        name : "Teacher Gerine",
        img : '/teacher4.jfif',
        age : "29"
    },
    {
        name : "Teacher Lemma",
        img : '/teacher5.jpg',
        age : "31"
    },
    ,
    {
        name : "Teacher Henok",
        img : '/teacher2.jfif',
        age : "28"
    },
    {
        name : "Teacher Mark",
        img : '/teacher6.jfif',
        age : "29"
    },
    {
        name : "Teacher Gerine",
        img : '/teacher3.jfif',
        age : "35"
    } 
]

export const pricings = [
    {
        amount : 49 ,
        quote1 : "Up to 8 Sessions / month",
        qoute2 : "(Average of 2 sessions a week)",
        choosen : false,
        qoute : "25 minutes of a Private Lesson"
    },
    {
        amount : 60 ,
        quote1 : "Up to 12 Sessions / month",
        qoute2 : "(Average of 3 sessions a week)",
        choosen : true,
        qoute : "25 minutes of a Private Lesson"
    },
    {
        amount : 76 ,
        quote1 : "Up to 16 Sessions / month",
        qoute2 : "(Average of 5 sessions a week)",
        choosen : false,
        qoute : "25 minutes of a Private Lesson"
    },
    {
        amount : 90 ,
        quote1 : "Up to 20 Sessions / month",
        qoute2 : "(Average of 5 sessions a week)",
        choosen : false,
        qoute : "25 minutes of a Private Lesson"
    },
]

export const questions =[
  "How do we pay?",
  "Does the subscription renew automatically every month?",
  "Is the app also suitable for low levels of English?",
  "I don't feel comfortable with my level, how will I be able to speak for 25 minutes straight in English only?",
  "At what level are the teachers in the app?",
  "What about their accent? Do they have a strong accent?",
  "Is it possible to schedule a lesson day after day with the same teacher?",
  "When can lessons be scheduled ?",
  "Does the teacher send homework or notes?",
  "If I registered and paid on 09/10, when will the future charge be reduced? How long am I committed to this package?"
]

export const user = [
    { 
        email : "mekonendawit5@gmail.com",
        password : "55555"
    },
    {
        email : "tigestugaraneh5@gmail.com",
        password : "12345"
    }
]

export const activities = [ 
    {
        data : "Payment received from John Doe of $385.90" ,
        time : "09:46" ,
        bColor : '#5D87FF'
    },
    {
        data : "PNew sale recorded #ML-3467" ,
        time : "09:46" ,
        bColor : '#49BEFF'
    },
    {
        data : "Payment was made of $64.95 to Michael Anderson" ,
        time : "09:46" ,
        bColor : '#13DEB9'
    },
    {
        data : "New sale recorded #ML-3467" ,
        time : "09:46" ,
        bColor : '#FFAE1F'
    },
    {
        data : "Project meeting" ,
        time : "09:46" ,
        bColor : '#FA896B'
    },
    {
        data : "Payment received from John $385.90" ,
        time : "09:46" ,
        bColor : '#539BFF'
    },
    {
        data : "New sale recorded #ML-3467" ,
        time : "09:46" ,
        bColor : '#5D87FF'
    },
    
]

 export const chartData = {
    labels: [
      'Total',
      'Completed',
      'Cancelled'
    ],
    datasets: [{
      label: 'Profit',
      data: [300, 50, 100],
      backgroundColor: [
        '#5D87FF',
        '#70C274',
        '#DA0E33'
      ],
      hoverOffset: 4
    }]
  };

  export const invoices = [
    {
       id: "INV-1990" , 
       date : "24 jun 2024" ,
       price : "$83.74",
       type : "PDF"
    },
    {
        id: "INV-1991" , 
        date : "23 jun 2024" ,
        price : "$97.14",
        type : "PDF"
     },
     {
        id: "INV-1992" , 
        date : "22 jun 2024" ,
        price : "$68.71",
        type : "PDF"
     },
     {
        id: "INV-1993" , 
        date : "21 jun 2024" ,
        price : "$85.21",
        type : "PDF"
     },
     {
        id: "INV-1994" , 
        date : "20 jun 2024" ,
        price : "$52.17",
        type : "PDF"
     },
     {
        id: "INV-1995" , 
        date : "19 jun 2024" ,
        price : "$25.18",
        type : "PDF"
     },

  ]

  export const subOverview = [
     {
        month : "Jan",
        day : "9",
        isActive : false
     },
     {
        month : "Apr",
        day : "2",
        isActive : true
     },
     {
        month : "May",
        day : "7",
        isActive : false
     },
     {
        month : "Jun",
        day : "4",
        isActive : false
     },
     {
        month : "Jul",
        day : "6",
        isActive : false
     },
     {
        month : "Jan",
        day : "8",
        isActive : false
     },
  ]

export const subUpcomming = [
    {
        num : 2 ,
        info : "Subscription renewal alert",
        time : "10:00-11:30",
        isActive : false
    },
    {
        num : 8 ,
        info : "Payment Due",
        time : "11:00-12:30",
        isActive : true
    },
    {
        num : 11 ,
        info : "Subscription upgrade",
        time : "10:00-11:30",
        isActive : false
    },
]

