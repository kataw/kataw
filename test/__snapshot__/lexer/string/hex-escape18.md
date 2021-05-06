# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
"\x
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
                "kind": 201392131,
                "text": "",
                "rawText": "\"\\x",
                "flags": 2097248,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "start": 0,
            "end": 3
        }
    ],
    "isModule": false,
    "source": "\"\\x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 3
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 0, end: 3
✖ Unterminated string literal - start: 0, end: 3

```

