# Kataw parser test case

## Input

`````js
function foo() {
  return {
    // this comment causes the problem
    bar: baz() + 1
  };
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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 13
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
                                "flags": 81,
                                "start": 16,
                                "end": 25
                            },
                            "expression": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 97,
                                                "start": 27,
                                                "end": 74
                                            },
                                            "right": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "baz",
                                                        "rawText": "baz",
                                                        "flags": 96,
                                                        "start": 75,
                                                        "end": 79
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "start": 80,
                                                        "end": 80
                                                    },
                                                    "flags": 268435488,
                                                    "start": 27,
                                                    "end": 81
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "start": 81,
                                                    "end": 83
                                                },
                                                "right": {
                                                    "kind": 201392130,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 96,
                                                    "start": 83,
                                                    "end": 85
                                                },
                                                "flags": 268435488,
                                                "start": 27,
                                                "end": 85
                                            },
                                            "flags": 33,
                                            "start": 27,
                                            "end": 85
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 17,
                                    "start": 27,
                                    "end": 85
                                },
                                "flags": 49,
                                "start": 25,
                                "end": 89
                            },
                            "flags": 81,
                            "start": 16,
                            "end": 90
                        }
                    ],
                    "flags": 33,
                    "start": 16,
                    "end": 90
                },
                "flags": 32,
                "start": 14,
                "end": 92
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 92
        }
    ],
    "isModule": false,
    "source": "function foo() {\n  return {\n    // this comment causes the problem\n    bar: baz() + 1\n  };\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 92
}
```

### Printed

```javascript

function foo() {
  return {
    bar: baz() +  1
  };
}
```

### Diagnostics

```javascript
✔ No errors
```

