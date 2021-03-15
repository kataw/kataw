# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<home xlink:type="simple" other="foo" ></home>
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<home xlink:type=\"simple\" other=\"foo\" ></home>",
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
                        "text": "home",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 1,
                        "end": 5
                    },
                    "attributes": {
                        "kind": 123,
                        "attributesList": [
                            {
                                "kind": 122,
                                "name": {
                                    "kind": 129,
                                    "text": "xlink:type",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 5,
                                    "end": 16
                                },
                                "initializer": {
                                    "kind": 4261583,
                                    "text": "simple",
                                    "rawText": "simple",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 25
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 5,
                                "end": 25
                            },
                            {
                                "kind": 122,
                                "name": {
                                    "kind": 129,
                                    "text": "other",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 25,
                                    "end": 31
                                },
                                "initializer": {
                                    "kind": 4261583,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 37
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 25,
                                "end": 37
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 5,
                        "end": 37
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 39
                },
                "children": {
                    "kind": 124,
                    "children": [],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 39,
                    "end": 39
                },
                "closingElement": {
                    "kind": 4221,
                    "tagName": {
                        "kind": 129,
                        "text": "home",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 41,
                        "end": 45
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 39,
                    "end": 46
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 8192,
                "start": 0,
                "end": 46
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 46
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
    "end": 46
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

