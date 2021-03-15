# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<div {...[<div/>]} />
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "<div {...[<div/>]} />",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 69766,
                "tagName": {
                    "kind": 129,
                    "text": "div",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 1,
                    "end": 4
                },
                "attributes": {
                    "kind": 123,
                    "attributesList": [
                        {
                            "kind": 135,
                            "expression": {
                                "kind": 98822,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 69766,
                                            "tagName": {
                                                "kind": 129,
                                                "text": "div",
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 8192,
                                                "start": 11,
                                                "end": 14
                                            },
                                            "attributes": {
                                                "kind": 123,
                                                "attributesList": [],
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 8192,
                                                "start": 14,
                                                "end": 14
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 8192,
                                            "start": 10,
                                            "end": 16
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 16
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 17
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 8192,
                            "start": 4,
                            "end": 18
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 4,
                    "end": 18
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 8192,
                "start": 0,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 21
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
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

