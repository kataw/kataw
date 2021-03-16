# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default { foo: 1 };
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export default { foo: 1 };",
    "filename": "",
    "statements": [
        {
            "kind": 77,
            "declaration": {
                "kind": 98984,
                "propertyList": {
                    "kind": 65722,
                    "properties": [
                        {
                            "kind": 65721,
                            "left": {
                                "kind": 196711,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 20
                            },
                            "right": {
                                "kind": 4261540,
                                "text": 1,
                                "rawText": "1",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 23
                            },
                            "accessModifier": null,
                            "decorators": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 23
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 23
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 14,
                "end": 25
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 26
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
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

