# Kataw parser test case

## Input

`````js
(...x = y) => x;

(...x = 10) => {};
`````

## Output

### Hybrid CST

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
                    "flags": 10,
                    "start": 0,
                    "end": 13
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 1,
                            "start": 512,
                            "end": 4
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 4,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 7,
                            "end": 9
                        },
                        "flags": 258,
                        "start": 1,
                        "end": 9
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 13,
                    "end": 15
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 29,
                    "start": 0,
                    "end": 32
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 215,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 19,
                            "start": 512,
                            "end": 22
                        },
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 22,
                            "end": 23
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 768,
                            "start": 25,
                            "end": 28
                        },
                        "flags": 258,
                        "start": 19,
                        "end": 28
                    }
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "multiline": false,
                        "flags": 256,
                        "start": 34,
                        "end": 34
                    },
                    "flags": 256,
                    "start": 32,
                    "end": 35
                },
                "flags": 256,
                "start": 16,
                "end": 35
            },
            "flags": 128,
            "start": 16,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "(...x = y) => x;\n\n(...x = 10) => {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A rest element cannot have an initializer - start: 5, end: 7
✖ A rest element cannot have an initializer - start: 23, end: 25

```

