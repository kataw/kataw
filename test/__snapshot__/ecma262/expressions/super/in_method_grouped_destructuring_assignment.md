# Kataw parser test case

## Input

`````js
x = { foo(){ ([a = super[foo]] = c); }}
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
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
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
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
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
                                                        "kind": 121,
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
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 15,
                                                                                "end": 16
                                                                            },
                                                                            "operatorToken": {
                                                                                "kind": 4125,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 16,
                                                                                "end": 18
                                                                            },
                                                                            "right": {
                                                                                "kind": 130,
                                                                                "member": {
                                                                                    "kind": 4259935,
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 18,
                                                                                    "end": 24
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 134299649,
                                                                                    "text": "foo",
                                                                                    "rawText": "foo",
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 25,
                                                                                    "end": 28
                                                                                },
                                                                                "flags": 536870944,
                                                                                "transformFlags": 4,
                                                                                "start": 18,
                                                                                "end": 29
                                                                            },
                                                                            "flags": 32,
                                                                            "transformFlags": 128,
                                                                            "start": 15,
                                                                            "end": 29
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 15,
                                                                    "end": 29
                                                                },
                                                                "flags": 32,
                                                                "transformFlags": 8,
                                                                "start": 14,
                                                                "end": 30
                                                            },
                                                            "operatorToken": {
                                                                "kind": 4125,
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 30,
                                                                "end": 32
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "c",
                                                                "rawText": "c",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 32,
                                                                "end": 34
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 128,
                                                            "start": 14,
                                                            "end": 34
                                                        },
                                                        "flags": 12,
                                                        "transformFlags": 0,
                                                        "start": 34,
                                                        "end": 35
                                                    },
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 36
                                                }
                                            ],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 36
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 38
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 38
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 38
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 38
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 3,
                    "end": 39
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "x = { foo(){ ([a = super[foo]] = c); }}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
x = { foo() {
    ([a = super[foo]] = c);
  } };
```

### Diagnostics

```javascript
✔ No errors
```

