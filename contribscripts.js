var data = '[ { "name": "Aragorn", "race": "Human" }, { "name": "Gimli", "race": "Dwarf" } ]'
}
;[
  {
    name: 'Aragorn',
    race: 'Human',
  },
  {
    name: 'Gimli',
    race: 'Dwarf',
  },
]
var request = new XMLHttpRequest()

request.open('GET', 'data.json', true)

request.onload = function() {
  // begin accessing JSON data here
  var data = JSON.parse(this.response)

  for (var i = 0; i < data.length; i++) {
    console.log(data[i].name + ' is a ' + data[i].race + '.')
  }
}

request.send()
