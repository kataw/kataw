# Kataw parser test case

## Input

`````js
delete async () => 3;
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
                "kind": 126,
                "operandToken": {
                    "kind": 4259886,
                    "flags": 96,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 271,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 6,
                        "end": 12
                    },
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 14,
                        "end": 14
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 15,
                        "end": 18
                    },
                    "contents": {
                        "kind": 201392130,
                        "text": 3,
                        "rawText": "3",
                        "flags": 96,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 288,
                    "start": 6,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "delete async () => 3;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

delete async () => 3;
```

### Diagnostics

```javascript
✔ No errors
```

