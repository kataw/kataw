# Kataw parser test case

## Input

`````js
(function () { yield* 10 })
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
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 1,
                        "end": 9
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 11,
                        "end": 11
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 20
                                        },
                                        "operatorToken": {
                                            "kind": 67143222,
                                            "flags": 96,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 10,
                                            "rawText": "10",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "flags": 96,
                                        "start": 14,
                                        "end": 24
                                    },
                                    "flags": 16,
                                    "start": 14,
                                    "end": 24
                                }
                            ],
                            "flags": 32,
                            "start": 14,
                            "end": 24
                        },
                        "flags": 32,
                        "start": 12,
                        "end": 26
                    },
                    "returnType": null,
                    "flags": 32,
                    "start": 1,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "(function () { yield* 10 })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

  (function () {
    yield * 10;
  });

```

### Diagnostics

```javascript
✔ No errors
```

