# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {default} from "foo";
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export {default} from \"foo\";",
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
                                "text": "default",
                                "rawText": "default",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 15
                            },
                            "binding": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 15
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 15
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 16
            },
            "exportFromClause": null,
            "fromClause": {
                "kind": 4261583,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 21,
                "end": 27
            },
            "isTypeOnly": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 28
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
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

