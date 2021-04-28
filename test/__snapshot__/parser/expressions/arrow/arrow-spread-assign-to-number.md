# Kataw parser test case

## Input

`````js
(a, ...x = 10) => x;
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
                    "flags": 14,
                    "start": 0,
                    "end": 17
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 3,
                                "start": 512,
                                "end": 7
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 7,
                                "end": 8
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 10,
                                "rawText": "10",
                                "flags": 768,
                                "start": 10,
                                "end": 13
                            },
                            "flags": 258,
                            "start": 3,
                            "end": 13
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 17,
                    "end": 19
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "(a, ...x = 10) => x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A rest element cannot have an initializer - start: 8, end: 10

```

