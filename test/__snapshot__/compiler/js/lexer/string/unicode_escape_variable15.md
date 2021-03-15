# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true, module: true }
`````

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
"\u{a
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "\"\\u{a",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "",
                "rawText": "\"\\u{a",
                "flags": 5242880,
                "symbol": null,
                "transformFlags": 1,
                "start": 0,
                "end": 5
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated Unicode escape sequence",
            "start": 5,
            "length": 1
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated string literal",
            "start": 5,
            "length": 1
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 5
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

