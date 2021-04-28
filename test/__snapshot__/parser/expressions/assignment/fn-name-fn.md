# Kataw parser test case

## Input

`````js
var xFn, fn;

xFn = function x() {};
fn = function() {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "xFn",
                            "rawText": "xFn",
                            "flags": 768,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 7
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 768,
                            "start": 8,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 8,
                        "end": 11
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "xFn",
                    "rawText": "xFn",
                    "flags": 768,
                    "start": 12,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 17,
                    "start": 512,
                    "end": 19
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 19,
                        "start": 0,
                        "end": 28
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 28,
                        "end": 30
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 30,
                        "end": 32
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 34,
                            "end": 34
                        },
                        "flags": 256,
                        "start": 32,
                        "end": 35
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 19,
                    "end": 35
                },
                "flags": 256,
                "start": 12,
                "end": 35
            },
            "flags": 128,
            "start": 12,
            "end": 36
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "fn",
                    "rawText": "fn",
                    "flags": 768,
                    "start": 36,
                    "end": 39
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 39,
                    "start": 512,
                    "end": 41
                },
                "right": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 41,
                        "start": 0,
                        "end": 50
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 50,
                        "end": 52
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 54,
                            "end": 54
                        },
                        "flags": 256,
                        "start": 52,
                        "end": 55
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 256,
                    "start": 41,
                    "end": 55
                },
                "flags": 256,
                "start": 36,
                "end": 55
            },
            "flags": 128,
            "start": 36,
            "end": 56
        }
    ],
    "isModule": false,
    "text": "var xFn, fn;\n\nxFn = function x() {};\nfn = function() {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
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

