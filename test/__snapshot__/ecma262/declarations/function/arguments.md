# Kataw parser test case

## Input

`````js
function f() {
    var x=arguments[12];
}
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
                "start": 11,
                "end": 11
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
                                "flags": 81,
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
                                            "flags": 96,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 130,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "arguments",
                                                "rawText": "arguments",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 34
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 12,
                                                "rawText": "12",
                                                "flags": 96,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "flags": 536870944,
                                            "start": 25,
                                            "end": 38
                                        },
                                        "flags": 16,
                                        "start": 22,
                                        "end": 38
                                    }
                                ],
                                "flags": 16,
                                "start": 22,
                                "end": 38
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 39
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 39
                },
                "flags": 32,
                "start": 12,
                "end": 41
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "function f() {\n    var x=arguments[12];\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

function f() {
  var x = arguments[12];
}

```

### Diagnostics

```javascript
✔ No errors
```

