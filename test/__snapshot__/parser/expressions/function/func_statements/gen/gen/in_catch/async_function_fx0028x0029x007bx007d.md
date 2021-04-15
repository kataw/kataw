# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: h
> :: test: in catch
> :: case: async function f(){}
## Input

`````js
try {
} catch (e) {
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
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 768,
                    "start": 7,
                    "end": 13
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 768,
                    "start": 15,
                    "end": 16
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
                                    "start": 19,
                                    "end": 27
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 768,
                                    "start": 27,
                                    "end": 36
                                },
                                "generatorToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "f",
                                    "rawText": "f",
                                    "flags": 768,
                                    "start": 36,
                                    "end": 38
                                },
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 38,
                                    "end": 40
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 41,
                                        "end": 41
                                    },
                                    "flags": 256,
                                    "start": 40,
                                    "end": 42
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 1152,
                                "start": 19,
                                "end": 42
                            }
                        ],
                        "multiLine": true,
                        "flags": 128,
                        "start": 19,
                        "end": 42
                    },
                    "flags": 128,
                    "start": 17,
                    "end": 44
                },
                "flags": 128,
                "start": 7,
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
    "text": "try {\n} catch (e) {\n  async function f(){}\n}",
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

