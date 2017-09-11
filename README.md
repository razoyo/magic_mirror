# MmWebApp

To build after cloning the repository:
```
npm install
ng serve
```
When you look at:  http://localhost:4200/

on your local machine, it will look like this:
![mirror](https://user-images.githubusercontent.com/1727761/30285501-e640ae94-96e3-11e7-917b-8fa2e27af02a.png)

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  It is 'sideways' on purpose.  The Magic Mirror app is designed to run on a large screen in portrait mode on a Raspberry Pi.  

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

We copied the contents of the dist/ directory to the mm-server/dist directory, which served the application.

## Production environment
We used Chromium, which has a kiosk mode, to display the Magic Mirror.  The kiosk mode runs a browser without the status bar, address bar, etc....just the display window.  After starting the [mm-server](https://github.com/amnotafraid/mm-server) on the Raspberry Pi, we used this command to display the Magic Mirror in Chromium:
```
chromium-browser --kiosk localhost:3000
```
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

