# Kataw parser test case

## Input

`````js
`\1230`
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
                "kind": 458761,
                "text": "1230",
                "rawText": "\\1230",
                "flags": 134217824,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "`\\1230`",
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
✖ Octal escape sequences are not allowed in template literal - start: 1, end: 3

```

