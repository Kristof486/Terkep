const scenes = {

            start: {
                title: 'Kezdőkép - iskola',
                image: 'images/iskola.jpg',
                points: [
                    { name: 'Mirelit', x: 50, y: 55, target: 'corridor' },
                    { name: 'Könyvtár', x: 24, y: 48, target: 'library' }
                ]
            },

            corridor: {
                title: 'Mirelit',
                image: 'images/mirelitf.png',
                points: [
                    { name: 'Informatika terem', x: 30, y: 42, target: 'computer' },
                    { name: 'Aula', x: 70, y: 55, target: 'aula' }
                ],
                info: "Nyíló tantermek: F 217, F218, F219; Továbbhaladási irány: szűk folyosó, ügyintézés esetén tanári, titkárság"
            },

            library: {
                title: 'Könyvtár',
                image: 'images/konyvtar.jpg',
                points: [
                    { name: 'Vissza a mirelitre', x: 82, y: 78, target: 'corridor' }
                ]
            },

            computer: {
                title: 'Informatika terem',
                image: 'images/infoterem.jpg',
                points: [
                    { name: 'Vissza a mirelitre', x: 15, y: 80, target: 'corridor' }
                ]
            },

            aula: {
                title: 'Aula',
                image: 'images/aula.jpg',
                points: [
                    { name: 'Vissza a mirelitre', x: 15, y: 80, target: 'corridor' }
                ]
            }

        };