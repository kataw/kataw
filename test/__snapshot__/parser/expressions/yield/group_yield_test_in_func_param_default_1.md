# Kataw parser test case

## Input

`````js
function f(x=(yield)=y){}
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
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 11,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
                                "kind": 121,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "yield",
                                    "rawText": "yield",
                                    "flags": 768,
                                    "start": 14,
                                    "end": 19
                                },
                                "flags": 256,
                                "start": 13,
                                "end": 20
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 20,
                                "start": 512,
                                "end": 21
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 21,
                                "end": 22
                            },
                            "flags": 256,
                            "start": 13,
                            "end": 22
                        },
                        "flags": 258,
                        "start": 11,
                        "end": 22
                    }
                ],
                "trailingComma": false,
                "flags": 258,
                "start": 10,
                "end": 23
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 24,
                    "end": 24
                },
                "flags": 256,
                "start": 23,
                "end": 25
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "function f(x=(yield)=y){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
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

