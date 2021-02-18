# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<option><b>dddd</b><script>333</script><xmp>eee</xmp><template>eeeee</template></option>
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<option><b>dddd</b><script>333</script><xmp>eee</xmp><template>eeeee</template></option>",
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
                            "text": "option",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "parent": null,
                            "emitNode": null,
                            "start": 1,
                            "end": 7
                        },
                        "attributes": {
                            "kind": 123,
                            "attributesList": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "parent": null,
                            "emitNode": null,
                            "start": 7,
                            "end": 7
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
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
                                        "text": "b",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 9,
                                        "end": 10
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 10,
                                        "end": 10
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 8,
                                    "end": 11
                                },
                                "children": {
                                    "kind": 124,
                                    "children": [
                                        {
                                            "kind": 137,
                                            "text": "dddd",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 11,
                                            "end": 15
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 11,
                                    "end": 15
                                },
                                "closingElement": {
                                    "kind": 4221,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "b",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 17,
                                        "end": 18
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 15,
                                    "end": 19
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 8,
                                "end": 19
                            },
                            {
                                "kind": 66175,
                                "openingElement": {
                                    "kind": 4228,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "script",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 20,
                                        "end": 26
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 26,
                                        "end": 26
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 19,
                                    "end": 27
                                },
                                "children": {
                                    "kind": 124,
                                    "children": [
                                        {
                                            "kind": 137,
                                            "text": "333",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 27,
                                            "end": 30
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 27,
                                    "end": 30
                                },
                                "closingElement": {
                                    "kind": 4221,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "script",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 32,
                                        "end": 38
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 30,
                                    "end": 39
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 19,
                                "end": 39
                            },
                            {
                                "kind": 66175,
                                "openingElement": {
                                    "kind": 4228,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "xmp",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 40,
                                        "end": 43
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 43,
                                        "end": 43
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 39,
                                    "end": 44
                                },
                                "children": {
                                    "kind": 124,
                                    "children": [
                                        {
                                            "kind": 137,
                                            "text": "eee",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 44,
                                            "end": 47
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 44,
                                    "end": 47
                                },
                                "closingElement": {
                                    "kind": 4221,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "xmp",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 49,
                                        "end": 52
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 47,
                                    "end": 53
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 39,
                                "end": 53
                            },
                            {
                                "kind": 66175,
                                "openingElement": {
                                    "kind": 4228,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "template",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 54,
                                        "end": 62
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 62,
                                        "end": 62
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 53,
                                    "end": 63
                                },
                                "children": {
                                    "kind": 124,
                                    "children": [
                                        {
                                            "kind": 137,
                                            "text": "eeeee",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 63,
                                            "end": 68
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 63,
                                    "end": 68
                                },
                                "closingElement": {
                                    "kind": 4221,
                                    "tagName": {
                                        "kind": 129,
                                        "text": "template",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 70,
                                        "end": 78
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 68,
                                    "end": 79
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "emitNode": null,
                                "start": 53,
                                "end": 79
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
                        "start": 8,
                        "end": 79
                    },
                    "closingElement": {
                        "kind": 4221,
                        "tagName": {
                            "kind": 129,
                            "text": "option",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "parent": null,
                            "emitNode": null,
                            "start": 81,
                            "end": 87
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "parent": null,
                        "emitNode": null,
                        "start": 79,
                        "end": 88
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 88
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 88
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 88
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
    "end": 88
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

