# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<a b=: />
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<a b=: />",
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
                        "text": "a",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
                        "start": 1,
                        "end": 2
                    },
                    "attributes": {
                        "kind": 123,
                        "attributesList": [
                            {
                                "kind": 122,
                                "name": {
                                    "kind": 129,
                                    "text": "b",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 2,
                                    "end": 4
                                },
                                "initializer": null,
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 2,
                                "end": 5
                            }
                        ],
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
                        "start": 2,
                        "end": 5
                    },
                    "typeArguments": null,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 8192,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 5
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 5
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 4260544,
                    "text": "/>",
                    "flags": 524288,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 6,
                    "end": 9
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 6,
                "end": 9
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 9
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 0,
            "message": "Unterminated regular expression literal",
            "start": 9,
            "length": 1
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

