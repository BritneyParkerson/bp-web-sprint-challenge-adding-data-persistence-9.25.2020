
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: 'Throwback: 70s Edition', notes: 'Stayin Alive, We Will Rock You, My Sharona, Disco Inferno, Bohemian Rhapsody', completed:false, project_id: 7 },
        { description: 'Throwback: 80s Edition', notes: 'Livin on a Prayer, Take On Me, Another One Bites The Dust, Sweet Child O Mine', completed:false, project_id: 7 },
        { description: 'Throwback: 90s Edition', notes: 'Barbie Girl, MmmBop, Gettin Jiggy Wit It, Baby Got Back', completed:false, project_id: 7 },
        { description: 'Throwback: 2000s Edition', notes: 'Hey Ya!, Bye Bye Bye, Mr Brightside, Poker Face, Single Ladies', completed:false, project_id: 7 },
        { description: 'Christmas Extravaganza', notes: '', completed:true, project_id: 7 },
        { description: 'Guilty Pleasures', notes: 'Everyone sings songs from underappreciated bands they are shy to admit they love', completed:true, project_id: 7 },
        { description: 'Saturday Night Fever', notes: '', completed:false, project_id: 7 },
        { description: 'Grease Lightening', notes: '', completed:true, project_id: 5 },
        { description: 'Movie Marathon Madness', notes: 'Songs from top rated movies', completed:true, project_id: 1 },
        { description: 'Disney Dreams', notes: '', completed:false, project_id: 2 },
        { description: '90s Boy Bands', notes: '', completed:false, project_id: 5 },
        { description: 'Girl Power', notes: '', completed:true, project_id: 5 },
        { description: 'Earth, Wind, and Fire', notes: '', completed:false, project_id: 1 },
        { description: 'For Your Entertainment', notes: '', completed:false, project_id: 5 },
        { description: 'Classical Chaos', notes: '', completed:false, project_id: 4 },
        { description: 'R.E.S.P.E.C.T', notes: 'The Music of Aretha Franklin', completed:false, project_id: 5 },
        { description: 'Music of Legends: Michael Jackson', notes: 'Thriller, Beat It, Billie Jean, Dirty Diana, Man in the Mirror, Black or White', completed:true, project_id: 1 },
        { description: 'Music of Legends: Cher', notes: 'Half-Breed, Strong Enough, Gypsys Tramps and Thieves, If I Could Turn Back Time', completed:false, project_id: 1 },
        { description: 'Music of Legends: The Osmonds', notes: 'Yo-Yo, Sweet and Innocent, Crazy Horses, Down By The Lazy River, Twelfth of Never', completed:true, project_id: 1 },
        { description: 'Music of Legends:The Carpenters', notes: 'Top of the World, Sing, Close to You, Superstar', completed:false, project_id: 1 },
        { description: 'Music of Legends: Journey', notes: 'Dont Stop Believin, Wheel in the Sky, Lights, Anyway You Want It, Open Arms, Faithfully', completed:true, project_id: 1 },,
        { description: 'Music of Legends: Elvis', notes: 'Jailhouse Rock, Blue Suede Shoes, Heartbreak Hotel, Hound Dog', completed:false, project_id: 1 },    
        { description: 'Music of Legends: Whitney Houston', notes: 'Greatest Love of All, I Will Always Love You, I Wanna Dance With Somebody, Im Every Woman, Saving All My Love', completed:true, project_id: 1 },
        { description: 'Music of Legends: Prince', notes: 'When Doves Cry, Purple Rain, Kiss', completed:true, project_id: 1 },
        { description: 'Music of Legends: The Beatles', notes: 'I Wanna Hold Your Hand, Twist and Shout, Come Together, Strawberry Fields Forever', completed:false, project_id: 1 },
        { description: 'Music of Legends: Madonna', notes: 'Like a Virgin, Papa Dont Preach, Material Girl, Dont Tell Me, Vogue', completed:true, project_id: 1 }, 
        { description: 'Jazzy Juice', notes: '', completed:false, project_id: 3 },  
        { description: 'Jazz Hand Bop ', notes: '', completed:false, project_id: 3 } 
      ]);
    });
};
