# Kataw parser test case

## Input

`````js
() => 1, 42;
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 0,
                            "start": 2,
                            "end": 5
                        },
                        "typeParameters": null,
                        "parameters": [],
                        "asyncToken": null,
                        "returnType": null,
                        "contents": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 7
                    },
                    {
                        "kind": 201392130,
                        "text": 42,
                        "rawText": "42",
                        "flags": 96,
                        "start": 8,
                        "end": 11
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "() => 1, 42;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

