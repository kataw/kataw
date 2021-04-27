# Kataw parser test case

## Input

`````js
function f(){ [...new.target] }
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
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 223,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 768,
                                                "start": 15,
                                                "end": 18
                                            },
                                            "argument": {
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
                                            "start": 15,
                                            "end": 28
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 15,
                                    "end": 28
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 29
                            },
                            "flags": 128,
                            "start": 13,
                            "end": 29
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 13,
                    "end": 29
                },
                "flags": 256,
                "start": 12,
                "end": 31
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "function f(){ [...new.target] }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

