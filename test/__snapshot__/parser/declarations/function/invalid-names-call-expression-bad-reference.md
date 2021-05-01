# Kataw parser test case

## Input

`````js
function fn() { (() => {})().#x }
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "original": "fn",
                "text": "fn",
                "rawText": " fn",
                "flags": 96,
                "start": 8,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                                "kind": 129,
                                "member": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 0,
                                                "start": 19,
                                                "end": 22
                                            },
                                            "typeParameters": null,
                                            "parameters": [],
                                            "asyncToken": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 24,
                                                    "end": 24
                                                },
                                                "flags": 32,
                                                "start": 22,
                                                "end": 25
                                            },
                                            "flags": 32,
                                            "start": 17,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 15,
                                        "end": 26
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 27,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 28
                                },
                                "expression": {
                                    "kind": 67109115,
                                    "text": "#x",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 31
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 31
                },
                "flags": 32,
                "start": 13,
                "end": 33
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "function fn() { (() => {})().#x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class_bodies - start: 29, end: 31

```

