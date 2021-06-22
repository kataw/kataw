# Kataw parser test case

## Input

`````js
 /* 1 */  x /* 2 */ , /* 3 */   y /* 4 */
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 0,
                        "end": 11
                    },
                    {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 21,
                        "end": 33
                    }
                ],
                "flags": 32,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": " /* 1 */  x /* 2 */ , /* 3 */   y /* 4 */",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
/* 1 */
x /* 2 */, y; /* 4 */
```

### Diagnostics

```javascript
✔ No errors
```

