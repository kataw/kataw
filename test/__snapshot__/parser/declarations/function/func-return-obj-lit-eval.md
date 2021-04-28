# Kataw parser test case

## Input

`````js
function foo() { return {eval} }
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
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 12,
                "end": 14
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 16,
                                "start": 0,
                                "end": 23
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "eval",
                                            "rawText": "eval",
                                            "flags": 768,
                                            "start": 25,
                                            "end": 29
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 29
                                },
                                "flags": 256,
                                "start": 23,
                                "end": 30
                            },
                            "flags": 128,
                            "start": 0,
                            "end": 16
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 16,
                    "end": 30
                },
                "flags": 256,
                "start": 14,
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
    "text": "function foo() { return {eval} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

