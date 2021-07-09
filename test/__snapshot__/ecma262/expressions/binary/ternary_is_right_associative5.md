# Kataw parser test case

## Input

`````js
a ? b : c ? d : e * x

typeof x;
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "alternate": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 13
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 15
                    },
                    "alternate": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 17
                        },
                        "operatorToken": {
                            "kind": 67143222,
                            "flags": 96,
                            "transformFlags": 32,
                            "start": 17,
                            "end": 19
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 15,
                        "end": 21
                    },
                    "flags": 96,
                    "transformFlags": 4096,
                    "start": 7,
                    "end": 21
                },
                "flags": 96,
                "transformFlags": 4096,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 29
                },
                "operand": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 31
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 21,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 21,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "a ? b : c ? d : e * x\n\ntypeof x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
a ? b : c ? d : e * x;
typeof x;

```

### Diagnostics

```javascript
✔ No errors
```

