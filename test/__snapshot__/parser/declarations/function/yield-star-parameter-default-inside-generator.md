# Kataw parser test case

## Input

`````js
function* fn(x = yield* yield) {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "fn",
                "rawText": "fn",
                "flags": 96,
                "start": 9,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 13,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 229,
                            "yieldKeyword": {
                                "kind": 8454253,
                                "flags": 64,
                                "start": 16,
                                "end": 22
                            },
                            "delegate": true,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 22,
                                "end": 23
                            },
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 64,
                                    "start": 23,
                                    "end": 29
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": null,
                                "flags": 32,
                                "start": 23,
                                "end": 29
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 29
                        },
                        "flags": 34,
                        "start": 13,
                        "end": 29
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 12,
                "end": 30
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 32,
                    "end": 32
                },
                "flags": 32,
                "start": 30,
                "end": 33
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "function* fn(x = yield* yield) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `yield` expression cannot be used in function parameters - start: 16, end: 22
✖ `yield` expression cannot be used in function parameters - start: 23, end: 29

```

