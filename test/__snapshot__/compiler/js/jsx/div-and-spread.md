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
    "kind": 196,
    "source": "<div {...[<div/>]} />",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 69766,
                    "tagName": {
                        "kind": 129,
                        "text": "div",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
                        "start": 1,
                        "end": 4
                    },
                    "attributes": {
                        "kind": 123,
                        "attributesList": [
                            {
                                "kind": 135,
                                "expression": {
                                    "kind": 67207686,
                                    "elementList": {
                                        "kind": 65605,
                                        "elements": [
                                            {
                                                "kind": 69766,
                                                "tagName": {
                                                    "kind": 129,
                                                    "text": "div",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 8192,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 11,
                                                    "end": 14
                                                },
                                                "attributes": {
                                                    "kind": 123,
                                                    "attributesList": [],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 8192,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 14,
                                                    "end": 14
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 8192,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 10,
                                                "end": 16
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 10,
                                        "end": 16
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 9,
                                    "end": 17
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 4,
                                "end": 18
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
                        "start": 4,
                        "end": 18
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 21
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 21
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

