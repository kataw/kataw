# Kataw parser test case

## Input

`````js
x = { foo(){ [a = super.foo] = c; }}
`````

## Output

### Hybrid CST

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
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 1,
                    "start": 512,
                    "end": 3
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 9
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 256,
                                    "start": 10,
                                    "end": 11
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 119,
                                                        "elementList": {
                                                            "kind": 270,
                                                            "elements": [
                                                                {
                                                                    "kind": 125,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "a",
                                                                        "rawText": "a",
                                                                        "flags": 768,
                                                                        "start": 14,
                                                                        "end": 15
                                                                    },
                                                                    "operatorToken": {
                                                                        "kind": 4125,
                                                                        "flags": 15,
                                                                        "start": 512,
                                                                        "end": 17
                                                                    },
                                                                    "right": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 225,
                                                                            "superKeyword": {
                                                                                "kind": 4259935,
                                                                                "flags": 17,
                                                                                "start": 0,
                                                                                "end": 23
                                                                            },
                                                                            "flags": 768,
                                                                            "start": 17,
                                                                            "end": 23
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "foo",
                                                                            "rawText": "foo",
                                                                            "flags": 768,
                                                                            "start": 24,
                                                                            "end": 27
                                                                        },
                                                                        "flags": 256,
                                                                        "start": 17,
                                                                        "end": 27
                                                                    },
                                                                    "flags": 256,
                                                                    "start": 14,
                                                                    "end": 27
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 256,
                                                            "start": 14,
                                                            "end": 27
                                                        },
                                                        "flags": 256,
                                                        "start": 12,
                                                        "end": 28
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 28,
                                                        "start": 512,
                                                        "end": 30
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 768,
                                                        "start": 30,
                                                        "end": 32
                                                    },
                                                    "flags": 256,
                                                    "start": 12,
                                                    "end": 32
                                                },
                                                "flags": 128,
                                                "start": 12,
                                                "end": 33
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 12,
                                        "end": 33
                                    },
                                    "flags": 256,
                                    "start": 11,
                                    "end": 35
                                },
                                "flags": 256,
                                "start": 9,
                                "end": 35
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 35
                    },
                    "flags": 256,
                    "start": 3,
                    "end": 36
                },
                "flags": 256,
                "start": 0,
                "end": 36
            },
            "flags": 128,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "x = { foo(){ [a = super.foo] = c; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
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

