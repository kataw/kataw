# Kataw parser test case

## Input

`````js
a | b
`````

## Options

### Parser Options

`````js
{ lint: { noBitwise: true } }
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 134251592,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "source": "a | b",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unexpected use of '{0}' - start: 1, end: 3

```

