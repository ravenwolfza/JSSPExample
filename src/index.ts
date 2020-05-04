import '@k2oss/k2-broker-core';

metadata = {
    systemName: "com.k2.randomstring",
    displayName: "Random Unique String Broker",
    description: "An example broker that returns a random string as text, formatted as alphabetic, numeric or alphanumeric, using a Generate Access Code method.",    
    "configuration": { //configuration values (service keys)
        "stringFormat": {
            displayName: "String Format",
            type: "string",
            value: "Alphabetic" // valid values are Alphabetic, Numeric, Alphanumeric
        }
    },
};

ondescribe = async function(): Promise<void> {
    postSchema({ // this section is the schema describing the K2 service
        objects: {
            "randomstring": { //service object system name
                displayName: "Random String", // service object display name
                description: "Utility for generating random strings", // description for the service object
                properties: {
                    "returnString": { // property of the service object
                        displayName: "Return string", // display name for property "returnString"
                        type: "string" // data type for the property
                    }
                },
                methods: { // the methods available to the service object (only 1 in this case)
                    "generateCode": {
                        displayName: "Generate Access Code", // display name of the method
                        type: "execute", // type of method: CRUD, List, Execute
                        parameters: { // required input parameters for this input method
                            "pCharacters" : { // input parameter for the length of the string to return
                                displayName: "Length",
                                description: "The number of characters 5-8 in the returned string",
                                type: "number" } // data type of the paramter
                        },
                        requiredParameters: [ "pCharacters" ], // parameter required to execute this method (can be a collection)
                        outputs: [ "returnString" ] // properties that the method will return
                    },
                }
            }
        }
    });
}

onexecute = async function (objectName, methodName, parameters, properties, configuration):  Promise<void> {
    return new Promise<void>((resolve, reject) => {

        var strType = '';   // the switch statement defines the character set to use for the return string,  
                            // based on the service key defined in the metadata section (stringFormat)
        switch(configuration["stringFormat"]){
            case "Alphabetic":
                strType = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                break;
            case "Numeric":
                strType = "0123456789";
                break;
            case "Alphanumeric":
                strType = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                break;
            default:
                strType = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        }

        var passw = '';
        var stringlength = parameters["pCharacters"];    

        for (let i = 1; i <= stringlength; i++) { // the for loop to generate characters 
            var char = Math.floor(Math.random() 
                * strType.length + 1); 
          
            passw += strType.charAt(char) // the characters that make up the returned string
        } 
            
        postResult({  // the string that gets passed back to K2
            "returnString": passw
        });
    });
}
 
