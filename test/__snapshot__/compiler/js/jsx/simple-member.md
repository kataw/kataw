# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<earth.america />
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<earth.america />",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 69766,
                    "tagName": {
                        "kind": 136,
                        "member": {
                            "kind": 129,
                            "text": "america",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 7,
                            "end": 14
                        },
                        "expression": {
                            "kind": 129,
                            "text": "earth",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 8192,
                            "start": 1,
                            "end": 6
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 1,
                        "end": 14
                    },
                    "attributes": {
                        "kind": 123,
                        "attributesList": [],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 14,
                        "end": 14
                    },
                    "typeArguments": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 17
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 17
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

