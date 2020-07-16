new Vue({
    el: '#appVue',
    data: {
        lists:[
            {keep: 'uno', completed: false},
            {keep: 'dos', completed: true},
            {keep: 'tres', completed: false},
        ],
        newKeep: ''
    },
    methods: {
        addKeep: function () {
            this.lists.push({keep: this.newKeep, completed: false});
            this.newKeep = '';
        }
    }  
})

//vue how enabled an element disabled
//https://stackoverflow.com/questions/38085180/how-to-disable-input-conditionally-in-vue-js
//https://forum.vuejs.org/t/how-to-enabled-a-disabled-button-when-there-are-texts-in-the-input/18057/5
//https://jsfiddle.net/willywg/2g7m5qy5/

