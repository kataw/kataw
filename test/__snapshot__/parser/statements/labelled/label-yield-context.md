# Kataw parser test case

## Input

`````js
function * x () {
    y: yield;
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
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 10,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 12,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 17,
                                "end": 23
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 229,
                                    "yieldKeyword": {
                                        "kind": 8454253,
                                        "flags": 24,
                                        "start": 0,
                                        "end": 30
                                    },
                                    "delegate": false,
                                    "asteriskToken": null,
                                    "expression": null,
                                    "flags": 256,
                                    "start": 24,
                                    "end": 30
                                },
                                "flags": 128,
                                "start": 24,
                                "end": 31
                            },
                            "flags": 128,
                            "start": 17,
                            "end": 31
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 17,
                    "end": 31
                },
                "flags": 256,
                "start": 15,
                "end": 33
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "function * x () {\n    y: yield;\n}",
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
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 24, end: 30

```

