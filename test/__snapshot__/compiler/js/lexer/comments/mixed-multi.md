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
    "statements": [],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
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

