# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<a b="&#xA2; &#x00A3;"/>
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<a b=\"&#xA2; &#x00A3;\"/>",
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
                                    "start": 2,
                                    "end": 4
                                },
                                "initializer": {
                                    "kind": 4261583,
                                    "text": "&#xA2; &#x00A3;",
                                    "rawText": "&#xA2; &#x00A3;",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 22
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "start": 2,
                                "end": 22
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 2,
                        "end": 22
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 24
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 24
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

