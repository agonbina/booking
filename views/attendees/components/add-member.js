module.exports = {

    data: function () {
        return {
            isLoading: false,
            name: '',
            email: '',
            number: '0049'
        }
    },

    compiled: function () {
        var vm = this,
            rules = {
                name: {
                    identifier: 'name',
                    rules: [{ type: 'empty', prompt: 'Please enter a name' }]
                },
                email: {
                    identifier: 'email',
                    rules: [{ type: 'email', prompt: 'Not a valid e-mail address' }]
                }
            }

        $(this.$el).form(rules, {
            inline: true,
            on: 'blur',
            onSuccess: function (e) {
                e.preventDefault()
                vm.add()
            }
        })
    },

    methods: {
        add: function () {
            var vm = this,
                member = {
                    name: vm.name,
                    email: vm.email,
                    number: vm.number,
		    avatar: 'profile_imgs/one3.jpg'
                }

            vm.isLoading = true
            setTimeout(function () {
                vm.$root.members.push(member)
                vm.isLoading = false
                vm.$parent.isAddingMember = false
            }, 500)
        }
    },

    template: require('./add-member.jade'),

    replace: true

}
