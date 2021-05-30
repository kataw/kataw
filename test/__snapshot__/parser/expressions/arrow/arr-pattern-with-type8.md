# Kataw parser test case

## Input

`````js
([...{x}: string], y, z: string) =>  {};
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
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 32,
                    "end": 35
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 203,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 2,
                                            "end": 5
                                        },
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
                                                        "start": 6,
                                                        "end": 7
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "start": 6,
                                                "end": 7
                                            },
                                            "flags": 48,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 139,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 9,
                                                "end": 16
                                            },
                                            "flags": 0,
                                            "start": 8,
                                            "end": 16
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 2,
                                        "end": 16
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 16
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 17
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        {
                            "kind": 203,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 21,
                                "end": 23
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 24,
                                    "end": 31
                                },
                                "flags": 0,
                                "start": 23,
                                "end": 31
                            },
                            "right": null,
                            "flags": 32,
                            "start": 0,
                            "end": 31
                        }
                    ]
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 38,
                        "end": 38
                    },
                    "flags": 32,
                    "start": 35,
                    "end": 39
                },
                "flags": 34,
                "start": 0,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "([...{x}: string], y, z: string) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

() =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

