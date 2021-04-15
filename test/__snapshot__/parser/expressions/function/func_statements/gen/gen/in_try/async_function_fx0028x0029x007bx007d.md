# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in try
> :: case: async function f(){}
## Input

`````js
try {
  async function f(){}
} catch (e) {
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
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 5,
                                "end": 13
                            },
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 13,
                                "end": 22
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 22,
                                "end": 24
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 24,
                                "end": 26
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 27,
                                    "end": 27
                                },
                                "flags": 256,
                                "start": 26,
                                "end": 28
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 1152,
                            "start": 5,
                            "end": 28
                        }
                    ],
                    "multiLine": true,
                    "flags": 128,
                    "start": 5,
                    "end": 28
                },
                "flags": 128,
                "start": 3,
                "end": 30
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 768,
                    "start": 30,
                    "end": 36
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 768,
                    "start": 38,
                    "end": 39
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": true,
                        "flags": 128,
                        "start": 42,
                        "end": 42
                    },
                    "flags": 128,
                    "start": 40,
                    "end": 44
                },
                "flags": 128,
                "start": 30,
                "end": 44
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 128,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "try {\n  async function f(){}\n} catch (e) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

