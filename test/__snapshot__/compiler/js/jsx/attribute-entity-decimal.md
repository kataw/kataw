# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<sample test="This is &#0169; by Joe"></sample>
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<sample test=\"This is &#0169; by Joe\"></sample>",
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
                            "text": "sample",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 1,
                            "end": 7
                        },
                        "attributes": {
                            "kind": 123,
                            "attributesList": [
                                {
                                    "kind": 122,
                                    "name": {
                                        "kind": 129,
                                        "text": "test",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 8192,
                                        "start": 7,
                                        "end": 12
                                    },
                                    "initializer": {
                                        "kind": 4261583,
                                        "text": "This is &#0169; by Joe",
                                        "rawText": "This is &#0169; by Joe",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 37
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 7,
                                    "end": 37
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 7,
                            "end": 37
                        },
                        "typeArguments": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 0,
                        "end": 38
                    },
                    "children": {
                        "kind": 124,
                        "children": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 38,
                        "end": 38
                    },
                    "closingElement": {
                        "kind": 4221,
                        "tagName": {
                            "kind": 129,
                            "text": "sample",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 40,
                            "end": 46
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 38,
                        "end": 47
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 47
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 47
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 47
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

