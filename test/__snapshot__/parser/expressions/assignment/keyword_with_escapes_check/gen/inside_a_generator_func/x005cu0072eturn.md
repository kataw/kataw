# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside a generator func
> :: case: \u0072eturn
## Input

`````js
function *f(){
  \u0072eturn = x
}
`````

## Output

### Hybrid CST

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
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 11,
                "end": 13
            },
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
                                "flags": 768,
                                "start": 14,
                                "end": 28
                            },
                            "expression": {
                                "kind": 125,
                                "left": {
                                    "kind": 16637,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 28,
                                    "end": 28
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 768,
                                    "start": 28,
                                    "end": 30
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 30,
                                    "end": 32
                                },
                                "flags": 256,
                                "start": 28,
                                "end": 32
                            },
                            "flags": 128,
                            "start": 1,
                            "end": 14
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 14,
                    "end": 32
                },
                "flags": 256,
                "start": 13,
                "end": 34
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "function *f(){\n  \\u0072eturn = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 28,
            "end": 30
        }
    ],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

