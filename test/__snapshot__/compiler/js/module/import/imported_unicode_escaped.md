# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {a \u0061s b} from "x";
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export {a \\u0061s b} from \"x\";",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": null,
            "namedExports": {
                "kind": 152,
                "exportsList": {
                    "kind": 80,
                    "specifiers": [
                        {
                            "kind": 79,
                            "moduleExportName": null,
                            "name": {
                                "kind": 196711,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            },
                            "binding": {
                                "kind": 196711,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 19
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 19
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 20
            },
            "exportFromClause": null,
            "fromClause": {
                "kind": 4261583,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 25,
                "end": 29
            },
            "isTypeOnly": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 30
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
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

