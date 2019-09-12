const getAceData = function () {

  return new Promise((resolve, reject) => { 
    const aceData = {
      primaryNav: [
        { label: "Home", url: "./" },
        { label: "Garden & Outdoor", url: "./" },
        { label: "Hardware", url: "./" },
        { label: "Kitchen", url: "./" },
        { label: "Sports", url: "./" },
        { label: "Cars", url: "./" },
        { label: "Tolls & DIY", url: "./" }
      ],
      secondaryNav: [
        { label: "About ACE", url: "./" },
        { label: "Store Locator", url: "./" },
        { label: "Customer Service", url: "./" },
        { label: "Sign In / Register", url: "./" }
      ],
      slideShowNav: [
        { label: "New Arrival", url: "./" },
        { label: "Bulk Deals", url: "./" },
        { label: "360°", url: "./" }
      ],
      productsData: [
        {
          saleItem: true,
          url: '/img/product1.jpg',
          label: 'Ace SmartFLO 5/8 in. Dia. x 100 ft. L Primime Grade Garden Hose',
          price: '12.99',
          rate: 5
        },
        {
          newItem: true,
          url: '/img/product2.jpg',
          label: 'Ace SmartFLO 5/8 in.',
          price: '7.99',
          rate: 5
        },
        {
          onlineDealItem: true,
          url: '/img/product3.jpg',
          label: 'Ace SmartFLO 5/8 in.',
          price: '7.99',
          rate: 5
        },
        {
          url: '/img/product4.jpg',
          label: 'Ace SmartFLO 5/8 in. Dia. x 100 ft. L Primime Grade Garden Hose',
          price: '12.99',
          rate: 5
        },
        {
          saleItem: true,
          url: '/img/product5.jpg',
          label: 'Ace SmartFLO 5/8 in.',
          price: '7.99',
          rate: 5
        },
        {
          url: '/img/product6.jpg',
          label: 'Ace SmartFLO 5/8 in.',
          price: '7.99',
          rate: 4.5
        }
      ],
      footerData: {
        topbarCols: [
          {
            header: "More ways to shop",
            links: [
              "Store Locator",
              "Brands",
              "Store Directory",
              "360°"
            ]
          },
          {
            header: "Customer Service",
            links: [
              "Contact Us",
              "Track Your Order",
              "Easy Returns",
              "Shipping",
              "Pickup & Delivery"
            ]
          },
          {
            header: "About Ace",
            links: [
              "About Ace",
              "Careers"
            ]
          },
          {
            header: "Resources",
            links: [
              "Tips & Advice",
              "Sales & Specials",
              "Store Services",
              "Newsroom"
            ]
          }
        ],
        middlebarCols: [
          {
            header: "Need help? Have a question or comment?",
            links: [
              {
                label: "19309",
                url: "/img/phone.png"
              },
              {
                label: "customerservice@acehardware.com.eg",
                url: "/img/email.png"
              }
            ],
            minWidth: "290px"
          },
          {
            header: "Be the first to know and save",
            links: [
              {
                label: "Sign Up now to recive offers, sales & home trends"
              }
            ]
          },
          {
          }
        ]
      }
    }
    resolve(aceData);
  });
  
};

export { getAceData };