# Kataw parser test case

## Input

`````js
 async ([x, y: number]) =>  {};
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
                "end": 6
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
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 10
                                },
                                {
                                    "kind": 281,
                                    "ellipsisToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 14,
                                            "end": 21
                                        },
                                        "flags": 2097152,
                                        "start": 14,
                                        "end": 21
                                    },
                                    "right": null,
                                    "flags": 32,
                                    "start": 11,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 9,
                            "end": 21
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 22
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 8,
                "end": 23
            },
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 23,
                "end": 26
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 29,
                    "end": 29
                },
                "flags": 32,
                "start": 26,
                "end": 30
            },
            "flags": 290,
            "start": 0,
            "end": 30
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 30,
            "end": 31
        }
    ],
    "isModule": false,
    "source": " async ([x, y: number]) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

async ([x, y: number]) =>  { }
;

```

### Diagnostics

```javascript
✔ No errors
```

