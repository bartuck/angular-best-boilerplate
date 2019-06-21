# Angular Best Boilerplate

This project is created for Angular 8+.

_...To Not Reinvent The Wheel Again_.

## Table of Contents  
1. [General Concept](#general)
2. [Application Concept](#application)
3. [Some hints](#hints)
4. [Appendix](#appendix)

<a name="general"/>

## General concept

Always keep your project directories neat and clean so that your project does not become another legacy monster from which you will want to escape ASAP.

_Notice._ This document uses the shortcut **ASG** (:smile:) -  Angular Style Guide.

The directories you always need:
1. App.
2. Environments.
3. Assets.
4. Test.
5. Lib.
6. Styles.
7. Translations.

![General Concept](https://raw.githubusercontent.com/bartuck/angular-best-boilerplate/master/src/assets/images/contents/angular-best-boilerplate-general.png)

<a name="#application"/>

## Application concept

The directories you always need:
1. Core.
2. Shared.
3. Features.
4. Lazy (lazy loaded folders).

The class your components will need in most of the cases: **AppController**. It stores:
- public configuration and settings,
- router data,
- current translations.

![Application Concept](https://raw.githubusercontent.com/bartuck/angular-best-boilerplate/master/src/assets/images/contents/angular-best-boilerplate-app.png)

### Core

"MUST-HAVE" of your application:
- configurations and settings of your application, i.e. available languages and locales, routing data, web storage keys, date format,
- global services, i.e. http,
- a skeleton of the layout - core components like header and footer,
- core modules, i.e. dialog.

### Shared

From ASG (https://angular.io/guide/styleguide#shared-feature-module):

**Do** create a feature module named SharedModule in a shared folder; for example, app/shared/shared.module.ts defines SharedModule.

**Do** declare components, directives, and pipes in a shared module when those items will be re-used and referenced by the components declared in other feature modules.

**Consider** using the name SharedModule when the contents of a shared module are referenced across the entire application.

**Consider not providing services in shared modules.** Services are usually singletons that are provided once for the entire application or in a particular feature module. There are exceptions, however. For example, in the sample code that follows, notice that the SharedModule provides FilterTextService. This is acceptable here because the service is stateless;that is, the consumers of the service aren't impacted by new instances.

**Do** import all modules required by the assets in the SharedModule; for example, CommonModule and FormsModule.

(...)

**Avoid** specifying app-wide singleton providers in a SharedModule. Intentional singletons are OK. Take care.

**Why?** A lazy loaded feature module that imports that shared module will make its own copy of the service and likely have undesirable results.

**Why?** You don't want each module to have its own separate instance of singleton services. Yet there is a real danger of that happening if the SharedModule provides a service.

### Features

From ASG (https://angular.io/guide/styleguide#folders-by-feature-structure):

(...)

**Why?** Helps reduce the app from becoming cluttered through organizing the content and keeping them aligned with the LIFT guidelines.

**Why?** When there are a lot of files, for example 10+, locating them is easier with a consistent folder structure and more difficult in a flat structure.

### Lazy

From ASG (https://angular.io/guide/styleguide#lazy-loaded-folders):

A distinct application feature or workflow may be lazy loaded or loaded on demand rather than when the application starts.

**Do** put the contents of lazy loaded features in a lazy loaded folder. A typical lazy loaded folder contains a routing component, its child components, and their related assets and modules.

**Why?** The folder makes it easy to identify and isolate the feature content.

(...)

**Avoid** allowing modules in sibling and parent folders to directly import a module in a lazy loaded feature.

**Why?** Directly importing and using a module will load it immediately when the intention is to load it on demand.

<a name="hints"/>

## Some Hints

**Avoid** having multiple config files per module (*.const.ts).

**ASG: Why?** No one wants to search for a file through seven levels of folders. A flat structure is easy to scan.

**ASG: Do** start small but keep in mind where the app is heading down the road.

**ASG: Do** have a near term view of implementation and a long term vision.

**Consider** using Server Side Rendering.

**Consider** creating your features in a separated "environment" like Storybook as an element of your Design System.

**Consider** putting info about your styles and components in a separated module (a'la old good UI-kit) to be DRY and KISS, and to help other developers understand application CSS styles set.

**Consider** proxying to a backend server to be "locally" independent of your API (https://angular.io/guide/build#proxying-to-a-backend-server).

**Consider** using services and rxjs subjects to interact between components instead of libraries like ngrx, ngxs or akita.

**Why?** I know those libraries are trendy and fancy, however problems regarding state management may occur in the case of huge or complex applications. [Read more here](https://blog.angular-university.io/angular-2-redux-ngrx-rxjs/).

![State Management](https://raw.githubusercontent.com/bartuck/angular-best-boilerplate/master/src/assets/images/contents/angular-best-boilerplate-state.png)

_I'm not the author of this picture._

**Do** create dumb components - no external dependencies, no side effects. [Read more here](https://medium.com/@jtomaszewski/how-to-write-good-composable-and-pure-components-in-angular-2-1756945c0f5b).

![Components](https://raw.githubusercontent.com/bartuck/angular-best-boilerplate/master/src/assets/images/contents/angular-best-boilerplate-components.png)

_I'm not the author of this picture._


<a name="#appendix"/>

## Appendix

Remember about the performance:
1. Runtime optimizations.
2. Network performance.

Please refer to https://github.com/mgechev/angular-performance-checklist
