var app = new Vue({
    el: '#app',
    data: {
        itemList: [{
                id: '1',
                itemName: '',
                price: '',
                count: '0'
            },

            {
                id: '',
                itemName: "",
                imgUrl: "",
                price: '',
                count: '0'
            },
            {
                id: '',
                itemName: "",
                imgUrl: "",
                price: '',
                count: '0'
            },
            {
                id: '',
                itemName: "",
                imgUrl: "",
                price: '',
                count: '0'
            },
        ]
    },
    methods: {
        handlePlus: function(item) {
            item.count++;
        },
        handleSub: function(item) {
            if (item.count >= 1) {
                item.count--;
            }
        },
        handledelete: function(index) {
            console.log(this);
            this.itemList.splice(index, 1);
        }
    },
    computed: {

    }
})