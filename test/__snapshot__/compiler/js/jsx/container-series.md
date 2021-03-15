# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<span>{x}{y}{z}</span>
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<span>{x}{y}{z}</span>",
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
                        "text": "span",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 1,
                        "end": 5
                    },
                    "attributes": {
                        "kind": 123,
                        "attributesList": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 5,
                        "end": 5
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 6
                },
                "children": {
                    "kind": 124,
                    "children": [
                        {
                            "kind": 130,
                            "ellipsis": false,
                            "expression": {
                                "kind": 196712,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 6,
                            "end": 9
                        },
                        {
                            "kind": 130,
                            "ellipsis": false,
                            "expression": {
                                "kind": 196712,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 11
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 9,
                            "end": 12
                        },
                        {
                            "kind": 130,
                            "ellipsis": false,
                            "expression": {
                                "kind": 196712,
                                "text": "z",
                                "rawText": "z",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 14
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 12,
                            "end": 15
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 6,
                    "end": 15
                },
                "closingElement": {
                    "kind": 4221,
                    "tagName": {
                        "kind": 129,
                        "text": "span",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 17,
                        "end": 21
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 15,
                    "end": 22
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 8192,
                "start": 0,
                "end": 22
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 22
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
    "end": 22
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

