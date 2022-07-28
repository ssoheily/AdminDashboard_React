let  xAxisData =   [
    { "name":"jan", "Sale": 111_000},
    { "name":"feb", "Sale": 117_000},
    { "name":"mar", "Sale": 133_000},
    { "name":"apr", "Sale": 216_000},
    { "name":"may", "Sale": 126_000},
    { "name":"jun", "Sale": 122_000},
    { "name":"jul", "Sale": 562_000},
    { "name":"agu", "Sale": 112_000},
    { "name":"sept", "Sale":712_000},
    { "name":"oct", "Sale": 0},
    { "name":"nov", "Sale": 132_000},
    { "name":"dec", "Sale": 746_000},
]
const newMembers = [
    {
        id: 1,
        username: 'Mohammad Amin',
        title: 'Web Developer',
        img:'images/1.jpg'
    },
    {
        id: 2,
        username: 'Sasas Moq',
        title: 'Seo Eng',
        img:'images/2.jpg'
    },
    {
        id: 3,
        username: 'Zahra Agayi',
        title: 'Weblog',
        img:'images/3.jpg'
    },
    {
        id: 4,
        username: 'Qadir Yolme',
        title: 'Hacker',
        img:'images/4.jpg'
    },
]

const transactions = [
    {
        id: 1,
        customer: 'alex Yolme',
        date: '12 Jun 2022',
        amount: 123,
        status: 'Approved',
        img: 'images/1.jpg'
    },
    {
        id: 2,
        customer: "alex müller",
        date: '23 Jul 2022',
        amount: 123,
        status: 'Declined',
        img: 'images/2.jpg'
    },
    {
        id: 3,
        customer: 'sam soli',
        date: '28 May 2022',
        amount: 123,
        status: 'Pending',
        img: 'images/3.jpg'
    },
    {
        id: 4,
        customer: 'Sasan rend',
        date: '1 Feb 2022',
        amount: 123,
        status: 'Approved',
        img: 'images/4.jpg'
    },
]

let userRows = [
    {
        id: 1,
        username: 'Qadir Yolme',
        avatar: 'images/1.jpg',
        status: 'active',
        transaction: '$129.52',
        email: 'sam.soheil@gmail.com'
    },
    {
        id: 2,
        username: 'Amin Saeedi',
        avatar: 'images/2.jpg',
        status: 'non-active',
        transaction: '$110',
        email: 'sam.soheil@gmail.com'
    },
    {
        id: 3,
        username: 'Sasan Moq',
        avatar: 'images/3.jpg',
        status: 'active',
        transaction: '$98',
        email: 'sam.soheil@gmail.com'
    },
    {
        id: 4,
        username: 'Zahra Agayi',
        avatar: 'images/4.jpg',
        status: 'active',
        transaction: '$0',
        email: 'sam.soheil@gmail.com'
    },
    {
        id: 5,
        username: 'Hamze mohammadi',
        avatar: 'images/4.jpg',
        status: 'active',
        transaction: '$55.98',
        email: 'sam.soheil@gmail.com'
    }
]

export { xAxisData, newMembers, transactions ,userRows} 