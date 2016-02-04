/**
 * The packages node tells SystemJS what to do when it sees a request
 * for a module from the app/ folder.
 * The System.import call tells SystemJS to import the boot file
 * (boot.js ... after transpiling boot.ts, remember?).
 * boot is where we tell Angular to launch the application. We also
 * catch and log launch errors to the console.
 * All other modules are loaded upon request either by an import
 * statement or by Angular itself.
 */
System.config({

    //typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    //map tells the System loader where to look for things
    map: {
        vasia: "./src",
        'immutable': 'node_modules/immutable/dist/immutable.js'
        // 'aws-sdk': 'node_modules/aws-sdk/dist/aws-sdk.js'
    },
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
    //,meta: {
    //    'node_modules/aws-sdk/dist/aws-sdk.js': { format: 'global' }
    //}
});