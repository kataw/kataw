# Kataw parser test case

## Input

`````js
 async ([x?: string, y]) =>  {};
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
                                "start": 20,
                                "end": 22
                            },
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 10
                                },
                                "optionalToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 10,
                                    "end": 11
                                },
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
                                "start": 9,
                                "end": 19
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 9,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 23
                }
            ],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 24,
                "end": 27
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 30,
                    "end": 30
                },
                "flags": 32,
                "start": 27,
                "end": 31
            },
            "flags": 290,
            "start": 0,
            "end": 31
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 31,
            "end": 32
        }
    ],
    "isModule": false,
    "source": " async ([x?: string, y]) =>  {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An optional parameter cannot be used within an array pattern - start: 11, end: 12

```

