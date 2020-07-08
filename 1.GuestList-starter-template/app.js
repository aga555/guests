new Vue(
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
            },
            eventCapacity:10,
            eventCapacityPercentage:0,

        },
        methods: {
            formSubmitted: function () {
                if (this.newNameText.length > 0 && this.eventCapacityPercentage <100) {
                    this.guestName.push(this.newNameText)
                    this.newNameText = ''
                    this.eventCapacityPercentage=this.guestName.length/(this.eventCapacity/100)
                }
            }
        }
    });
