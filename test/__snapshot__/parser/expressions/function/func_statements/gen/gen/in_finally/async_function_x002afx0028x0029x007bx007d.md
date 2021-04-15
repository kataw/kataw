# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in finally
> :: case: async function *f(){}
## Input

`````js
try {
} finally {
  async function *f(){}
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
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": true,
                    "flags": 128,
                    "start": 5,
                    "end": 5
                },
                "flags": 128,
                "start": 3,
                "end": 7
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 768,
                "start": 7,
                "end": 15
            },
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 17,
                                "end": 25
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 25,
                                "end": 34
                            },
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 768,
                                "start": 34,
                                "end": 36
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 36,
                                "end": 37
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 37,
                                "end": 39
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 40,
                                    "end": 40
                                },
                                "flags": 256,
                                "start": 39,
                                "end": 41
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 3200,
                            "start": 17,
                            "end": 41
                        }
                    ],
                    "multiLine": true,
                    "flags": 128,
                    "start": 17,
                    "end": 41
                },
                "flags": 128,
                "start": 15,
                "end": 43
            },
            "flags": 128,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "try {\n} finally {\n  async function *f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

