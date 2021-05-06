# Kataw parser test case

## Input

`````js
function fn() { (() => this)().#x }
`````

## Output
### CST

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
                "text": "fn",
                "rawText": "fn",
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
                                                "kind": 135,
                                                "flags": 96,
                                                "start": 22,
                                                "end": 27
                                            },
                                            "flags": 32,
                                            "start": 17,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 15,
                                        "end": 28
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 29,
                                        "end": 29
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 30
                                },
                                "expression": {
                                    "kind": 67174651,
                                    "text": "#x",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 33
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 33
                },
                "flags": 32,
                "start": 13,
                "end": 35
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "function fn() { (() => this)().#x }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class_bodies - start: 31, end: 33

```

