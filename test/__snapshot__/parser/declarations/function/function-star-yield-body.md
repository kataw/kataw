# Kataw parser test case

## Input

`````js
function* bar() { yield /re/ }
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 8,
                "start": 512,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 768,
                "start": 9,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 13,
                "end": 15
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
                                            "flags": 17,
                                            "start": 0,
                                            "end": 23
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": null,
                                        "flags": 256,
                                        "start": 17,
                                        "end": 23
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 512,
                                        "start": 23,
                                        "end": 25
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "re",
                                        "rawText": "re",
                                        "flags": 768,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 256,
                                    "start": 17,
                                    "end": 27
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 512,
                                    "start": 27,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 12,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 256,
                                "start": 17,
                                "end": 28
                            },
                            "flags": 128,
                            "start": 17,
                            "end": 28
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 17,
                    "end": 28
                },
                "flags": 256,
                "start": 15,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "function* bar() { yield /re/ }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 28, end: 30

```

