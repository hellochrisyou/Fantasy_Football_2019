Prototypical Fantasy Football website which hosts multiple leagues with teams and players.  

Database design: League <Many-to-Many> Account <One-to-One> Team <Many-to-Many> Player 

CRUD Operation:
- Range from trading players between teams, exchanging players from the waiver roster, and basic read operations.  
- Flow of CRUD Operation:
*Angular: Backend Call (Http Method/RXJS) -> Spring: Rest API Controller -> DTO Payload sent into Service function call -> Business logic implemented w/ Hibernate operations -> return response to client*

Angular features: 
- Decoupled modules
- Lazy Loading
- DTO and Model Classes
- Angular Material Controls (Buttons, Dialogs, Tables, Selectors, Inputs, Tabs)
- Forms (Reactive and Template)
- Nested components: Component interaction -> Rxjs (Event Emitter) via Service, @ViewChild
- Services: Emitter, Business Logic, Abstract/Concrete, Api (NFL)
- Http Interceptor
- Route Guard

Spring Features:
- Models
- DTO Class
- Components: Controller, Repository, Service
- Scheduler

3rd Party Authenticator: 
- Auth0

Spring Modules: Spring Boot, Spring Web, Spring MVC, Spring Rest, Spring Cache, Spring Data
Angular Packages: Angular Material, Prettier, TsLint, Rxjs, Auth0

<img  src="https://chrisyou-backup-website.s3.amazonaws.com/assets/Fantasy_Football/fantasy_football_github.png" width="100%"/>
