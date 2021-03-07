# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<strong><em><a href="{link}"><test/></a></em></strong>
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<strong><em><a href=\"{link}\"><test/></a></em></strong>",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66175,
                    "openingElement": {
                        "kind": 4228,
                        "tagName": {
                            "kind": 129,
                            "text": "strong",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 1,
                            "end": 7
                        },
                        "attributes": {
                            "kind": 123,
                            "attributesList": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 7,
                            "end": 7
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 0,
                        "end": 8
                    },
                    "children": {
                        "kind": 124,
                        "children": [
                            {
                                "kind": 66175,
                                "openingElement": {
                                    "kind": 4228,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "em",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 11,
                                        "end": 11
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 8,
                                    "end": 12
                                },
                                "children": {
                                    "kind": 124,
                                    "children": [
                                        {
                                            "kind": 66175,
                                            "openingElement": {
                                                "kind": 4228,
                                                "tagName": {
                                                    "kind": 129,
                                                    "text": "a",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 8192,
                                                    "start": 13,
                                                    "end": 14
                                                },
                                                "attributes": {
                                                    "kind": 123,
                                                    "attributesList": [
                                                        {
                                                            "kind": 122,
                                                            "name": {
                                                                "kind": 129,
                                                                "text": "href",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 8192,
                                                                "start": 14,
                                                                "end": 19
                                                            },
                                                            "initializer": {
                                                                "kind": 4261583,
                                                                "text": "{link}",
                                                                "rawText": "{link}",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 20,
                                                                "end": 28
                                                            },
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 14,
                                                            "end": 28
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 8192,
                                                    "start": 14,
                                                    "end": 28
                                                },
                                                "typeArguments": null,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 8192,
                                                "start": 12,
                                                "end": 29
                                            },
                                            "children": {
                                                "kind": 124,
                                                "children": [
                                                    {
                                                        "kind": 69766,
                                                        "tagName": {
                                                            "kind": 129,
                                                            "text": "test",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 30,
                                                            "end": 34
                                                        },
                                                        "attributes": {
                                                            "kind": 123,
                                                            "attributesList": [],
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 8192,
                                                            "start": 34,
                                                            "end": 34
                                                        },
                                                        "typeArguments": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 8192,
                                                        "start": 29,
                                                        "end": 36
                                                    }
                                                ],
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 8192,
                                                "start": 29,
                                                "end": 36
                                            },
                                            "closingElement": {
                                                "kind": 4221,
                                                "tagName": {
                                                    "kind": 129,
                                                    "text": "a",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 8192,
                                                    "start": 38,
                                                    "end": 39
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 8192,
                                                "start": 36,
                                                "end": 40
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "start": 12,
                                            "end": 40
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 12,
                                    "end": 40
                                },
                                "closingElement": {
                                    "kind": 4221,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "em",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 42,
                                        "end": 44
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 40,
                                    "end": 45
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 8,
                                "end": 45
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 8,
                        "end": 45
                    },
                    "closingElement": {
                        "kind": 4221,
                        "tagName": {
                            "kind": 129,
                            "text": "strong",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 47,
                            "end": 53
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 45,
                        "end": 54
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 54
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 54
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 54
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

