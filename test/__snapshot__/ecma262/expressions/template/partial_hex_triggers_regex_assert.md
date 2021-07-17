# Kataw parser test case

## Input

`````js
y`\x`; /[\
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
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "y",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 10
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "y`\\x`; /[\\",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unexpected token. - start: 1, end: 10
✖ Unterminated template literal - start: 1, end: 10

```

