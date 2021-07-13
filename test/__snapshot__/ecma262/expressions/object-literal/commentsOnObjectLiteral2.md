# Kataw parser test case

## Input

`````js
var Person = makeClass(
   {
       /**
        This is just another way to define a constructor.
        @constructs
        @param {string} name The name of the person.
        */
       initialize: function(name) {
           this.name = name;
       } /* trailing comment 1*/,
   }
);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "Person",
                            "rawText": "Person",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 10
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "makeClass",
                                "rawText": "makeClass",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 22
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 219,
                                                    "asteriskToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "initialize",
                                                        "rawText": "initialize",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 199
                                                    },
                                                    "right": {
                                                        "kind": 177,
                                                        "asyncKeyword": null,
                                                        "functionKeyword": {
                                                            "kind": 37822554,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 200,
                                                            "end": 209
                                                        },
                                                        "asteriskToken": null,
                                                        "name": null,
                                                        "typeParameters": null,
                                                        "formalParameterList": {
                                                            "kind": 214,
                                                            "formalParameters": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "name",
                                                                    "rawText": "name",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 210,
                                                                    "end": 214
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 210,
                                                            "end": 214
                                                        },
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [
                                                                    {
                                                                        "kind": 120,
                                                                        "expression": {
                                                                            "kind": 125,
                                                                            "left": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 4276321,
                                                                                    "flags": 97,
                                                                                    "transformFlags": 0,
                                                                                    "start": 217,
                                                                                    "end": 233
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "name",
                                                                                    "rawText": "name",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 234,
                                                                                    "end": 238
                                                                                },
                                                                                "flags": 97,
                                                                                "transformFlags": 2,
                                                                                "start": 217,
                                                                                "end": 238
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 238,
                                                                                "end": 240
                                                                            },
                                                                            "right": {
                                                                                "kind": 134299649,
                                                                                "text": "name",
                                                                                "rawText": "name",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 240,
                                                                                "end": 245
                                                                            },
                                                                            "flags": 0,
                                                                            "transformFlags": 128,
                                                                            "start": 217,
                                                                            "end": 245
                                                                        },
                                                                        "flags": 16,
                                                                        "transformFlags": 4096,
                                                                        "start": 217,
                                                                        "end": 246
                                                                    }
                                                                ],
                                                                "flags": 33,
                                                                "transformFlags": 0,
                                                                "start": 217,
                                                                "end": 246
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 215,
                                                            "end": 255
                                                        },
                                                        "returnType": null,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 200,
                                                        "end": 255
                                                    },
                                                    "flags": 33,
                                                    "transformFlags": 128,
                                                    "start": 28,
                                                    "end": 255
                                                }
                                            ],
                                            "trailingComma": true,
                                            "flags": 17,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 280
                                        },
                                        "flags": 49,
                                        "transformFlags": 8,
                                        "start": 23,
                                        "end": 285
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 285
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 12,
                            "end": 287
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 287
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 287
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 288
        }
    ],
    "isModule": false,
    "source": "var Person = makeClass(\n   {\n       /**\n        This is just another way to define a constructor.\n        @constructs\n        @param {string} name The name of the person.\n        */\n       initialize: function(name) {\n           this.name = name;\n       } /* trailing comment 1*/,\n   }\n);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 288
}
```

### Printed

```javascript
var Person = makeClass({
  /**
        This is just another way to define a constructor.
        @constructs
        @param {string} name The name of the person.
        */
  initialize: function (name) {
    this.name = name;
  } /* trailing comment 1*/,
});
```

### Diagnostics

```javascript
✔ No errors
```

