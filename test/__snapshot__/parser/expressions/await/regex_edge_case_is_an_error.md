# Kataw parser test case

## Input

`````js
async function f(){ await foo
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "original": "f",
                "text": "f",
                "rawText": " f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                                    "kind": 198,
                                    "left": {
                                        "kind": 208,
                                        "awaitToken": {
                                            "kind": 82032,
                                            "flags": 0,
                                            "start": 19,
                                            "end": 25
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "original": "foo",
                                            "text": "foo",
                                            "rawText": " foo",
                                            "flags": 96,
                                            "start": 25,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "start": 19,
                                        "end": 29
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 65,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "original": "foo",
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 31,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "start": 19,
                                    "end": 34
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 64,
                                    "start": 34,
                                    "end": 35
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 68,
                                    "start": 35,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 35
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 35
                },
                "flags": 32,
                "start": 18,
                "end": 37
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "async function f(){ await foo\n/foo/ }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 35, end: 37

```

