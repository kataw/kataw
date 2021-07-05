# Kataw parser test case

## Input

`````js
(a: string) => x;

(x, y: string) => z;

([a]: string) => x;

({a}: string) => x;


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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 3,
                                    "end": 10
                                },
                                "flags": 2097152,
                                "start": 3,
                                "end": 10
                            },
                            "right": null,
                            "flags": 32,
                            "start": 0,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 11
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 11,
                    "end": 14
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 20,
                            "end": 21
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 25,
                                    "end": 32
                                },
                                "flags": 2097152,
                                "start": 25,
                                "end": 32
                            },
                            "right": null,
                            "flags": 32,
                            "start": 17,
                            "end": 32
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "start": 20,
                    "end": 33
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 33,
                    "end": 36
                },
                "contents": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 36,
                    "end": 38
                },
                "flags": 33,
                "start": 17,
                "end": 38
            },
            "flags": 16,
            "start": 17,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 43,
                                            "end": 44
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 43,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 42,
                                "end": 45
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 46,
                                    "end": 53
                                },
                                "flags": 2097152,
                                "start": 46,
                                "end": 53
                            },
                            "right": null,
                            "flags": 32,
                            "start": 39,
                            "end": 53
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "start": 42,
                    "end": 54
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 54,
                    "end": 57
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 57,
                    "end": 59
                },
                "flags": 35,
                "start": 39,
                "end": 59
            },
            "flags": 16,
            "start": 39,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 64,
                                            "end": 65
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 64,
                                    "end": 65
                                },
                                "flags": 48,
                                "start": 63,
                                "end": 66
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 67,
                                    "end": 74
                                },
                                "flags": 2097152,
                                "start": 67,
                                "end": 74
                            },
                            "right": null,
                            "flags": 32,
                            "start": 60,
                            "end": 74
                        }
                    ],
                    "trailingComma": false,
                    "flags": 35,
                    "start": 63,
                    "end": 75
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 75,
                    "end": 78
                },
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 78,
                    "end": 80
                },
                "flags": 35,
                "start": 60,
                "end": 80
            },
            "flags": 16,
            "start": 60,
            "end": 81
        }
    ],
    "isModule": false,
    "source": "(a: string) => x;\n\n(x, y: string) => z;\n\n([a]: string) => x;\n\n({a}: string) => x;\n\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 83
}
```

### Printed

```javascript

(a: string ) => x;
(x, y: string ) => z;

([a]: string ) => x;

({a}: string ) => x;

```

### Diagnostics

```javascript
✔ No errors
```

