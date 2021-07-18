# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
y.)
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
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 2
                },
                "flags": 96,
                "transformFlags": 2,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 2
        }
    ],
    "isModule": false,
    "source": "y.)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 3
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Dot property must be an identifier - start: 2, end: 3
✖ ')' is not allowed here. Did you mean ';'? - start: 2, end: 3

```

