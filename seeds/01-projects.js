
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Marching Band', description: 'A group of musicians who perform instrumental music marching in formation at games and competitions.', completed:true },
        { name: 'Symphonic Band', description: 'Also known as Concert Band, these musicians who perform shows on a concert stage. They sometimes compete in competitons when not simply entertaining.', completed: true },
        { name: 'Jazz Ensemble', description: 'A smaller, club sized group from mainly rythym and horn musicians.', completed: false },
        { name: 'Orchestra', description: 'A larger group of musicians who focus the majority of their selection on classical music.', completed: false },
        { name: 'Show Choir', description: 'A group of vocal musicians who perform musical dance numbers while singing on stage. Often competing with other show choirs.', completed: true },
        { name: 'Pep Band', description: 'A small club of musicians who attend small events such as assemblies, rallies, fundraisers, or parties to play for fun. Can include vocal and instrumental musicians.', completed: false },
        { name: 'Glee Club', description: 'A club of vocal musicians who often compete in Show Choir and other musical groups.', completed: true },
        { name: 'Pep Squad', description: 'A group of cheerleaders who use music and cheers to perform at games and pep rallies.', completed: true }
        ]);
    });
};