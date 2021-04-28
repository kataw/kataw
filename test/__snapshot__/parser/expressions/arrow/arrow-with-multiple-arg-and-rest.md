# Kataw parser test case

## Input

`````js
(a,b,...c) => 0;
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
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 3,
                            "end": 4
                        },
                        {
                            "kind": 215,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 5,
                                "start": 512,
                                "end": 8
                            },
                            "binding": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 768,
                                "start": 8,
                                "end": 9
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 258,
                            "start": 5,
                            "end": 9
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
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
        }
    ],
    "isModule": false,
    "text": "(a,b,...c) => 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

