# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export {foo as bar} from "foo";
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export {foo as bar} from \"foo\";",
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 11
                            },
                            "binding": {
                                "kind": 196711,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 18
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 18
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 18
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 6,
                "end": 19
            },
            "exportFromClause": null,
            "fromClause": {
                "kind": 4261583,
                "text": "foo",
                "rawText": "foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 30
            },
            "isTypeOnly": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 31
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
    "end": 31
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

