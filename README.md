# K2 JSSP Random String Generator Example

In this example we first define the **metadata** section including a **service key**. Then the **ondescribe**
section describes an **object (randomstring)** with a **property (returnString)** and a **method (generateCode)**
with a **input parameter (pCharacters)**. Finally we define the **onexecute** section which generates the random string
based on the **configuration value** and **input parameter**.

# Features

  - Sample broker code that demonstrates the required **metadata**, **ondescribe** and **onexecute** sections,
    with **parameters**, **properties**, **service keys** and **methods**.
  - RollupJS configuration for TypeScript.

## Getting Started

This example is built on the K2 TypeScript Broker Template. Find information on
the JavaScript Service Provider in the K2 Cloud product documentation here:
https://help.k2.com/onlinehelp/k2cloud/DevRef/current/Default.htm#Extend/JS-Broker/JSServiceBroker.htm
and information on the template here:
https://github.com/K2Documentation/K2Documentation.Samples.JavascriptBroker.Template

## Creating a service type
Once you have a bundled .js file, upload it to your repository (anonymously
accessible) and register the service type using the system SmartObject located
at System > Management > SmartObjects > SmartObjects > JavaScript Service
Provider and run the Create From URL method.

### License

MIT, found in the [LICENSE](./LICENSE) file.

[www.k2.com](https://www.k2.com)
