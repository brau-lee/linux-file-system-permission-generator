const app = new Vue({
  el: '#app',
  data() {
    return {
      message: 'hello',
      owner: {
        r: 1,
        w: 0,
        x: 0,
      },
      groups: {
        r: 0,
        w: 0,
        x: 0,
      },
      others: {
        r: 0,
        w: 0,
        x: 0,
      },
    };
  },
  filters: {
    bit(value) {
      return String(~~value);
    },
  },
  computed: {
    ownerOctal() {
      return String(this.getBinaryAsOctal(this.owner));
    },
    groupsOctal() {
      return String(this.getBinaryAsOctal(this.groups));
    },
    othersOctal() {
      return String(this.getBinaryAsOctal(this.others));
    },
    ownerPermission() {
      return String(this.getBinaryAsPermission(this.owner));
    },
    groupsPermission() {
      return String(this.getBinaryAsPermission(this.groups));
    },
    othersPermission() {
      return String(this.getBinaryAsPermission(this.others));
    },
    fullOctal() {
      return `${this.ownerOctal}${this.groupsOctal}${this.othersOctal}`;
    },
  },
  methods: {
    getBinaryAsOctal(object) {
      let output = 0;
      if (object.x) {
        output += 1
      }
      
      if (object.w) {
        output += 2
      }
      
      if (object.r) {
        output += 4
      }
      return output;
    },
    getBinaryAsPermission(object) {
      let output = '';
      if (object.r) {
        output += 'r'
      } else {
        output += '-'
      }
      
      if (object.w) {
        output += 'w'
      } else {
        output += '-'
      }
      
      if (object.x) {
        output += 'x'
      } else {
        output += '-'
      }

      return output;
    }
  },
});
