# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
xxx\x61
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
                "kind": 134299649,
                "text": "xxx",
                "rawText": "xxx",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 3
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x61",
                "rawText": "x61",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 4,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "xxx\\x61",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 0, end: 3
✖ Invalid hexadecimal escape sequence - start: 3, end: 3
✖ Expected a `;` - start: 3, end: 4

```

