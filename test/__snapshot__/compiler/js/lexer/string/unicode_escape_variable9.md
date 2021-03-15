# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
"\u{0000000000000000000010ffff}"
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "\"\\u{0000000000000000000010ffff}\"",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{x43f}@@{x3ff}@",
                "rawText": "@{x43f}@@{x3ff}@",
                "flags": 4194304,
                "symbol": null,
                "transformFlags": 1,
                "start": 0,
                "end": 32
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

