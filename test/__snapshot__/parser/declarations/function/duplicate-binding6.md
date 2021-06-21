# Kataw parser test case

## Input

`````js
function f() { { var x } function x() {} }
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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
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
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 155,
                                        "declareKeyword": null,
                                        "varKeyword": {
                                            "kind": 37757002,
                                            "flags": 80,
                                            "start": 16,
                                            "end": 20
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
                                                        "flags": 96,
                                                        "start": 20,
                                                        "end": 22
                                                    },
                                                    "type": null,
                                                    "initializer": null,
                                                    "flags": 16,
                                                    "start": 20,
                                                    "end": 22
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 20,
                                            "end": 22
                                        },
                                        "flags": 16,
                                        "start": 16,
                                        "end": 22
                                    }
                                ],
                                "flags": 16,
                                "start": 16,
                                "end": 22
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 24
                        },
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 24,
                                "end": 33
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 33,
                                "end": 35
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 35,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 39,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 37,
                                "end": 40
                            },
                            "returnType": null,
                            "flags": 16,
                            "start": 24,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 40
                },
                "flags": 32,
                "start": 12,
                "end": 42
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "function f() { { var x } function x() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

 function f() {
{ var x; }
function x() {
}
} 
```

### Diagnostics

```javascript
✔ No errors
```

