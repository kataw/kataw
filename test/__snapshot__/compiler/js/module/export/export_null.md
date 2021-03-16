# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default null;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export default null;",
    "filename": "",
    "statements": [
        {
            "kind": 77,
            "declaration": {
                "kind": 4260512,
                "text": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 19
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

