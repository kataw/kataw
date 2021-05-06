# Kataw parser test case

## Input

`````js
function f(){ [...new.target] }
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
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                                                "flags": 0,
                                                "start": 15,
                                                "end": 18
                                            },
                                            "argument": {
                                                "kind": 211,
                                                "newKeyword": {
                                                    "kind": 138477661,
                                                    "flags": 0,
                                                    "start": 18,
                                                    "end": 21
                                                },
                                                "targetIdentifier": {
                                                    "kind": 16594,
                                                    "flags": 0,
                                                    "start": 22,
                                                    "end": 28
                                                },
                                                "flags": 96,
                                                "start": 18,
                                                "end": 28
                                            },
                                            "flags": 32,
                                            "start": 15,
                                            "end": 28
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 15,
                                    "end": 28
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 29
                            },
                            "flags": 16,
                            "start": 13,
                            "end": 29
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 29
                },
                "flags": 32,
                "start": 12,
                "end": 31
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "function f(){ [...new.target] }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
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

