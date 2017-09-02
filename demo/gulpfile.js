var gulp = require('gulp'),
plugins = require('gulp-load-plugins')(),
minimist = require('minimist'),
sh = require('shelljs'),

pump = require('pump'),
runSequence = require('run-sequence'),
capitalize = require('capitalize'),
wiredep = require('wiredep');

var options = minimist(process.argv.slice(2));
var name = 'as_angular2_starter';

var paths = {
  gulp: {
      templates: 'gulp/templates/'
  },
  
};

gulp.task('default', ['watch']);

gulp.task('ng2Component', function() {
    var dest = plugins.util.env.module ? '../src/app/'+plugins.util.env.module+'/'+plugins.util.env.name+'/': '../src/app/'+plugins.util.env.name+'/';
    return gulp.src(paths.gulp.templates + 'view.tpl.html')
    .pipe(plugins.plumber())
    .pipe(plugins.template({name: plugins.util.env.name}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.component.html'}))
    .pipe(gulp.dest(dest))
     //SCSS
    
    .pipe(plugins.addSrc.append(paths.gulp.templates + 'component.tpl.scss'), { passthrough: true })
    .pipe(plugins.template({name: capitalize(plugins.util.env.name)}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.component.scss'}))
    .pipe(gulp.dest(dest))

    //Component
    
    .pipe(plugins.addSrc.append(paths.gulp.templates + 'component.tpl.ts'), { passthrough: true })
    .pipe(plugins.template({name: plugins.util.env.name, capitalname: capitalize(plugins.util.env.name)}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.component.ts'}))
    .pipe(gulp.dest(dest))

     //Module
    .pipe(plugins.addSrc.append(paths.gulp.templates + 'module.tpl.ts'), { passthrough: true })
    .pipe(plugins.template({name: plugins.util.env.name, capitalname: capitalize(plugins.util.env.name)}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.module.ts'}))
    .pipe(gulp.dest(dest))

});

gulp.task('ng2Module', function() {

    return gulp.src(paths.gulp.templates + 'view.tpl.html')
    .pipe(plugins.plumber())
    .pipe(plugins.template({name: plugins.util.env.name}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.component.html'}))
    .pipe(gulp.dest('demo/../src/app/'+ plugins.util.env.name + '/'))
     //SCSS
    
    .pipe(plugins.addSrc.append(paths.gulp.templates + 'component.tpl.scss'), { passthrough: true })
    .pipe(plugins.template({name: capitalize(plugins.util.env.name)}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.component.scss'}))
    .pipe(gulp.dest('demo/../src/app/'+ plugins.util.env.name + '/'))

    //Component
    
    .pipe(plugins.addSrc.append(paths.gulp.templates + 'component.tpl.ts'), { passthrough: true })
    .pipe(plugins.template({name: plugins.util.env.name, capitalname: capitalize(plugins.util.env.name)}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.component.ts'}))
    .pipe(gulp.dest('demo/../src/app/'+ plugins.util.env.name + '/'))

    //Module
    .pipe(plugins.addSrc.append(paths.gulp.templates + 'module.tpl.ts'), { passthrough: true })
    .pipe(plugins.template({name: plugins.util.env.name, capitalname: capitalize(plugins.util.env.name)}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.module.ts'}))
    .pipe(gulp.dest('demo/../src/app/'+ plugins.util.env.name + '/'))
   
    //Routes
    
    .pipe(plugins.addSrc.append(paths.gulp.templates + 'routes.tpl.ts'), { passthrough: true })
    .pipe(plugins.template({name: plugins.util.env.name, capitalname: capitalize(plugins.util.env.name)}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.routes.ts'}))
    .pipe(gulp.dest('demo/../src/app/'+ plugins.util.env.name + '/'))

});

gulp.task('ng2Service', function() {
    var dest = '../src/app/'+plugins.util.env.module+'/';
    return gulp.src(paths.gulp.templates + 'factory.tpl.js')
    .pipe(plugins.template({name: plugins.util.env.name, module:plugins.util.env.module}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.service.js'}))
    .pipe(gulp.dest(dest));
});


gulp.task('ngDirective', function() {
    var dest = '../src/app/'+plugins.util.env.module+'/';

    return gulp.src(paths.gulp.templates + 'directive.tpl.js')
    .pipe(plugins.template({name: plugins.util.env.name, restrict: plugins.util.env.restrict}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.directive.js'}))
    .pipe(gulp.dest(dest));
});
gulp.task('ngComponent', function() {
    var dest = '../src/app/'+plugins.util.env.module+'/';

    return gulp.src(paths.gulp.templates + 'component.tpl.js')
    .pipe(plugins.template({name: plugins.util.env.name, restrict: plugins.util.env.restrict}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.component.js'}))
    .pipe(gulp.dest(dest));
});
gulp.task('ngFilter', function() {
    var dest = '../src/app/'+plugins.util.env.module+'/';

    return gulp.src(paths.gulp.templates + 'filter.tpl.js')
    .pipe(plugins.template({name: plugins.util.env.name}))
    .pipe(plugins.rename({ basename: plugins.util.env.name, extname: '.filter.js'}))
    .pipe(gulp.dest(dest));
});

gulp.task('serve:before', ['watch']);
gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + plugins.util.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', plugins.util.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + plugins.util.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
