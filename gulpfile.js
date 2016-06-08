var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss')
        .copy(
            'node_modules/jquery/dist/jquery.js',
            'public/js/jquery.js'
        )
        .copy(
            'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
            'public/js/bootstrap.js'
        )
        .copy('node_modules/font-awesome/fonts', 'public/fonts')
        .copy('resources/assets/js/app.js', 'public/js/app.js');
});
