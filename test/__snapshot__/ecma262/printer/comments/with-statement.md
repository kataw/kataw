# Kataw parser test case

## Input

`````js
// @ts-ignore
/*1*/ with /*2*/ ( /*3*/ false /*4*/ ) /*5*/ {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            },
            "expression": {
                "kind": 205586437,
                "flags": 96,
                "transformFlags": 0,
                "start": 32,
                "end": 44
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 60
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 52,
                "end": 61
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "// @ts-ignore\n/*1*/ with /*2*/ ( /*3*/ false /*4*/ ) /*5*/ {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

// @ts-ignore
/*1*/with (false) {}
```

### Diagnostics

```javascript
✔ No errors
```

