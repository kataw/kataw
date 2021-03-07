# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true }
`````

## Input

`````js
#!\n_
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "#!\\n_",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 5,
        "end": 5
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 5
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

