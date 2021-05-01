# Kataw parser test case

## Input

`````js
(a, b) => {return}
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
                    "flags": 0,
                    "start": 6,
                    "end": 9
                },
                "typeParameters": null,
                "parameters": [
                    [
                        {
                            "kind": 134299649,
                            "original": "a",
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 134299649,
                            "original": "b",
                            "text": "b",
                            "rawText": " b",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        }
                    ]
                ],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 161,
                                "returnKeyword": {
                                    "kind": 37757022,
                                    "flags": 0,
                                    "start": 11,
                                    "end": 17
                                },
                                "expression": null,
                                "flags": 16,
                                "start": 0,
                                "end": 11
                            }
                        ],
                        "flags": 32,
                        "start": 11,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "(a, b) => {return}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
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

