# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {}
/foo/
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export {}\n/foo/",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": null,
            "namedExports": {
                "kind": 152,
                "exportsList": {
                    "kind": 80,
                    "specifiers": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 9
            },
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32769,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260544,
                "text": "/foo/",
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 9,
                "end": 15
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 9,
            "end": 15
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "The `export` keyword can only be used with the module goal",
            "start": 0,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

