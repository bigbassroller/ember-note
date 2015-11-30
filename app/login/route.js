import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		login: function() {
			this.store.query('user', {
				username: this.controller.get('username'),
				email: this.controller.get('email'),
				password: this.controller.get('password')
			}).then((users) => {
				if(users.get('length') === 1) {
					var user = users.objectAt(0);
					this.controllerFor('application').set('user', user);
					this.transitionTo('notebooks', user.get('id'));
					console.log('A user with the username "' + this.controller.get('username') + '" was logged in!');
					this.controller.set('message','Successfully logged in!');
				}
				else {
					console.log('unexpected query result from /peepstack/ignitor/app/login/route.js. You should go check it out.');
				}
			});
		}
	}
});
