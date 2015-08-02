# react-cairngorm
An idea based on [Babelium project](https://github.com/babeliumproject) to bring Cairngorm framework works alongside with ReactJS.

![Dependencies Status](https://david-dm.org/dothanhlam/react-cairngorm.svg)

##About Cairngorm (wiki)
![Cairngorm] (https://www.safaribooksonline.com/library/view/agile-enterprise-application/9780596514402/httpatomoreillycomsourceoreillyimages553785.png)

Cairngorm is one of the primary open source frameworks for application architecture in Adobe Flex. It was developed by iteration::two, which was acquired by Macromedia in 2005. It is part of the Adobe Engagement Platform. Adobe Labs features Cairngorm as the architectural framework for Rich Internet Application programmers.

Cairngorm is based on the MVC model. It is specifically designed to facilitate complex state and data synchronization between the client and the server, while keeping the programming of the View layer detached from the data implementation.

The role of the View layer in a Cairngorm application is to throw events and bind to data stored in the Model. Components on the View can bind to Value Objects or other properties in the Model (data) layer.

In a Cairngorm Model, related data are stored in Value Objects (VOs), while simple variables can be stored as direct properties of the ModelLocator class. A static reference to the ModelLocator singleton instance is used by the View layers to locate the required data.

The Controller is the most sophisticated part of the Cairngorm architecture. The Controller layer is implemented as a singleton FrontController. The FrontController instance, which receives every View-generated event, dispatches the events to the assigned Command class based on the event's declared type.

The Command class then processes the event by running the Command class' execute() method, which is an ICommand interface method. The event object may include additional data if required by the developer. The execute() method can update the central Model, as well as invoke a Service class which typically involves communication with a remote server. The IResponder interface, which is also implemented by the Command class, includes onResult and onFault methods to handle responses returned from the invoked remote service.

A Cairngorm application can be programmed to manage any server architecture/schemas.

##Build
The project is under development, you need to build the source before using.

```
npm update
grunt build
```

##Usage

###Event
```
var StartupEvent = CairngormEvent.extend({
    init : function ( type, data ) {
        this._super(type, data);
    }
});
//declare constant
StartupEvent.STARTUP = "startup";
```

###Command
```
var StartupCommand = Command.extend({
    execute : function ( ) {
        console.log("StartupCommand,execute");
    },

    onResult : function ( response ) {
        console.log("StartupCommand,onResult", response);
    },

    onFault : function () {
        console.log("StartupCommand,onFault");
    }
});
```

###Controller
```
var Controller = FrontController.extend({
    init : function () {
        this._super();
        this.addCommand(StartupEvent.STARTUP, StartupCommand);
    }

});
```

###Integrating
```
var controller = new Controller();
new StartupEvent(StartupEvent.STARTUP, true).dispatch();

```