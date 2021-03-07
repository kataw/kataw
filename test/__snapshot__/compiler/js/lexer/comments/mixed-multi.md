# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
/* \n \r \x0a \u000a */
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "/* \\n \\r \\x0a \\u000a */",
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
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

