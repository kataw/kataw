# Kataw parser test case

## Options

`````js
{ jsx: true }
`````

## Input

`````js
<>Fragment</>
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "<>Fragment</>",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66176,
                    "openingFragment": {
                        "kind": 133,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 0,
                        "end": 2
                    },
                    "children": {
                        "kind": 124,
                        "children": [
                            {
                                "kind": 137,
                                "text": "Fragment",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 8192,
                                "parent": null,
                                "start": 2,
                                "end": 10
                            }
                        ],
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 2,
                        "end": 10
                    },
                    "closingFragment": {
                        "kind": 638,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 8192,
                        "start": 10,
                        "end": 13
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 8192,
                    "start": 0,
                    "end": 13
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 13
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

