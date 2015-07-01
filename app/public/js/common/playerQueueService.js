'use strict';

app.factory('playerQueueService', function($rootScope, $log) {
	/**
	 * @class Queue
	 */
	var Queue = {};

	/**
	 * Store all tracks from the current view
	 * where the track is playing
	 * item track format below
	 * {
	 * 		title: 'track title',
	 * 		published_by: 'john doe',
	 * 		track_thumb: 'path/to/thumb'
	 * 		track_url: 'path/to/track'
	 * }
	 * 
	 * @type {Array}
	 */
	Queue.list = [];

	/**
	 * Return queue size length
	 * @return {Number} [number of items in the list]
	 */
	Queue.size = function() {
		return this.list.length;
	};



}