# Kataw parser test case

## Input

`````js
function f(){ x({[new.target]:y}) }
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
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 13,
                                    "end": 15
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 768,
                                                            "start": 30,
                                                            "end": 31
                                                        },
                                                        "right": {
                                                            "kind": 194,
                                                            "expression": {
                                                                "kind": 211,
                                                                "name": {
                                                                    "kind": 134299649,
                                                                    "text": "target",
                                                                    "rawText": "target",
                                                                    "flags": 768,
                                                                    "start": 22,
                                                                    "end": 28
                                                                },
                                                                "flags": 768,
                                                                "start": 18,
                                                                "end": 28
                                                            },
                                                            "flags": 256,
                                                            "start": 17,
                                                            "end": 29
                                                        },
                                                        "flags": 256,
                                                        "start": 17,
                                                        "end": 31
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 17,
                                                "end": 31
                                            },
                                            "flags": 256,
                                            "start": 16,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 16,
                                    "end": 32
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 33
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 33
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 33
                },
                "flags": 256,
                "start": 12,
                "end": 35
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "function f(){ x({[new.target]:y}) }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

