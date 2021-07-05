# Kataw parser test case

## Input

`````js
async ([{x}: string], y, z: string) =>  {};
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
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "typeParameters": null,
            "arrowPatameterList": {
                "kind": 342,
                "parameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 270,
                            "elements": [
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
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 9,
                                                    "end": 10
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "flags": 48,
                                        "start": 8,
                                        "end": 11
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "start": 12,
                                            "end": 19
                                        },
                                        "flags": 2097152,
                                        "start": 12,
                                        "end": 19
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 8,
                                    "end": 19
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 8,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 7,
                        "end": 20
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 21,
                        "end": 23
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 24,
                            "end": 26
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "start": 27,
                                "end": 34
                            },
                            "flags": 2097152,
                            "start": 27,
                            "end": 34
                        },
                        "right": null,
                        "flags": 32,
                        "start": 24,
                        "end": 34
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 7,
                "end": 35
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 35,
                "end": 38
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 41,
                    "end": 41
                },
                "flags": 32,
                "start": 38,
                "end": 42
            },
            "flags": 290,
            "start": 0,
            "end": 42
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 42,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "async ([{x}: string], y, z: string) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

async ([{x}: string ], y, z: string ) => {}
```

### Diagnostics

```javascript
✔ No errors
```

