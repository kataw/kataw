# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<img width={320}/>
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<img width={320}/>",
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
                        "text": "img",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 1,
                        "end": 4
                    },
                    "attributes": {
                        "kind": 123,
                        "attributesList": [
                            {
                                "kind": 122,
                                "name": {
                                    "kind": 129,
                                    "text": "width",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 4,
                                    "end": 10
                                },
                                "initializer": {
                                    "kind": 130,
                                    "ellipsis": false,
                                    "expression": {
                                        "kind": 4261540,
                                        "text": 320,
                                        "rawText": "320",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 8192,
                                    "start": 11,
                                    "end": 16
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 4,
                                "end": 16
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 4,
                        "end": 16
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 18
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 18
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 18
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

