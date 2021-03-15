# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<div></div>
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "<div></div>",
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
                    "children": [],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 5,
                    "end": 5
                },
                "closingElement": {
                    "kind": 4221,
                    "tagName": {
                        "kind": 129,
                        "text": "div",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 8192,
                        "start": 7,
                        "end": 10
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 5,
                    "end": 11
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 8192,
                "start": 0,
                "end": 11
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 11
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
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

