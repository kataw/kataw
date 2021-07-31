# Kataw parser test case

## Input

`````js
if (!true) {consequent;} else {alternate;}

!true ? consequent : alternate;
`````

## Options

### Parser Options

`````js
{ lint: { noNegationElse: true } }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 5
                },
                "operand": {
                    "kind": 24752947,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 9
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 4,
                "end": 9
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "consequent",
                                "rawText": "consequent",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 22
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 12,
                            "end": 23
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 23
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 10,
                "end": 24
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 24,
                "end": 29
            },
            "alternate": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "alternate",
                                "rawText": "alternate",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 40
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 31,
                            "end": 41
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 41
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 29,
                "end": 42
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 126,
                    "operandToken": {
                        "kind": 65584,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 42,
                        "end": 45
                    },
                    "operand": {
                        "kind": 24752947,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 45,
                        "end": 49
                    },
                    "flags": 32,
                    "transformFlags": 16384,
                    "start": 42,
                    "end": 49
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 51
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "consequent",
                    "rawText": "consequent",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 51,
                    "end": 62
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 62,
                    "end": 64
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "alternate",
                    "rawText": "alternate",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 74
                },
                "flags": 32,
                "transformFlags": 4096,
                "start": 42,
                "end": 74
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 42,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "if (!true) {consequent;} else {alternate;}\n\n!true ? consequent : alternate;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unexpected negating if 'IfElseStatement' - start: 4, end: 5
✖ Unexpected negating if 'IfElseStatement' - start: 42, end: 45

```

