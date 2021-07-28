import "core-js/internals/object-assign";
import Vue from 'vue';
import sample from './data';

var app = new Vue({
    el: '#app',
    data: Object.assign(sample, {
        headerImageStyle: {
            'background-image': 'url(/images/header.jpg)'
        },
        contracted: true,
        modalOpen: false,
    }),
    watch: {
        modalOpen: function () {
            var className = 'modal-open';
            (this.modalOpen) ? document.body.classList.add(className) : document.body.classList.remove(className)
        }
    },
    methods: {
        escapeKeyListener(evt) {
            if (evt.keyCode === 27 && this.modalOpen) {
                this.modalOpen = false;
            }
        }
    },
    created() {
        document.addEventListener('keyup', this.escapeKeyListener)
    },
    destroyed() {
        document.removeEventListener('keyup', this.escapeKeyListener)
    }
});
