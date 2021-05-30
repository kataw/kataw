# Kataw parser test case

## Input

`````js
 async ([x: string, y: number]) =>  {};
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
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 31,
                "end": 34
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 203,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 10
                                },
                                "optionalToken": null,
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 64,
                                        "start": 11,
                                        "end": 18
                                    },
                                    "flags": 0,
                                    "start": 10,
                                    "end": 18
                                },
                                "right": null,
                                "flags": 32,
                                "start": 9,
                                "end": 18
                            },
                            {
                                "kind": 203,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 21
                                },
                                "optionalToken": null,
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 29
                                    },
                                    "flags": 0,
                                    "start": 21,
                                    "end": 29
                                },
                                "right": null,
                                "flags": 32,
                                "start": 19,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 9,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 30
                }
            ],
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "returnType": null,
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 37,
                    "end": 37
                },
                "flags": 32,
                "start": 34,
                "end": 38
            },
            "flags": 290,
            "start": 0,
            "end": 38
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 38,
            "end": 39
        }
    ],
    "isModule": false,
    "source": " async ([x: string, y: number]) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

async ([[], []]) =>  {}

```

### Diagnostics

```javascript
✔ No errors
```

