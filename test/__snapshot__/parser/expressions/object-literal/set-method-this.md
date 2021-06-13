# Kataw parser test case

## Input

`````js
x = {set this(this):number{}};

x = {set this(this: string):number{}};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 5,
                                    "end": 8
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "this",
                                        "rawText": "this",
                                        "flags": 96,
                                        "start": 8,
                                        "end": 13
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "this",
                                                    "rawText": "this",
                                                    "flags": 96,
                                                    "start": 14,
                                                    "end": 18
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": null,
                                                "flags": 32,
                                                "start": 14,
                                                "end": 18
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 544,
                                        "start": 14,
                                        "end": 19
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 20,
                                            "end": 26
                                        },
                                        "flags": 32,
                                        "start": 19,
                                        "end": 26
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 27,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "flags": 544,
                                    "start": 13,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 28
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 28
                    },
                    "flags": 48,
                    "start": 3,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 30,
                    "end": 33
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 33,
                    "end": 35
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": {
                                    "kind": 16499,
                                    "flags": 96,
                                    "start": 37,
                                    "end": 40
                                },
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "this",
                                        "rawText": "this",
                                        "flags": 96,
                                        "start": 40,
                                        "end": 45
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "this",
                                                    "rawText": "this",
                                                    "flags": 96,
                                                    "start": 46,
                                                    "end": 50
                                                },
                                                "optionalToken": null,
                                                "type": {
                                                    "kind": 139,
                                                    "type": {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 51,
                                                        "end": 58
                                                    },
                                                    "flags": 32,
                                                    "start": 50,
                                                    "end": 58
                                                },
                                                "right": null,
                                                "flags": 32,
                                                "start": 46,
                                                "end": 58
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 544,
                                        "start": 46,
                                        "end": 59
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 60,
                                            "end": 66
                                        },
                                        "flags": 32,
                                        "start": 59,
                                        "end": 66
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "start": 67,
                                            "end": 67
                                        },
                                        "flags": 32,
                                        "start": 66,
                                        "end": 68
                                    },
                                    "flags": 544,
                                    "start": 45,
                                    "end": 68
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 68
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 37,
                        "end": 68
                    },
                    "flags": 48,
                    "start": 35,
                    "end": 69
                },
                "flags": 32,
                "start": 30,
                "end": 69
            },
            "flags": 16,
            "start": 30,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "x = {set this(this):number{}};\n\nx = {set this(this: string):number{}};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'set' accessor cannot have a `this` parameter - start: 14, end: 18
✖ A type annotation is required for the `this` parameter. - start: 18, end: 19
✖ A 'set' accessor cannot have a `this` parameter - start: 46, end: 50

```

