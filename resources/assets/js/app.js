import "core-js/internals/object-assign";
import Vue from 'vue';
import { populateAmenitiesAndPrices } from "./helpers";

let model = JSON.parse(window.vuenbb_listing_model);
model = populateAmenitiesAndPrices(model);

var app = new Vue({
    el: '#app',
    data: Object.assign(model, {
        headerImageStyle: {
            'background-image': `url(${model.images[0]})`
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
