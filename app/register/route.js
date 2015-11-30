import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		addNew: function() {
			var user = this.store.createRecord('user', {
				username : this.controller.get('username'),
				email : this.controller.get('email'),
				password : this.controller.get('password')
			});
			user.save().then(() => {
				console.log('save successful');
				this.controller.set('message','A new user with the username "' + this.controller.get('username') + '" was added!');
				this.controller.set('username', 'email', 'password', null);
			}, function() {
				console.log('save failed');
			});
		}
	}
});
