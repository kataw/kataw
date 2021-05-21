# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: y
> :: test: in try
> :: case: function f(){}
## Input

`````js
try {
  function f(){}
} catch (e) {
}
`````
## Output

### CST

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
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 1,
                                "start": 5,
                                "end": 16
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 18,
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
                                "end": 22
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 5,
                            "end": 22
                        }
                    ],
                    "flags": 17,
                    "start": 5,
                    "end": 22
                },
                "flags": 16,
                "start": 3,
                "end": 24
            },
            "catchClause": {
                "kind": 173,
                "catchKeyword": {
                    "kind": 4202575,
                    "flags": 0,
                    "start": 24,
                    "end": 30
                },
                "catchParameter": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 32,
                    "end": 33
                },
                "initializer": null,
                "block": {
                    "kind": 124,
                    "block": {
                        "kind": 249,
                        "statements": [],
                        "flags": 17,
                        "start": 36,
                        "end": 36
                    },
                    "flags": 16,
                    "start": 34,
                    "end": 38
                },
                "flags": 16,
                "start": 24,
                "end": 38
            },
            "finallyKeyword": null,
            "finallyBlock": null,
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "try {\n  function f(){}\n} catch (e) {\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

try {
  function f() {}
} catch (e) {
}
```

### Diagnostics

```javascript
✔ No errors
```

