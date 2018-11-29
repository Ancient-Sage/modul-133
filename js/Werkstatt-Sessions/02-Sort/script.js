new Vue({
  el: '#app',
  data: {
    personen: [
      {vorname: 'Hans', nachname: 'Müller'},
      {vorname: 'Frieda', nachname: 'Künzli'},
      {vorname: 'Hannelore', nachname: 'Yamatoshi'},
      {vorname: 'Hazel', nachname: 'Brugger'},
    ],
    sortKey: 'nachname'
  },
  methods: {
    sort: function(key) {
      function vergleichsFunktion(a, b) {
        if (a[key] === b[key]) {
          return 0;
        } else if (a[key] < b[key]) {
          return -1;
        } else {
          return 1;
        }

      }

      this.personen.sort(vergleichsFunktion);

      // Kurzversion
      //this.personen.sort((a, b) => a[key] > b[key])
    }
  }

})
