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
    "kind": 2243,
    "source": "<option><b>dddd</b><script>333</script><xmp>eee</xmp><template>eeeee</template></option>",
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
                        "text": "option",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 8192,
                        "start": 1,
                        "end": 7
                    },
                    "attributes": {
                        "kind": 123,
                        "attributesList": [],
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 8192,
                        "start": 7,
                        "end": 7
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "symbol": null,
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
                                    "text": "b",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 9,
                                    "end": 10
                                },
                                "attributes": {
                                    "kind": 123,
                                    "attributesList": [],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 10,
                                    "end": 10
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
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
                                        "symbol": null,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "start": 11,
                                        "end": 15
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 11,
                                "end": 15
                            },
                            "closingElement": {
                                "kind": 4221,
                                "tagName": {
                                    "kind": 129,
                                    "text": "b",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 17,
                                    "end": 18
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 15,
                                "end": 19
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 8192,
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
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 20,
                                    "end": 26
                                },
                                "attributes": {
                                    "kind": 123,
                                    "attributesList": [],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 26,
                                    "end": 26
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
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
                                        "symbol": null,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "start": 27,
                                        "end": 30
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 27,
                                "end": 30
                            },
                            "closingElement": {
                                "kind": 4221,
                                "tagName": {
                                    "kind": 129,
                                    "text": "script",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 32,
                                    "end": 38
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 30,
                                "end": 39
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 8192,
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
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 40,
                                    "end": 43
                                },
                                "attributes": {
                                    "kind": 123,
                                    "attributesList": [],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 43,
                                    "end": 43
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
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
                                        "symbol": null,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "start": 44,
                                        "end": 47
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 44,
                                "end": 47
                            },
                            "closingElement": {
                                "kind": 4221,
                                "tagName": {
                                    "kind": 129,
                                    "text": "xmp",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 49,
                                    "end": 52
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 47,
                                "end": 53
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 8192,
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
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 54,
                                    "end": 62
                                },
                                "attributes": {
                                    "kind": 123,
                                    "attributesList": [],
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 62,
                                    "end": 62
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
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
                                        "symbol": null,
                                        "transformFlags": 8192,
                                        "parent": null,
                                        "start": 63,
                                        "end": 68
                                    }
                                ],
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 63,
                                "end": 68
                            },
                            "closingElement": {
                                "kind": 4221,
                                "tagName": {
                                    "kind": 129,
                                    "text": "template",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 8192,
                                    "start": 70,
                                    "end": 78
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 8192,
                                "start": 68,
                                "end": 79
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 8192,
                            "start": 53,
                            "end": 79
                        }
                    ],
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 8,
                    "end": 79
                },
                "closingElement": {
                    "kind": 4221,
                    "tagName": {
                        "kind": 129,
                        "text": "option",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 8192,
                        "start": 81,
                        "end": 87
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 8192,
                    "start": 79,
                    "end": 88
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 8192,
                "start": 0,
                "end": 88
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 88
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

