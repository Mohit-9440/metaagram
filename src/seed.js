export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'iGUjGXl6NzLAFMwRFu7QkHH1DdG3',
        username: 'mohit',
        fullName: 'Mohit Sharma',
        emailAddress: 'mohit@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'bharat',
        fullName: 'Bharat Sharma',
        emailAddress: 'bharat123@gmail.com',
        following: [],
        followers: ['iGUjGXl6NzLAFMwRFu7QkHH1DdG3'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'rupal',
        fullName: 'Rupal Sharma',
        emailAddress: 'rupalsharma@gmail.com',
        following: [],
        followers: ['iGUjGXl6NzLAFMwRFu7QkHH1DdG3'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'kanishka',
        fullName: 'Kanishka Kaur',
        emailAddress: 'kanishka@gmail.com',
        following: [],
        followers: ['iGUjGXl6NzLAFMwRFu7QkHH1DdG3'],
        dateCreated: Date.now()
      }
    ];

    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }

    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/bharat/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'rupal',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'kanishka',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }
  