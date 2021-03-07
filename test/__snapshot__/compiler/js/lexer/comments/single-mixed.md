# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true, module: true }
`````

## Input

`````js
//\n \r \x0a \u000a still comment
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "//\\n \\r \\x0a \\u000a still comment",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [],
        "transformFlags": 0,
        "flags": 65536,
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
    "end": 33
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

