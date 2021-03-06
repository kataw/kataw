# Kataw parser test case

## Input

`````js
/* comment */
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "/* comment */",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 0
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

