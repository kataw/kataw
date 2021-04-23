# Kataw parser test case

## Input

`````js
function* f(){ yield
/foo/ }
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
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 9,
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
                            "kind": 120,
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 768,
                                            "start": 14,
                                            "end": 20
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 256,
                                        "start": 14,
                                        "end": 20
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 768,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 768,
                                        "start": 22,
                                        "end": 25
                                    },
                                    "flags": 256,
                                    "start": 14,
                                    "end": 25
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 768,
                                    "start": 25,
                                    "end": 26
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 26,
                                    "end": 26
                                },
                                "flags": 256,
                                "start": 14,
                                "end": 26
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 26
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 14,
                    "end": 26
                },
                "flags": 256,
                "start": 13,
                "end": 28
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "text": "function* f(){ yield\n/foo/ }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 26,
            "end": 28
        }
    ],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

