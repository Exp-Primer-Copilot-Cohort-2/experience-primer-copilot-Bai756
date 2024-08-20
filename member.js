function skillsMember() {
  var member = {
    name: 'Nico',
    age: 30,
    skills: ['JavaScript', 'React', 'Node', 'Jest', 'HTML', 'CSS'],
    showSkills: function() {
      this.skills.forEach(function(skill) {
        console.log(skill);
      });
    }
  };
  return member;
}