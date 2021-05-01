# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in finally
> :: case: async function f(){}
## Input

`````js
try {
} finally {
  async function f(){}
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
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "flags": 17,
                    "start": 5,
                    "end": 5
                },
                "flags": 16,
                "start": 3,
                "end": 7
            },
            "catchClause": null,
            "finallyKeyword": {
                "kind": 37757016,
                "flags": 0,
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
                                "flags": 65,
                                "start": 17,
                                "end": 25
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 25,
                                "end": 34
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 34,
                                "end": 36
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 36,
                                "end": 38
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 38,
                                "end": 40
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 144,
                            "start": 17,
                            "end": 40
                        }
                    ],
                    "flags": 17,
                    "start": 17,
                    "end": 40
                },
                "flags": 16,
                "start": 15,
                "end": 42
            },
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "try {\n} finally {\n  async function f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
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

