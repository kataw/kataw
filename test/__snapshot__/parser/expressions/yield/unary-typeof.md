# Kataw parser test case

## Input

`````js
function *f() {  return typeof yield foo;  }
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
                                "start": 15,
                                "end": 23
                            },
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 138477613,
                                    "flags": 768,
                                    "start": 23,
                                    "end": 30
                                },
                                "expression": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 768,
                                        "start": 30,
                                        "end": 36
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 36,
                                        "end": 40
                                    },
                                    "flags": 256,
                                    "start": 30,
                                    "end": 40
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 40
                            },
                            "flags": 128,
                            "start": 0,
                            "end": 15
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 15,
                    "end": 41
                },
                "flags": 256,
                "start": 13,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "function *f() {  return typeof yield foo;  }",
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

