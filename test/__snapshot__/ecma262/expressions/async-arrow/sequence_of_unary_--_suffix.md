# Kataw parser test case

## Input

`````js
async (x--, y) => x;
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "async",
                    "rawText": "async",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 127,
                            "operandToken": {
                                "kind": 196636,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 10
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 10
                        },
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 0
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "async (x--, y) => x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' expected - start: 14, end: 17

```

