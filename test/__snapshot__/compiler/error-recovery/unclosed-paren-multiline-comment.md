# Kataw parser test case

## Input

`````js
/* Some multiline
  comment */
  )
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "/* Some multiline\n  comment */\n  )",
    "filename": "",
    "statements": [],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 33,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

