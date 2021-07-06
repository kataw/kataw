# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
while (i-- > 0) {}
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
                "kind": 198,
                "left": {
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
                        "text": "i",
                        "rawText": "i",
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
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 7,
                "end": 14
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 17
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 15,
                "end": 18
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": true,
    "source": "while (i-- > 0) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

while (i--  > 0) {}
```

### Diagnostics

```javascript
✔ No errors
```

