# Kataw parser test case

## Input

`````js
--/*1*/a
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
                "kind": 128,
                "operandToken": {
                    "kind": 196636,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 2
                },
                "operand": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 8
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "--/*1*/a",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
-- a;
```

### Diagnostics

```javascript
✔ No errors
```

