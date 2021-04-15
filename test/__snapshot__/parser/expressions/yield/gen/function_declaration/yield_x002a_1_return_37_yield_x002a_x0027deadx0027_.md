# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: yield * 1; return 37; yield * 'dead';
## Input

`````js
function not_gen() { yield * 1; return 37; yield * 'dead'; }}
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 16,
                "end": 18
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
                                    "flags": 768,
                                    "start": 20,
                                    "end": 26
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "flags": 768,
                                    "start": 26,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 768,
                                    "start": 28,
                                    "end": 30
                                },
                                "flags": 256,
                                "start": 20,
                                "end": 30
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 31
                        },
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 768,
                                "start": 31,
                                "end": 38
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": 37,
                                "rawText": "37",
                                "flags": 768,
                                "start": 38,
                                "end": 41
                            },
                            "flags": 128,
                            "start": 0,
                            "end": 31
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 42,
                                    "end": 48
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "flags": 768,
                                    "start": 48,
                                    "end": 50
                                },
                                "right": {
                                    "kind": 201392131,
                                    "text": "dead",
                                    "rawText": "dead",
                                    "flags": 67109632,
                                    "start": 50,
                                    "end": 57
                                },
                                "flags": 256,
                                "start": 42,
                                "end": 57
                            },
                            "flags": 128,
                            "start": 42,
                            "end": 58
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 58
                },
                "flags": 256,
                "start": 18,
                "end": 60
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "text": "function not_gen() { yield * 1; return 37; yield * 'dead'; }}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 60,
            "end": 61
        }
    ],
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

