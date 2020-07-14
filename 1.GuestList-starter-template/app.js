 var vm1= new Vue(
    {
        el: '#app',
        data: {
            event: {
                eventDate: 'August 14th - 16th',
                eventTitle: 'Summer Festival!',
                eventDescription: 'It\'s back! This years summer festival will be in the beautiful countryside featuring our best line up ever!',
            },
            newNameText: '',
            guestName: ['James', 'Sam','Carl'],

            appStyles:{
                marginTop:'25px',
                color:'blue'
            },
            eventCapacity:10,
            eventCapacityPercentage:0,

        },
        methods: {
            formSubmitted: function () {
                console.log('method');
                if (this.newNameText.length > 0 && this.eventCapacityPercentage <100) {
                    this.guestName.push(this.newNameText)
                    this.newNameText = ''
                    this.eventCapacityPercentage=this.guestName.length/(this.eventCapacity/100)
                }
                } ,
            removeGuest: function (index ){
                this.guestName.splice(index,1)

            }


        },
        computed:{
            sortNames: function () {
                console.log('computed');
                return this.guestName.sort()

            },

        },watch:{
            guestName: function (data) {
                console.log('watch trgger')

            }
        },
        filters:{
            formatName: function (value) {
                return value.slice(0,1).toUpperCase() +value.slice(1).toLowerCase()
            }
        },
        beforeCreate:function () {
            console.log('before create')
        },
        created:function () {
            console.log('created')
        },
        beforeMount:function () {
            console.log('before mount')

        },  mounted:function () {
            console.log('mounted')
        },
        beforeUpdate:function () {
            console.log('before update')
        },
        updated:function () {
            console.log('update ')
        },
        beforeDestroy:function () {
            console.log('before destroye')
        },  destroyed:function () {
            console.log('destroyed')
        },
    });
var vm2= new Vue(
    {
        el:'#navigation',
        data:{
            appName:"Guests List ",
            navLinks:[
                {name:"Home",id:1, url:"https://www.google.pl"},
                {name:"Upcoming event",id:2, url:"https://wwww.wp.pl"},
                {name:"Guest benefits",id:3 ,url:"https://wwww.interia.pl"},
                {name:"Latest news",id:4,url:"https://www.tvn.pl"},

            ]

        },
        methods:{
          changeTitle:function () {
              this.$refs.name.innerHTML='title changed'
          }
        }
    }
)



