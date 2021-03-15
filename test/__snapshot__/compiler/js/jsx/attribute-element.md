# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<america state=<usa.california></usa.california> />
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<america state=<usa.california></usa.california> />",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 69766,
                "tagName": {
                    "kind": 129,
                    "text": "america",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 1,
                    "end": 8
                },
                "attributes": {
                    "kind": 123,
                    "attributesList": [
                        {
                            "kind": 122,
                            "name": {
                                "kind": 129,
                                "text": "state",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 8,
                                "end": 14
                            },
                            "initializer": {
                                "kind": 66175,
                                "openingElement": {
                                    "kind": 4228,
                                    "tagName": {
                                        "kind": 67109000,
                                        "member": {
                                            "kind": 129,
                                            "text": "california",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "start": 20,
                                            "end": 30
                                        },
                                        "expression": {
                                            "kind": 129,
                                            "text": "usa",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "start": 16,
                                            "end": 19
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 16,
                                        "end": 30
                                    },
                                    "attributes": {
                                        "kind": 123,
                                        "attributesList": [],
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 30,
                                        "end": 30
                                    },
                                    "typeArguments": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 15,
                                    "end": 31
                                },
                                "children": {
                                    "kind": 124,
                                    "children": [],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 31,
                                    "end": 31
                                },
                                "closingElement": {
                                    "kind": 4221,
                                    "tagName": {
                                        "kind": 67109000,
                                        "member": {
                                            "kind": 129,
                                            "text": "california",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "start": 37,
                                            "end": 47
                                        },
                                        "expression": {
                                            "kind": 129,
                                            "text": "usa",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 8192,
                                            "start": 33,
                                            "end": 36
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 33,
                                        "end": 47
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 31,
                                    "end": 48
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 15,
                                "end": 48
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 8,
                            "end": 48
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 8,
                    "end": 48
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 8192,
                "start": 0,
                "end": 51
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

