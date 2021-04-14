# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in finally
> :: case: function f(){}
## Input

`````js
try {
} finally {
  function f(){}
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
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37814362,
                                "flags": 768,
                                "start": 17,
                                "end": 28
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 81921,
                                "text": "f",
                                "rawText": "f",
                                "flags": 768,
                                "start": 28,
                                "end": 30
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 30,
                                "end": 32
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 33,
                                    "end": 33
                                },
                                "flags": 256,
                                "start": 32,
                                "end": 34
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 256,
                            "start": 17,
                            "end": 34
                        }
                    ],
                    "multiLine": true,
                    "flags": 128,
                    "start": 17,
                    "end": 34
                },
                "flags": 128,
                "start": 15,
                "end": 36
            },
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "try {\n} finally {\n  function f(){}\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in finally
> :: case: function f(){}
## Input

`````js
try {
} finally {
  function f(){}
}
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: in finally
> :: case: function f(){}
## Input

`````js
try {
} finally {
  function f(){}
}
`````
```

