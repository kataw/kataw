# Kataw parser test case

## Input

`````js
if /* comment 1 */ (x)  /* comment 2 */  {}  /* comment 3 */  else {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 20,
                "end": 21
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 42,
                    "end": 42
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 22,
                "end": 43
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 43,
                "end": 66
            },
            "alternate": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 68,
                    "end": 68
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 66,
                "end": 69
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "if /* comment 1 */ (x)  /* comment 2 */  {}  /* comment 3 */  else {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript

if (x) {}
else  {}
```

### Diagnostics

```javascript
✔ No errors
```

