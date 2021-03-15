# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<div>{111}</div>
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "<div>{111}</div>",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66175,
                "openingElement": {
                    "kind": 4228,
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
                        "attributesList": [],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 8192,
                        "start": 4,
                        "end": 4
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 5
                },
                "children": {
                    "kind": 124,
                    "children": [
                        {
                            "kind": 130,
                            "ellipsis": false,
                            "expression": {
                                "kind": 4261540,
                                "text": 111,
                                "rawText": "111",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 9
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 8192,
                            "start": 5,
                            "end": 10
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 5,
                    "end": 10
                },
                "closingElement": {
                    "kind": 4221,
                    "tagName": {
                        "kind": 129,
                        "text": "div",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 8192,
                        "start": 12,
                        "end": 15
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 10,
                    "end": 16
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 8192,
                "start": 0,
                "end": 16
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 16
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
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

