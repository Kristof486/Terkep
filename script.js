const Iszarny = {

    start: {
        title: 'Iszárny kezdete',
        image: '',
        points: [
            { name: 'Lépcsőfordulóalja', x: 50, y: 55, target: 'lépcsőteteje' },
        ]
    },

    lépcsőteteje:{
        title: 'Lépcsőforduló',
        image: '',
        points: [
            { name: 'Belsőudvar', x: 50, y: 55, target: 'belsőudvar' },
            { name: 'Parkoló', x: 50, y: 55, target: 'parkoló' },
            { name: 'Első emelet', x: 50, y: 55, target: 'I102' },
            { name: 'Vissza a szűk folyosóra!', x: 50, y: 55, target: 'start' },
        ]
    },

    I102:{
        title: 'I102',
        image: '',
        points: [
            { name: 'Második emelet', x: 50, y: 55, target: 'secondfloor' },
            { name: 'Vissza a földszintre', x: 50, y: 55, target: 'lépcsőteteje' },

        ]
    },

    secondfloor:{
        title: 'Secondfloor',
        image: '',
        points: [
            { name: 'Termek', x: 50, y: 55, target: 'termek' },
            { name: 'Tanari', x: 50, y: 55, target: 'tanari' },
            { name: 'Vissza az első emeletre tetejére!', x: 50, y: 55, target: 'I102' },

        ]
    },

    termek:{
        title: 'Termek',
        image: '',
        points: [
            { name: 'I204', x: 50, y: 55, target: 'I204' },
            { name: 'I203', x: 50, y: 55, target: 'I203' },
            { name: 'I202', x: 50, y: 55, target: 'I202' },
            { name: 'Vissza a lépcső tetejére!', x: 50, y: 55, target: 'secondfloor' }

        ]
    },
    
    tanari:{
        title: 'Tanari',
        image: '',
        points: [
            { name: 'Vissza a lépcső tetejére!', x: 50, y: 55, target: 'secondfloor' },

        ]
    }
}