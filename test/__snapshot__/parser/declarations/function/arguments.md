# Kataw parser test case

## Input

`````js
function f() {
    var x=arguments[12];
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
                            "kind": 155,
                            "declareKeyword": null,
                            "varKeyword": {
                                "kind": 37757002,
                                "flags": 768,
                                "start": 14,
                                "end": 22
                            },
                            "declarationList": {
                                "kind": 156,
                                "declarations": [
                                    {
                                        "kind": 157,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "arguments",
                                                "rawText": "arguments",
                                                "flags": 768,
                                                "start": 25,
                                                "end": 34
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 12,
                                                "rawText": "12",
                                                "flags": 768,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "flags": 256,
                                            "start": 25,
                                            "end": 38
                                        },
                                        "flags": 128,
                                        "start": 22,
                                        "end": 38
                                    }
                                ],
                                "flags": 128,
                                "start": 22,
                                "end": 38
                            },
                            "flags": 128,
                            "start": 14,
                            "end": 39
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 14,
                    "end": 39
                },
                "flags": 256,
                "start": 12,
                "end": 41
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "function f() {\n    var x=arguments[12];\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
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

