# Kataw parser test case

## Input

`````js
 ([x, y: number]) =>  {};
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
                    "start": 17,
                    "end": 20
                },
                "typeParameters": null,
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
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 7
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 8,
                                            "end": 15
                                        },
                                        "flags": 0,
                                        "start": 7,
                                        "end": 15
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 5,
                                    "end": 15
                                },
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 3,
                                    "end": 4
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 3,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 2
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
                        "start": 23,
                        "end": 23
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 24
                },
                "flags": 34,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": " ([x, y: number]) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

([, x]) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

