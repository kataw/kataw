# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default 15;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export default 15;",
    "filename": "",
    "statements": [
        {
            "kind": 77,
            "declaration": {
                "kind": 4261540,
                "text": 15,
                "rawText": "15",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 17
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 18
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
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

