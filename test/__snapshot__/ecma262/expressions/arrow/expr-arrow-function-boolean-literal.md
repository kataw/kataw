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
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 1
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 5
                        },
                        "contents": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 7
                    },
                    {
                        "kind": 201392130,
                        "text": 42,
                        "rawText": "42",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 11
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "() => 1, 42;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
() => 1, 42;
```

### Diagnostics

```javascript
✔ No errors
```

