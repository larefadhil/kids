import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        animals: [
            { id: 1, name: 'کەڵەشێر', image: require('../../public/image/rooster.webp'), sound: require('../../public/sounds/rooster.mp3') },
            { id: 2, name: 'مریشک', image: require('../../public/image/chicken.png'), sound: require('../../public/sounds/chicken.mp3') },
            { id: 3, name: 'مانگا', image: require('../../public/image/cow.png'), sound: require('../../public/sounds/cow.mp3') },
            { id: 4, name: 'مەڕ', image: require('../../public/image/sheep.png'), sound: require('../../public/sounds/sheep.mp3') },
            { id: 5, name: 'بزن', image: require('../../public/image/goat.jpg'), sound: require('../../public/sounds/goat.mp3') },
            { id: 6, name: 'بەراز', image: require('../../public/image/pig.png'), sound: require('../../public/sounds/pig.mp3') },
            { id: 7, name: 'شێر', image: require('../../public/image/lion.png'), sound: require('../../public/sounds/lion.mp3') },
            { id: 8, name: 'پڵنگ', image: require('../../public/image/tiger.png'), sound: require('../../public/sounds/tiger.mp3') },
            { id: 9, name: 'مەیمون', image: require('../../public/image/monkey.webp'), sound: require('../../public/sounds/monkey.mp3') },
            { id: 10, name: 'سەگ', image: require('../../public/image/dog.png'), sound: require('../../public/sounds/dog.mp3') },
            { id: 11, name: 'مراوی', image: require('../../public/image/duck.png'), sound: require('../../public/sounds/duck.mp3') },
            { id: 12, name: 'قاز', image: require('../../public/image/goose.png'), sound: require('../../public/sounds/goose.mp3') },
            { id: 13, name: 'بۆق', image: require('../../public/image/frog.png'), sound: require('../../public/sounds/frog.mp3') },
            { id: 14, name: 'پشیلە', image: require('../../public/image/cat.png'), sound: require('../../public/sounds/cat.mp3') },
            { id: 15, name: 'داڵ', image: require('../../public/image/eagle.png'), sound: require('../../public/sounds/eagle.mp3') },
            { id: 16, name: 'فیل', image: require('../../public/image/elephant.png'), sound: require('../../public/sounds/elephant.mp3') },
            { id: 17, name: 'ئەسپ', image: require('../../public/image/horse.png'), sound: require('../../public/sounds/horse.mp3') },
            { id: 18, name: 'گوێدرێژ', image: require('../../public/image/donkey.png'), sound: require('../../public/sounds/donkey.mp3') },
            { id: 19, name: 'مار', image: require('../../public/image/snake.png'), sound: require('../../public/sounds/snake.mp3') },
            { id: 20, name: 'قەل', image: require('../../public/image/turkey.png'), sound: require('../../public/sounds/turkey.mp3') },
            { id: 21, name: 'هەنگ', image: require('../../public/image/bee.png'), sound: require('../../public/sounds/bee.mp3') },
            { id: 22, name: 'گورگ', image: require('../../public/image/wolf.png'), sound: require('../../public/sounds/wolf.mp3') },
            { id: 23, name: 'دۆلفین', image: require('../../public/image/dolphin.png'), sound: require('../../public/sounds/dolphin.mp3') },
            { id: 24, name: 'کولە', image: require('../../public/image/cricket.png'), sound: require('../../public/sounds/cricket.mp3') },
            { id: 25, name: 'چۆلەکە', image: require('../../public/image/sparrow.png'), sound: require('../../public/sounds/sparrow.mp3') },
            { id: 26, name: 'زاڕافە', image: require('../../public/image/giraffe.png'), sound: 'none' },
            { id: 27, name: 'حوشتر', image: require('../../public/image/camel.png'), sound: 'none' },
            { id: 28, name: 'زێبرا', image: require('../../public/image/zebra.png'), sound: 'none' },
            { id: 29, name: 'کەرکەدەن', image: require('../../public/image/hippopotamus.png'), sound: 'none' },
            { id: 30, name: 'سمۆرە', image: require('../../public/image/squirrel.png'), sound: 'none' },
            { id: 31, name: 'تیمساح', image: require('../../public/image/crocodile.png'), sound: 'none' },
            { id: 32, name: 'ورچ', image: require('../../public/image/bear.png'), sound: 'none' },
            { id: 33, name: 'تاوس', image: require('../../public/image/peacock.png'), sound: 'none' },
            { id: 34, name: 'کوالا', image: require('../../public/image/koala.png'), sound: 'none' },
            { id: 35, name: 'کەنغەر', image: require('../../public/image/kangaroo.png'), sound: 'none' },
            { id: 36, name: 'ڕێوی', image: require('../../public/image/fox.png'), sound: 'none' },
            { id: 37, name: 'فلامینگۆ', image: require('../../public/image/flamingo.png'), sound: 'none' },
            { id: 38, name: 'بەتریق', image: require('../../public/image/penguin.png'), sound: 'none' },
            { id: 39, name: 'پەپولە', image: require('../../public/image/butterfly.png'), sound: 'none' },
            { id: 40, name: 'کەروێشک', image: require('../../public/image/rabbit.png'), sound: 'none' },
            { id: 41, name: 'ماسی', image: require('../../public/image/fish.png'), sound: 'none' },
            { id: 42, name: 'قڕژاڵ', image: require('../../public/image/crab.png'), sound: 'none' },
            { id: 43, name: 'قرش', image: require('../../public/image/shark.png'), sound: 'none' },
            { id: 44, name: 'توتی', image: require('../../public/image/parrot.png'), sound: 'none' },
            { id: 45, name: 'کرم', image: require('../../public/image/worm.png'), sound: 'none' },
            { id: 46, name: 'مێروولە', image: require('../../public/image/ant.png'), sound: 'none' },
            { id: 47, name: 'کۆتر', image: require('../../public/image/pigeon.png'), sound: 'none' },
            { id: 48, name: 'مشک', image: require('../../public/image/mouse.png'), sound: 'none' },
            { id: 49, name: 'ئاسک', image: require('../../public/image/deer.png'), sound: 'none' },
            { id: 50, name: 'کیسەڵ', image: require('../../public/image/turtle.png'), sound: 'none' },
            { id: 51, name: 'جاڵجاڵۆکە', image: require('../../public/image/spider.png'), sound: 'none' },
            { id: 52, name: 'پاندا', image: require('../../public/image/panda.png'), sound: 'none' },
        ]
    },
    getters: {
        animals: state => state.animals
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
