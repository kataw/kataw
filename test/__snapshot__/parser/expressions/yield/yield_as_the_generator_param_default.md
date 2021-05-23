# Kataw parser test case

## Input

`````js
function *f(x=yield){ }
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 12,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 229,
                            "yieldKeyword": {
                                "kind": 8454253,
                                "flags": 0,
                                "start": 14,
                                "end": 19
                            },
                            "delegate": false,
                            "asteriskToken": null,
                            "expression": null,
                            "flags": 32,
                            "start": 14,
                            "end": 19
                        },
                        "flags": 34,
                        "start": 12,
                        "end": 19
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 11,
                "end": 20
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 21,
                    "end": 21
                },
                "flags": 32,
                "start": 20,
                "end": 23
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "function *f(x=yield){ }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `Yield` expression cannot be used in function parameters - start: 14, end: 19

```

