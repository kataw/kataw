# Kataw parser test case

## Input

`````js
x = { foo(){ delete super[foo]; }}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 351,
                                "asyncKeyword": null,
                                "asteriskToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 120,
                                                    "expression": {
                                                        "kind": 126,
                                                        "operandToken": {
                                                            "kind": 4259886,
                                                            "flags": 96,
                                                            "start": 12,
                                                            "end": 19
                                                        },
                                                        "operand": {
                                                            "kind": 536871042,
                                                            "member": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 96,
                                                                    "start": 19,
                                                                    "end": 25
                                                                },
                                                                "flags": 96,
                                                                "start": 19,
                                                                "end": 25
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "start": 26,
                                                                "end": 29
                                                            },
                                                            "flags": 32,
                                                            "start": 19,
                                                            "end": 30
                                                        },
                                                        "flags": 32,
                                                        "start": 12,
                                                        "end": 30
                                                    },
                                                    "flags": 16,
                                                    "start": 12,
                                                    "end": 31
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 12,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 33
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 33
                    },
                    "flags": 48,
                    "start": 3,
                    "end": 34
                },
                "flags": 32,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "x = { foo(){ delete super[foo]; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

x = { foo {
    delete ;
  } };
```

### Diagnostics

```javascript
✔ No errors
```

