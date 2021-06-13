# Kataw parser test case

## Input

`````js
 ([x?: string, y]) =>  {};
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
                    "start": 18,
                    "end": 21
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 16
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "optionalToken": {
                                        "kind": 134217750,
                                        "flags": 64,
                                        "start": 4,
                                        "end": 5
                                    },
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "start": 6,
                                            "end": 13
                                        },
                                        "flags": 2097152,
                                        "start": 5,
                                        "end": 13
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 3,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 3,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 2,
                        "end": 17
                    }
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
                        "start": 24,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 25
                },
                "flags": 34,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": " ([x?: string, y]) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An optional parameter cannot be used within an array pattern - start: 5, end: 6

```

