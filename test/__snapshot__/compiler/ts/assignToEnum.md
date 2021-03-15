# Kataw parser test case

## Input

`````js
enum A { foo, bar }
A = undefined;  // invalid LHS
A = A.bar;      // invalid LHS
A.foo = 1;      // invalid LHS
A.foo = A.bar;  // invalid LHS
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "enum A { foo, bar }\nA = undefined;  // invalid LHS\nA = A.bar;      // invalid LHS\nA.foo = 1;      // invalid LHS\nA.foo = A.bar;  // invalid LHS",
    "filename": "",
    "statements": [
        {
            "kind": 8263,
            "name": {
                "kind": 196712,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 4,
                "end": 6
            },
            "members": {
                "kind": 8265,
                "enumMembersList": [
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 12
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 8,
                        "end": 12
                    },
                    {
                        "kind": 8264,
                        "name": {
                            "kind": 196711,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 17
                        },
                        "initializer": null,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 2097152,
                        "start": 13,
                        "end": 17
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 8,
                "end": 17
            },
            "isConst": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 0,
            "end": 19
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "operator": "=",
                "right": {
                    "kind": 196712,
                    "text": "undefined",
                    "rawText": "undefined",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 33
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 19,
                "end": 33
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 19,
            "end": 34
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 52
                },
                "operator": "=",
                "right": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "A",
                        "rawText": "A",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 54,
                        "end": 56
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 57,
                        "end": 60
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 56,
                    "end": 60,
                    "period": {
                        "kind": 255,
                        "pos": 56,
                        "end": 57
                    }
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 34,
                "end": 60
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 34,
            "end": 61
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "A",
                        "rawText": "A",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 61,
                        "end": 83
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 84,
                        "end": 87
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 83,
                    "end": 87,
                    "period": {
                        "kind": 255,
                        "pos": 83,
                        "end": 84
                    }
                },
                "operator": "=",
                "right": {
                    "kind": 4261540,
                    "text": 1,
                    "rawText": "1",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 89,
                    "end": 91
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 61,
                "end": 91
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 61,
            "end": 92
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 65550,
                "left": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "A",
                        "rawText": "A",
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 92,
                        "end": 114
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 115,
                        "end": 118
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 114,
                    "end": 118,
                    "period": {
                        "kind": 255,
                        "pos": 114,
                        "end": 115
                    }
                },
                "operator": "=",
                "right": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "A",
                        "rawText": "A",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 120,
                        "end": 122
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 123,
                        "end": 126
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 122,
                    "end": 126,
                    "period": {
                        "kind": 255,
                        "pos": 122,
                        "end": 123
                    }
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 92,
                "end": 126
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 92,
            "end": 127
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 143
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

