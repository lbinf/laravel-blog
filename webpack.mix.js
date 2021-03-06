const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//mix.js('resources/assets/js/app.js', 'public/js')
//	.sass('resources/assets/sass/app.scss', 'public/css');


/**
 * 拷贝文件
 *
 * Do a 'mix copyfiles' after bower updates
 */


// Copy jQuery, Bootstrap, and FontAwesome
mix.copy("vendor/bower_dl/jquery/dist/jquery.js", "resources/assets/js/");

mix.copy("vendor/bower_dl/bootstrap/less/**", "resources/assets/less/bootstrap");
mix.copy("vendor/bower_dl/bootstrap/less/mixins/**", "resources/assets/less/bootstrap/mixins");

mix.copy("vendor/bower_dl/bootstrap/dist/js/bootstrap.js", "resources/assets/js/");

mix.copy("vendor/bower_dl/bootstrap/dist/fonts/**", "public/assets/fonts");
mix.copy("vendor/bower_dl/bootstrap/dist/fonts/**", "resources/assets/less/fonts");

mix.copy("vendor/bower_dl/font-awesome/less/**", "resources/assets/less/fontawesome");

mix.copy("vendor/bower_dl/font-awesome/fonts/**", "public/assets/fonts");
mix.copy("vendor/bower_dl/font-awesome/fonts/**", "resources/assets/less/fonts");

// Copy datatables

mix.copy("vendor/bower_dl/datatables/media/js/jquery.dataTables.js", 'resources/assets/js/');

mix.copy('vendor/bower_dl/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.css','resources/assets/css');

mix.copy('vendor/bower_dl/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.js', 'resources/assets/js/');

// Copy selectize
mix.copy("vendor/bower_dl/selectize/dist/css/**", "public/assets/selectize/css");

mix.copy("vendor/bower_dl/selectize/dist/js/standalone/selectize.min.js", "public/assets/selectize/");

//Copy pickadate
mix.copy("vendor/bower_dl/pickadate/lib/compressed/themes/**", "public/assets/pickadate/themes/");

mix.copy("vendor/bower_dl/pickadate/lib/compressed/picker.js", "public/assets/pickadate/");

mix.copy("vendor/bower_dl/pickadate/lib/compressed/picker.date.js", "public/assets/pickadate/");

mix.copy("vendor/bower_dl/pickadate/lib/compressed/picker.time.js", "public/assets/pickadate/");

mix.copy('public/css/app.css','public/css/admin.css');
// Copy clean-blog less files
mix.copy('vendor/bower_dl/clean-blog/less/**', 'resources/assets/less/clean-blog');
/**
 * mix 合并文件
 */


// 合并 JS
mix.combine(
    [
        'resources/assets/js/jquery.js',
        'resources/assets/js/bootstrap.js',
        'resources/assets/js/jquery.dataTables.js',
        'resources/assets/js/dataTables.bootstrap.js'
    ],
    'public/js/admin.js'  
);

// 编译 Less
mix.less('resources/assets/less/admin.less', 'public/css/admin.css');

mix.combine([
	'resources/assets/js/jquery.js',
	'resources/assets/js/bootstrap.js',
	'resources/assets/js/blog.js',
	], 'public/js/blog.js'
);

//Compile CSS
mix.less('resources/assets/less/blog.less', 'public/css/blog.css');

//Copy file to pulic/assets dir
mix.copy('public/css/blog.css', 'public/assets/css')
    .copy('public/js/blog.js', 'public/assets/js');
