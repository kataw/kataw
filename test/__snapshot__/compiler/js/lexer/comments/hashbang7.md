# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true, module: true }
`````

## Input

`````js
#!

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "#!\n",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [],
        "transformFlags": 0,
        "flags": 81920,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 2,
        "end": 2
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 3
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

