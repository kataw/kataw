# Kataw parser test case

## Input

`````js
while(x) {
  LABEL: x;
  break LABEL;
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
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 7
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [
                        {
                            "kind": 163,
                            "label": {
                                "kind": 134299649,
                                "text": "LABEL",
                                "rawText": "LABEL",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 18
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 19
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 21
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 22
                            },
                            "flags": 17,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 22
                        },
                        {
                            "kind": 150,
                            "breakKeyword": {
                                "kind": 37757005,
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 30
                            },
                            "label": {
                                "kind": 134299649,
                                "text": "LABEL",
                                "rawText": "LABEL",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 36
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 37
                        }
                    ],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 37
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 8,
                "end": 39
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "while(x) {\n  LABEL: x;\n  break LABEL;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'break' statement can only jump to a label of an enclosing statement - start: 36, end: 37

```

