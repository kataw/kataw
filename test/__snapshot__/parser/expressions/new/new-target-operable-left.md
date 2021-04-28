# Kataw parser test case

## Input

`````js
function f(){ new.target + foo }
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
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 10,
                "end": 12
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
                                    "kind": 211,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "target",
                                        "rawText": "target",
                                        "flags": 768,
                                        "start": 18,
                                        "end": 24
                                    },
                                    "flags": 768,
                                    "start": 13,
                                    "end": 24
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 24,
                                    "start": 512,
                                    "end": 26
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 26,
                                    "end": 30
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 30
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 30
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 30
                },
                "flags": 256,
                "start": 12,
                "end": 32
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "function f(){ new.target + foo }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

