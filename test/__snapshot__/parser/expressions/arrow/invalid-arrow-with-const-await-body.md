# Kataw parser test case

## Input

`````js
let f = () => { const [...await f] = []; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 10,
                                "end": 13
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncToken": null,
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 162,
                                            "lexicalKeyword": {
                                                "kind": 37757004,
                                                "flags": 768,
                                                "start": 15,
                                                "end": 21
                                            },
                                            "binding": {
                                                "kind": 151,
                                                "bindingList": [
                                                    {
                                                        "kind": 190,
                                                        "binding": {
                                                            "kind": 201,
                                                            "elementList": {
                                                                "kind": 202,
                                                                "elements": [
                                                                    {
                                                                        "kind": 244,
                                                                        "ellipsisToken": {
                                                                            "kind": 524302,
                                                                            "flags": 768,
                                                                            "start": 23,
                                                                            "end": 26
                                                                        },
                                                                        "binding": {
                                                                            "kind": 134299649,
                                                                            "text": "await",
                                                                            "rawText": "await",
                                                                            "flags": 768,
                                                                            "start": 26,
                                                                            "end": 31
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "flags": 256,
                                                                        "start": 23,
                                                                        "end": 31
                                                                    },
                                                                    {
                                                                        "kind": 244,
                                                                        "ellipsisToken": null,
                                                                        "binding": {
                                                                            "kind": 134299649,
                                                                            "text": "f",
                                                                            "rawText": "f",
                                                                            "flags": 768,
                                                                            "start": 31,
                                                                            "end": 33
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "flags": 256,
                                                                        "start": 31,
                                                                        "end": 33
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 23,
                                                                "end": 33
                                                            },
                                                            "flags": 256,
                                                            "start": 21,
                                                            "end": 34
                                                        },
                                                        "optionalToken": null,
                                                        "type": null,
                                                        "initializer": {
                                                            "kind": 119,
                                                            "elementList": {
                                                                "kind": 270,
                                                                "elements": [],
                                                                "trailingComma": false,
                                                                "flags": 256,
                                                                "start": 38,
                                                                "end": 38
                                                            },
                                                            "flags": 256,
                                                            "start": 36,
                                                            "end": 39
                                                        },
                                                        "flags": 128,
                                                        "start": 21,
                                                        "end": 39
                                                    }
                                                ],
                                                "flags": 160,
                                                "start": 21,
                                                "end": 39
                                            },
                                            "flags": 128,
                                            "start": 15,
                                            "end": 40
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 15,
                                    "end": 40
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 42
                            },
                            "flags": 256,
                            "start": 7,
                            "end": 42
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 42
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 42
            },
            "flags": 0,
            "start": 128,
            "end": 42
        }
    ],
    "isModule": false,
    "text": "let f = () => { const [...await f] = []; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 31, end: 33

```

