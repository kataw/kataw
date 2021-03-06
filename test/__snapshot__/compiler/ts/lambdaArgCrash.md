# Kataw parser test case

## Input

`````js
// @lib: es5
class Event {

@{x9}@ private _listeners: any[] = [];

@{x9}@ constructor () {

@{x9}@@{x9}@ // TODO: remove

@{x9}@@{x9}@ this._listeners = [];

@{x9}@}

@{x9}@ add(listener: () => any): void {

@{x9}@@{x9}@ /// <summary>Registers a new listener for the event.</summary>

@{x9}@@{x9}@ /// <param name="listener">The callback function to register.</param>

@{x9}@@{x9}@ this._listeners.push(listener);

@{x9}@}

}

class ItemSetEvent extends Event {

@{x9}@ add(listener: (items: ItemSet) => void ) {

@{x9}@ @{x9}@super.add(listener);

@{x9}@}

}

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "// @lib: es5\nclass Event {\n\n\t private _listeners: any[] = [];\n\n\t constructor () {\n\n\t\t // TODO: remove\n\n\t\t this._listeners = [];\n\n\t}\n\n\t add(listener: () => any): void {\n\n\t\t /// <summary>Registers a new listener for the event.</summary>\n\n\t\t /// <param name=\"listener\">The callback function to register.</param>\n\n\t\t this._listeners.push(listener);\n\n\t}\n\n}\n\nclass ItemSetEvent extends Event {\n\n\t add(listener: (items: ItemSet) => void ) {\n\n\t \tsuper.add(listener);\n\n\t}\n\n}\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Event",
                    "rawText": "Event",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 18,
                    "end": 24
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "_listeners",
                                "rawText": "_listeners",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 37,
                                "end": 48
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": false,
                            "type": {
                                "kind": 8199,
                                "elementType": {
                                    "kind": 4202498,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 49,
                                    "end": 53
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 49,
                                "end": 57
                            },
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 59,
                                    "end": 59
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 57,
                                "end": 60
                            },
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194485,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 26,
                                "end": 37
                            },
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 26,
                            "end": 61
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 61,
                                    "end": 76
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 78,
                                    "end": 79
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 65550,
                                                    "left": {
                                                        "kind": 66232,
                                                        "member": {
                                                            "kind": 4260571,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 81,
                                                            "end": 110
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "_listeners",
                                                            "rawText": "_listeners",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 111,
                                                            "end": 121
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 110,
                                                        "end": 121,
                                                        "period": {
                                                            "kind": 254,
                                                            "pos": 110,
                                                            "end": 111
                                                        }
                                                    },
                                                    "operator": "=",
                                                    "right": {
                                                        "kind": 67207686,
                                                        "elementList": {
                                                            "kind": 65605,
                                                            "elements": [],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 125,
                                                            "end": 125
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 123,
                                                        "end": 126
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 81,
                                                    "end": 126
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 81,
                                                "end": 127
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 81,
                                        "end": 127
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 79,
                                    "end": 131
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 262144,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 76,
                                "end": 131
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 61,
                            "end": 131
                        },
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "add",
                                    "rawText": "add",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 131,
                                    "end": 138
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "listener",
                                                "rawText": "listener",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 139,
                                                "end": 147
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 8287,
                                                "typeParameters": null,
                                                "parameters": {
                                                    "kind": 8367,
                                                    "parameterList": [],
                                                    "trailingcomma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 150,
                                                    "end": 150
                                                },
                                                "returnType": {
                                                    "kind": 4202498,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 154,
                                                    "end": 158
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 148,
                                                "end": 158
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 139,
                                            "end": 158
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 139,
                                    "end": 159
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 66091,
                                                    "expression": {
                                                        "kind": 66232,
                                                        "member": {
                                                            "kind": 66232,
                                                            "member": {
                                                                "kind": 4260571,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 167,
                                                                "end": 317
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "_listeners",
                                                                "rawText": "_listeners",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 318,
                                                                "end": 328
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 317,
                                                            "end": 328,
                                                            "period": {
                                                                "kind": 254,
                                                                "pos": 317,
                                                                "end": 318
                                                            }
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "push",
                                                            "rawText": "push",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 329,
                                                            "end": 333
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 328,
                                                        "end": 333,
                                                        "period": {
                                                            "kind": 254,
                                                            "pos": 328,
                                                            "end": 329
                                                        }
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [
                                                            {
                                                                "kind": 196712,
                                                                "text": "listener",
                                                                "rawText": "listener",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 334,
                                                                "end": 342
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "start": 342,
                                                        "end": 343
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 333,
                                                    "end": 343
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 167,
                                                "end": 344
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 167,
                                        "end": 344
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 165,
                                    "end": 348
                                },
                                "decorators": null,
                                "type": {
                                    "kind": 4202742,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 160,
                                    "end": 165
                                },
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 138,
                                "end": 348
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 131,
                            "end": 348
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 26,
                    "end": 351
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 351
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "ItemSetEvent",
                    "rawText": "ItemSetEvent",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 358,
                    "end": 371
                },
                "typeParameters": null,
                "classHeritage": {
                    "kind": 52,
                    "expression": {
                        "kind": 196712,
                        "text": "Event",
                        "rawText": "Event",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 379,
                        "end": 385
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 379,
                    "end": 385
                },
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 49,
                            "isStatic": false,
                            "isAbstract": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "method": {
                                "kind": 16844946,
                                "name": {
                                    "kind": 196711,
                                    "text": "add",
                                    "rawText": "add",
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 387,
                                    "end": 394
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "listener",
                                                "rawText": "listener",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 395,
                                                "end": 403
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 8287,
                                                "typeParameters": null,
                                                "parameters": {
                                                    "kind": 8367,
                                                    "parameterList": [
                                                        {
                                                            "kind": 8366,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 131102,
                                                                "text": "items",
                                                                "rawText": "items",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1025,
                                                                "start": 406,
                                                                "end": 411
                                                            },
                                                            "isOptional": false,
                                                            "type": {
                                                                "kind": 8428,
                                                                "typeName": {
                                                                    "kind": 196711,
                                                                    "text": "ItemSet",
                                                                    "rawText": "ItemSet",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 412,
                                                                    "end": 420
                                                                },
                                                                "typeArguments": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 2097152,
                                                                "start": 412,
                                                                "end": 421
                                                            },
                                                            "initializer": null,
                                                            "accessModifier": null,
                                                            "isReadOnly": false,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "start": 406,
                                                            "end": 420
                                                        }
                                                    ],
                                                    "trailingcomma": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 406,
                                                    "end": 420
                                                },
                                                "returnType": {
                                                    "kind": 4202742,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 2097152,
                                                    "start": 424,
                                                    "end": 429
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 404,
                                                "end": 429
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 395,
                                            "end": 429
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 395,
                                    "end": 431
                                },
                                "isSetter": false,
                                "isGetter": false,
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097233,
                                                "expression": {
                                                    "kind": 66091,
                                                    "expression": {
                                                        "kind": 66232,
                                                        "member": {
                                                            "kind": 4260561,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 433,
                                                            "end": 443
                                                        },
                                                        "expression": {
                                                            "kind": 196711,
                                                            "text": "add",
                                                            "rawText": "add",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 444,
                                                            "end": 447
                                                        },
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 443,
                                                        "end": 447,
                                                        "period": {
                                                            "kind": 254,
                                                            "pos": 443,
                                                            "end": 444
                                                        }
                                                    },
                                                    "typeArguments": null,
                                                    "argumentList": {
                                                        "kind": 3,
                                                        "elements": [
                                                            {
                                                                "kind": 196712,
                                                                "text": "listener",
                                                                "rawText": "listener",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 448,
                                                                "end": 456
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "transformFlags": 0,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "start": 456,
                                                        "end": 457
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 447,
                                                    "end": 457
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 433,
                                                "end": 458
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 433,
                                        "end": 458
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 431,
                                    "end": 462
                                },
                                "decorators": null,
                                "type": null,
                                "accessModifier": null,
                                "typeParameters": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 394,
                                "end": 462
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 387,
                            "end": 462
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 387,
                    "end": 465
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 351,
                "end": 465
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 465
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 466
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

