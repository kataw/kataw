# Kataw parser test case

## Input

`````js
/* 1 */ /* 2 */ /* 3 */ a;
a; /* 4 */ /* 5 */ /* 6 */
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 26,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 26,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "/* 1 */ /* 2 */ /* 3 */ a;\na; /* 4 */ /* 5 */ /* 6 */",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
a;
a;

```

### Diagnostics

```javascript
✔ No errors
```

