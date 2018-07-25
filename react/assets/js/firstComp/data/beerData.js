var beerData = [
    {beerName: 'IPA', breweryName: 'Good People', beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'good-people.png'},
    {beerName: 'Pale', breweryName: 'Good People',  beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Brown', breweryName: 'Good People',  beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Snakehandler', breweryName: 'Good People',  beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Coffe Oatmeal Stout', breweryName: 'Good People', beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Bearded Lady', breweryName: 'Good People',beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Urban Farmer', breweryName: 'Good People',  beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Muchacho', breweryName: 'Good People',  beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'JUCO', breweryName: 'Good People',  beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Hitchhiker', breweryName: 'Good People', beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Mumbai Rye', breweryName: 'Good People',  beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Denim Downhiller', breweryName: 'Good People', beerType: 'Brown'},
    {beerName: 'IPA', breweryName: 'TrimTab', beerType: 'IPA', ABV: '6.5', IBU: '61', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Pillar to Post Rye Brown', breweryName: 'TrimTab', beerType: 'Brown', ABV: '5.5', IBU: '41', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Rescue Ship Pale Ale', breweryName: 'TrimTab', beerType: 'Pale', ABV: '5.5', IBU: '18', seasonal: 'yes', pic: 'james_king.jpg'},
    {beerName: 'Imperial City Olde Ale', breweryName: 'TrimTab', beerType: 'English Ale', ABV: '7.3', IBU: '55.5', seasonal: 'Yes', pic: 'james_king.jpg'},
    {beerName: 'Bankston 88', breweryName: 'TrimTab', beerType: 'Belgian', ABV: '4.5', IBU: '31', seasonal: 'Yes', pic: 'james_king.jpg'},
    {beerName: 'Raspberry Berliner Weisse', breweryName: 'TrimTab', beerType: 'Berliner Weisse', ABV: '5.2', IBU: '7', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Craft Lager', breweryName: 'Ghost Train', beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Go-Devil Golden Ale', breweryName: 'Ghost Train', beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Terminal Station Brown Ale', breweryName: 'Ghost Train', beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Switchmans Stash IPL', breweryName: 'Ghost Train', beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Kaleidoscope Kettle Sour', breweryName: 'Ghost Train', beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Spring Street Saison', breweryName: 'Avondale', beerType: 'Belgian', ABV: '7.2', IBU: '18', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Miss Fancys Tripel', breweryName: 'Avondale', beerType: 'Belgian', ABV: '9.2', IBU: '20', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Battlefield IPA', breweryName: 'Avondale', beerType: 'IPA', ABV: '6.8', IBU: '62', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Vanillaphant Porter', breweryName: 'Avondale', beerType: 'Porter', ABV: '6.2', IBU: '25', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Mill City White', breweryName: 'Avondale', beerType: 'Belgian', ABV: '5', IBU: '16', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Train Hopper', breweryName: 'Avondale', beerType: 'Pale', ABV: '5.5', IBU: '50', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'Streetcar', breweryName: 'Avondale', beerType: 'Kolsch', ABV: '4.3', IBU: '22', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'No Joka Mocha', breweryName: 'Avondale', beerType: 'Stout', ABV: '7.2', IBU: '21', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'IPA', breweryName: 'Avondale', beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    {beerName: 'IPA', breweryName: 'Avondale', beerType: 'IPA', ABV: '7.1', IBU: '75.5', seasonal: 'No', pic: 'james_king.jpg'},
    

    
]

export default beerData;
//https://thereportoftheweek-api.herokuapp.com/reports
